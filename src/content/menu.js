import menuContent from "./menu.html"

const menuPage = (function() {
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("menu")
    mainDiv.innerHTML = menuContent

    return { mainDiv }
})()

export { menuPage }