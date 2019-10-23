import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className = "app">
            <RoomList/>
            <MessageList/>
            <SendMessageForm/>
            <NewRoomForm/>
            </div>
        );
    }
}

export default App;