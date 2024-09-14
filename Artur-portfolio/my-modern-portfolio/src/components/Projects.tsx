import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    { 
      name: 'Sistema de Biblioteca', 
      description: 'Gerenciamento de livros e reservas.', 
      repo: 'https://github.com/ArtFiorindo/ApiSistemaBiblioteca' 
    },
    { 
      name: 'Reserva de Salas', 
      description: 'API para reservas de salas de reunião.', 
      repo: 'https://github.com/seu-username/reserva-de-salas' // Link para o repositório
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projetos</h2>
      <div style={styles.container}>
        {projects.map((project, index) => (
          <div key={index} style={styles.project}>
            <h3 style={styles.projectName}>{project.name}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.button}
            >
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#0a192f',
    color: '#ccd6f6',
    padding: '100px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#97bbdd',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  project: {
    backgroundColor: '#203252',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectName: {
    fontSize: '1.5rem',
    color: '#a4a2da',
  },
  projectDescription: {
    fontSize: '1rem',
    color: '#8892b0',
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#97bbdd',
    color: '#0a192f',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#a4a2da',
  },
};

export default Projects;
