import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../component/CustomButton"
import CustomText from "../../component/CustomText/CustomText"
const specialChars = ['!', '#', '$', '%', '^', '&', '*', '(', ')'];
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onClick = () => {
    console.log("Email -", email);
    console.log("Password -", password);
    if(email.length > 0 && password.length > 0) {
      navigate('/about', { state: { login: true}});
    } else {
      alert("Please enter email and password");
    }
    //navigate('/about', { state: { login: true}});
  };
  const onChange = (e) => {
    console.log("User typed text", e.target.value);
    const input = e.target.value;
    // bug on this if condition.
    /*
      input - nee# - it does not allows
      input - nee#l - it allows which it should not
    */
    if(specialChars.includes(input[input.length - 1])) {
      alert("Special characters are not allowed");
      return;
    };
    setEmail(e.target.value);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }
  return (
    <center>
      <input
        type="text"
        placeholder="Enter Email"
        onChange={(e) => onChange(e)}
        value={email}
      />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => onChangePassword(e)}
        value={password}
      />
      <CustomButton label={"Login"} onClick={() => onClick()} />
    </center>
  )
}
export default Login;