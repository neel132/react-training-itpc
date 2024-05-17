const CustomButton = (props) => {
  const {label, onClick} = props;
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}
export default CustomButton;