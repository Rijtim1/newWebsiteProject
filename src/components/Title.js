import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/w3.css';

function Title({ title, subtitle }) {
  return (
    <Container fluid className="w3-mobile">
      <div className="w3-teal w3-center w3-animate-top w3-padding-32">
        <h1 className="w3-center w3-jumbo">{title}</h1>
        <h2 className="w3-center">{subtitle}</h2>
      </div>
    </Container>
  );
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Title;
