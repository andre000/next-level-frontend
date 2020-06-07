import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

const pointMapPropTypes = {
  point: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  initialPosition: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  setPoint: PropTypes.func.isRequired,
};

type PointMapType = PropTypes.InferProps<typeof pointMapPropTypes>;

const PointMap: React.FC<PointMapType> = ({ point, setPoint, initialPosition }) => {
  const handleMapClick = (event: LeafletMouseEvent) => {
    const pointSelected = event.latlng;
    setPoint(pointSelected);
  };

  return (
    <Map
      center={initialPosition || { lat: -22.8631668, lng: -48.4287712 }}
      zoom={15}
      onclick={handleMapClick}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        (point && point.lat !== 0) && <Marker position={point} />
      }
    </Map>
  );
};

PointMap.propTypes = pointMapPropTypes;

PointMap.defaultProps = {
  point: { lat: 0, lng: 0 },
  initialPosition: { lat: 0, lng: 0 },
};

export default PointMap;
