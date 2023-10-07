const Input = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      style={props.style}
    ></input>
  );
};

export default Input;
