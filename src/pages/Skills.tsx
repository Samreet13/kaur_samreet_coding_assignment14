import React from 'react';
import Card from '../components/Card/Card';

function Skills() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Skills</h1>

      <p>These are the technical skills I have developed during my program.</p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Card
          title="Languages & Frameworks"
          description="HTML, CSS, JavaScript, React, Node.js, Python"
          imageSrc="https://placehold.co/360x190"
          footerText="Core Development Skills"
        />

        <Card
          title="Tools"
          description="VS Code, Git, GitHub, Docker, Storybook, Nginx"
          imageSrc="https://placehold.co/360x190"
          footerText="Development Tools"
        />
      </div>
    </div>
  );
}

export default Skills;
