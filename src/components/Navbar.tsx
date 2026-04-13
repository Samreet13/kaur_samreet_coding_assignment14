import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#111827",
        padding: "15px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {["/", "/work", "/skills", "/resources", "/developer-setup"].map(
        (path, index) => {
          const labels = ["Home", "Work", "Skills", "Resources", "Setup"];
          return (
            <Link
              key={path}
              to={path}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              {labels[index]}
            </Link>
          );
        }
      )}
    </nav>
  );
}

export default Navbar;