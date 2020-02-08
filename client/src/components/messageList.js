import React from 'react';
import { connect } from 'react-redux';

import { GetMessages } from '../actions';

class MessageList extends React.Component{

	state = {messageList:[]};
	componentDidMount(){
		this.result = this.props.getMessage();

		// console.log("here are the results===>>", result);		
	}

	// componentWillUpdate(){
	// 	this.setState({
	// 		messageList:this.result
	// 	})
	// }	

	renderList(){
		console.log("here state", this.state.messageList)

		// if (true) {
		// 	return <div>Loading...</div>
		// }
		return this.props.messages.map((item) => {
			return <div>{item.message}</div>
		})

	}

	render(){
		return (
			<div>
			<ol>
			<li>Message List!!</li>
			<li>Message List!!</li>
			<li>Message List!!</li>
			<li>Message List!!</li>
			</ol>
			{this.renderList()}
			</div>
		)
	}
}

export default connect(null, {
	getMessage:GetMessages
})(MessageList);