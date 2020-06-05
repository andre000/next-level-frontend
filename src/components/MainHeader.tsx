import React from 'react';
import PropTypes from 'prop-types';

const headerPropsTypes = {
  title: PropTypes.string.isRequired,
};

type HeaderProps = PropTypes.InferProps<typeof headerPropsTypes>;

const MainHeader: React.FC<HeaderProps> = ({ title }) => (
  <header>
    <h1>{ title }</h1>
  </header>
);

MainHeader.propTypes = headerPropsTypes;

export default MainHeader;
