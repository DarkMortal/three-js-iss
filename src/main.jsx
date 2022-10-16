import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
      {pageLanguage: 'en'},
      'google_translate_element'
  );
}

window.onload = ()=>{
  locked.checked = true;
  data.checked = true;
  controls.checked = true;
  googleTranslateElementInit();
  document.querySelector(".splash").style.display = "none";
}