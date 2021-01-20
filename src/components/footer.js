import React from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const Footer = () => {
  const footerTextOptions = [
    'Life is amazing. Enjoy it.',
    'Only big goals.',
    'Be good to eachother.',
    'You\'re awesome.',
    'Do whatever makes you happy.'
  ];

  return (
    <section className="footer">
      <p>
        {footerTextOptions[getRandomInt(0, footerTextOptions.length)]}{' '}
      </p>
    </section>
  );
}

export default Footer;
