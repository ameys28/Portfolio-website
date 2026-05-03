import Github from "../img/image3.png";
import Linkedin from "../img/image4.png";
export default function Header() {
  return (
    <header>
      <div className="head">
        <a
          href="https://instagram.com/amey_s_28?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
          className="logo"
          target="_blank"
        >
          <strong> AS </strong>
        </a>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a
              href="https://drive.google.com/file/d/10pUMisMTgBC9m-HWrl6ntuwH-0LhQsB-/view?usp=drive_link"
              target="_blank"
              className="resume"
            >
              <strong> Resume </strong>
            </a>
          </li>
          <li>
            <a href="https://github.com/ameys28" target="_blank">
              <img src={Github} alt="github icon" className="icon" />
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/in/ameys28" target="_blank">
              <img src={Linkedin} alt="linkedin icon" className="icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
