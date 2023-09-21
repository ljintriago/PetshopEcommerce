import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


const firebaseConfig = {
  apiKey: "AIzaSyB80fJ8tigG0SMcPPW2es9Nix2CWzbI6H8",
  authDomain: "coder-react-32eb9.firebaseapp.com",
  projectId: "coder-react-32eb9",
  storageBucket: "coder-react-32eb9.appspot.com",
  messagingSenderId: "608202196961",
  appId: "1:608202196961:web:8eac128a2e88e48f62f4a0"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
