import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppProvider from './Context/AppContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
       <BrowserRouter>
            <App />
       </BrowserRouter>
    </AppProvider>
  );
