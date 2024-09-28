/* eslint-disable react/prop-types */
function NoUserMessage({ message }) {
  return (
    <div className="bg-blue-50 p-4 mt-4 text-center text-blue-700 font-bold">
      <h4>{message}</h4>
    </div>
  );
}

export default NoUserMessage;
