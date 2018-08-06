import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burguer-1d842.firebaseio.com/'
});

export default instance;