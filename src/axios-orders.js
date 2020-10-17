import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-7eb90.firebaseio.com/'
})

export default instance;