import './TopBar.css';
import hamburgerIcon from '../../assets/icons/navigation/hamburger.svg';
import settingsIcon from '../../assets/icons/actions/settings.svg';
import notificationIcon from '../../assets/icons/actions/notification.svg';
import userAvatar from '../../assets/images/avatars/user-default.svg';

function TopBar({ onMenuClick }) {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <button className="icon-btn" onClick={onMenuClick} aria-label="Menu">
          <img src={hamburgerIcon} alt="" width="22" height="22" />
        </button>
        <div className="user-avatar">
          <img src={userAvatar} alt="User" />
        </div>
      </div>
      <div className="top-bar-right">
        <button className="icon-btn" aria-label="Settings">
          <img src={settingsIcon} alt="" width="22" height="22" />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <img src={notificationIcon} alt="" width="22" height="22" />
        </button>
      </div>
    </div>
  );
}

export default TopBar;
