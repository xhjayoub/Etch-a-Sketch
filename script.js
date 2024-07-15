function CreateDiv() {
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    return div;
}


const container = document.querySelector(".container");

for (let i = 0; i<32 ; i++) {
    container.appendChild(CreateDiv())
}