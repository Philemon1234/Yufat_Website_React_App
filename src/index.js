import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// let openNav = document.getElementById("open");
// let closeNav = document.getElementById("close");
// let nav_links = document.querySelector(".nav_links");

// openNav.addEventListener("click", function () {
//     nav_links.classList.add("show_nav");
// })

// closeNav.addEventListener("click", function () {
//     nav_links.classList.remove("show_nav");
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// let themeIcon = document.getElementById("theme-toggle-icon");
// let body = document.querySelector("body");
// let welcomeTitle = document.querySelector(".welcome_title");
// let navBar = document.querySelector(".nav_bar");
// let navLink = document.querySelectorAll(".nav_link");

// Function to set the theme based on a given preference
// function setTheme(themePreference) {
//     if (themePreference === "dark") {
//         document.body.classList.add("dark-theme");
//         themeIcon.src = "assets/Home-images/sun.png";
//         body.style.backgroundColor = "black";
//         navBar.style.backgroundColor = "black";
//         welcomeTitle.style.color = "white";
//         // for (let i = 0; i < navLink.length; i++) {
//         //     let links = navLink[i];
//         //     // links.style.color = "white";
//         // }
//     } else {
//         document.body.classList.remove("dark-theme");
//         themeIcon.src = "assets/Home-images/moon.png";
//         body.style.backgroundColor = "white";
//         navBar.style.backgroundColor = "white";
//         welcomeTitle.style.color = "black";
//         // for (let i = 0; i < navLink.length; i++) {
//         //     let links = navLink[i];
//         //     // links.style.color = "black";
//         // }
//     }
// }

// Check if the theme preference is stored in localStorage
// const storedTheme = localStorage.getItem("theme");

// Set the theme based on the stored preference or default to "light"
// setTheme(storedTheme || "light");

// Event listener to toggle the theme when the icon is clicked
// themeIcon.addEventListener("click", function () {
//     if (document.body.classList.contains("dark-theme")) {
//         localStorage.setItem("theme", "light");
//     } else {
//         localStorage.setItem("theme", "dark");
//     }
//     setTheme(localStorage.getItem("theme"));
// });

// Scroll Animations
// const hiddenElements = document.querySelectorAll(".hidden");

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     })
// })

// hiddenElements.forEach((el) => observer.observe(el));
