//type rafce to generate function quickly
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS: just have to add style={headingStyle} to tag
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
