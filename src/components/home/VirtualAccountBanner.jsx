import virtualImg from '../../assets/images/banners/enable-virtual-account.svg';

function VirtualAccountBanner({ onClick }) {
  return (
    <div className="banner-card" onClick={onClick}>
      <img src={virtualImg} alt="Enable virtual account" className="banner-img" />
    </div>
  );
}

export default VirtualAccountBanner;
