import "./Section.css";

function Section(props) {
  return (
    <div className="sectionContainer">
      <h2>{props.sectionData.category}</h2>
      <div className="listOfFilms">
        {props.sectionData.images.map((imageUrl) => {
          return <img src={imageUrl} />;
        })}
      </div>
    </div>
  );
}

export default Section;
