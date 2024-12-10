import "./Home.css";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Discover my Journey as a web developer. I&lsquo;m a passionate about
            creating web application!
          </p>
          <Link className="cta-btn" to="/about">
            Learn More
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-item">
          <h3>Web Development</h3>
          <p>Building scalable, efficient, and responsive web applications.</p>
        </div>
        <div className="feature-item">
          <h3>Mobile Friendly</h3>
          <p>
            Ensuring all applications are mobile-responsive and user-friendly.
          </p>
        </div>
        <div className="feature-item">
          <h3>Cloud Integration</h3>
          <p>
            Seamlessly integrating cloud services for enhanced functionality.
          </p>
        </div>
      </section>
    </div>
  );
}
