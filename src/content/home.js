const homePage = (function() {
    // create the main div
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("home")

    let heroImage = document.createElement("img")
    heroImage.src = "../images/pastel-de-nata.jpg"
    heroImage.alt = "Pastel de Nata"
    heroImage.classList.add("home-hero-image")

    mainDiv.appendChild(heroImage)

    return { mainDiv }
})()

export { homePage }