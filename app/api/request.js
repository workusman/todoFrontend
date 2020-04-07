import axios from 'axios';
import { TODO_API_BASEURL } from 'react-native-dotenv';

export default request = axios.create({
  baseURL: TODO_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
