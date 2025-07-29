import aboutContent from "./about.html"

const aboutPage = (function() {
    const mainDiv = document.createElement("div")
    mainDiv.classList.add("about")
    mainDiv.innerHTML = aboutContent

    return { mainDiv }
})()

export { aboutPage }