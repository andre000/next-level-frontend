/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const basicInputPropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

type BasicInputType = PropTypes.InferProps<typeof basicInputPropTypes>;

const BasicInput: React.FC<BasicInputType> = ({
  id, label, value, onChange,
}) => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

BasicInput.propTypes = basicInputPropTypes;

export default BasicInput;
