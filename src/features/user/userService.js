const { axiosInstance } = require("@/config/axiosConfig");

const loginUser = async (data) => {
  const res = await axiosInstance({
    url: "/user/login",
    method: "POST",
    data: data,
  });
  return res;
};
const registerUser = async (data) => {
  const res = await axiosInstance({
    url: "/user/register",
    method: "POST",
    data: data,
  });
  return res;
};

const authUserService = {
  loginUser,
  registerUser,
};

export default authUserService;
