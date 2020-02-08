import React from 'react';
import MessageInput from './messageInput';
import MessageList from './messageList';

class App extends React.Component{

	state={messageList:[]}

	onNewMessage = (msg) => {
		this.setState({
			messageList:[...this.state.messageList, msg]
		});
	}

	render(){
		return(
			<div className="ui container">
			<div>Hello!!</div>
			<div className="inputMessageBox">
			<div>
				<MessageList messages={this.state.messageList}/>
			</div>
			<MessageInput onNewMessage={this.onNewMessage}/>
			</div>
			</div>
			)
	}
}

export default App;