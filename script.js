function CreateDiv() {
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    return div;
}


const body = document.querySelector("body");

for (let i = 0; i<16 ; i++) {
    body.appendChild(CreateDiv())
}