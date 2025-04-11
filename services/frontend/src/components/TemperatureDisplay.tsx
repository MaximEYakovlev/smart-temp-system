import useWebSocket from '../hooks/useWebSocket';

const TemperatureDisplay = () => {
  const { data, isConnected } = useWebSocket('ws://localhost:8080');

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Current Temperature</h2>
      {isConnected ? (
        <div className="text-3xl font-bold text-blue-600">
          {data ? `${data.temperature} °C` : 'Loading...'}
        </div>
      ) : (
        <div className="text-red-600">Disconnected from WebSocket</div>
      )}
    </div>
  );
};

export default TemperatureDisplay;
