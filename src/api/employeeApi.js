import axiosInstance from "../config/axios-config"

const getEmployee = async() => {
  try {
    const result = await axiosInstance.get('employees');
    console.log('result data:', result.data.data);
    return result.data.data;
  } catch (err) {
    console.log("get Employee -", err);
  }
}
export {
  getEmployee,
};