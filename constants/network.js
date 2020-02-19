import axios from 'axios'

export const urlBase = 'http://192.168.43.122:8000/'
export default axios.create({
	baseURL: 'http://192.168.43.122:8000/api/v1/',
	timeout: 60000,
	headers: {
		'Accept': 'application/json',
		'Accept-Language': 'en-US',
		'Connection': 'keep-alive',
		'Content-Encoding': 'application/json'
	}
})
