import logo from "../img/image2.png";
import arrow from "../img/image5.png"
export default function Main(){
  return (
    <div className="container">
    <div className="main">
      <h1 className="heading">
        I create <span className="playful"> playful</span> <br />
        experiences.
      </h1>
      <img src={logo} alt="icon" className="img" />
    </div>
    <p className="title">Amey Sawant / Web Developer</p>
    <button className="project">
      Projects <br />
      <img src={arrow} alt="arrow" className="arrow" />
    </button>
    </div>
  )
}