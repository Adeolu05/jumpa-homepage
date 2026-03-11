import './StatusBar.css';

function StatusBar() {
  return (
    <div className="status-bar">
      <span className="status-bar-time">9:41</span>
      <div className="status-bar-icons">
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><rect x="0" y="3" width="3" height="9" rx="1" fill="white"/><rect x="4.5" y="2" width="3" height="10" rx="1" fill="white"/><rect x="9" y="0.5" width="3" height="11.5" rx="1" fill="white"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="white"/></svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 2.4C10.32 2.4 12.4 3.36 13.92 4.92L15.36 3.48C13.44 1.56 10.88 0.36 8 0.36C5.12 0.36 2.56 1.56 0.64 3.48L2.08 4.92C3.6 3.36 5.68 2.4 8 2.4Z" fill="white"/><path d="M4.56 7.44L8 10.92L11.44 7.44C10.48 6.48 9.28 5.88 8 5.88C6.72 5.88 5.52 6.48 4.56 7.44Z" fill="white"/></svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="white" strokeOpacity="0.35"/><rect x="2" y="2" width="18" height="8" rx="2" fill="white"/><path d="M23 4.5V8C23.83 7.66 24.33 6.87 24.33 6C24.33 5.13 23.83 4.34 23 4V4.5Z" fill="white" fillOpacity="0.4"/></svg>
      </div>
    </div>
  );
}

export default StatusBar;
