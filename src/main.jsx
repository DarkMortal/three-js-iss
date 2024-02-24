import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('footer')).render(
  <React.StrictMode>
    <div className="bg-indigo-700 py-4 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            Copyright &copy; {new Date().getFullYear()} ThinkSpace
          </div>
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            Made with ❤️ by <a href="https://github.com/DarkMortal" target='_blank' style={{color: "white"}}>Saptarshi Dey</a>
          </div>
        </div>
      </div>
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
  document.body.style.overflowY = 'auto';
  googleTranslateElementInit();
  document.querySelector(".splash").classList.add('disappear');
  setTimeout(() => document.querySelector(".splash").style.display = 'none', 2900);
}