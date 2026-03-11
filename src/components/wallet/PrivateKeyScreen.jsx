import { useState } from 'react';
import './PrivateKey.css';
import backIcon from '../../assets/icons/actions/back.svg';
import copyIcon from '../../assets/icons/actions/copy.svg';
import eyeOpen from '../../assets/icons/actions/eye-open.svg';
import eyeClosed from '../../assets/icons/actions/eye-closed.svg';

function PrivateKeyScreen({ wallet, onDone }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wallet.privateKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* silently fail */
    }
  };

  return (
    <div className="pk-screen">
      <div className="pk-header">
        <button className="pk-back" onClick={onDone} aria-label="Back">
          <img src={backIcon} alt="" width="20" height="20" />
        </button>
        <h2 className="pk-title">Send Money</h2>
        <div style={{ width: 36 }} />
      </div>

      <div className="pk-content">
        <p className="pk-warning">
          Your private key can be used to access all of your funds. Do not share it with anyone
        </p>

        <div className={`pk-key-box ${revealed ? 'revealed' : 'blurred'}`}>
          <span className="pk-key-text">
            {revealed ? wallet.privateKey : wallet.privateKey}
          </span>
          <button
            className="pk-eye-btn"
            onClick={() => setRevealed(!revealed)}
            aria-label={revealed ? 'Hide key' : 'Reveal key'}
          >
            <img
              src={revealed ? eyeOpen : eyeClosed}
              alt=""
              width="20"
              height="20"
            />
          </button>
        </div>

        <button className="pk-copy-btn" onClick={handleCopy}>
          <img src={copyIcon} alt="" width="16" height="16" />
          <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
        </button>
      </div>

      <button className="pk-done-btn" onClick={onDone}>
        Done
      </button>
    </div>
  );
}

export default PrivateKeyScreen;
