function createSquare(n, width, height) {
    const div = document.createElement("div");
    div.setAttribute("class","square");
    div.style.cssText = `height: ${height / n}px; width: ${width / n}px;`;
    div.addEventListener("mouseover" , () => {
        div.style.backgroundColor = `rgb(${randomN(255)},${randomN(255)},${randomN(255)})`;
    })
    return div;
}

function createRow(n,containerWidth, containerHeight) {
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

function randomN(n) {
    return Math.floor(Math.random() * 255);
}

generateSketch(16);

function getSquaresNum() {
    let num = document.querySelector("#squaresNum").value;
    if (num === '') {
        alert("Enter a number!");
        return 16;
    }
    if (num > 100) {
        alert("Enter a number less than 100!");
        return 16;
    }
    return parseInt(num);
}


const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = "";
    generateSketch(getSquaresNum());
})

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    document.querySelector(".container").innerHTML = "";
    generateSketch(16);
    document.querySelector("#squaresNum").value = 16;
})