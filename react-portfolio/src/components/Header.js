import React from 'react';

const Header = () => {
  return (
    <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" style={{backgroundImage: 'url(images/nithin.jpeg)'}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                <div className="profile-thumb" style={{background: 'url(v2/assets/img/nithin.jpg)'}}></div>
                <h1><span>Nithin Prasad</span></h1>
                <h3><span>Java Developer / Trying to be Full stack</span></h3>
                <div>
                  <ul className="fh5co-social-icons">
                    <li><a href="https://twitter.com/NITHINPRASAD2"><i className="icon-twitter2"></i></a></li>
                    <li><a href="https://www.facebook.com/nithin.chiku"><i className="icon-facebook2"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/nithin-prasad/"><i className="icon-linkedin2"></i></a></li>
                    <li><a href="https://github.com/nithinprasad/"><i className="icon-github2"></i></a></li>
                    <li><a href="https://www.instagram.com/nithin.chikku/"><i className="icon-instagram2"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
