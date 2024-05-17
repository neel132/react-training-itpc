import { useNavigate } from "react-router-dom";
import CustomButton from "../../component/CustomButton"
import CustomText from "../../component/CustomText/CustomText"

const Login = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/about', { state: { login: true}});
  };
  return (
    <>
      <CustomText label={"This is a login page"} />
      <CustomButton label={"Go to About"} onClick={onClick} />
    </>
  )
}
export default Login;