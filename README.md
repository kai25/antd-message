# antd-like-message
Global message like ant-design

Original repo: https://github.com/bingqichen/antd-message/
NPM - https://www.npmjs.com/package/antd-like-message

## Installation
Using npm:
```javascript
$ npm i antd-like-message --save
```
Using yarn:
```javascript
$ yarn add antd-like-message
```

## Example
```javascript
import { message } from 'antd-message';
message.success('hello, world!');
message.error(<span>Hello, World!</span>);
message.success('hello, world!', 1000);  // 1000 - timeout of message
```
![Renderings](https://ooo.0o0.ooo/2017/03/20/58cfb9c34845f.png)

## Options
Three types: `message.success`、`message.warn`、`message.error`

params    | summary                     | type     | default
--------- | --------------------------- | -------- | ---------
`content` | message content             | `String` | -
`timeout` | timeout the message unmount | `Number` | 3000 (ms)

## License
MIT
