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
const createEmployee = async (data) => {
  try {
    const result = await axiosInstance.post('create', data);
    return result.data.data;
  } catch (err) {
    console.log("create employee error -", err);
  }
}
export {
  getEmployee,
  createEmployee,
};