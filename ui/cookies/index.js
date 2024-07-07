const cookieBox = document.querySelector(".wrapper"),
buttons = document.querySelectorAll(".button")
const executeCodes = () => {
    if(document.cookie.includes("codingLab")) return;
    cookieBox.classList.add("show");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");
            if(button.id == "acceptBtn"){
                //set cookie for 1 month 60 = 1min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
                document.cookie = "cookieBy= codingLab; max-age=" + 60 * 60 * 24 * 30
            }
        })
    })
}
window.addEventListener("load", executeCodes)