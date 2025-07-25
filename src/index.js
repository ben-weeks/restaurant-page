import { homePage } from "./home.js"
import { menuPage } from "./menu.js"
import { aboutPage } from "./about.js"

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