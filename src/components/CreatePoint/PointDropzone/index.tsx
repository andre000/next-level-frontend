/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import './style.css';

const pointDropzonePropTypes = {
  onFileUpload: PropTypes.func.isRequired,
};

type PointDropzoneType = PropTypes.InferProps<typeof pointDropzonePropTypes>;

const PointDropzone: React.FC<PointDropzoneType> = ({ onFileUpload }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);

    setSelectedFileUrl(fileURL);
    onFileUpload(file);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      { selectedFileUrl
        ? <img src={selectedFileUrl} alt="Imagem" />
        : (
          <p>
            <FiUpload />
            Imagem do estabelecimento
          </p>
        )}
    </div>
  );
};

PointDropzone.propTypes = pointDropzonePropTypes;

export default PointDropzone;
