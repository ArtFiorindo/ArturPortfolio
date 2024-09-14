import React from 'react';
import { FaJava, FaReact, FaCss3Alt, FaHtml5, FaPython } from 'react-icons/fa';  
import { SiSpringboot, SiTailwindcss, SiMicrosoftazure, SiOracle, SiMysql } from 'react-icons/si';  

interface Skill {
  name: string;
  icon: JSX.Element;
}

const Skills: React.FC = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const skills: Skill[] = [
    { name: 'Java', icon: <FaJava size={20} /> }, 
    { name: 'Spring Boot', icon: <SiSpringboot size={20} /> },
    { name: 'SQL', icon: <SiMysql size={20} /> },
    { name: 'Banco Oracle', icon: <SiOracle size={20} /> },
    { name: 'HTML', icon: <FaHtml5 size={20} /> },
    { name: 'CSS', icon: <FaCss3Alt size={20} /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={20} /> },
    { name: 'React', icon: <FaReact size={20} /> },
    { name: 'Python', icon: <FaPython size={20} /> },
    { name: 'Azure', icon: <SiMicrosoftazure size={20} /> },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Minhas Habilidades</h2>
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            style={{
              ...styles.card,
              transition: 'all 0.3s ease',
              transform: isHovering ? styles.cardHover.transform : 'none',
              boxShadow: isHovering ? styles.cardHover.boxShadow : 'none',
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {skill.icon}
            <h3 style={styles.skillName}>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: '#011229',
    color: '#ccd6f6',
    padding: '60px 20px',
    textAlign: 'center' as 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#97bbdd',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '10px',
    justifyItems: 'center',
  },
  card: {
    backgroundColor: '#112240',
    width: '100px',
    height: '80px',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  skillName: {
    marginTop: '4px',
    fontSize: '0.7rem',
    color: '#ccd6f6',
  },
};

export default Skills;
