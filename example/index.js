import React, { Component } from 'react';
import { render } from 'react-dom';
import { message } from '../src/message/index.js';

import './style.less';

class App extends Component {
  static handleClick(type, content) {
    message.show(type, content);
  }
  render() {
    return (
      <div className="app-wrap">
        <div>
          <button type="primary" onClick={() => App.handleClick('success', <div>132</div>)}>Yoo</button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
