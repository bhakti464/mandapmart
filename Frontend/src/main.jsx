import  'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='dark:bg-gray-900 dark:text-white'>
      <App />
    </div>
  </BrowserRouter>,
)