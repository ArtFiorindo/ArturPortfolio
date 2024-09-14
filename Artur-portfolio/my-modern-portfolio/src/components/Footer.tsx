import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 Artur Fiorindo</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0a192f',
    padding: '20px',
    textAlign: 'center' as 'center',
  },
  text: {
    color: '#97bbdd',
    fontSize: '14px',
  },
};

export default Footer;
