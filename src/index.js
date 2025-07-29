import { homePage } from "./content/home.js"
import { menuPage } from "./content/menu.js"
import { aboutPage } from "./content/about.js"

import "./stylesheets/main-styles.css"
import "./stylesheets/home-styles.css"
import "./stylesheets/menu-styles.css"
import "./stylesheets/about-styles.css"

const manageNav = (function() {
    const content = document.querySelector(".content")
    content.appendChild(homePage.mainDiv) // display homepage by default

    function init() {
        const homeButton = document.querySelector(".nav-home")
        const menuButton = document.querySelector(".nav-menu")
        const aboutButton = document.querySelector(".nav-about")

        homeButton.addEventListener("click", () => {
            content.innerHTML = ''
            content.appendChild(homePage.mainDiv)
        })
        menuButton.addEventListener("click", () => {
            content.innerHTML = ''
            content.appendChild(menuPage.mainDiv)
        })    
        aboutButton.addEventListener("click", () => {
            content.innerHTML = ''
            content.appendChild(aboutPage.mainDiv)
        })
    }

    return { init }
})()

manageNav.init()