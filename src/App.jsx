import { useState, useCallback } from 'react';

import TopBar from './components/common/TopBar';
import SideDrawer from './components/drawer/SideDrawer';
import HomePage from './pages/home/HomePage';
import DAppPage from './pages/dapp/DAppPage';
import WalletListModal from './components/modals/WalletListModal';
import WalletDetailsModal from './components/modals/WalletDetailsModal';
import VirtualAccountModal from './components/modals/VirtualAccountModal';
import PinEntryScreen from './components/pin/PinEntryScreen';
import PrivateKeyScreen from './components/wallet/PrivateKeyScreen';
import FloatingSupportButton from './components/common/FloatingSupportButton';

function App() {
  // Navigation
  const [currentPage, setCurrentPage] = useState('home');

  // Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Home state
  const [hasTransactionHistory, setHasTransactionHistory] = useState(true);
  const [balanceHidden, setBalanceHidden] = useState(false);

  // Modals
  const [walletListOpen, setWalletListOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [virtualAccountOpen, setVirtualAccountOpen] = useState(false);

  // PIN flow
  const [pinScreenOpen, setPinScreenOpen] = useState(false);
  const [pinWallet, setPinWallet] = useState(null);

  // Private key flow
  const [privateKeyOpen, setPrivateKeyOpen] = useState(false);
  const [privateKeyData, setPrivateKeyData] = useState(null);

  const handleNavigate = useCallback((page) => {
    setCurrentPage(page);
    setDrawerOpen(false);
  }, []);

  const handleWalletSelect = useCallback((wallet) => {
    setSelectedWallet(wallet);
    setWalletListOpen(false);
  }, []);

  const handlePrivateKeyRequest = useCallback((wallet) => {
    setPinWallet(wallet);
    setSelectedWallet(null);
    setPinScreenOpen(true);
  }, []);

  const handlePinSuccess = useCallback(() => {
    setPinScreenOpen(false);
    setPrivateKeyData(pinWallet);
    setPrivateKeyOpen(true);
  }, [pinWallet]);

  const handlePrivateKeyDone = useCallback(() => {
    setPrivateKeyOpen(false);
    setPrivateKeyData(null);
    setPinWallet(null);
  }, []);

  const handleCloseAll = useCallback(() => {
    setWalletListOpen(false);
    setSelectedWallet(null);
    setVirtualAccountOpen(false);
    setPinScreenOpen(false);
    setPrivateKeyOpen(false);
  }, []);

  // Determine if any modal/fullscreen is open
  const hasOverlay = drawerOpen || walletListOpen || selectedWallet || virtualAccountOpen;

  return (
    <div className="phone-frame">

      {/* Main content */}
      {pinScreenOpen ? (
        <PinEntryScreen
          onSuccess={handlePinSuccess}
          onClose={() => { setPinScreenOpen(false); setPinWallet(null); }}
        />
      ) : privateKeyOpen ? (
        <PrivateKeyScreen
          wallet={privateKeyData}
          onDone={handlePrivateKeyDone}
        />
      ) : (
        <>
          <div className="app-content">
            <TopBar
              onMenuClick={() => setDrawerOpen(true)}
              currentPage={currentPage}
            />

            {currentPage === 'home' && (
              <HomePage
                hasTransactionHistory={hasTransactionHistory}
                balanceHidden={balanceHidden}
                onToggleBalance={() => setBalanceHidden(!balanceHidden)}
                onToggleHistory={() => setHasTransactionHistory(!hasTransactionHistory)}
                onWalletDropdown={() => setWalletListOpen(true)}
                onVirtualAccount={() => setVirtualAccountOpen(true)}
              />
            )}

            {currentPage === 'dapp' && <DAppPage />}
          </div>

          <FloatingSupportButton />
        </>
      )}

      {/* Drawer overlay */}
      {drawerOpen && (
        <div className="overlay" onClick={() => setDrawerOpen(false)} />
      )}

      {/* Side drawer */}
      <SideDrawer
        isOpen={drawerOpen}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Modal overlay */}
      {(walletListOpen || selectedWallet || virtualAccountOpen) && !drawerOpen && (
        <div
          className={(walletListOpen || virtualAccountOpen) ? 'overlay-blur' : 'overlay'}
          onClick={handleCloseAll}
        />
      )}

      {/* Modals */}
      {walletListOpen && (
        <WalletListModal
          onSelect={handleWalletSelect}
          onClose={() => setWalletListOpen(false)}
        />
      )}

      {selectedWallet && (
        <WalletDetailsModal
          wallet={selectedWallet}
          onClose={() => setSelectedWallet(null)}
          onPrivateKey={handlePrivateKeyRequest}
        />
      )}

      {virtualAccountOpen && (
        <VirtualAccountModal
          onClose={() => setVirtualAccountOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
