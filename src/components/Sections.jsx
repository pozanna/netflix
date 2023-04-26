import "./Sections.css";
import Section from "./Section";

const Sections = (props) => {
  //   console.log(props.data);
  const sectionsArray = props.data;
  return (
    <div className="sectionsContainer">
      {sectionsArray.map(
        // stops at every section of sectionsArray
        (section) => {
          // console.log(section);
          return <Section sectionData={section} />;
        }
      )}
    </div>
  );
};

export default Sections;
