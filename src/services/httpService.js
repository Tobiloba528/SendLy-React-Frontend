import axios from "axios";
// import logger from "./logService"
import { toast } from "react-toastify"

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // console.log("Logging the error", error);
    console.log(error);
    toast.error("An unexpected error");
  }
  return Promise.reject(error);
});

function setJwt(jwt){
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
    get: axios.get,
    put: axios.put,
    delete: axios.delete,
    post: axios.post,
    setJwt
}