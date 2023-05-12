import React from 'react';
import ReactDOM from 'react-dom/client';

// for rtl format comment out bootstrap.min.css and uncomment bootstrap.rtl.min.css
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './sass/stylesheet.scss';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDFvZv4ScbLKMuDukh6vkaFzE0W3E92Ryk',
	authDomain: 'jerome-checketts-website.firebaseapp.com',
	projectId: 'jerome-checketts-website',
	storageBucket: 'jerome-checketts-website.appspot.com',
	messagingSenderId: '630936595211',
	appId: '1:630936595211:web:41af864989bfc0a936d00e',
	measurementId: 'G-8TK2MCBCZQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
