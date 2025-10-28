import MapImage from '@/assets/images/map.jpg';

const Map = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '8px',
      }}>
      <img
        src={MapImage}
        alt="Map location"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default Map;