const aboutPage = (function() {
    // create the main div
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("about")

    const test = document.createElement("p")
    test.textContent = "about"
    mainDiv.appendChild(test)

    return { mainDiv }
})()

export { aboutPage }