import './SideDrawer.css';
import { navItems } from '../../data/navItems';
import logoFull from '../../assets/logos/brand/jumpa-logo-full.png';
import logoMark from '../../assets/logos/brand/jumpa-logo-mark.png';
import homeIcon from '../../assets/icons/navigation/home.svg';
import homeActiveIcon from '../../assets/icons/navigation/home-active.svg';
import dappIcon from '../../assets/icons/navigation/dapp.svg';
import dappActiveIcon from '../../assets/icons/navigation/dapp-active.svg';
import tradeIcon from '../../assets/icons/navigation/trade.svg';
import tradeActiveIcon from '../../assets/icons/navigation/trade-active.svg';

const iconMap = {
  home: { inactive: homeIcon, active: homeActiveIcon },
  dapp: { inactive: dappIcon, active: dappActiveIcon },
  trade: { inactive: tradeIcon, active: tradeActiveIcon }
};

function SideDrawer({ isOpen, currentPage, onNavigate, onClose }) {
  return (
    <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-header">
        <div className="drawer-logo">
          <img src={logoMark} alt="Jumpa" className="drawer-logo-mark" />
          <span className="drawer-logo-text">Jumpa</span>
        </div>
      </div>
      <nav className="drawer-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`drawer-nav-item ${currentPage === item.id ? 'active' : ''} ${!item.enabled ? 'disabled' : ''}`}
            onClick={() => item.enabled && onNavigate(item.id)}
          >
            <img 
              src={currentPage === item.id ? iconMap[item.icon].active : iconMap[item.icon].inactive} 
              alt="" 
              width="18" 
              height="18" 
            />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default SideDrawer;
