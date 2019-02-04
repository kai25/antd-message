import React from 'react';
import { render } from 'react-dom';
import { message } from '../src/message/index.js';

import './style.less';

function App() {
  return (
    <div className="app-wrap">
      <div>
        <button type="primary" onClick={() => message.success(<div>Success</div>)}>Success</button>
        <button type="primary" onClick={() => message.error(<div>Error</div>)}>Error</button>
        <button type="primary" onClick={() => message.warn(<div>Warn</div>)}>Warn</button>
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
