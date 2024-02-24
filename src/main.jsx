import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector("footer")).render(
  <React.StrictMode>
    <div className="footer" style={{color: "white", backgroundColor: "#3C3DC6"}}>
      <div style={{alignSelf: "flex-start"}}>Copyright &copy; {new Date().getFullYear()} ThinkSpace</div>
      <div style={{alignSelf: "flex-end"}}>Made with ❤️ by <a href="https://github.com/DarkMortal" target="_blank" style={{ color: "white" }}>Saptarshi Dey</a></div>
    </div>
  </React.StrictMode>
);

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
window.onbeforeunload = () => window.scrollTo(0, 0);

window.onload = () => {
  locked.checked = true;
  data.checked = true;
  controls.checked = true;
  document.body.style.overflow = "auto";
  googleTranslateElementInit();
  document.querySelector(".splash").classList.add("disappear");
  setTimeout(() => document.querySelector(".splash").style.display = "none", 2900);
};
