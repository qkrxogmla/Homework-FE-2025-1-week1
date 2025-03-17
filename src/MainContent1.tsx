import './MainContent1.css';

import { CSSProperties, useEffect, useState } from 'react';

const images = [
  'https://bootstrapmade.com/content/demo/Arsha/assets/img/clients/clients-1.webp',
  'https://bootstrapmade.com/content/demo/Arsha/assets/img/clients/clients-2.webp',
  'https://bootstrapmade.com/content/demo/Arsha/assets/img/clients/clients-3.webp',
  'https://bootstrapmade.com/content/demo/Arsha/assets/img/clients/clients-4.webp',
  'https://bootstrapmade.com/content/demo/Arsha/assets/img/clients/clients-5.webp',
  'https://bootstrapmade.com/content/demo/Arsha/assets/img/clients/clients-6.webp',
  'https://bootstrapmade.com/content/demo/Arsha/assets/img/clients/clients-7.webp',
  'https://bootstrapmade.com/content/demo/Arsha/assets/img/clients/clients-8.webp',
];

interface InfiniteLoopPropType {
  children: React.ReactNode;
  style?: CSSProperties;
}

const InfiniteLoopSlider = ({ children, style }: InfiniteLoopPropType) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % totalSlides); // 무한 루프 개선
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="InfiniteLoop__slider">
      <div
        className="InfiniteLoop__inner"
        style={
          {
            ...style,
            '--slide-index': slideIndex,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
};

function MainContent1() {
  return (
    <main className="main">
      <div className="content1">
        <div className="content1-top">
          <p className="content1-top-title">
            Better Solutions For Your Business
          </p>
          <p className="content1-top-explain">
            We are a team of talented designers making websites with Bootstrap
          </p>
          <div className="content1-buttom">
            <button className="content1-button1">Get started</button>
            <div className="content1-button2">
              <button className="content1-video">Watch Video</button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="content1-img"
            src="https://bootstrapmade.com/content/demo/Arsha/assets/img/hero-img.png"
            alt="Hero Image"
            style={{ maxWidth: '95%' }}
          />
        </div>
      </div>
      <div className="content1-banner-out">
        <div className="content1-banner">
          <InfiniteLoopSlider
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            {Array(13)
              .fill(images)
              .flat(1) // 🔹 배열을 한 단계만 평탄화하여 `string[]` 유지
              .map((src, index) => (
                <img
                  key={index}
                  src={src as string} // 🔹 `as string`을 사용하여 타입 안정성 보장
                  alt="carousel"
                  className="w-1/6 h-40 object-cover"
                  style={{
                    flexShrink: 0,
                    backgroundColor: '#f5f6f8',
                    maxWidth: '100%',
                    height: 'auto',
                    padding: '10px 50px',
                    display: 'block',
                  }}
                />
              ))}
          </InfiniteLoopSlider>
        </div>
      </div>
    </main>
  );
}

export default MainContent1;
