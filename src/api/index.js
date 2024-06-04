import axios from 'axios';

const main_Url = axios.create({
  baseURL: 'http://dummyjson.com',
});

export default main_Url;
