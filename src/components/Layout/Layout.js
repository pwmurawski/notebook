import PropTypes from "prop-types";

const propTypes = {
  menu: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
};

export default function Layout({ menu, content }) {
  return (
    <>
      <header>{menu}</header>
      <main>{content}</main>
    </>
  );
}

Layout.propTypes = propTypes;
