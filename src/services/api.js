/**
 * Auther: Gaurav Chaware
 * Date: 04-02-2021
 * Desc: Axios integration with global error handling for all requests and responce
 */

/* eslint-disable func-names */
import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://api.airtable.com/v0/appBTaX8XIvvr6zEC", // This can be replaced with env, // This can be replaced with env
});

// Alter defaults after instance has been created
instance.defaults.headers.common.Authorization = "Bearer key4v56MUqVr9sNJv"; // IMP This will be set after login using static for demo only

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
