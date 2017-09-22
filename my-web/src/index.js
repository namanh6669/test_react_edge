import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyWebComponent from './Components/MyWebComponent';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
    <MuiThemeProvider>
      <MyWebComponent />
    </MuiThemeProvider>
  );
ReactDOM.render(<App  />, document.getElementById('root'));
registerServiceWorker();
