import React, { Component } from 'react';
import './Bot.css'


class Bot extends Component {
  render() {
    return (
        <div className="BotFrame">
          <iframe className="Bot" title="rtechtitle" width="350" height="430" src="https://console.dialogflow.com/api-client/demo/embedded/c5f909a1-9787-4bf9-86e7-e9b008cbfd90">
          </iframe>
        </div>
    );
  }
}

export default Bot;