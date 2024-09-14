import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <a href="mailto: alopesfiorindo@gmail.com" style={styles.link}>Contato</a>
        <a href="#projects" style={styles.link}>Projetos</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#011229',
    padding: '20px',
    position: 'fixed' as 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    color: '#97bbdd',
    margin: '0 20px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Header;
