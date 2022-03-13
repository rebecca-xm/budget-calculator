export const Alert = ({ type, text }) => {
  return <div className={`alert alert-${type}`}>{text}</div>;
};
