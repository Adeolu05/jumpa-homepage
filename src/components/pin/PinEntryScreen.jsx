import { useState, useCallback, useEffect } from 'react';
import './Pin.css';
import NumericKeyboard from './NumericKeyboard';
import closeIcon from '../../assets/icons/actions/close.svg';

const CORRECT_PIN = '1234';

function PinEntryScreen({ onSuccess, onClose }) {
  const [pin, setPin] = useState('');
  const [status, setStatus] = useState('idle'); // idle | typing | error | success
  const [shake, setShake] = useState(false);

  const handleKeyPress = useCallback((key) => {
    if (status === 'success') return;

    if (key === 'backspace') {
      setPin((prev) => prev.slice(0, -1));
      setStatus('typing');
      return;
    }

    if (pin.length >= 4) return;

    const newPin = pin + key;
    setPin(newPin);
    setStatus('typing');

    if (newPin.length === 4) {
      // Validate PIN
      setTimeout(() => {
        if (newPin === CORRECT_PIN) {
          setStatus('success');
          setTimeout(() => {
            onSuccess();
          }, 600);
        } else {
          setStatus('error');
          setShake(true);
          setTimeout(() => {
            setShake(false);
            setPin('');
            setStatus('idle');
          }, 800);
        }
      }, 300);
    }
  }, [pin, status, onSuccess]);

  const getDotClass = (index) => {
    const filled = index < pin.length;
    if (status === 'error') return 'pin-dot error';
    if (status === 'success') return 'pin-dot success';
    if (filled) return 'pin-dot filled';
    return 'pin-dot';
  };

  return (
    <div className="pin-screen">
      <div className="pin-header">
        <button className="pin-close" onClick={onClose} aria-label="Close">
          <img src={closeIcon} alt="" width="20" height="20" />
        </button>
      </div>

      <div className="pin-content">
        <h2 className="pin-title">Enter your pin</h2>
        <div className={`pin-dots ${shake ? 'shake' : ''}`}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={getDotClass(i)} />
          ))}
        </div>
      </div>

      <div className="pin-hint">
        <span>Jumpa Secure Payment Request</span>
      </div>

      <NumericKeyboard onKeyPress={handleKeyPress} />
    </div>
  );
}

export default PinEntryScreen;
