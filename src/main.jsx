import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('footer')).render(
  <React.StrictMode>
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © ThinkSpace {new Date().getFullYear()}
    </div>
  </React.StrictMode>
);

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
      {pageLanguage: 'en'},
      'google_translate_element'
  );
}
window.onbeforeunload = ()=>{
  window.scrollTo(0, 0);
}

window.onload = ()=>{
  locked.checked = true;
  data.checked = true;
  controls.checked = true;
  document.querySelector(".splash").style.display = 'none';
  document.body.style.overflow = 'scroll';
  googleTranslateElementInit();
}