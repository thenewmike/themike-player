import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import AudioProvider from './contex/AudioContex.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AudioProvider>
    <App />
  </AudioProvider>,
);
