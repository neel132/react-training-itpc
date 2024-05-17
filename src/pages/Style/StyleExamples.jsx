import CustomText from "../../component/CustomText/CustomText";
import "./style-example.css";

const StyleExample = () => {
  return (
    <div className="container">
      <div className="box1">
        <CustomText label={1} />
      </div>
      <div className="box2">
        <CustomText label={2} />
      </div>
    </div>
  )
};
export default StyleExample;

/*
  Flexbox -
  1. mainly used for responsiveness

  Important Properties -
  1. display - flex
  2. flex - from 0 to 1
  3. justify-content
  4. align-items
  5. flex-direction
*/