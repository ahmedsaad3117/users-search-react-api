import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: "https://api.mohamed-sadek.com/Employee/Get",
  headers: {
    // 'Access-Control-Allow-Origin' : '*',
    //         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //         'Access-Control-Allow-Headers': 'Origin',
    //         'x-apikey': '59a7ad19f5a9fa0808f11931'
  },
});

axiosConfig.interceptors.request.use(function (config) {
  //console.log(config)
  //config.headers["Access-Control-Allow-Origin: *"] = "token"
  //  config.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
  // config.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
  return config;
});
