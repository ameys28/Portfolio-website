import Github from "../img/image3.png";
import Linkedin from "../img/image4.png";
export default function Footer(){
  return (
    <footer className="footer">
<h1 className="foot-head">Connect with Me</h1>
<ul>
<li>
            <a
              href="https://in.linkedin.com/in/amey-sawant-156a63223"
              className="resume"
            >
              <strong> Resume </strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/ameys28">
              <img src={Github} alt="github icon" className="icon"
            /></a>
          </li>
          <li>
            <a href="https://in.linkedin.com/in/amey-sawant-156a63223">
              <img src={Linkedin} alt="linkedin icon" className="icon" />
            </a>
          </li>
</ul>
</footer>
  );
}