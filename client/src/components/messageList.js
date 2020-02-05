import React from 'react';
import { connect } from 'react-redux';

import { GetMessages } from '../actions';

class MessageList extends React.Component{

	state = {messageList:[]};
	componentDidMount(){
		let result = this.props.getMessage();
		this.setState({
			messageList:result
		})
	}	

	renderList(){
		console.log("here state", this.state.messageList)
		return this.state.messageList.map((item) => {
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