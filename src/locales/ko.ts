const ko_in_risks_page = {
  risks: '리스크',
  of_using_ref_finance: 'Ref. finance의 사용시의',
  introduction:
    'Ref. finance에서의 유동성 제공 및 거래에는 리스크가 따릅니다. 이 프로토콜을 쓰기 전에 충분히 연구를 하시고 리스크를 이해하신 후 진행하십시오. ',
  general_risks_quiz: '일반적엔 리스크에 대한 퀴즈',
  amm_core_design: 'AMM 코어 설계',
  audits: '감사',
  audits_paragraph_2:
    '보안 감사는 리스크를 완전히 제거하지 않습니다. 당신의 인생 저축이나 잃으면 안되는 돈을 Ref. Finance에 넣지 마세요. 특히 유동성 공급은 더욱 위험합니다.',
  admin_keys: '관리자 키',
  admin_keys_paragraph_2:
    '현재 DAO에는 26명의 멤버가 있습니다. Ref Finance는 온전히 탈중앙화된 DAO로 전환해갈 예정입니다.',
  admin_keys_paragraph_3:
    '아래에는 Ref Finance를 현재 관리중인, 혹은 예전에 관리했었던 이들의 연락처와 주소가 적혀 있습니다. ',
  address: '주소',
  type: '종류',
  mission: '미션',
  Locked: '잠김',
  exchange_contract: '거래 계약',
  table_body_tr_1:
    '자동화된 market maker 기능을 관리하시고, 유동성을 공급하며 교환(스왑)하세요',
  farming_contract: '농사(파밍) 계약',
  table_body_tr_2: '유동성 인센티브 관리',
  staking_contract: '스테이킹 계약',
  table_body_tr_3:
    'xREF를 민트하고 소각하시고, "시간 대비" 보상을 받아가세요. ',
  sputnik_dao_contract: 'Sputnik DAO 계약',
  table_body_tr_4: '전략, 의사결정에 참여하셔서 Ref의 성공에 기여하세요. ',
  table_body_tr_5: '기금을 관리하거나, 특정 커뮤니티 기여자에게 보내세요',
  table_body_tr_6: '전략과 로드맵 실행',
  vesting_contract: '베스팅(vesting) 계약',
  table_body_tr_7: 'DAO 멤버들에게 베스팅 된 REF를 관리하세요 ',
  airdrop_contract: '에어드랍 계약',
  table_body_tr_8: 'Ref의 첫 에어드랍을 관리하세요',
  near_address: 'NEAR 주소',
  table_body_tr_9: '일회성 버그 현상금 관리',
  fungible_token_contract: '대체가능 토큰 계약',
  table_body_tr_10: 'REF 토큰 민팅하기',
  rug_pull: '러그 풀',
  rug_pull_paragraph_1:
    '토큰 발행한 개발팀(화이트리스트를 받았건 아니건)이 당 프로젝트를 버리고 투자금만 챙겨 도주할 경우, 그 프로젝트의 토큰 가격은 아마 0달러가 될 것입니다. ',
  rug_pull_paragraph_2:
    'Ref Finance가 토큰을 화이트리스트 했다 해도, 꼭 프로젝트가 성사되리라는 법은 없습니다. 당신은 스스로 프로젝트를 실사할 책임이 있으며, 암호화폐가 매우 위험성이 높은, 투기적인 자산 투자임을 인지하고 있어야 합니다.  ',
  rug_pull_paragraph_3:
    '투자한 돈 일부, 혹은 전부를 잃을 가능성을 당신은 인지하고 대비하여야 합니다.',
  divergence_loss: '다이버전스 손실',
  divergence_loss_paragraph_1:
    '유동성을 공급하는 사람들에게: 유동성을 공급하지 않는게 돈을 더 벌 수 있는 길일수도 있습니다',
  divergence_loss_paragraph_2:
    '다이버전스 손실은 보통 (부정확하게도) "비영구손실" 이라고 불립니다. "비영구"라는 형용사는 이 손실이 일시적이며 곧 역전되어 이익으로 돌아올거란 느낌을 주는데, 이는 사실이 아닙니다.',
  divergence_loss_paragraph_3: '다이버전스 손실에 대해 좀 더 알아봅시다.',
  staking_risks: '스테이킹 리스크',
  staking_risks_paragraph_1:
    '당신이 스테이킹을 할 경우, 당신은 여러 개의 스마트 계약 프로덕트를 사용합니다. 이 프로덕트들은 각각 다른 리스크가 있습니다. ',
  permanent_loss_of_a_peg: '통화 페그의 영구 손실',
  permanent_loss_of_a_peg_paragraph_1:
    '만약 풀의 어떤 스테이블코인이 1.0 한참 이하로 페그가 내려간 후 다시 올라오지 못하면, 그 풀의 유동성 제공자들의 유동성 대부분이 그 화폐에 담겨 있다는 뜻입니다. ',
  systemic_issues: '시스템적인 문제',
  systemic_issues_paragraph_1:
    '디파이 및 "머니 레고"는 결합성이 보통 높은 편입니다. 말인 즉슨, 한 프로그램의 장애가 다른 프로그램들을 연쇄적으로 망가트릴 수 있다는 뜻입니다',
  systemic_issues_paragraph_2:
    '여기서 "시스템적인 문제"라는 뜻은, 설령 당신의 투자 및 리스크와 직접적 연관이 없는 장애가 발생한 상황에서도 당신은 돈을 잃을 수 있다는 뜻입니다.',
  systemic_issues_paragraph_3:
    '아래 나열된 리스크들은 유동성 풀에 영향을 미칠 수도 있습니다.',
  systemic_issues_paragraph_4: '렌딩 프로토콜과 관련된 스마트 계약 문제들',
  systemic_issues_paragraph_5: '스테이킹 프로토콜과 관련된 스마트 계약 문제들',
  systemic_issues_paragraph_6:
    '이 풀에 있는 스테이블코인들의 시스템적인 문제들',
  systemic_issues_paragraph_7:
    '이 풀에 있는 ERC20-native 토큰들의 시스템적인 문제들',
  crypto_trading_addiction: '암호화폐 거래 중독',
  crypto_trading_addiction_paragraph_1:
    '암호화폐 거래는 매우 중독성이 높습니다. 여러 전문가들에 따르면 이는 도박 중독의 한 형태일 수 있습니다. 도박 중독은 인생을 망칠 수 있습니다.  ',
  crypto_trading_addiction_paragraph_2:
    '아래에는 이 문제와 관련된 이야기들입니다.',
  crypto_trading_addiction_paragraph_3: "'코인은 도박이지, 물론'",
  crypto_trading_addiction_paragraph_4:
    "'비트코인 굴리다가 오십만 파운드를 날렸습니다'",
  crypto_trading_addiction_paragraph_5: "'코인 중독 전문상담가를 만났습니다.'",
  crypto_trading_addiction_paragraph_6:
    "'암호 화폐 거래 중독으로 수백만 달러를 잃었습니다'",
  no_in_progress: '아니오(진행중)',
  yes: '예',
  no: '아니오',
  NA: 'N/A',
  ref_finance_near: 'ref-finance.near',
  ref_finance_near_mission:
    'v1 (depreciated) Automated Market Maker를 관리하세요; 스왑하고 유동성을 제공하세요',
  token_ref_finance_near: 'token.ref-finance.near',
  token_ref_finance_near_type: '대체가능토큰 계약',
  token_ref_finance_near_mission: 'v1 (depreciated) - REF 토큰을 민팅하세요',
  refchef_near: 'refchef.near',
  simple_address: '간편 주소',
  refchef_near_mission: '계정간 트랜잭션을 관리하세요',
  ref_dev_teller_near: 'ref-dev-teller.near',
  Locked_title: '잠김? information box: when hovering to display:',
  Locked_paragraph_1:
    '"잠긴 계약"의 뜻은 이 계약 코드를 재배포할 권한이 있는 "접근 키"가 이제 더 없다는 뜻입니다.',
  Locked_paragraph_2:
    '이 코드의 재배포는, 일반적으로 아래 경우중 하나일 때 가능합니다: ',
  Locked_paragraph_3: '1. 코드 배포 액션이 있는 트랜잭션이 있을 경우',
  Locked_paragraph_4:
    '2. 계약 내에 deploy-code action을 발동시키는 트리거가 내장되어 있는 경우',
  Locked_paragraph_5:
    '이 코드를 트랜잭션을 통해 재배포하려면, 그 트랜잭션은 풀 액세스 키로 서명되어야 합니다. 만약 계약 내에 그런 키가 아예 없고, 계약 코드 내에 관련 지원이 따로 없다면, 이 코드는 재배포가 불가능합니다. 이 때 우리는 이 계약을 "잠김" 표시합니다 ',
  Locked_paragraph_6:
    '만약 하나라도 풀 액세스 키가 계약 계정에 등록되어 있는 경우, 그 계약은 잠기지 않습니다. ',
  audited_first_sentence:
    'Ref Finance 스마트 계약은 <a rel="noopener noreferrer nofollow" target="_blank" class="underline cursor-pointer text-riskTextColor hover:text-white" href="https://guide.ref.finance/developers/audits"' +
    '>감사</a> 되었습니다.',
  admin_first_sentence:
    'Ref Finance 는 이 사람들이 관리합니다 <a rel="noopener noreferrer nofollow" target="_blank" class="underline cursor-pointer text-riskTextColor hover:text-white" href="https://app.astrodao.com/dao/ref-finance.sputnik-dao.near"' +
    '>Ref Finance Sputnik DAO</a>. Ref에는 <a rel="noopener noreferrer nofollow" target="_blank" class="underline cursor-pointer text-riskTextColor hover:text-white" href="https://gov.ref.finance/t/introducing-the-guardians/253"' +
    '>가디언</a>,이라는게 있으며, 이 특정 NEAR 주소들(=가디언)들은 계약을 멈추는게 가능합니다. 이렇게 멈춘 계약은 DAO에 의해서만, 시간에 구애받지 않고 재개 될 수 있습니다. ',
  risks_of_using_ref_finance:
    '<label class="text-greenColor">리스크</label> , Ref. finance 사용시의',
  admin_sentence_1:
    'Ref Finance는 <a rel="noopener noreferrer nofollow" target="_blank" class="underline cursor-pointer text-riskTextColor hover:text-white" href="https://app.astrodao.com/dao/ref-finance.sputnik-dao.near"' +
    '>Ref Finance Sputnik DAO</a> 가 운영합니다. 우리 DAO는 완전 탈중앙화 DAO로 전환할 예정입니다.',
  admin_sentence_2:
    'Ref Finance의 전/현 담당자들의 계약 및 연락 정보를 알고 싶으시다면, <a rel="noopener noreferrer nofollow" target="_blank" class="underline cursor-pointer text-riskTextColor hover:text-white" href="https://guide.ref.finance/developers/contracts"' +
    '>문서</a> 쪽에서 확인해 주세요.',
};
const ko = {
  deposit: '입금',
  Deposit: '입금',
  withdraw: '출금',
  Withdraw: '출금',
  withdraw_token: '토큰 출금',
  swap: '스왑',
  Swap: '스왑',
  exchange_tokens: '토큰 거래',
  pool: '풀',
  Pool: '풀',
  pools: '풀들',
  Pools: '풀들',
  Quiz: '퀴즈',
  no_tokens_deposited: '예금된 토큰 없음',
  view_pools: '풀들 보기',
  view_pool: '풀 보기',
  add_token: '토큰 더하기',
  Add_Token: '토큰 더하기',
  create_new_pool: '새로운 풀 만들기',
  Create_New_Pool: '새로운 풀 만들기',
  your_liquidity: '당신의 유동성',
  Your_Liquidity: '당신의 유동성',
  farms: '농장',
  Farms: '농장',
  airdrop: '에어드랍',
  Airdrop: '에어드랍',
  docs: '문서',
  Docs: '문서',
  community: '커뮤니티',
  Community: '커뮤니티',
  more: '더',
  More: '더',
  account: '계정',
  Account: '계정',
  New_ui: '새 UI',
  Risks: '리스크',
  Forum: '포럼',
  Discord: '디스코드',
  Telegram: '텔레그렘',
  Twitter: '트위터',
  Medium: '미디움',
  move_assets_to_from_ethereum: '이더리움으로/부터 자산 옮기기',
  rainbow_bridge: 'Rainbow Bridge',
  deposit_to_swap: '입금 후 스왑',
  connect_to_near: 'NEAR에 연결하기',
  slippage: '슬리피지(미끄러짐) 허용치 ',
  slippage_title: '트랜잭션 설정',
  minimum_received: '최소 수령양',
  swap_rate: '교환율',
  swap_rate_pre: '교환율',
  pool_fee: '풀 수수료',
  balance: '잔액',
  from: '(로)부터',
  to: '에게',
  submit: '제출',
  wrapnear: 'NEAR 래핑',
  wrapnear_tip_one:
    'NEAR 래핑을 해야 REF를 거래할 수 있게 됩니다. 반드시 확인하시고 ',
  wrapnear_tip_two: 'NEAR 0.5개는 남기셔야지',
  wrapnear_tip_three: '가스 요금',
  wrap_error_msg: '잔액이 부족합니다',
  sign_out: '로그아웃',
  view_account: '계정 보기',
  deposit_to_swap_and_add_liquidity: '입금 후 교환/유동성 공급하기',
  small_storage_fee_is_applied_of: '소정의 보관비용이 적용됩니다',
  liquidity: '유동성',
  tokens: '토큰',
  fee: '요금',
  fees: '요금',
  view_detail: '세부정보 확인',
  pool_details: '풀 세부정보',
  details: '세부 정보',
  detail: '세부 정보',
  liquidity_pools: '유동성 풀',
  minimum_tokens_out: '최소 입금량',
  pair: '쌍',
  tvl: 'TVL',
  search_pools: '풀 찾기',
  add_liquidity: '유동성 더하기',
  remove_liquidity: '유동성 빼기',
  total_liquidity: '유동성 총합',
  coming_soon: '곧 추가됨',
  accumulated_volume: '누적 거래량',
  underlying_liquidity: '*기초자산 유동성',
  total_shares: '총 지분',
  my_shares: '지분',
  token: '토큰',
  enter_token_address: '토큰 주소 입력',
  you_are_not_providing_liquidity_to_any_pools:
    '현재 당신은 어디에도 유동성을 공급하고 있지 않습니다',
  remove: '제거',
  select: '선택',
  select_token: '토큰 선택',
  basis_points: '기본 포인트',
  total_fee: '총 수수료% ',
  protocol_fee_is: '프로토콜 요금은 ',
  start_in: '내에 시작',
  start_at: '에 시작',
  started_at: '에 시작됨',
  start_date: '시작 일시',
  end_at: '에 종료',
  end_date: '종료 일시',
  earn: '얻음',
  ended: '끝남',
  pending: '대기중',
  rewards_per_week: '주당 보상',
  apr: '연간이율',
  total_staked: '스테이킹 총합',
  unclaimed_rewards: '미수령 보상',
  claim: '수령',
  claim_all: '전부 수령',
  stake: '스테이킹 고정',
  unstake: '스테이킹 해제',
  your_rewards: '당신의 보상',
  your_shares: '지분',
  shares_owned: '소유중인 지분',
  stake_your_liquidity_provider_LP_tokens:
    '당신의 유동성 공급(LP) 토큰을 스테이킹 하세요',
  go_to_wallet: '지갑으로 이동',
  recent_activity: '최근 활동내역',
  view_all: '전부 보기',
  cancel: '취소',
  claim_ref_token: 'Ref 토큰 받기',
  has_no_available_claim: '받을 토큰 없음',
  sorry: '죄송합니다',
  total_ref_token: 'Ref 토큰 합계',
  locking_ref_token: 'Ref 토큰 잠그기',
  unclaim_ref_token: 'Ref 토큰 수령 취소',
  unlocked: '잠금 해제',
  locking: '잠그기',
  you_can_claim_from: '로부터 수령할 수 있습니다',
  you_have_claimed_all_your_rewards: '모든 보상을 수령했습니다',
  ends_in: '에 끝남',
  days: '일',
  swap_successful_click_to_view: '교환 성공. 클릭하여 확인',
  claim_successful_click_to_view: '수령 성공. 클릭하여 확인',
  claim_failed_click_to_view: '수령 실패. 클릭하여 확인',
  slippageCopyForMobile:
    '슬리피지(미끄러짐)란 당신이 처음에 기대한 수익과, 다른 사람이 우선 실행되는 바람에 달라져버린 실제 수익의 차이를 말합니다. ',
  slippageCopy:
    '슬리피지(미끄러짐)란 당신이 처음 기대한 수익과 다른 사람이 우선 실행되는 바람에 달라져버린 실제 수익의 차이를 말합니다 ',
  depositCopy:
    '거래소에 선택한 토큰을 입금해 <br> 유동성 풀에 투입 및 교환(스왑)에 씁니다. ',
  nearDepositCopy:
    '니어를 래핑한 다음 거래소에 입금하여 <br>  유동성 풀에 투입 및 교환(스왑)에 씁니다.',
  nearWithdrawCopy:
    '니어를 래핑 해제하고 거래소에서 출금하여 <br> 당신의 지갑으로 옮깁니다.',
  withdrawCopy:
    '선택한 토큰을 거래소에서 출금하여 <br> 당신의 지갑으로 옮깁니다',
  registerToken: '현재 거래소 목록에 없는<br> 새로운 토큰을 등록합니다',
  whitelistTokenCopy: 'NEP-141 토큰을 더하세요',
  addLiquidityPoolCopy:
    '두 토큰을 선택하면 새로운 유동성 풀이 만들어집니다. 수수료는 각 트랜잭션 때마다 풀에 지급되는 퍼센티지를 말합니다.',
  swapCopy:
    '교환(스왑)은 첫 번째 선택된 토큰을 두 번째 선택된 토큰과 바꿉니다. 가장 유동성이 높고 수수료가 낮은 풀이 선택됩니다.',
  addTokenCopy: 'NEP-141 토큰을 더하세요',
  getLPTokenCopy: '해당 풀로 이동하려면 클릭하세요.',
  airdropCopy:
    '에어드롭을 제때 수령해주세요. 기간 지난 토큰 잔액은 트레져리로 기부됩니다. ',
  farmRewardsCopy:
    '지표 현 가격에 기반하였으며, 실제로 실행시 달라질 수 있습니다. ',
  totalValueLockedCopy: '잠금 총액',
  topPoolsCopy: '매 쌍마다 가장 잠금 총액(TVL)이 높은 풀만을 표기합니다.',
  you_do_not_have_enough: '양이 부족합니다',
  must_provide_at_least_one_token_for: '최소한 0보다 큰 토큰을 제공해야 합니다',
  is_not_exist: '(은)는 존재하지 않습니다',
  must_input_a_value_greater_than_zero: '0보다 큰 값을 입력해야 합니다.',
  amount_must_be_not_greater_your_balance:
    '잔액보다 선택된 양이 커서는 안됩니다.  ',
  no_pool_available_to_make_a_swap_from:
    '교환(스왑) 가능한 풀이 존재하지 않습니다',
  for_the_amount: '에 해당하는 양',
  no_pool_eng_for_chinese: ' ',
  is_not_a_valid_swap_amount: '적합한 교환(스왑) 양이 아닙니다',
  not_nep_address:
    '입력한 주소가 NEP-141 주소가 아닙니다. 확인 후 다시 입력해 주세요. 만약 그 주소가 다른 메인넷의 계약을 가리킨다면, 브릿지 프로세싱을 위해 Rainbow Bridge로 이동하세요',
  not_correct_address:
    '당신이 입력한 주소는 잘못되었습니다. 확인 후 다시 입력해 주세요.',
  popular_tokens: '많이 쓰이는 토큰',
  asset_label: '자산',
  account_label: '계정',
  total_label: '총',
  top_pools: '순위권 풀',
  pool_id: '풀 ID',
  more_pools: '더 많은 풀',
  my_watchlist: '나의 워치리스트',
  h24_volume: '24시간 거래량',
  volume: '거래량',
  hide_low_tvl_pools: '잠금총액(TVL) 낮은 풀 숨기기',
  hide_low_tvl_pools_mobile: '잠금총액(TVL) 낮은 풀 숨기기',
  watchlist_title: '나의 워치리스트 상단 ',
  add_watchlist: '워치리스트에 추가하기',
  remove_watchlist: '워치리스트에서 제거하기',
  my_watchlist_copy: '워치리스트 된 유동성 풀은 여기에 등장합니다 ',
  search_token: '토큰 검색',
  language: '언어',
  deposit_to_add_liquidity: '유동성 추가를 위해 입금',
  slip_warn: '입금 가능한 최소량을 확인 후 신중히 결정하세요.',
  slip_invalid: '슬리피지(미끄러짐) 허용치가 적절한 수치가 아닙니다.',
  input_to_search: '검색내용을 입력하십시오',
  click_search_bar_to_search: '검색바를 눌러 검색하십시오',
  reward_tokens: '보상 토큰',
  detail_tip: '세부사항',
  no_data: '데이터 없음',
  stable_swap: '스테이블스왑',
  StableSwap: '스테이블스왑',
  exchange_rate: '교환비',
  including_fees: '(수수료 포함)',
  standard_gas: '표준 수수료(가스):',
  rst_token: '당신의 RST 토큰',
  remove_tip: '공유하여 유동성을 제거하면 수수료가 들지 않습니다',
  share_liquidity: '유동성 share',
  remove_token_confirm: 'RUST 토큰을 풀에서 꺼냅니다remove',
  remove_as_one_token: '하나의 토큰으로 꺼내기remove',
  flexible_tip: '토큰당 얼만큼씩 꺼낼remove지 정하세요',
  add_type_all: '모든 토큰을 균형에 맞게 입금합니다.',
  add_type_max: '가능한 토큰 전부를 사용합니다',
  select_balance: '잔고 선택',
  selectBalanceCopy:
    '[Near Wallet]을 선택하여, 당신의 니어 지갑에 있는 토큰을 직접 교환(스왑)하세요.',
  near_wallet: 'NEAR 월렛',
  ref_account: 'REF 계정',
  swap_tip:
    '설정에서 Ref 계정을 선택하면 그 계정으로부터 직접 교환(스왑)할 수 있습니다.',
  attention: '*attention',
  live: '라이브',
  ended_search: '끝',
  my_farms: '당신의 이자 농장',
  staked_only: '스테이킹 된 것만',
  sort_by: '(으)로 정렬',
  your_farms_rewards: '농장에서 나온 보상',
  your_farms: '당신의 농장들',
  new: '최신',
  unstake_tip_t: '미수령 보상이 있습니다',
  unstake_tip_m:
    '스테이킹을 해제하면, 이 쌍과 관련된 현재의 활성화된 (혹은 예정된)농장들이 없어집니다',
  unstake_tip_b: '스테이킹을 해제하겠습니까?',
  value_rewards: '수령한 보상',
  stake_unstake_tip: '스테이킹 및 해제시 당신의 보상은 자동으로 수령됩니다',
  over_tip:
    '가스 수수료를 최적화하려면 최대 4개씩 토큰을 인출하는 것이 바람직합니다.',
  no_token_tip: '보상 토큰 없음',
  getToken_tip:
    '보상 토큰을 수령하거나, 유동성 풀의 토큰을 스테이킹 할 수 있습니다!.',
  in_farm: '농장 안',
  swap_rate_including_fee: '교환 비율 (수수료 포함)',
  by_share: '지분에 의해',
  by_token: '토큰에 의해',
  your_positions_will_be_displayed_here: '당신의 포지션은 여기에 표시됩니다',
  price_impact: '가격 영향',
  shares_left: '남은 shares',
  total_stable_coins: '스테이블코인 총합',
  daily_volume: '24시간 거래량',
  liquidity_utilisation: '유동성 활용',
  token_reserves: '토큰 예비고',
  roi_calculator: 'ROI 계산기',
  lp_staked: 'LP 스테이킹 된',
  usd: 'USD',
  lp_token: 'LP 토큰',
  stake_for: '기간',
  day_1: '1일',
  day_2: '7일',
  day_3: '30일',
  day_4: '90일',
  day_5: '1년',
  cur_apr: 'ROI',
  reward_token: '토큰으로 보상하기',
  get_lp_token: 'LP 지분 받기',
  calculate_roi: 'ROI 계산기',
  rewards_claimed: '수령된 보상',
  value_rewards_token: '보상액',
  all: '전부',
  all_5: '한번에 최대 4토큰씩만',
  insufficient_shares: '지분이 불충분함',
  shares_removed: '지분',
  shares_avaliable: '가능한 지분',
  minimum_shares: '최소 shares',
  shares_tip: '가용주식수 / 총주식수',
  stablecoin_only: '스테이블코인 전용',
  more_than: '0.01 이상의 숫자를 입력해 주세요',
  less_than: '20 이상의 숫자를 입력해 주세요',
  no_valid: '적절한 숫자를 입력해 주세요',
  lp_fee: 'LP 수수료',
  protocol_fee: '프로토콜 수수료',
  referral_fee: '추천 수수료 ',
  protocol_fee_referral_fee: '의정서 수수료 및 추천 수수료',
  total_fee_create: '총 수수료',
  xref_title: '로 더 많은 수익 벌기',
  xref_title1: '더 많은 수익',
  xref_title2: 'REF로 xREF에 스테이킹하기',
  xref_introdution:
    'REF를 staking하게 되면, 당신은 프로토콜로이 생성한 수수료를 지급받을 기회를 얻습니다. REF 홀더들은 REF Finance가 얻은 수익의 일정 지분을 가져갈 수 있습니다.',
  staking_apr: '스테이킹 연이율(APR)',
  view_stats: '통계 보기',
  xref: 'xREF',
  ref: 'REF',
  more_than_general_seed: '입력값은 0.000001보다 커야 합니다',
  more_than_stable_seed: '입력값은 1보다 커야 합니다',
  are_you_sure: '확실히 실행하시겠습니까',
  price_impact_is_about: '가격 영향은 다음과 같은 사항에 관한 것입니다',
  yes_swap: '예, 스왑합니다',
  amount_must_be_greater_than_0: '양은 0보다 커야 한다',
  volume_ratio: '24H 거래량 / 유동성 비율',
  go_to_near_wallet: 'NEAR 지갑으로 이동',
  into_ref_account: 'REF 계정으로',
  deposit_into_ref_account: 'REF 계정으로 하여 유동성을 더하세요.',
  deposit_near_tip: '입금시 수수료를 위해 최소 1 NEAR는 남기세요.',
  input_greater_than_available_shares: '가능한 지분보다 입력이 큽니다.',
  number_of_unique_stakers: '스테이킹중인 사람 수',
  total_ref_staked: '스테이킹 된 REF 총량',
  total_xref_minted: '민트된 xREF 총량',
  protocol_projected_revenue: 'xRef 보유자에게 배당된 이익',
  total_fee_Revenue_shared_with_xref_holders:
    'xRef 보유자에게 배당하는 수수료 수익 총액',
  provision_treasury: '준비금',
  protocol_projected_revenue_tip:
    '이 숫자는 xREF 홀더들에게 지급 예상되는 수수료 누적 금액입니다. 이는 플랫폼 수수료의 75%에 해당합니다. 이 숫자는 실제 REF 토큰 재구입 시기의 가격에 따릅니다.',
  stake_ref_to_xref_for_earning_more:
    'xREF에 REF를 스테이크해서 더 큰 수익을 올리세요!',
  auto_router: '자동 라우터',
  auto_router_detail_sub_1: '이 루트는 당신의 교환(스왑)을 최적화합니다',
  auto_router_detail_sub_2: '해당하는 쌍의 풀 전부를 고려해서요 ',
  auto_router_detail_sub_3: '상세내역:',
  introducing_parallel_swap: '병렬 교환(스왑)을 소개합니다',
  at_least: '최소한',
  xref_start_time: '1am UTC, 2022년 1월 18일에 시작합니다.',
  xref_to_receive: '받을 xREF',
  ref_to_receive: '받을 REF',
  more_expensive_than_best_rate_en: '최고의 교환비율보다 더 비쌉니다. ',
  optimal_path_found_by_our_solution: '우리 솔루션으로 찾은 최적의 경로',
  check_to_stable_banner: '확인',
  rates_to_stable_banner: '교환비',
  make_sure_you_understand_what_you_do:
    '당신이 무엇을 하는지 확실히 이해하기 바랍니다',
  go_to_your_account_to: '당신의 계정으로 이동해서',
  deposit_l: '입금',
  withdraw_l: '출금',
  got_it: '확인함',
  check_the_transaction_settings: '트랜잭션 설정을 확인하세요',
  filter_by: '(으)로 필터함',
  allOption: '전부',
  stablecoin: '스테이블코인',
  near_ecosystem: 'NEAR 생태계',
  bridged_tokens: '브릿지된 토큰',
  gaming: '게이밍',
  nft: 'NFT',
  bridge: '(으)로부터/(으로) 브릿지',
  from_ethereum: 'Ethereum',
  from_aurora: 'Aurora',
  from_solana: 'Solana',
  from_terra: 'Terra',
  from_celo: 'Celo',
  no_result: '죄송합니다, 어떤 농장을 찾을 수 없었습니다.',
  multiple: '복수의',
  default: '기본값',
  vi_go_live: '베트남어 라이브 시작!',
  do_not_need_to_deposit_in_ref: '이제 Ref Finance에 예금할 필요 없습니다!',
  you_can_add_liquidity_directly:
    'NEAR wallet을 사용해서 직접 유동성을 공급하세요 ',
  do_not_need_deposit_anymore: '이제 예금할 필요 없습니다!',
  lightning_swaps: '라이트닝 교환(스왑)',
  frictionless_add_remove_liquidity: '마찰 없이 유동성을 더하고/빼는 액션',
  create: '생성',
  select_a: '선택',
  wallet: '지갑',
  to_use_ref_finance: 'Ref Finance를 사용하기 위해서는',
  not_supported: '지원되지 않음',
  installed: '설치됨',
  installe_now: '지금 설치',
  extension: '익스텐션',
  first_time_using_ref: 'Ref가 처음이신가요?',
  learn_more: '더 알아보기',
  install_sender_now: 'Sender를 설치하세요',
  connect_to_dapps_with_one_click: '클릭 한번에 dApps로 연결하세요',
  install: '설치',
  Connecting: '연결중',
  check_sender_wallet_extension: 'Sender Wallet extension을 다시 확인해 주세요',
  having_trouble: '문제가 있나요?',
  go_back: '뒤로가기',
  web: '웹',
  Type: '타입',
  click_to_view: '클릭하여 확인',
  transaction_failed: '트랜잭션 실패',
  wallet_vi: ' ',
  value: '가격',
  usd_value: 'USD 가격',
  sauce_note:
    'SAUCE는 페그된 자산의 유동성 풀을 대상으로 최적의 값을 찾아내 줍니다.',
  support_ledger: '보조 장부(레져)',
  support_ledger_tip:
    "레져는 메모리가 제한되는 구조 탓에 거대한 트랜잭션 양을 감당할 수 없습니다. (예: 오토 라우터 - 여러 풀에서 한번에 거래) 활성화시, '보조 장부' 옵션은 가장 간단한 형상으로 트랜잭션을 제한해서 합리적인 크기의 트랜잭션이 서명 될 수 있게 합니다. (오토 라우터에서 찾은 최적의 값보다 약간 손해를 볼 수 있습니다) ",
  start: '시작',
  aprTip: '모든 보상(보류중/실행중) 총합 지표 ',
  half: '절반',
  max: '최대',
  ref_account_balance_tip:
    '유동성 풀에 추가하는/인출하는 과정에서 에러가 발생한 것 같습니다',
  ref_account_tip_2: 'Ref 계정에 토큰이 있습니다',
  ref_account_tip_top: '당신의 토큰은 아마 REF 내부 계정에 있을지도 모릅니다',
  click_here: '여기를 눌러',
  to_recover_them: '그것들을 회수하세요',
  ref_account_tip_3:
    'Ref 계정으로부터 NEAR 월렛으로 토큰을 인출하시려면 선택 후 인출을 눌러주세요',
  aurora_account_tip_4:
    '매핑 계정에서 NEAR 지갑으로 토큰을 인출하려면 선택하고 인출하십시오',
  pool_fee_cross_swap: '풀/크로스 체인 수수료',
  mapping_account: '매핑 계정',
  mapping_account_tip: '매핑 계정에 토큰이 있습니다',
  cumulative_ref_buyback: 'Cumulative REF Buyback',
  yearly_revenue_booster: 'Yearly Revenue Booster',
  Confirm: '확인하다',
  Request_for_Quote: '견적 요청',
  mapping_account_explanation:
    "맵핑 주소는 '프록시 주소'인데, 이는 유저의 NEAR 계정을 유저의 오로라 ETH 주소와 대응시켜준다는 뜻입니다.",
  buy: '구매',
  sell: '매각',
  buy_nsn: 'USN 구매',
  buy_nsn_tip: 'USN은 NEAR가 보증하는 네이티브 스테이블코인입니다. ',
  usn_tip_one:
    'USN은 REF에서 거래가 가능합니다. 반드시 다음 수수료를 지갑에 남기세요. ',
  rate: '요율',
  trading_fee: '거래 수수료',
  usn_successful_click_to_view: '거래 성공. 클릭해서 확인하세요',
  awesomeNear_verified_token: 'AwesomeNear 인증된 토큰입니다',
  usn_fee_tip: 'Ref에 의해 부과되는 수수료 없음, 사용자는 USN 수수료만 지불!',
  name: '이름',
  diff: '차이',
  best: '최상의',
  total_bitcoins: '총 비트코인',
  total_usd_value: '총 미국 달러 가치',
  bitcoin_value: '비트코인 가치',
  stable_coin_value: '스테이블코인 가치',
  pool_fee_apr: 'Pool fee APY',
  ref_account_balance_tip_mobile: 'REF 계정에 토큰이 있습니다.',
  click: '딸깍 하는 소리',
  to_recover: '회복.',
  rewards_week: 'Rewards/week',
  rewards: 'Rewards',
  POOL: '풀들',
  STAKE: 'STAKE',
  lp_Token: 'LP Tokens',
  booster: 'Booster',
  slash_policy: 'Slash Policy',
  stake_period: 'Stake Period',
  append: 'Append',
  append_staking: 'Append Staking',
  unstake_time: 'Unstake Time',
  farm: 'Farm',
  reward_Token: 'Reward Token',
  status: 'Status',
  value_of_rewards: 'Value of Rewards',
  Rewards: 'Rewards',
  free: 'Free',
  connect_to_wallet: '지갑과 연결하기',
  anytime: 'Anytime',
  slash_policy_content:
    'Each seed has its own slash rate. And it will decreases linearly over time until be 0 at the unlock time of this CD Account.',
  not_expired: 'Not expired',
  accept_pay_slash_tip: 'I accept to pay slash',
  i_will_pay: 'I will pay',
  lp_token_slash: 'LP token exit fee.',
  booster_change_reason: 'Booster will change due to appending time',
  initial_booster: 'Initial Booster',
  append_timing: 'Append timing',
  cd_limit: 'more than 16 cd account limit',
  expired: 'Expired',
  claimed_Rewards: '획득된 보상',
  all_5_v2: '타임당 5 토큰',
  all_4_v2: '타임당 4 토큰',
  search_farms: '농장 검색',
  ended_Farms: '종료된 농장들',
  your_power: '당신의 "파워"',
  farm_has_boost_tip:
    '당신의 "파워" = 당신이 스테이킹한 LP 토큰 * 부스터 (부스터는 LOVE를 스테이킹하면 나옴)',
  farm_no_boost_tip: '당신의 "파워" = 당신이 스테이킹한 LP 토큰',
  search_by_token: '토큰으로 검색',
  more_than_a_simple_pool: '단순한 풀이 아니다',
  create_pool: '풀 만들기',
  you_have: 'you have',
  lp_tokens: 'LP 토큰',
  bonus_tip:
    '투표 보너스는 유저들의 투표를 독려하게끔 설계되었습니다. 보너스는 당신의 지분에 따라 달라집니다',
  add_lp_tokens_tip:
    '특정 농장에 스테이킹하려면 LP 토큰이 필요합니다. 우선 풀에 유동성을 공급하여 LP 토큰을 받으세요.',
  more_than_seed: 'Input must be greater than or equal to ',
  you_shares: 'Your Shares',
  lock_your_lp_tokens_with_booster: 'Lock your LP tokens for boosted rewards',
  unstaked_anytime_no_booster: 'Unstaked anytime, no booster',
  ordinary_stake: 'Ordinary Stake',
  locking_stake: 'Lock-up staking',
  change_to_lock: 'Change to Lock-up staking',
  estimated_rewards: 'Estimated rewards',
  final_booster: 'Final Booster',
  existing_amount: 'Existing amount',
  append_amount: 'Append amount',
  will_be_able_to_unstaked_after: 'will be able to unstaked after',
  expected_reward: 'Expected reward',
  tokens_small: 'tokens',
  reward_apr: 'Rewards APR',
  price_board: 'Price board',
  close: 'Close',
  burrow_usn_tip: 'Burrow에서 USN을 빌릴 수 있습니다.',
  borrow: '빌리다',
  unlock: 'Unlock',
  exit_fee: 'Exit fee',
  end_locking_period: 'End of locking period',
  slash_tip: 'Exit fee = Exit fee rate * End of locking period * Unlock amount',
  exit_fee_tip: 'Estimated amount you would pay to break your lock-up period',
  forbiddenTip: 'This farm does not support this duration option',
  swap_successful: '스왑에 성공했습니다. ',
  trading_successfull: '거래 성공. ',
  swap_capital: '스왑',
  farm_capital: '농장',
  sauce_capital: 'SAUCE',
  dao_capital: 'DAO',
  total_near_amount: '총 NEAR 금액',
  near_value: 'NEAR 값',
  recent_one_mounth_activity: '최근 한 달 사용내역',
  vote_mobile_capital: 'VOTE',
  yes_continue: 'Yes, continue',
  vote_capital: 'VOTE',
  please_choose_proposal_voting_duration:
    'Please choose proposal voting duration',
  starting_time: 'Starting Time',
  days_ve: 'days',
  ending_time: 'Ending Time',
  please_choose_voting_duration: '투표 기간을 설정해 주세요!',
  unlocking_tip:
    'LP 토큰을 잠금 해제하면 다음 프로포절들에 대한 당신의 투표는 자동으로 취소됩니다. (관련 보너스도 사라집니다)',
  stake_min_deposit: '입력된 값은 다음보다 크거나 같아야 합니다: ',
  unstakeTip:
    '스테이킹을 하면, 혹은 스테이킹을 해제하면 보상은 자동으로 획득됩니다.',
  endedFarmsUnstakeTip:
    '스테이킹 해제 시 모든 활성화된/펜딩된 농장에서 해당 쌍의 스테이킹이 해제됩니다.',
  comimg: 'Coming',
  appendTip: '락킹 시점보다 더 이르게 할 수 없습니다.',
  week: '주',
  yours: '당신의',
  boost: '부스트',
  near: 'NEAR',
  eth: 'ETH',
  others: '기타',
  stakeLove: 'Stake LOVE',
  unstakeLove: 'Unstake LOVE',
  get_love: 'LOVE 받기',
  migrate: 'Migrate',
  go_to_new_farm: '새로운 농장으로 이동',
  voting_gauge_share_tip:
    '투표 할당에 사용된 REF의 지분에 대비한 현 시점의 REF 보상 총량',
  available_to_stake: '만큼 스테이킹이 가능',
  veTip:
    'veLP 토큰은 거래/증여가 불가능합니다. veLPT는 당신의 투표권(voting power)을 나타냅니다 ',
  loveTip:
    'LOVE는 veToken의 유동성을 나타냅니다. 다른 NEP-141 토큰과 마찬가지로 LOVE는 거래/스왑/풀링/스테이킹/이자 농사 등이 다 가능합니다. LOVE는 당신의 veToken들의 기초 유동성(underlying liquidity)을 대표합니다 ',
  lock_your_lp_tokens: '당신의 LP Tokens 잠그세요',
  unlock_your_defi_power: '당신의 DeFi Power를 잠금 해제하세요',
  unlock_tip_mobile: '이제 잠금 해제가 가능합니다!',
  unlock_tip_top: '당신의 잠금은 만료되었습니다. 지금 잠금 해제가 가능합니다!',
  bonus_to_be_withdraw: '출금 가능한 보너스',
  keep_ve: '킵해놓기 (keep)',
  months: '월',
  month: '월',
  lock_lp_tokens: 'LP Token 잠금',
  get_lptoken: 'LP Token 받기',
  duration: '기간',
  ve_lock_tip: '현재 잠금 해제일보다 더 이를 수 없음',
  get: '받기',
  locking_ve: '잠금',
  in_addition_to_the: '-에 더해',
  already_locked: '이미 잠김',
  unlocking_is: '잠금 해제란',
  you_have_no_lp_share: '당신은 LP Token이 없습니다',
  lock: '잠금',
  unlock_lptoken: 'LP Tokens 잠금 해제',
  locked: '잠김',
  available: '가능함',
  balance_lowercase: '잔액',
  voting_power: '투표권',
  lock_lp_tokens_first: 'LP Token을 우선 잠가놔야 합니다!',
  farm_booster: '이자 농사 부스터',
  go_to_farm: '농장으로 이동',
  in: 'in',
  more_lowercase: 'more',
  avaliable_to_lock: '만큼 잠금 가능합니다',
  lock_lptoken: '잠금 LP Tokens',
  lptoken_locker: 'LP Token 잠금기',
  filter: '필터',
  bonus: '보너스',
  your_shares_ve: '당신의 지분',
  voted: '투표됨',
  my_voting_power: '나의 투표권',
  new_voting_ratio: '새로운 투표 비율',
  REF_allocation: 'REF 배당',
  vote: '투표하기',
  preview: '미리보기',
  options: '옵션',
  ratio: '비율',
  forum_discussion: 'Forum 토론',
  voted_veLPT: '투표에 쓰인 veLPT',
  your_contribution: '당신의 기여',
  delete: '삭제',
  not_start: '시작 안함',
  no_veLPT: 'veLPT 없음',
  claim_bonus: 'Bonus 받기',
  ended_ve: '끝남',
  proposal_details: '프로포절 세부사항',
  back: 'Back',
  pending_ve: '대기중',
  you_voted: '당신이 투표함',
  add_bonus: 'Bonus 추가',
  you_vote: '당신의 투표:',
  Creator: '제작자',
  turn_out: '투표율',
  top_answer: 'Top Answer',
  your_bonus: '당신의 보너스',
  gauge_weight_vote: 'Gauge Weight 투표',
  governance: '거버넌스',
  confirm: '확인',
  voting_period: '투표 기간',
  applying_period: '적용 기간',
  community_gauge_share: '커뮤니티 Gauge 지분',
  qualified_pools: '자격 인증된 풀들',
  total: '총합',
  supply_voted: '공급 투표됨',
  proposed: '프로포절 제출됨',
  farm_reward: '농사 보상',
  check_last_round: '결선 투표 확인하기',
  last_round_voting_result: '결선 투표 결과',
  create_proposal: '프포로절 만들기',
  type: '타입',
  add_option: '옵션 더하기',
  lock_lp_terms:
    '나는 내가 잠근 LP 토큰을 동의한 기간 전까지 꺼낼 수 없다는 점을 이해합니다',
  connect_to_near_wallet: 'NEAR Wallet에 연결하기',
  only_for_whitelist_address: 'whitelist된 주소에만 허용',
  v1Legacy: '구버전',
  v2New: 'Classic-신버전',
  v2_new_farms: 'Classic 신버전 농장',
  migrate_now: '지금 이주하세요!',
  v2_boost_tip:
    'Classic 농장에선 부스팅이 가능합니다. Legacy 농장들은 다음 날자 이후로 보상을 지급하지 않습니다: <span class="font-bold">2022년 8월 1일</span> ',
  v2_boost_tip2: 'Classic 농장에선 부스팅이 가능합니다.',
  v2_boost_no_tip:
    'Legacy 농장들은 다음 날자 이후로 보상을 지급하지 않습니다: <span class="font-bold">2022년 8월 1일</span> ',
  no_farm_need_to_migrate: '이주해야하는 농장은 없습니다.',
  v1_farms: 'Classic 농장',
  has_rewards_tip:
    '출금할 리워드가 다음 농장들에 남아있습니다: <a rel="noopener noreferrer nofollow" class="text-greenColor text-base cursor-pointer underline hover:text-senderHot"  href="/farms" >Legacy Farms</a>. 보상이 사라지진 않습니다. 언제든 출금할 수 있습니다.</div>',
  love: 'LOVE',
  Available_to_stake: '스테이킹 가능한 양은:',
  you_staked: '당신이 스테이킹한 양은:',
  has_rewards_tip_in_v2:
    '출금가능한 레거시 보상들이 기다립니다 <a rel="noopener noreferrer nofollow"  href="/farms" class="text-sm text-greenColor cursor-pointer underline ml-1 hover:text-senderHot"> Legacy Farms</a>.',
  how_to_get: '어떻게 받나요?',
  get_booster: '부스터 받기',
  ended_farms: '부스팅 종료된 농장',
  boosted_farms: '부스팅된 농장',
  your_farm: '당신의 농장',
  your_boosted_farms: '당신의 부스팅된 농장',
  search_farms_by_token: '토큰에 의해 농장 검색하기',
  more_lock_ve_popup: 'more',
  more_lock_ve_popup2: 'more',
  more_in: 'more in',
  starts: '시작',
  left: '남음',
  proposal_title: '프로포절 제목',
  share_forum_discussion_link_here: '포럼 토론 링크를 여기에 남겨주세요',
  required_field: '필수 입력 항목',
  voting_power_and_extra_earnings: '투표권 & 추가 수익',
  view_on: 'View on',
  risks_capital: '리스크',
  boostFarmTip: 'LOVE를 스테이킹하고 부스터를 받으세요',
  nonBoosted: '부스트 없음',
  boosted: '부스트 있음',
  love_staked: '스테이킹 된 LOVE',
  your_apr: '당신의 APR',
  range_apr: 'Range or reference APR',
  how_to_earn_more: '보상을 복리로 받는 법?',
  your_assets: '당신의 자산',
  connect_wallet: '지갑 연결',
  disconnect: '연결 해제',
  change: '변경하기',
  wallets_below_supports_on_PC: '아래의 지갑은 PC에서 지원 됩니다',
  connect: '연결하기',
  make_sure_device_plugged_in: '디바이스 연결을 확인하십시오',
  then_enter_an_account_id_to_connect: 'ID를 입력하시고 엔터를 눌러 연결하세요',
  no_pair_found: '쌍을 찾을 수 없습니다',
  found_stable_pool_in_sauce: 'SAUCE에서 안정적인 풀을 찾았습니다',
  lp_tokens_locking: 'LP 토큰',
  you_currently_have: '현재 가지고 있는',
  scheduled_to_be_unlocked: '잠금 해제 예정',
  locking_more_lp_tokens: '더 많은 LP 토큰 잠금',
  will_mean_these: '이것들을 의미할 것이다',
  lp_tokens_will_not_be_unlocked_until:
    'LP 토큰은 다음 시간까지 잠금 해제되지 않습니다',
  "I_understand_that_I_won't_be_able_to_remove_my":
    '내 계정을 삭제할 수 없음을 이해합니다',
  until: '~까지',
  continue: '계속하다',
  then_enter_a_derivation_path_to_connect:
    '그런 다음 연결할 파생 경로를 입력하십시오',
  account_identification_failed:
    '계정 식별에 실패했습니다! 수동으로 제공하십시오',
  input_account_id: '계정 아이디 입력',
  we_found: '우리는 발견',
  accounts_on_your_device: '기기의 계정',
  select_the_accounts_you_wish_to_connect: '연결하려는 계정을 선택하십시오',
  can_not_find_any_accounts:
    "Can't found any account associated with this Ledger. Please create a new NEAR account on",
  or_connect_another_ledger: 'or connect an another Ledger',
  add: '추가하다',
  finish: '마치다',
  add_custom_network: '사용자 지정 네트워크 추가',
  network_name: '네트워크 이름',
  rpc_name_taken_tip: '네트워크 이름은 이미 사용 중입니다',
  network_invalid: '네트워크가 잘못되었습니다',
  fobidden_testnet_rpc_tip:
    'RPC 서버의 네트워크(테스트넷)가 이 네트워크(메인넷)와 다릅니다',
  no_support_testnet_rpc_tip:
    '테스트넷은 사용자 지정 RPC 추가를 지원하지 않습니다',
  farm_only: '농장만',
  please_confirm_this_transaction_on_ledger:
    'Ledger에서 이 거래를 확인하십시오.',
  trade_capital: '거래',
  trade_capital_hump: '거래',
  pro: '프로',
  limit: '한계',
  make_an_order: '주문하기',
  your_active_orders_will_appear_here: '당신의 현재 주문이 여기 있습니다',
  your_history_orders_will_appear_here: '당신의 과거 주문 내역이 여기 있습니다',
  liquidity_capital: '리퀴디티',
  goes_to_limit_order: '주문 제한에 걸렸습니다',
  limit_order: '주문 제한',
  newText: 'New',
  farm_stop_tip: '이 농장은 중단되었습니다',
  pool_stop_tip: '이 풀은 중단되었습니다',
  volume_24h: '총 거래량 (24h)',
  add_to_watchlist: '와치리스트에 추가',
  remove_from_watchlist: '와치리스트에서 삭제',
  create_order: '오더 생성',
  filled: '처리됨',
  canceled: '취소됨',
  partially_filled: '일부 처리됨',
  pool_composition: '풀의 구성',
  amount: '수량',
  h24_volume_bracket: '총 거래량(24h)',
  fee_24h: '수수료 (24h)',
  cross_chain_swap: '체인 간 거래',
  orders: '명령',
  your_orders: '당신의 주문',
  active: '현재 진행중',
  history: '과거 내역',
  you_sell: '당신이 판',
  you_buy: '당신이 산',
  fee_tiers: '수수료 등급',
  order_rates: '주문 rates',
  created: '생성됨',
  executed: '실행됨',
  actions: '액션들',
  claimed_upper: 'Claimed',
  open_my_order: '나의 오픈 오더',
  initial_order: '최초 주문',
  this_order_has_been_partially_filled: '이 주문은 일부 처리되었습니다.',
  filled_via_swap: '스왑으로 주문 처리됨',
  state: '상태',
  partially: '부분적으로',
  select_tokens: '토큰 선택',
  fee_Tiers: '수수료 등급',
  select_s: '선택',
  no_pool: '풀 없음',
  input_amount: '입력 양',
  update_range: '업데이트 범위',
  not_enough_balance: '잔고 부족',
  set_price_range: '가격대 설정',
  current_price: '현재 가격',
  pool_creation: '풀 생성',
  pool_creation_tip:
    '그 토큰들을 위한 풀은 현재 없습니다. 적절한 토큰들의 비율을 맞춰 제공하면 풀을 생성할 수 있습니다. ',
  starting_price: '시작가',
  create_a_pool: '풀 생성하기',
  add_single_price_tip:
    '시장 가격이 당신의 가격대에 들어오지 않는 한, 당신의 포지션은 수수료를 벌지도 않고 트레이드에 쓰이지도 않을 것입니다.',
  invalid_range_tip:
    '부적절한 가격대 선택됨. 최소 가격이 최대 가격보다 낮아야 합니다. ',
  maket_price_outside_tip: '시장 가격이 당신이 선택한 가격대 밖입니다.',
  maket_price_outside_single_only_tip:
    '시장 가격이 당신이 선택한 가격대 밖입니다. 자산 한개의 예치만 가능합니다.',
  min_price: '최소 가격',
  max_price: '최대 가격',
  min: '최소',
  out_of_range: '범위 넘김',
  in_range: '범위 맞음',
  unclaimed_fees: '안 찾아간 수수료들',
  your_position_will_be: '이 가격에서는: ',
  at_this_price: '이 당신의 포지션입니다',
  price_range: '가격대',
  positions: '포지션',
  add_new_position: '새로운 포지션 추가',
  range: '범위',
  unclaimed_fee: '안 찾아간 수수료',
  near_validation_error: 'Must have 0.5N or more left in wallet for gas fee.',
  no_positons_in_this_pool_yet: 'No positons in this pool yet',
  no_claimed_rewards_yet: 'No claimed rewards yet',
  out_of: 'out of',
  value_must_be_less_than_or_equal_to: 'Value must be less than or equal to',
  login_risk_tip:
    'By checking this box and moving forward, you confirm that you fully understand the <a rel="noopener noreferrer nofollow" target="_blank" class="text-greenColor text-sm font-bold cursor-pointer hover:underline" href="/risks"' +
    ')">risks</a> of using Ref Finance.',
  no_pool_tip: 'Oops! The pool does not exist.',
  total_ref_week: 'Total REF/week',
  ref_week_you_will_get: 'REF/week you will get',
  stable_pool: 'Stable Pool',
  market_rate: 'Market Rate',
  limit_price_tip:
    'To improve deal the efficiency, your price should be in one slot nearby automatically',
  no_token_found: 'No token found',
  search_name_or_address: 'Search name or paste address...',
  token_address_invalid: 'The token address was invalid',
  price_impact_warning: 'Price Impact Warning',
  confirm_order: 'Confirm Order',
  you_Sell: 'You Sell',
  to_Buy: 'to Buy',
  at_Price: 'at Price',
  insufficient_balance: 'Insufficient Balance',
  MORE: 'MORE',
  limitTip: 'Your price is automatically set to the closest price slot',
  v2PoolTip: 'You can have up to 16 positions in DCL pools',
  orderTip: 'You can have up to 16 active/history limit orders',
  v2_pools: 'DCL Pools',
  minimum_received_dot: '최소 수령양',
  v2_your_pool_introduction: 'Your discretized concentrated liquidity',
  v1_your_pool_introduction: 'Your liquidity in classic pools',
  estimate_value: 'Estimate Value',
  your_investment: 'Your Investment',
  your_investment_tip:
    'USD value of your investment on Ref:Classic pools + DCL pools (including staked in farms) + xREF',
  classic_pools: 'Classic Pools',
  xref_staking: 'xREF Staking',
  token_balances: 'Token Balances',
  unclaimed_earnings: 'Unclaimed Earnings',
  unclaimed_earnings_tip:
    'USD value of unclaimed fees from DCL pools, and unclaimed farm rewards.',
  unclaimed_pool_fees: 'Unclaimed Pool Fees',
  unclaimed_farm_rewards: 'Unclaimed Farm Rewards',
  active_orders: 'Active Orders',
  yield_farming: 'Yield Farming',
  execute_status: 'Execute Status',
  your_liquidity_usd_value: 'Your Liquidity (USD value)',
  usage: 'Usage',
  holding: 'Holding',
  your_lp_tokens_and_shares: 'Your LP Tokens(Shares)',
  usd_value_staked: 'USD Value Staked',
  instant_swap: 'Instant Swap',
  swapped: 'Swapped',
  created_s: 'created',
  order_progress: 'Order Progress',
  dcl_pool: 'DCL Pool',
  classic: 'Classic',
  classic_farms: 'Classic Farms',
  unstaked: 'Unstaked',
  staked_in_farm: 'Staked in farm',
  farm_reward_range: 'Farm Reward Range',
  your_positions: 'Your Positions',
  your_price_range: 'Your Price Range',
  locked_in: 'locked in',
  executing: 'Executing',
  from_2: 'from',
  to_2: 'to',
  your_orders_2: 'Your Orders',
  in_farm_2: 'in farm',
  your_liquidity_2: 'Your Liquidity',
  legacy_tip: 'Found unstaked LP tokens or rewards in',
  legacy_farms: 'Legacy Farms',
  all_farms: 'All Farms',
  your_farms_2: 'Your Farms',
  dcl_farms: 'DCL Farms',
  farm_type: 'Farm type',
  farm_2: 'Farm',
  to_claim: 'To Claim',
  liquidity_staked: 'Liquidity staked',
  dcl_pool_detail: 'DCL Pool Detail',
  reward_range: 'Reward Range',
  reward_range_tip: 'Farm reward within this range',
  ending_soon: 'Ending soon',
  farm_ended_tip: 'This farm has ended.',
  farm_will_ended_tip: 'This farm will end soon.',
  new_farm: 'New Farm',
  is_coming: 'is coming',
  est_apr: 'Est. APR',
  state_2: 'State',
  farming: 'Farming',
  unavailable: 'Unavailable',
  liquidity_detail: 'Liquidity Detail',
  hide: 'Hide',
  show: 'Show',
  unavailable_positions: 'unavailable positions',
  your_price_range_tip: 'Your price range is out of reward range',
  position_has_staked_tip: 'This position has been staked in another farm',
  minimum_tip: 'The minimum staking amount is',
  your_liquidity_3: 'your liquidity',
  position_has_staked_pre: 'This position has been staked in',
  another_farm: 'another farm',
  add_position: 'Add Position',
  full_range: 'Full Range',
  your: 'Your',
  max_apr: 'Max.APR',
  faming_positions: 'Farming Positions',
  you_can_earn_tip: 'You can earn rewards by farming, est. APR is',
  you_can_earn_current_tip:
    'Your current staked farm ended, and new farm is coming, est. APR is',
  go_new_farm: 'Go New Farm',
  go_farm: 'Go Farm',
  earn_rewards: 'You can earn rewards',
  est_apr_is: 'est. APR is',
  new_farm_2: 'new farm',
  you_can_earn_current_pre_tip: 'Your current staked farm ended, and',
  in_ended_farm: 'in ended farm',
  staked: 'Staked',
  in_farm_3: 'in farm',
  estimation: 'Estimation Value',
  no_dcl_position_tip:
    "You don't have any DCL Liquidity position for now, click 'AddPosition' to start farming.",
  price_on_slot_tip: 'The price should be in one slot nearby.',
  position_will_appear_here: 'Your liquidity positions will appear here.',
  by_farming: 'by farming',
  this_staked_tip: 'This NFT has been staked',
  dcl_liquidity: 'DCL Liquidity',
  classic_liquidity: 'Classic Liquidity',
  will_appear_here_tip: 'Your liquidity positions will appear here.',
  dcl_will_appear_here_tip: 'Your DCL liquidity positions will appear here.',
  classic_will_appear_here_tip:
    'Your Classic liquidity positions will appear here.',
  yield_farming_appear_here_tip: 'Your yield farming will appear here.',
  active_order_appear_here_tip: 'Your active order(s) will appear here.',
  account_appear_here_tip: 'Your wallet/account assets will appear here.',
  farm_state: 'Farm State',
  farm_detail: 'Farm Detail',
  unstaked_2: 'Unstaked',
  unstaked_positions: ' Unstaked Positions',
  price_range_overlap_ratio: ' Price Range Overlap Ratio',
  swapped_history: 'swap history',
  swapped_history_order: 'Swapped',
  overview: 'Overview',
  positions_2: 'Positions',
  'deposit_near_tip_0.5': 'To deposit, keep at least 0.5 NEAR to cover gas fee',
  trade: 'Trade',
  earn_2: 'Earn',
  portfolio: 'Portfolio',
  more_2: 'More',
  liquidity_pools_2: 'Liquidity Pools',
  business_inquiries: 'Business Inquiries',
  orderbook_mobile: 'Orderbook',
  real_time_executed_orders: 'real-time executed orders',
  real_time_executed_orders_tip:
    'When placing a sell order above market price or a buy order below market price using limit order function, Ref will attempt to execute a swap-with-stop-point action first, and if there is any remaining amount, a limit order will be created to fill the rest.<br> Real-time executed orders refer to orders placed using the limit order function but executed through swapping. In the "History" section, you can view real-time executed orders between the earliest displayed limit order in History up to the present time.',
  ledger_guide_tip_1:
    'To successfully use your Ledger wallet for transactions, the ',

  ledger_guide_tip_2: 'feature has been automatically activated.',
  ledger_guide_tip_3: 'Please be aware',
  support_ledger_tip_new: '"Support Ledger"',

  ledger_guide_tip_4:
    'that due to Ledger wallet constraints, the current rate provided by the swap function',
  ledger_guide_tip_5: 'may not be the best price.',
};
export default Object.assign(ko, ko_in_risks_page);
