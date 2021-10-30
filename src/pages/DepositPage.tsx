import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useTokenBalances,
  useUserRegisteredTokens,
  useWhitelistTokens,
} from '../state/token';
import Loading from '../components/layout/Loading';
import { Card } from '../components/card/Card';
import { TokenMetadata } from '../services/ft-contract';
import { nearMetadata, wrapNear } from '../services/wrap-near';
import { useDepositableBalance } from '../state/token';
import TokenAmount from '../components/forms/TokenAmount';
import { deposit } from '../services/token';
import { wallet } from '~services/near';
import { Balances } from '../components/deposit/Deposit';
import { FormattedMessage, useIntl } from 'react-intl';
import { ConnectToNearBtn } from '~components/button/Button';

function DepositBtn(props: {
  amount?: string;
  token?: TokenMetadata;
  balance?: string;
}) {
  const { amount, token, balance } = props;
  const canSubmit = balance !== '0' && !!amount && !!token;

  return (
    <div className="flex items-center justify-center pt-2 w-full">
      <button
        disabled={!canSubmit}
        className={`w-full rounded-full text-sm text-white px-5 py-2.5 focus:outline-none font-semibold ${
          canSubmit ? '' : 'bg-opacity-50 disabled:cursor-not-allowed'
        }`}
        style={
          canSubmit
            ? {
                background: 'linear-gradient(180deg, #00C6A2 0%, #008B72 100%)',
                borderRadius: '5px',
              }
            : {
                background: '#314351',
                borderRadius: '5px',
              }
        }
        onClick={() => {
          if (canSubmit) {
            if (token.id === nearMetadata.id) {
              return wrapNear(amount);
            }
            deposit({
              token,
              amount,
            });
          }
        }}
      >
        <FormattedMessage id="deposit" defaultMessage="Deposit" />
      </button>
    </div>
  );
}

export default function DepositPage() {
  const { id } = useParams<{ id: string }>();
  const [amount, setAmount] = useState<string>('');
  const balances = useTokenBalances();

  const registeredTokens = useUserRegisteredTokens();
  const tokens = useWhitelistTokens();
  // const [tokenList, setTokenList] = useState<TokenMetadata[]>([]);
  const [selectedToken, setSelectedToken] = useState<TokenMetadata>(
    id && tokens ? tokens.find((tok) => tok.id === id) : nearMetadata
  );

  const userTokens = useUserRegisteredTokens();
  const max = useDepositableBalance(selectedToken?.id, selectedToken?.decimals);
  const intl = useIntl();

  useEffect(() => {
    if (id && tokens) {
      setSelectedToken(tokens.find((tok) => tok.id === id));
    }
  }, [id, tokens]);

  if (!tokens || !userTokens) return <Loading />;
  if (!registeredTokens || !balances) return <Loading />;

  const handleSearch = (value: string) => {
    const result = tokens.filter(
      ({ name }) =>
        name.includes(value) ||
        name.includes(value.toLocaleLowerCase()) ||
        name.includes(value.toLocaleUpperCase())
    );
    // setTokenList(result);
  };

  return (
    <div className="flex items-center flex-col xl:w-1/3 2xl:w-1/3 3xl:w-1/4 lg:w-1/2 md:w-5/6 xs:w-full xs:p-2 m-auto">
      <Card width="w-full" bgcolor="bg-dark">
        <h2 className="formTitle font-bold text-xl text-white text-left pb-4">
          {intl.formatMessage({ id: 'deposit' })}
        </h2>
        <TokenAmount
          amount={amount}
          max={max}
          total={max}
          tokens={[nearMetadata, ...tokens]}
          selectedToken={selectedToken}
          onSelectToken={setSelectedToken}
          onChangeAmount={setAmount}
          text={selectedToken.symbol}
          balances={balances}
        />
        {wallet.isSignedIn() ? (
          <DepositBtn balance={max} amount={amount} token={selectedToken} />
        ) : (
          <ConnectToNearBtn />
        )}
      </Card>
      <div className="text-white text-sm pt-3">
        <FormattedMessage
          id="small_storage_fee_is_applied_of"
          defaultMessage="Small storage fee is applied of"
        />{' '}
        <span className="font-bold">0.00084</span> Ⓝ
      </div>

      <Balances title="Balance" tokens={userTokens} balances={balances} />
    </div>
  );
}
