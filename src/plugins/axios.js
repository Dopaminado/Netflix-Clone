/* eslint-disable */
"use strict";

import Vue from "vue";
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const API_URL = "http://localhost:8080";


const config = {
  baseURL: `${API_URL}`,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
};

const _axios = axios.create(config);

export { _axios as axios };
