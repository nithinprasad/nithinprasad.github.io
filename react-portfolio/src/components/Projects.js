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
      url: 'https://kombanzweddingplanners.com/',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: '#f093fb'
    },
    {
      title: 'PRR Trans Global',
      url: 'https://www.prrtransglobal.com/',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: '#4facfe'
    },
    {
      title: 'Football Heroes',
      url: 'https://footballheroes.nithinprasad.com/',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: '#43e97b'
    },
    {
      title: 'Kadavil Associates',
      url: 'https://kadavil-associates.web.app/',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: '#fa709a'
    },
    {
      title: 'Meadows FC Alappuzha',
      url: 'https://meadowsfcalappuzha.web.app/',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      color: '#30cfd0'
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
                  height: '300px',
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
                    fontSize: '17px',
                    fontWeight: 'bold',
                    lineHeight: '1.4',
                    minHeight: '48px',
                    maxHeight: '72px',
                    overflow: 'hidden',
                    color: '#333',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    wordBreak: 'break-word'
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
              <div
                className="fh5co-blog"
                style={{
                  padding: '0',
                  background: project.gradient,
                  height: '200px',
                  borderRadius: '8px',
                  boxShadow: `0 4px 15px ${project.color}40`,
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 12px 30px ${project.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 15px ${project.color}40`;
                }}
              >
                {/* Dark overlay for better text contrast */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
                  zIndex: 0
                }}></div>

                {/* Decorative element */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  zIndex: 0
                }}></div>

                <div style={{
                  padding: '30px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '15px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}>
                      <i className="icon-code" style={{fontSize: '24px', color: '#fff', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'}}></i>
                    </div>
                    <h3 style={{
                      margin: '0',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#fff',
                      lineHeight: '1.3',
                      marginBottom: '10px',
                      textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                    }}>
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      background: '#fff',
                      color: '#333',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '14px',
                      alignSelf: 'flex-start',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      border: '2px solid rgba(255, 255, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                      e.currentTarget.style.transform = 'scale(1.08)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    Open Project
                    <i className="icon-external-link" style={{fontSize: '12px'}}></i>
                  </a>
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
