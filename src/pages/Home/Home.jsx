import React, { useEffect, useState } from "react";
import CustomText from "../../component/CustomText/CustomText";
import CustomButton from "../../component/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementFromUserInput, reset } from "../../redux/slices/counterSlice";

const Home = () => {
  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  console.log("counter =>", counter);
  const navigate = useNavigate();
  const goToAbout = () => {
    console.log("Go to About");
    navigate('/about');
  }
  const operations = (type) => {
    switch(type) {
      case '+':
        dispatch(incrementFromUserInput(7));
        break;
      case '-':
        dispatch(decrement());
        break;
      case '*':
        break;
      case '/':
        break;
      default:
        dispatch(reset());
        break;
    }
  }
  return (
    <>
      <CustomText label={`Counter ${counter}`}/>
      <CustomButton label={`Increment by 7`} onClick={() => operations('+')} />
      <CustomButton label={`Go to About`} onClick={() => goToAbout()} />
    </>
  )
}
export default Home;

// <> = React.Fragment