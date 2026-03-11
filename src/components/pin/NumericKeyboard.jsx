function NumericKeyboard({ onKeyPress }) {
  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['', '0', 'backspace'],
  ];

  return (
    <div className="num-keyboard">
      {keys.map((row, ri) => (
        <div key={ri} className="num-row">
          {row.map((key, ki) => {
            if (key === '') {
              return <div key={ki} className="num-key-spacer" />;
            }

            if (key === 'backspace') {
              return (
                <button
                  key={ki}
                  className="num-key"
                  onClick={() => onKeyPress('backspace')}
                  aria-label="Backspace"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 002-2V6a2 2 0 00-2-2z" />
                    <line x1="18" y1="9" x2="12" y2="15" />
                    <line x1="12" y1="9" x2="18" y2="15" />
                  </svg>
                </button>
              );
            }

            return (
              <button
                key={ki}
                className="num-key"
                onClick={() => onKeyPress(key)}
              >
                {key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default NumericKeyboard;
