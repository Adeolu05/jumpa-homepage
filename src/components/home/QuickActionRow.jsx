import sendIcon from '../../assets/icons/actions/send.svg';
import receiveIcon from '../../assets/icons/actions/receive.svg';
import swapIcon from '../../assets/icons/actions/swap.svg';

function QuickActionRow() {
  const actions = [
    { label: 'Send', icon: sendIcon },
    { label: 'Receive', icon: receiveIcon },
    { label: 'Swap', icon: swapIcon },
  ];

  return (
    <div className="quick-actions">
      {actions.map((a) => (
        <button key={a.label} className="quick-action-btn">
          <span>{a.label}</span>
          <img src={a.icon} alt="" width="16" height="16" />
        </button>
      ))}
    </div>
  );
}

export default QuickActionRow;
