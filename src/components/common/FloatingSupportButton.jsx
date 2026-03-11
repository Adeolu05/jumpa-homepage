import './FloatingSupportButton.css';
import messageIcon from '../../assets/icons/actions/message.svg';

function FloatingSupportButton() {
  return (
    <button className="fab-support" aria-label="Support">
      <img src={messageIcon} alt="" width="24" height="24" />
    </button>
  );
}

export default FloatingSupportButton;
