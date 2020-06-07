/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

const optionsShape = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string.isRequired,
});

const basicSelectPropTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(optionsShape).isRequired,
};

type BasicSelectType = PropTypes.InferProps<typeof basicSelectPropTypes>;

const BasicSelect: React.FC<BasicSelectType> = ({
  id, label, value, onChange, options,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const optionsEl = options.map((o) => (
    <option key={o?.text} value={o?.value || o?.text}>
      {o?.text}
    </option>
  ));

  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => handleChange(event)}
      >
        {optionsEl}
      </select>
    </div>
  );
};

BasicSelect.propTypes = basicSelectPropTypes;

export default BasicSelect;
