import React from 'react';
import PropTypes from 'prop-types';

const collectPointPropTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

type CollectPointType = PropTypes.InferProps<typeof collectPointPropTypes>;

const CollectPoint: React.FC<CollectPointType> = ({
  image, title, id, setSelected, isSelected,
}) => (
  <li>
    <button className={isSelected ? 'selected' : ''} type="button" onClick={() => setSelected(id)}>
      <img src={image} alt={title} />
      <span>{title}</span>
    </button>
  </li>
);

CollectPoint.propTypes = collectPointPropTypes;

export default CollectPoint;
