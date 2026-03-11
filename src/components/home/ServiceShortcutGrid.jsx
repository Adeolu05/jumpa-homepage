import { useState } from 'react';
import dataIcon from '../../assets/icons/services/data.svg';
import groupIcon from '../../assets/icons/services/group.svg';
import airtimeIcon from '../../assets/icons/services/airtime.svg';
import moreIcon from '../../assets/icons/services/more.svg';
import predictionIcon from '../../assets/icons/services/prediction.svg';
import billsIcon from '../../assets/icons/services/bills.svg';

const homeServices = [
  { label: 'Data', icon: dataIcon },
  { label: 'Group', icon: groupIcon },
  { label: 'Airtime', icon: airtimeIcon },
  { label: 'More', icon: moreIcon, isMore: true },
];

const allServices = [
  { label: 'Data', icon: dataIcon },
  { label: 'Group', icon: groupIcon },
  { label: 'Airtime', icon: airtimeIcon },
  { label: 'Prediction', icon: predictionIcon },
  { label: 'Bills', icon: billsIcon },
];

function ServiceShortcutGrid() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <div className="service-grid">
        {homeServices.map((s) => (
          <button
            key={s.label}
            className="service-item"
            onClick={s.isMore ? () => setShowAll(true) : undefined}
          >
            <img src={s.icon} alt="" className="service-icon" />
            <span className="service-label">{s.label}</span>
          </button>
        ))}
      </div>

      {showAll && (
        <div className="services-overlay" onClick={() => setShowAll(false)}>
          <div className="services-screen" onClick={(e) => e.stopPropagation()}>
            <div className="services-screen-header">
              <h3>All Services</h3>
              <button className="services-close" onClick={() => setShowAll(false)}>✕</button>
            </div>
            <div className="services-screen-grid">
              {allServices.map((s) => (
                <button key={s.label} className="service-item">
                  <img src={s.icon} alt="" className="service-icon" />
                  <span className="service-label">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ServiceShortcutGrid;
