export default function Project(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="projects">
      <div className="image">
        <img
          src={props.data.image}
          alt="project-img"
          className="project-image"
          onClick={() => openInNewTab(props.data.website)}
        />
      </div>
      <div className="about">
        <h1 className="project-head">{props.data.name} </h1>
        <p className="project-description">{props.data.description}</p>
        <ul className="tools-used">
          {props.data.tools.map((tool) => {
            return <li className="tools-name">{tool}</li>;
          })}
        </ul>
        <button
          onClick={() => openInNewTab(props.data.github)}
          className="view"
        >
          {" "}
          View code
        </button>
      </div>
    </div>
  );
}
