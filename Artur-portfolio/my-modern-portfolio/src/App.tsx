import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';  
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div style={styles.app}>
      <Header />
      <main>
        <About />
        <Skills />  
        <Projects />
        
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    backgroundColor: '#212429',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    color: '#18254e',
  },
};

export default App;
