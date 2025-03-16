import './MainContent3.css';

import { useState } from 'react';

function MainContent3() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAnswer = (id: number) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(id) // 이미 열려 있다면 닫기 (제거)
          ? prevIndexes.filter((index) => index !== id)
          : [...prevIndexes, id] // 열려 있지 않다면 추가
    );
  };

  const faqs = [
    {
      id: 1,
      question: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        ' Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      id: 2,
      question:
        'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
      answer:
        ' Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
    },
    {
      id: 3,
      question: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
      answer:
        ' Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
    },
  ];

  return (
    <div className="content3">
      <div className="content3-left">
        <span className="content3-left-title">
          Eum ipsam laborum deleniti
          <strong> velit pariatur architecto aut nihil</strong>
        </span>
        <span className="content3-left-explain">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit
        </span>
        {faqs.map((faq) => {
          const isActive = openIndexes.includes(faq.id);

          return (
            <div
              key={faq.id}
              className={`content3-right-bottom ${isActive ? 'active' : ''}`}
              onClick={() => toggleAnswer(faq.id)}
            >
              <div className="content3-toggle-up">
                <div>
                  <span className={`num ${isActive ? 'active' : ''}`}>
                    {String(faq.id).padStart(2, '0')}&nbsp;
                  </span>
                  <span
                    className={`content3-right-bottom-q ${isActive ? 'active' : ''}`}
                  >
                    {faq.question}
                  </span>
                </div>
                <i
                  className={`ri-arrow-${isActive ? 'down' : 'right'}-s-line ${isActive ? 'active' : ''}`}
                ></i>
              </div>
              {isActive && <p className="answer">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
      <img
        src="https://bootstrapmade.com/content/demo/Arsha/assets/img/why-us.png"
        className="img-fluid aos-init aos-animate"
        alt=""
      />
    </div>
  );
}

export default MainContent3;
