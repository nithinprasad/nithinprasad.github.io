import React from 'react';

const Resume = () => {
  // Calculate experience dynamically from June 2025
  const calculateExperience = () => {
    const startDate = new Date(2025, 5, 1); // June 2025 (month is 0-indexed)
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - startDate.getMonth();

    const totalMonths = (yearsDiff * 12) + monthsDiff;
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0 && months === 0) {
      return 'June 2025 - Present';
    } else if (years === 0) {
      return `June 2025 - Present (${months} month${months > 1 ? 's' : ''})`;
    } else if (months === 0) {
      return `June 2025 - Present (${years} year${years > 1 ? 's' : ''})`;
    } else {
      return `June 2025 - Present (${years} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''})`;
    }
  };

  return (
    <div id="fh5co-resume" className="fh5co-bg-color">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>My Resume</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <li className="timeline-heading text-center animate-box">
                <div><h3>Work Experience</h3></div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Technical Lead</h3>
                    <span className="company">IBS Software (Client: Expedia Group) - {calculateExperience()}</span>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Onsite Technical Lead</h3>
                    <span className="company">Luminor Bank Estonia - TCS Consultant - 2021 - 2025</span>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Technical Lead</h3>
                    <span className="company">TCS - 2018 - 2021</span>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge"><i className="icon-suitcase"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Java Developer</h3>
                    <span className="company">TCS - 2015 - 2018</span>
                  </div>
                </div>
              </li>

              <br />
              <li className="timeline-heading text-center animate-box">
                <div><h3>Education</h3></div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Bachelors Degree</h3>
                    <span className="company">CUSAT - 2011 - 2015</span>
                  </div>
                  <div className="timeline-body">
                    <p>Completed Bachelor of Technology in Computer Science And Enginnering at College of Engineering Chengannur</p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Higher Secondary</h3>
                    <span className="company">Kerala State - 2009 - 2011</span>
                  </div>
                  <div className="timeline-body">
                    <p>Completed Higer Secondary in Computer Science at DBHSS Parumala</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge"><i className="icon-graduation-cap"></i></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">SSLC</h3>
                    <span className="company">Kerala State - 2008</span>
                  </div>
                  <div className="timeline-body">
                    <p>Completed SSLC  at DBHSS Parumala</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
