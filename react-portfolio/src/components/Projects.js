import React from 'react';

const Projects = () => {
  const professionalProjects = [
    {
      role: 'Technical Lead',
      title: 'Expedia WLT (Worldwide Loyalty & Traveler)',
      company: 'IBS Software (Client: Expedia Group)',
      technology: 'Kotlin, GraphQL, Java, React, Spring Boot, Microservices, OAuth2, Oracle, Docker, Kubernetes, CI/CD',
      responsibilities: [
        'Leading backend development using Kotlin and GraphQL for Expedia\'s Worldwide Loyalty and Traveler platform',
        'Designing microservices architecture with Kotlin backend, React frontend, and shared library components',
        'Building GraphQL APIs with schema review process for loyalty tier mapping and traveler profile management',
        'Implementing type-safe communication between backend (Kotlin/GraphQL) and frontend (React) services',
        'Establishing GraphQL schema governance and review workflows for API consistency',
        'Working on business logic for loyalty rewards calculation and tier upgrade rules',
        'Implementing OAuth2 authentication and authorization across distributed services'
      ]
    },
    {
      role: 'Technical Lead',
      title: 'Conversa (TCS Chatbot)',
      company: 'Tata Consultancy Services',
      technology: 'Java 11, REST, JBoss, MicroServices, Spring Boot',
      responsibilities: [
        'Migration of framework from Java 8 to Java 11',
        'Designing and developing plugins for chatbot functionality',
        'Designing security, authentication and authorization layer to expose services to third parties',
        'Worked closely with business for requirement finalization'
      ]
    },
    {
      role: 'Technical Lead',
      title: 'Luminor Bank',
      company: 'Luminor Bank Estonia - TCS Consultant',
      technology: 'Java 8, OpenAM, REST, JBoss',
      responsibilities: [
        'Worked closely with client for requirement finalization',
        'Worked closely with L2 team for production support and analysis',
        'Designing and integrating application with OAuth provider',
        'Integration with third party providers for security using web services',
        'Application containerization and performance tuning'
      ]
    },
    {
      role: 'Senior Java Developer',
      title: 'Bank South Pacific',
      company: 'Tata Consultancy Services',
      technology: 'JDBC, Servlets, JSP, Java 7, SOAP, Oracle WebLogic',
      responsibilities: [
        'Analysis, Design, Coding, and Testing of Application',
        'Developed entire admin module and banking transactions',
        'Integration with third party providers for security',
        'Deploying and managing application in server'
      ]
    },
    {
      role: 'Java Developer',
      title: 'Mercantile Bank Limited',
      company: 'Tata Consultancy Services',
      technology: 'JDBC, Servlets, JSP, Java 7, SOAP, IBM WebSphere',
      responsibilities: [
        'Analysis, Design, Coding, and Testing of Application',
        'Developed entire admin module and banking transactions',
        'Integration with third party providers for security',
        'Deploying and managing application in server'
      ]
    }
  ];

  const sideProjects = [
    {
      title: 'Kombanz Wedding Planners',
      url: 'https://kombanzweddingplanners.com/',
      technology: 'React, Bootstrap, Responsive Design, Firebase Hosting',
      description: 'Full-featured wedding planning website with modern UI/UX design. Built responsive web application for wedding planning services showcasing portfolio, services, and contact management.',
      highlights: [
        'Responsive single-page application with smooth scrolling',
        'Modern UI with Bootstrap framework',
        'Optimized for mobile and desktop viewing',
        'Integrated contact forms and service showcase'
      ]
    },
    {
      title: 'PRR Trans Global',
      url: 'https://www.prrtransglobal.com/',
      technology: 'React, Bootstrap, Font Awesome, Responsive Design',
      description: 'Corporate website for logistics and transportation company. Developed professional business website with service catalog, company information, and client communication features.',
      highlights: [
        'Professional corporate design and branding',
        'Service catalog and company portfolio',
        'SEO-optimized content structure',
        'Responsive design for all devices'
      ]
    },
    {
      title: 'Football Heroes',
      url: 'https://footballheroes.nithinprasad.com/',
      technology: 'React, JavaScript, REST APIs, Responsive UI',
      description: 'Interactive football-themed web application. Built engaging web application for football enthusiasts with dynamic content and interactive features.',
      highlights: [
        'Interactive user interface',
        'Dynamic content rendering',
        'Responsive design patterns',
        'Hosted on custom subdomain'
      ]
    }
  ];

  return (
    <div id="fh5co-blog">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Projects</h2>
            <p>Professional Experience Highlights</p>
          </div>
        </div>
        <div className="row">
          {professionalProjects.map((project, index) => (
            <div key={index} className="col-md-6 animate-box" style={{marginBottom: '30px'}}>
              <div className="fh5co-blog" style={{
                padding: '0',
                borderLeft: '3px solid #FF9000',
                backgroundColor: '#f8f8f8',
                height: '100%',
                minHeight: '400px'
              }}>
                <div className="blog-text" style={{padding: '25px'}}>
                  <div style={{marginBottom: '18px'}}>
                    <span className="posted_on">{project.role}</span>
                    <h3 style={{marginTop: '10px', marginBottom: '8px', fontSize: '20px'}}>
                      {project.title}
                    </h3>
                    <p style={{marginBottom: '5px', fontSize: '13px', color: '#999'}}>
                      <i className="icon-briefcase" style={{marginRight: '5px'}}></i>
                      {project.company}
                    </p>
                    <p style={{marginBottom: '18px', fontSize: '13px', color: '#7f7f7f', lineHeight: '1.5'}}>
                      <i className="icon-code" style={{marginRight: '5px'}}></i>
                      {project.technology}
                    </p>
                  </div>
                  <div>
                    <h4 style={{marginBottom: '12px', color: '#333', fontSize: '15px'}}>Key Responsibilities:</h4>
                    <ul style={{marginLeft: '0', paddingLeft: '20px', lineHeight: '1.7', fontSize: '14px'}}>
                      {project.responsibilities.map((resp, idx) => (
                        <li key={idx} style={{marginBottom: '6px', color: '#666'}}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row animate-box" style={{marginTop: '60px'}}>
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Side Projects</h2>
            <p>Personal Development & Web Applications</p>
          </div>
        </div>
        <div className="row">
          {sideProjects.map((project, index) => (
            <div key={index} className="col-md-4 animate-box" style={{marginBottom: '30px'}}>
              <div className="fh5co-blog" style={{
                padding: '0',
                borderLeft: '3px solid #2C98F0',
                backgroundColor: '#f8f8f8',
                height: '100%',
                minHeight: '350px'
              }}>
                <div className="blog-text" style={{padding: '25px'}}>
                  <div style={{marginBottom: '18px'}}>
                    <span className="posted_on" style={{backgroundColor: '#2C98F0'}}>Side Project</span>
                    <h3 style={{marginTop: '10px', marginBottom: '8px', fontSize: '20px'}}>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" style={{color: '#333', textDecoration: 'none'}}>
                        {project.title}
                      </a>
                    </h3>
                    <p style={{marginBottom: '5px', fontSize: '13px', color: '#7f7f7f', lineHeight: '1.5'}}>
                      <i className="icon-code" style={{marginRight: '5px'}}></i>
                      {project.technology}
                    </p>
                  </div>
                  <div>
                    <p style={{marginBottom: '12px', fontSize: '14px', color: '#666', lineHeight: '1.6'}}>
                      {project.description}
                    </p>
                    <ul style={{marginLeft: '0', paddingLeft: '20px', lineHeight: '1.7', fontSize: '13px'}}>
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} style={{marginBottom: '6px', color: '#666'}}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
