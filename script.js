function createSquare() {
    const div = document.createElement("div");
    div.setAttribute("class","square");
    return div;
}

function createRow(n) {
    const div = document.createElement("div");
    div.setAttribute("class","row");
    for (let i = 0; i<n; i++) {
        div.appendChild(createSquare());
    }
    return div;
}

function generateSketch(n) {
    const container = document.querySelector(".container");
    for (let i = 0; i<n; i++) {
        container.appendChild(createRow(n))
    }
}
