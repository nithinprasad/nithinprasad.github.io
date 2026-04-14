import React from 'react';

const GoToTop = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="gototop js-top">
      <a href="#top" onClick={handleClick} className="js-gotop"><i className="icon-arrow-up22"></i></a>
    </div>
  );
};

export default GoToTop;
