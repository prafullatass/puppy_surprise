// Create a function that will show and hide the puppy!

// Create a function that will show and hide the puppy!
// Created a global variable for the puppy

const $ = document.querySelector.bind("document")

const buttonEl = document.querySelector("#toggle-btn")
const puppy = document.querySelector("#pup-img")
const addNewButton = document.createElement("button")
addNewButton.id = "huge_btn"
addNewButton.textContent = "Make Me Huge!!!"

buttonEl.addEventListener("click", () => {
    if (puppy.className === "hidden") {
        puppy.setAttribute("class", "visible")
        buttonEl.textContent = "Hide Puppy!!"
        document.querySelector("#puppy-div").appendChild(addNewButton)
        const huge_btnEl = document.querySelector("#huge_btn")
        
        huge_btnEl.addEventListener("click", () => {
            puppy.classList.toggle("huge_pic")
            if (huge_btnEl.className === "huge_pic") {
                huge_btnEl.textContent = "Make Me Huge!!!"
            } else {
                
                huge_btnEl.textContent = " Make me Small!!!"
            }
        })
    } else {
        puppy.setAttribute("class", "hidden");
        document.querySelector("#puppy-div").removeChild(addNewButton)
    }
}
)