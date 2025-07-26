// image imports
// import pastel_de_nata from "../images/pastel-de-nata.jpg"

// html import
import homeContent from "./home.html"

const homePage = (function() {
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("home")
    mainDiv.innerHTML = homeContent

    return { mainDiv }
})()

export { homePage }