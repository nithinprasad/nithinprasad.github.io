import React from 'react';

const Projects = () => {
  const projects = [
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
          {projects.map((project, index) => (
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
      </div>
    </div>
  );
};

export default Projects;
