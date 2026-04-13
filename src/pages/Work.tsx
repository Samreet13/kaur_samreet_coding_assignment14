import Card from "../components/Card/Card";

function Work() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Work</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <Card
          title="Component Library"
          description="Reusable UI components built using React and Storybook."
          imageSrc="https://placehold.co/360x190"
          footerText="Tech: React, Storybook"
        />

        <Card
          title="Portfolio Website"
          description="Multi-page portfolio built using React and Docker."
          imageSrc="https://placehold.co/360x190"
          footerText="Tech: React, Docker"
        />

        <Card
          title="Web Projects"
          description="Forms, validation and UI-based academic projects."
          imageSrc="https://placehold.co/360x190"
          footerText="Tech: HTML, CSS, JavaScript"
        />

      </div>
    </div>
  );
}

export default Work;