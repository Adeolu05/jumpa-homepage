import '../HomePage.css';
import '../home.css';
import WalletSelectorCard from '../components/WalletSelectorCard';
import WalletBalanceCard from '../components/WalletBalanceCard';
import QuickActionRow from '../components/QuickActionRow';
import ServiceShortcutGrid from '../components/ServiceShortcutGrid';
import QuickTransferList from '../components/QuickTransferList';
import PromoBannerCard from '../components/PromoBannerCard';
import VirtualAccountBanner from '../components/VirtualAccountBanner';

interface HomePageProps {
  hasTransactionHistory: boolean;
  balanceHidden: boolean;
  onToggleBalance: () => void;
  onWalletDropdown: () => void;
  onVirtualAccount: () => void;
  onWithdrawal: () => void;
  onTrade: () => void;
  onDApp: () => void;
}

export default function JumpaDashboard({ 
  hasTransactionHistory = true, 
  balanceHidden = false, 
  onToggleBalance = () => {}, 
  onWalletDropdown = () => {}, 
  onVirtualAccount = () => {},
  onWithdrawal = () => {},
  onTrade = () => {},
  onDApp = () => {}
}: Partial<HomePageProps>) {
  return (
    <div className="home-page">
      <WalletSelectorCard onDropdown={onWalletDropdown} />
      <WalletBalanceCard hidden={balanceHidden} onToggle={onToggleBalance} />
      <QuickActionRow 
        onSend={() => {}} 
        onReceive={onWalletDropdown} 
        onSwap={onTrade} 
      />
      <ServiceShortcutGrid 
        onWithdraw={onWithdrawal}
        onDApp={onDApp}
      />
      {hasTransactionHistory && <QuickTransferList />}
      <PromoBannerCard />
      <VirtualAccountBanner onClick={onVirtualAccount} />
      <div className="home-bottom-spacer" />
    </div>
  );
}