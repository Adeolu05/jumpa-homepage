import './Modals.css';
import closeIcon from '../../assets/icons/actions/close.svg';
import virtualGraphic from '../../assets/images/illustrations/virtual-account-graphic.svg';

function VirtualAccountModal({ onClose }) {
  return (
    <div className="virtual-modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="virtual-close" onClick={onClose} aria-label="Close">
        <img src={closeIcon} alt="" width="11.72" height="11.72" />
      </button>

      <div className="virtual-modal-content">
        <div className="virtual-graphic">
          <img src={virtualGraphic} alt="Virtual Account" />
        </div>
        <p className="virtual-modal-desc">
          Get a virtual account to send, store and receive money on your Jumpa wallet.
        </p>
        <button className="virtual-modal-cta">
          Continue
        </button>
      </div>
    </div>
  );
}

export default VirtualAccountModal;
