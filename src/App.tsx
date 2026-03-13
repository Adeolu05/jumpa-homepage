import { useState, useCallback } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";

// Layout & Pages (Original)
import Layout from "./components/ui/layout";
import { 
  Landing, 
  Onboarding, 
  LoginForm, 
  CreateAccountForm,
  SavingsDashboard, 
  LoanDashboard, 
  AiDashboard,
  SettingsHome,
  WithdrawOptions,
  LoginSuccess,
  VerifyEmail,
  ForgotPasswordEmailForm,
  ImportOptions,
  SaveRecoveryPhrase,
  ImportPrivateKey,
  Notifications,
  SendMoneyFlow,
  AiChat,
  SendScreens,
  AirtimeFlow,
  GroupFlow,
  DriverNotification,
  Verification,
  VerifyAccountForm,
  VerificationSuccess,
  VerificationFailed,
  VerificationFailedForm,
  Loan,
  LoanRequestSuccess,
  LoanNotification,
  SavingsOnboarding,
  Savings,
  SavingsTargetDashboard,
  SavingsTargetForm,
  SavingsSummary,
  SavingsNotification,
  SavingsTargetSuccess,
  Investment,
  InvestmentHome,
  Settings,
  SettingsProfile,
  PaymentSettings,
  ChangePaymentPin
} from "./pages";

// Components (Premium)
import TopBar from "./components/common/TopBar";
import SideDrawer from "./components/ui/SideDrawer";
import JumpaDashboard from "./pages/home/dashboard";
import TradePage from "./pages/home/subpages/TradePage";
import DAppPage from "./pages/home/subpages/DAppPage";
import WalletListModal from "./components/modal/WalletListModal";
import WalletDetailsModal from "./components/modal/WalletDetailsModal";
import VirtualAccountModal from "./components/modal/VirtualAccountModal";
import PinEntryScreen from "./components/pin/PinEntryScreen";
import PrivateKeyScreen from "./components/wallet/PrivateKeyScreen";
import FloatingSupportButton from "./components/common/FloatingSupportButton";

// Data
import { type Wallet } from "./data/wallets";

function AppContent() {
  const navigate = useNavigate();

  // Navigation State
  const [currentPage, setCurrentPage] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Home state
  const [balanceHidden, setBalanceHidden] = useState(false);

  // Modals
  const [walletListOpen, setWalletListOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [virtualAccountOpen, setVirtualAccountOpen] = useState(false);

  // PIN & Private key flow
  const [pinScreenOpen, setPinScreenOpen] = useState(false);
  const [pinWallet, setPinWallet] = useState<Wallet | null>(null);
  const [privateKeyOpen, setPrivateKeyOpen] = useState(false);
  const [privateKeyData, setPrivateKeyData] = useState<Wallet | null>(null);

  // Withdrawal flow
  const [withdrawOpen, setWithdrawOpen] = useState(false);

  const handleNavigate = useCallback((pageId: string) => {
    setCurrentPage(pageId);
    setDrawerOpen(false);
    if (pageId === "home") navigate("/home");
  }, [navigate]);

  const handleWalletSelect = useCallback((wallet: Wallet) => {
    setSelectedWallet(wallet);
    setWalletListOpen(false);
  }, []);

  const handlePrivateKeyRequest = useCallback((wallet: Wallet) => {
    setPinWallet(wallet);
    setSelectedWallet(null);
    setPinScreenOpen(true);
  }, []);

  const handlePinSuccess = useCallback(() => {
    setPinScreenOpen(false);
    setPrivateKeyData(pinWallet);
    setPrivateKeyOpen(true);
  }, [pinWallet]);

  return (
    <>
      <Routes>
        {/* Public Routes with Original Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login-success" element={<LoginSuccess />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password-email" element={<ForgotPasswordEmailForm />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/import-options" element={<ImportOptions />} />
        <Route path="/save-recovery" element={<SaveRecoveryPhrase />} />
        <Route path="/private-keys" element={<ImportPrivateKey />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Auth/Home Routes in Premium Phone Frame */}
        <Route
          path="/home/*"
          element={
            <div className="phone-frame" style={{ fontFamily: "Geist" }}>
              <div className="app-content">
                <TopBar onMenuClick={() => setDrawerOpen(true)} />

                <Routes>
                  <Route
                    index
                    element={
                      currentPage === "home" ? (
                        <JumpaDashboard
                          hasTransactionHistory={true}
                          balanceHidden={balanceHidden}
                          onToggleBalance={() => setBalanceHidden(!balanceHidden)}
                          onWalletDropdown={() => setWalletListOpen(true)}
                          onVirtualAccount={() => setVirtualAccountOpen(true)}
                          onWithdrawal={() => setWithdrawOpen(true)}
                          onTrade={() => setCurrentPage("trade")}
                          onDApp={() => setCurrentPage("dapp")}
                        />
                      ) : currentPage === "dapp" ? (
                        <DAppPage />
                      ) : (
                        <TradePage />
                      )
                    }
                  />
                  
                  {/* Original Feature Routes integrated into the home flow */}
                  <Route path="savings" element={<SavingsDashboard />} />
                  <Route path="loans" element={<LoanDashboard />} />
                  <Route path="ai" element={<AiDashboard />} />
                  <Route path="settings" element={<SettingsHome />} />
                  
                  {/* New Feature Routes from main */}
                  <Route path="chat" element={<AiChat />} />
                  <Route path="send-screens" element={<SendScreens />} />
                  <Route path="send" element={<SendMoneyFlow />} />
                  <Route path="airtime" element={<AirtimeFlow />} />
                  <Route path="group" element={<GroupFlow />} />
                  <Route path="npc-notification" element={<DriverNotification />} />
                  
                  {/* Verification flow */}
                  <Route path="verification" element={<Verification />}>
                    <Route index element={<VerifyAccountForm />} />
                    <Route path="success" element={<VerificationSuccess />} />
                    <Route path="failed" element={<VerificationFailed />} />
                    <Route path="retry" element={<VerificationFailedForm />} />
                  </Route>

                  {/* Enhanced Loan flow */}
                  <Route path="loan-flow" element={<Loan />}>
                    <Route index element={<LoanDashboard />} />
                    <Route path="submitted" element={<LoanRequestSuccess />} />
                    <Route path="notification" element={<LoanNotification />} />
                  </Route>

                  {/* Savings flow */}
                  <Route path="savings-flow" element={<Savings />}>
                    <Route index element={<SavingsOnboarding />} />
                    <Route path="dashboard" element={<SavingsDashboard />} />
                    <Route path="target" element={<SavingsTargetDashboard />} />
                    <Route path="create-target" element={<SavingsTargetForm />} />
                    <Route path="summary" element={<SavingsSummary />} />
                    <Route path="notification" element={<SavingsNotification />} />
                    <Route path="success" element={<SavingsTargetSuccess />} />
                  </Route>

                  {/* Investment flow */}
                  <Route path="investment-flow" element={<Investment />}>
                    <Route index element={<InvestmentHome />} />
                  </Route>

                  {/* Profile Settings */}
                  <Route path="settings-flow" element={<Settings />}>
                    <Route index element={<SettingsHome />} />
                    <Route path="profile" element={<SettingsProfile />} />
                    <Route path="payment" element={<PaymentSettings />} />
                    <Route path="change-pin" element={<ChangePaymentPin />} />
                  </Route>
                </Routes>
              </div>

              {currentPage === "home" && !privateKeyOpen && !pinScreenOpen && <FloatingSupportButton />}

              {/* Overlays */}
              <WithdrawOptions isOpen={withdrawOpen} onClose={() => setWithdrawOpen(false)} />
              
              {pinScreenOpen && (
                <PinEntryScreen
                  onSuccess={handlePinSuccess}
                  onClose={() => { setPinScreenOpen(false); setPinWallet(null); }}
                />
              )}

              {privateKeyOpen && (
                <div className="fullscreen-overlay">
                  <PrivateKeyScreen
                    wallet={privateKeyData}
                    onDone={() => {
                      setPrivateKeyOpen(false);
                      setPrivateKeyData(null);
                      setPinWallet(null);
                    }}
                  />
                </div>
              )}

              {drawerOpen && (
                <div className="overlay" onClick={() => setDrawerOpen(false)} />
              )}

              <SideDrawer
                isOpen={drawerOpen}
                currentPage={currentPage}
                onNavigate={handleNavigate}
                onClose={() => setDrawerOpen(false)}
              />

              {(walletListOpen || selectedWallet || virtualAccountOpen) && !drawerOpen && (
                <div className="overlay-blur" onClick={() => {
                  setWalletListOpen(false);
                  setSelectedWallet(null);
                  setVirtualAccountOpen(false);
                }} />
              )}

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
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
