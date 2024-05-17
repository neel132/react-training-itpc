import "./customtext.css";
const CustomText = (props) => {
  const {label} = props;
  // const style = {
  //   color: 'blue',
  // };
  return (
    <p
      className="text"
      // style={style}
    >
      {label}
    </p>
  )
};

// css
export default CustomText;

/*
  CSS -
  1. Inline style - using style prop
  2. Internal style - using className prop but within same component
  3. External style - using className prop but from seperate css file

  Note - Inline style should be in a camelCase

*/