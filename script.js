function CreateDiv() {
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    return div;
}


const container = document.querySelector(".container");

for (let i = 0; i<256 ; i++) {
    container.appendChild(CreateDiv())
}

const arrDivs = document.querySelectorAll(".square");
arrDivs.forEach((e) => {
    e.addEventListener('mouseover',() => {
        e.style.backgroundColor = "blue";
    })
})