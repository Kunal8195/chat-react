import server from '../api/server';

export const MessageSent = (message) => async (dispatch) => {

	console.log("cam here 1")
	const response = await server.post('/addMessage', {...message});
	dispatch({
		type:'MESSAGE_HIT',
		payload: response.data
	})
}


export const GetMessages = () => async (dispatch) => {

	const response = await server.get('/getMessages')

	dispatch({
		type:'GET_MESSAGES',
		payload: response.data
	})
}
// export const MessageSent = (message) => {
// 	return {
// 		type:'MESSAGE_HIT',
// 		payload:'Hi Kunal'
// 	}
// }