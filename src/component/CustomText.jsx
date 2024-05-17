const CustomText = (props) => {
  const {label} = props;
  return (
    <p style={{color: 'red'}}>
      {label}
    </p>
  )
};

export default CustomText;