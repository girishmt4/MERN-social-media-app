const Item = (props) => {
  return (
    <div className={`${props.className}`}>
      <img src={props.image} alt="" />
      <span>{props.label}</span>
    </div>
  );
};

export default Item;
