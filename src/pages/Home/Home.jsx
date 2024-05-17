import React, { useEffect, useState } from "react";
import CustomText from "../../component/CustomText";
import CustomButton from "../../component/CustomButton";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const goToAbout = () => {
    console.log("Go to About");
    navigate('/about');
  }
  const operations = (type) => {
    switch(type) {
      case '+':
        setCounter(counter + 1);
        break;
      case '-':
        setCounter(counter - 1);
        break;
      case '*':
        setCounter(counter * 1);
        break;
      case '/':
        setCounter(counter / 1);
        break;
      default:
        setCounter(0);
        break;
    }
  }
  return (
    <>
      <CustomText label={`Counter ${counter}`}/>
      <CustomButton label={`Increment by 1`} onClick={() => operations('+')} />
      <CustomButton label={`Go to About`} onClick={() => goToAbout()} />
    </>
  )
}
export default Home;

// <> = React.Fragment