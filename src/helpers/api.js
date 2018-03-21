/* eslint-disable */
import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.API_URL,
  responseType: 'json',
  xsrfCookieName: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
});

export const options = {
  interceptors: {
    request: [
      (store, config) => {
        return config;
      }
    ],
    response: [
      (store, response) => {
        return response;
      }
    ]
  }
}
