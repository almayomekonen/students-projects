import "./About.css";
import logo from "../../assets/almayo.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src={logo} alt="logo-img" />
        </div>

        <div className="about-text">
          <h1>About Me</h1>
          <p>
            HI, MR.MEK, i am fullstack web developer, with a focus on building
            amazing, and intractive user interfaces!
          </p>
          <p>when I&lsquo;m not coding, I enjoy learning new technologies</p>
        </div>
      </div>
    </div>
  );
}
