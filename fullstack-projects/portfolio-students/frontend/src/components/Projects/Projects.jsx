import "./Projects.css";

const projects = [
  {
    id: 1,
    name: "Tic Tac Toe",
    description: "A classic Tic-Tac-Toe game.",
    image: "/images/tic-tac-toe.png",
    url: "https://example.com/tic-tac-toe",
  },
  {
    id: 2,
    name: "Snake Game",
    description:
      "The popular Snake game where you control the snake to eat food.",
    image: "/images/snake-game.png",
    url: "https://example.com/snake-game",
  },
  {
    id: 3,
    name: "Memory Card Game",
    description: "A memory card game where you match pairs of cards.",
    image: "/images/memory-card-game.png",
    url: "https://example.com/memory-card-game",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
