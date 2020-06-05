import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

const callToActionPropTypes = {
  link: PropTypes.string.isRequired,
};

type CallToActionProps = PropTypes.InferProps<typeof callToActionPropTypes>;

const CallToAction: React.FC<CallToActionProps> = ({ link }) => {
  const history = useHistory();
  return (
    <button onClick={() => history.push(link)} type="button">
      <span>
        <FiLogIn />
      </span>
      <strong>Cadastre um ponto de coleta</strong>
    </button>
  );
};

CallToAction.propTypes = callToActionPropTypes;

export default CallToAction;
