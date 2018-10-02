import axios from 'axios';

const instance = axios.create({
	baseURL:'https://react-app-576a6.firebaseio.com/'
});

export default instance;