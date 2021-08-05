import axios from "axios";
import { domain } from "./Constants";
import store from "../store";
import router from "../router";

const http = new axios.create({
  baseURL: domain,
});

const httpMethod = {
  get(url, options = {}) {
    const token = store.state.auth.access_token;
    if (!token) {
      router.push("/login");
      return Promise.reject("No access token.");
    }

    return http
      .get(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("login again....");
        if (err.response.status == 401) {
          window.localStorage.removeItem("vuex");
          location.reload();
          router.push("/login");
          return err;
        }else{
          return err;
        }
      });
  },
  post(url, data = null, options = {}) {
    const token = store.state.auth.access_token;
    if (!token) {
      return Promise.reject("No access token.");
    }
    return http
      .post(url, data, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        if (err.response.status == 401) {
          window.localStorage.removeItem("vuex");
          location.reload();
          router.push("/login");
          return err;
        }else{
          return err;
        }
      });
  },
  put(url, data = null, options = {}) {
    const token = store.state.auth.access_token;
    if (!token) {
      return Promise.reject("No access token.");
    }

    return http
      .put(url, data, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  },
  delete(url, options = {}) {
    const token = store.state.auth.access_token;
    if (!token) {
      return Promise.reject("No access token.");
    }

    return http
      .delete(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  },
};

export default httpMethod;
