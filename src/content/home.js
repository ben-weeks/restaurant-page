const homePage = (function() {
    // create the main div
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("home")

    const test = document.createElement("p")
    test.textContent = "home"
    mainDiv.appendChild(test)

    return { mainDiv }
})()

export { homePage }