import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/layout/Footer';

import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import Guider from 'src/components/layout/Guider';

import { WalletSelectorContextProvider } from './context/WalletSelectorContext';

import { Content } from 'src/Content';
import { LedgerTransactionModal } from './context/modal-ui/modal';
import { XmasActivityContextProvider } from './context/XmasActivity';
import { ModalGAPrivacy } from 'src/context/modal-ui/modalGAPrivacy/modalGAPrivacy';
import RpcList from 'src/components/rpc';
console.log('333333333333', process?.env?.REACT_APP_NEAR_ENV);
function App() {
  return (
    <Router>
      <WalletSelectorContextProvider>
        <XmasActivityContextProvider>
          <div className="page-container relative min-h-screen pb-24 lg:overflow-x-hidden xs:flex xs:flex-col md:flex md:flex-col">
            <Content />

            <Footer />
            <Guider></Guider>
          </div>
        </XmasActivityContextProvider>
      </WalletSelectorContextProvider>
      <RpcList></RpcList>
      <LedgerTransactionModal />
      <ModalGAPrivacy />
    </Router>
  );
}

export default App;
