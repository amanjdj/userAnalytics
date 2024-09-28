/* eslint-disable react/prop-types */
function Button({ children, handler, cl }) {
  const hidden =
    "bg-blue-700 text-blue-50 p-1 text-center pl-3 pr-3 rounded-lg mb-2 invisible";
  const simple =
    "bg-blue-700 text-blue-50 p-1 text-center pl-3 pr-3 rounded-lg mb-2";
  return (
    <button className={cl ? hidden : simple} onClick={handler}>
      {children}
    </button>
  );
}

export default Button;
