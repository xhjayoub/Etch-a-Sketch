function createSquare(n, width, height) {
    console.log(width, height)
    const div = document.createElement("div");
    div.setAttribute("class","square");
    console.log(`height: ${height / n}px; width: ${width / n}px;`);
    div.style.cssText = `height: ${height / n}px; width: ${width / n}px;`;
    return div;
}

function createRow(n,containerWidth, containerHeight) {
    console.log(containerHeight, containerWidth)
    const div = document.createElement("div");
    div.setAttribute("class","row");
    for (let i = 0; i<n; i++) {
        div.appendChild(createSquare(n,containerWidth, containerHeight));
    }
    return div;
}

function generateSketch(n) {
    const container = document.querySelector(".container");
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;
    for (let i = 0; i<n; i++) {
        container.appendChild(createRow(n,containerWidth, containerHeight))
    }
}
generateSketch(10);