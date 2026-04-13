import Card from "../components/Card/Card";

function Resources() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Resources</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <Card
          title="React Documentation"
          description="Used to learn component-based development."
          imageSrc="https://placehold.co/360x190"
          footerText="react.dev"
        />

        <Card
          title="Docker Documentation"
          description="Helpful for containerizing applications."
          imageSrc="https://placehold.co/360x190"
          footerText="docs.docker.com"
        />

        <Card
          title="MDN Web Docs"
          description="Reference for HTML, CSS, and JavaScript."
          imageSrc="https://placehold.co/360x190"
          footerText="developer.mozilla.org"
        />

      </div>
    </div>
  );
}

export default Resources;