import './DAppPage.css';

function DAppPage() {
  return (
    <div className="dapp-page">
      <div className="dapp-placeholder">
        <div className="dapp-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </div>
        <h2>DApp Browser</h2>
        <p>Explore decentralized applications</p>
        <span className="dapp-badge">Coming Soon</span>
      </div>
    </div>
  );
}

export default DAppPage;
