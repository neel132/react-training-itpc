import {useParams} from 'react-router-dom';
import CustomText from "../../component/CustomText"
const Product = () => {
  const {productId} = useParams();
  console.log("productId -", productId);
  return (
    <CustomText label={`This is a product page for ${productId}`} />
  )
}
export default Product;