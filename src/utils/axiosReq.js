import axios from "axios";

const baseURL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000/api' 
  : 'https://ashiqur-server.vercel.app/api';

export const axiosReq = axios.create({
  baseURL: baseURL,
})