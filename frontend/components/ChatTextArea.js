/** @jsx React.DOM */

'use strict';

// responsible for message rendering

var React = require('react');

var TextArea = React.createClass({
    sendData: function () {
        var channel = document.getElementById('channel'),
            text = document.getElementById('text');

        var data = {
            //id: 1,
            type: 'message',
            channel: 'C03VB3CFG',
            text: text.value
        };

        text.value = '';

        this.props.ws.send(JSON.stringify(data));

    },

    render: function () {

        var chatArea = {
            display: this.props.connected ? 'block': 'none'
        };

        return (
            <div className='chat-pane' style={chatArea}>
                <article>&#35;{this.props.currentChan}</article>
                <div className='messages'>
                    <p><span>User:</span> Yeppeuyu</p>
                </div>
                <input type='text' id='text' />
                <input type='button' onClick={this.sendData} value='Send' />
            </div>
        )
    }
});

module.exports = TextArea;