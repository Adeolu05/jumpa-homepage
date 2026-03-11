import { useState } from 'react';
import './Modals.css';
import closeIcon from '../../assets/icons/actions/close.svg';
import copyIcon from '../../assets/icons/actions/copy.svg';
import chevronRight from '../../assets/icons/actions/chevron-right.svg';

function WalletDetailsModal({ wallet, onClose, onPrivateKey }) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wallet.fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: silently fail */
    }
  };

  return (
    <div className="modal-sheet modal-details" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <div style={{ width: 32 }} />
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <img src={closeIcon} alt="" width="18" height="18" />
        </button>
      </div>

      <div className="details-hero">
        <div
          className="details-coin-icon"
          style={{ background: wallet.color }}
        >
          <span>{wallet.symbol.charAt(0)}</span>
        </div>
      </div>

      <div className="details-address-box" onClick={handleCopyAddress}>
        <span className="details-address">{wallet.fullAddress}</span>
        <button className="details-copy-btn" aria-label="Copy address">
          <img src={copyIcon} alt="" width="16" height="16" />
        </button>
      </div>
      {copied && <span className="copy-toast">Copied!</span>}

      <div className="details-section">
        <h4 className="details-section-title">Export Key</h4>
        <button className="details-key-row" onClick={() => onPrivateKey(wallet)}>
          <span>Private key</span>
          <img src={chevronRight} alt="" width="16" height="16" />
        </button>
      </div>
    </div>
  );
}

export default WalletDetailsModal;
