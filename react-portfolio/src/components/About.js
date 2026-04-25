import React from 'react';

const About = () => {
  // Calculate total experience from June 2015 (TCS start date)
  const calculateTotalExperience = () => {
    const startDate = new Date(2015, 5, 1); // June 2015
    const currentDate = new Date();
    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();
    const totalYears = months < 0 ? years - 1 : years;
    return `${totalYears}+`;
  };

  return (
    <div id="fh5co-about" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li><span className="first-block">Full Name:</span><span className="second-block">Nithin Prasad</span></li>
              <li><span className="first-block">Phone:</span><span className="second-block">+91 9567320219</span></li>
              <li><span className="first-block">Email:</span><span className="second-block">nithinprasad549@yahoo.com</span></li>
              <li><span className="first-block">Website:</span><span className="second-block">thenithinprasad.com</span></li>
              <li><span className="first-block">Address:</span><span className="second-block">Padinjattedathu House , <br /> Pandanadu West Po , Chengannur,Alappuzha 689506</span></li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>Hello There!</h2>
            <p>Enthusiastic and reliable Java Developer with expertise in building large-scale distributed systems. {calculateTotalExperience()} years of industry experience in banking, travel, and e-commerce domains. Currently leading backend development at Expedia Group, with strong background in microservices architecture, Spring Boot, and cloud technologies.</p>
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
  );
};

export default About;
