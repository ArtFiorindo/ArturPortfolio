import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Artur Lopes Fiorindo</h2>
        <p style={styles.text}>
          Olá, sou Artur Fiorindo, estudante de Análise e Desenvolvimento de Sistemas, em busca da minha primeira experiência profissional. 
          Tenho uma paixão tanto por front-end quanto por back-end, e tenho trabalhado em diversos projetos acadêmicos que incluem colaborações com 
          a SalesForce e a NotreDame Intermédica. Estou entusiasmado para aplicar meus conhecimentos e habilidades em um ambiente profissional e 
          contribuir para projetos inovadores.
        </p>

        {/* Links do LinkedIn e GitHub */}
        <div style={styles.socialLinks}>
          <a 
            href="https://www.linkedin.com/in/artur-fiorindo-0404b2288/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
            onMouseOver={(e) => {
                e.currentTarget.style.color = '#4d8cc7';
                e.currentTarget.style.transform = 'scale(1.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#ccd6f6';
                e.currentTarget.style.transform = 'scale(1)';
              }}
          >
            <FaLinkedin size={30} />
          </a>
          <a 
            href="https://github.com/ArtFiorindo" 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.link}
            onMouseOver={(e) => {
                e.currentTarget.style.color = '#9f52c8';
                e.currentTarget.style.transform = 'scale(1.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#ccd6f6';
                e.currentTarget.style.transform = 'scale(1)';
              }}
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#011229',
    color: '#ccd6f6',
    padding: '100px 20px',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#97bbdd',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  
};

export default About;
