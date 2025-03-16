import './Header.css';

import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // 100px 이상 스크롤하면 불투명
      } else {
        setIsScrolled(false); // 다시 위로 올라오면 투명
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-left1">
          <img
            width={178.06}
            height={25}
            alt="BootstrapMade"
            src="https://bootstrapmade.com/assets/img/logo.png"
          />
          <div className="header-top-left2">
            <i className="ri-computer-line icon"></i>
            <i className="ri-tablet-line icon"></i>
            <i className="ri-smartphone-line icon"></i>
          </div>
        </div>
        <div className="header-top-middle">
          <i className="ri-arrow-left-s-line icon1"></i>
          <p className="letter1">Arsha</p>
          <i className="ri-arrow-right-s-line icon1"></i>
        </div>
        <div className="header-top-right1">
          <i className="ri-share-box-line icon"></i>
          <div className="header-top-right2">
            <i className="ri-download-2-line icon2"></i>
            <p className="letter2">DOWNLOAD</p>
          </div>
        </div>
      </div>
      <div className={`header-bottom ${isScrolled ? 'scrolled' : ''}`}>
        <h1>ARSHA</h1>
        <div className="header-bottom-right">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>team</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p className="dropdown">Dropdown</p>
          <i className="ri-arrow-down-s-line icon"></i>
          <p>Contact</p>
          <button>Get started</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
