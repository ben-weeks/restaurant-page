// image imports
import pastel_de_nata from "../images/pastel-de-nata.jpg"

const homePage = (function() {
    // create the main div
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("home")

    let hero = document.createElement("div")
    hero.classList.add("home-hero")

    let heroImage = document.createElement("img")
    heroImage.src = pastel_de_nata
    heroImage.alt = "Pastel de Nata"
    heroImage.classList.add("home-hero-image")

    let heroContent = document.createElement("div")
    heroContent.classList.add("home-hero-content")

    hero.appendChild(heroImage)
    hero.appendChild(heroContent)
    mainDiv.appendChild(hero)

    return { mainDiv }
})()

export { homePage }