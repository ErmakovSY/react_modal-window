# Simple ToDo Application with React.js

Using styled-components and material-ui

### Install:
```
npm install --save react-modal-alert
```

### Usage:
```javascript
import Modal from 'react-modal-alert';

ReactDOM.render((
  <Modal 
    title="Your modal window title..."
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    visible={true}
    type="error"
  />
  ), document.getElementById('root')
);
```

### List of properties:
|  №  |      Property     | Required |  Type   | Description                                                 |
|:---:|:------------------|:--------:|:-------:|:------------------------------------------------------------|
|  1  | title             | true     | string  | Title of modal window                                       |
|  2  | text              | true     | string  | Text message of modal window                                |
|  3  | type              | true     | string  | Type of message ('success', 'notify', 'warning' or 'error') |
|  4  | visible           | true     | boolean | Parameter for control showing of modal window               |
|  5  | overlayStyle      | false    | object  | Style of overlay layout                                     |
|  6  | wrapperStyle      | false    | object  | Style of window wrapper                                     |
|  7  | headerStyle       | false    | object  | Style of window header                                      |
|  8  | contentStyle      | false    | object  | Style of message section                                    |
|  9  | footerStyle       | false    | object  | Style of window footer                                      |
|  10 | titleStyle        | false    | object  | Style of window title                                       |
|  11 | closeButtonStyle  | false    | object  | Style of window close button                                |
|  12 | submitButtonStyle | false    | object  | Style of window submit button                               |
|  13 | contentTextStyle  | false    | object  | Style of window message                                     |

### License:
MIT License.