import { useState, useEffect } from 'react';
import SmokeyCursor from './components/lightswind/smokey-cursor';

const projects = [
  {
    name: 'RoServers',
    url: 'https://github.com/CalebMulugeta-ui/RoServers',
    stack: 'JavaScript, Manifest V3, Vercel',
    description: 'A Chrome extension that lets Roblox players filter servers by region and ping, used by 1,000+ players.',
  },
  {
    name: 'PurePath',
    url: 'https://github.com/CalebMulugeta-ui/PurePath',
    stack: 'Python, YellowCake/Gemini API, Streamlit',
    description: 'A truth checker for corporate sustainability claims.',
  },
  {
    name: 'ReallyConnect',
    url: 'https://github.com/GustavoBelaunde2004/colorstackwinterhack2025-ReallyConnect',
    stack: 'Python, FastAPI, Supabase',
    description: 'A mentorship platform that replaces traditional cold DMs.',
  },
  {
    name: 'Brain Tumor Classifier',
    url: 'https://github.com/CalebMulugeta-ui/Brain-Tumor-Classifier',
    stack: 'Python, PyTorch, TensorFlow, TorchVision',
    description: 'A convolutional neural network classifying MRI brain images into four tumor types.',
  },
  {
    name: 'Ghost Hunter',
    url: 'https://github.com/CalebMulugeta-ui/GhostHunter',
    stack: 'C, Linux',
    description: 'A C-based ghost hunting game built on a multithreaded simulation.',
  },
];

function getInitialTheme(): 'light' | 'dark' {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  if (savedTheme) {
    return savedTheme;
  }
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <SmokeyCursor />
      <div className="container">
        <header>
          <a href="#" className="name">Caleb M.</a>
          <div className="social-links">
            <a href="https://github.com/CalebMulugeta-ui" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="github-icon">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/calebmulugeta/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="linkedin-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:calebmulugeta75@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <button id="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
              <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
              </svg>
              <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            </button>
          </div>
        </header>

        <main>
          <section className="section">
            <h2 className="section-title">Currently</h2>
            <ul className="list">
              <li className="item">
                <span className="branch">&#x21B3;</span>CS at <img src="/images/carleton.png" alt="" className="inline-logo" /><span className="org">Carleton University</span>
              </li>
              <li className="item">
                <span className="branch">&#x21B3;</span>Software Engineer Intern at <img src="/images/ericsson.jpg" alt="" className="inline-logo" /><span className="org">Ericsson</span>
              </li>
              <li className="item">
                <span className="branch">&#x21B3;</span>Outreach Chair at <img src="/images/colorstack.png" alt="" className="inline-logo" /><span className="org">ColorStack-CU</span>
              </li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Previously</h2>
            <ul className="list">
              <li className="item">
                <span className="branch">&#x21B3;</span>Software Engineer Intern at <img src="/images/parallel.png" alt="" className="inline-logo" /><span className="org">Parallel</span>
              </li>
              <li className="item">
                <span className="branch">&#x21B3;</span>Software Developer at <img src="/images/ccss.png" alt="" className="inline-logo" /><span className="org">Carleton CS Society</span>
              </li>
              <li className="item">
                <span className="branch">&#x21B3;</span>CS Teaching Assistant at <img src="/images/carleton.png" alt="" className="inline-logo" /><span className="org">Carleton University</span>
              </li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Building</h2>
            <ul className="list projects">
              {projects.map(project => (
                <li className="project" key={project.name}>
                  <div className="project-header">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-name">{project.name}</a>
                    <span className="project-stack">{project.stack}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
