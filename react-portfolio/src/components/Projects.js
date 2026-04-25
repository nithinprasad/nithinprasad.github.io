import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const professionalProjects = [
    {
      role: 'Senior Software Engineer',
      title: 'Expedia WLT (Worldwide Loyalty & Traveler)',
      company: 'IBS Software',
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
      url: 'https://kombanzweddingplanners.com/'
    },
    {
      title: 'PRR Trans Global',
      url: 'https://www.prrtransglobal.com/'
    },
    {
      title: 'Football Heroes',
      url: 'https://footballheroes.nithinprasad.com/'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
            <div key={index} className="col-md-4 col-sm-6 animate-box" style={{marginBottom: '30px'}}>
              <div
                className="fh5co-blog"
                onClick={() => openModal(project)}
                style={{
                  padding: '0',
                  borderLeft: '4px solid #FF9000',
                  backgroundColor: '#ffffff',
                  height: '280px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(255,144,0,0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
                }}
              >
                <div className="blog-text" style={{padding: '25px', display: 'flex', flexDirection: 'column', height: '100%'}}>
                  <span className="posted_on" style={{fontSize: '12px'}}>{project.role}</span>
                  <h3 style={{
                    marginTop: '10px',
                    marginBottom: '12px',
                    fontSize: '19px',
                    fontWeight: 'bold',
                    lineHeight: '1.3',
                    height: '50px',
                    overflow: 'hidden',
                    color: '#333'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{marginBottom: '8px', fontSize: '13px', color: '#666', fontWeight: '500'}}>
                    <i className="icon-briefcase" style={{marginRight: '5px', color: '#FF9000'}}></i>
                    {project.company}
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#777',
                    lineHeight: '1.5',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    flex: 1
                  }}>
                    <i className="icon-code" style={{marginRight: '5px', color: '#FF9000'}}></i>
                    {project.technology}
                  </p>
                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '10px',
                    borderTop: '1px solid #e0e0e0',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      fontSize: '12px',
                      color: '#FF9000',
                      fontWeight: '600',
                      letterSpacing: '0.5px'
                    }}>
                      ▸ Click to view details
                    </span>
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
                borderLeft: '4px solid #FF9000',
                backgroundColor: '#ffffff',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                borderRadius: '4px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,144,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
              }}
              >
                <div className="blog-text" style={{padding: '25px', width: '100%'}}>
                  <h3 style={{margin: '0', fontSize: '18px', fontWeight: 'bold'}}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" style={{color: '#FF9000', textDecoration: 'none', display: 'flex', alignItems: 'center'}}>
                      {project.title}
                      <i className="icon-external-link" style={{marginLeft: '8px', fontSize: '14px'}}></i>
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#FF9000',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              ×
            </button>
            <div style={{
              borderLeft: '5px solid #FF9000',
              padding: '40px'
            }}>
              <span className="posted_on" style={{fontSize: '13px'}}>{selectedProject.role}</span>
              <h2 style={{
                marginTop: '10px',
                marginBottom: '15px',
                color: '#333',
                fontSize: '28px'
              }}>
                {selectedProject.title}
              </h2>
              <p style={{marginBottom: '10px', fontSize: '15px', color: '#666'}}>
                <i className="icon-briefcase" style={{marginRight: '8px', color: '#FF9000'}}></i>
                <strong>Company:</strong> {selectedProject.company}
              </p>
              <p style={{marginBottom: '25px', fontSize: '14px', color: '#666', lineHeight: '1.8'}}>
                <i className="icon-code" style={{marginRight: '8px', color: '#FF9000'}}></i>
                <strong>Technology Stack:</strong> {selectedProject.technology}
              </p>
              <h3 style={{
                marginBottom: '15px',
                color: '#333',
                fontSize: '20px',
                borderBottom: '2px solid #FF9000',
                paddingBottom: '10px'
              }}>
                Key Responsibilities
              </h3>
              <ul style={{
                marginLeft: '0',
                paddingLeft: '25px',
                lineHeight: '2',
                fontSize: '15px'
              }}>
                {selectedProject.responsibilities.map((resp, idx) => (
                  <li key={idx} style={{marginBottom: '12px', color: '#555'}}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
