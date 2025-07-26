const menuPage = (function() {
    // create the main div
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("menu")

    const test = document.createElement("p")
    test.textContent = "menu"
    mainDiv.appendChild(test)

    return { mainDiv }
})()

export { menuPage }