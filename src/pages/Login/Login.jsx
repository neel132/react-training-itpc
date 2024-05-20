import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../component/CustomButton"
import CustomText from "../../component/CustomText/CustomText"
import { Form, Button } from "react-bootstrap";
const specialChars = ['!', '#', '$', '%', '^', '&', '*', '(', ')'];
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onClick = () => {
    console.log("Email -", email);
    console.log("Password -", password);
    if(email.length > 0 && password.length > 0) {
      navigate('/home', { state: { login: true}});
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
  const onSubmit = (e) => {
    e.preventDefault(); // preventing it from reloading the webpage
    console.log("Form submission -", e);
    console.log("Email", e.target['formBasicEmail'].value);
    console.log("Email", e.target[0].value);
    const email = e.target[0].value; // Getting the value of email field
    const password = e.target[1].value; // Getting the value of password field
    if(email.length > 0 && password.length > 0) { // Checking the validity of email and password fields
      navigate('/home', { state: { login: true}});
    } else {
      alert("Please enter email and password");
    }
  }
  return (
    <center>
      {/* <input
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
      <CustomButton label={"Login"} onClick={() => onClick()} /> */}
      <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
  )
}
export default Login;