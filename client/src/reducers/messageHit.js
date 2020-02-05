

export default (state ={}, action) =>{
	switch(action.type){
		case 'MESSAGE_HIT':
			return {...state, 'new':'here it goes'}
		case 'GET_MESSAGES':
			return {...state}
		default:
			return state
	}
}