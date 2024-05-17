import Button from 'react-bootstrap/Button';
const CustomButton = (props) => {
  const {label, onClick} = props;
  return (
    <Button variant='primary' onClick={onClick}>
      {label}
    </Button>
  )
}
export default CustomButton;