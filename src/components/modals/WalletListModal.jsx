import { useState } from 'react';
import './Modals.css';
import { wallets } from '../../data/wallets';
import closeIcon from '../../assets/icons/actions/close.svg';
import copyIcon from '../../assets/icons/actions/copy.svg';
import walletOrb from '../../assets/images/illustrations/wallet-orb.png';
import addIcon from '../../assets/icons/actions/add.svg';
import deleteIcon from '../../assets/icons/actions/delete.svg';

function WalletListModal({ onSelect, onClose }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (e, wallet) => {
    e.stopPropagation();
    navigator.clipboard.writeText(wallet.fullAddress);
    setCopiedId(wallet.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="modal-sheet modal-wallet-list" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <img src={closeIcon} alt="" width="11.72" height="11.72" />
        </button>
        <h3 className="modal-title">My Wallets</h3>
        <button className="modal-close" aria-label="Add wallet">
          <img src={addIcon} alt="" width="11.72" height="11.72" />
        </button>
      </div>
      <p className="modal-subtitle">You can "Add" and "Edit" wallets</p>

      <div className="wallet-list">
        {wallets.map((wallet) => {
          // Split balance into whole number and decimal parts
          const balanceStr = wallet.balance;
          const decimalIndex = balanceStr.lastIndexOf('.');
          const hasDecimal = decimalIndex !== -1;
          const wholePart = hasDecimal ? balanceStr.substring(0, decimalIndex) : balanceStr;
          const decimalPart = hasDecimal ? balanceStr.substring(decimalIndex) : '';

          return (
            <button
              key={wallet.id}
              className="wallet-row"
              onClick={() => onSelect(wallet)}
            >
              <div className="wallet-row-left">
                <img src={deleteIcon} alt="Delete" className="wallet-delete-icon" />
                <img src={walletOrb} alt="" className="wallet-row-orb" />
                <div className="wallet-row-info">
                  <span className="wallet-row-name">{wallet.name}</span>
                  <div className="wallet-row-addr">
                    <span>{wallet.address}</span>
                    <button
                      className="wallet-row-copy"
                      onClick={(e) => handleCopy(e, wallet)}
                      aria-label="Copy address"
                    >
                      <img src={copyIcon} alt="Copy" width="12" height="12" />
                    </button>
                    {copiedId === wallet.id && <span className="copied-toast">Copied!</span>}
                  </div>
                </div>
              </div>
              <span className="wallet-row-balance">
                {wholePart}
                {hasDecimal && <span className="balance-decimal">{decimalPart}</span>}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default WalletListModal;
