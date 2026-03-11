import './HomePage.css';
import '../../components/home/home.css';
import WalletSelectorCard from '../../components/home/WalletSelectorCard';
import WalletBalanceCard from '../../components/home/WalletBalanceCard';
import QuickActionRow from '../../components/home/QuickActionRow';
import ServiceShortcutGrid from '../../components/home/ServiceShortcutGrid';
import QuickTransferList from '../../components/home/QuickTransferList';
import PromoBannerCard from '../../components/home/PromoBannerCard';
import VirtualAccountBanner from '../../components/home/VirtualAccountBanner';

function HomePage({ hasTransactionHistory, balanceHidden, onToggleBalance, onWalletDropdown, onVirtualAccount }) {
  return (
    <div className="home-page">
      <WalletSelectorCard onDropdown={onWalletDropdown} />
      <WalletBalanceCard hidden={balanceHidden} onToggle={onToggleBalance} />
      <QuickActionRow />
      <ServiceShortcutGrid />
      {hasTransactionHistory && <QuickTransferList />}
      <PromoBannerCard />
      <VirtualAccountBanner onClick={onVirtualAccount} />
      <div className="home-bottom-spacer" />
    </div>
  );
}

export default HomePage;
