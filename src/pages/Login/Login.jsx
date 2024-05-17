import { useNavigate } from "react-router-dom";
import CustomButton from "../../component/CustomButton"
import CustomText from "../../component/CustomText"

const Login = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/', { state: { login: true}});
  };
  return (
    <>
      <CustomText label={"This is a login page"} />
      <CustomButton label={"Go to home"} onClick={onClick} />
    </>
  )
}
export default Login;