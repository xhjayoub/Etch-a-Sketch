function CreateDiv() {
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    return div;
}



function generateSquares(n) {
    const container = document.querySelector(".container");
    for (let i = 0; i<(n*n) ; i++) {
        container.appendChild(CreateDiv())
    }
    const arrDivs = document.querySelectorAll(".square");
    arrDivs.forEach((e) => {
        e.addEventListener('mouseover',() => {
        e.style.backgroundColor = `rgb(${randomN(255)},${randomN(255)},${randomN(255)})`;
    })
})
}

function getSquaresNum() {
    let num = document.querySelector("#squaresNum").value;
    if (num > 100) {
        alert("Enter a number less than 100!");
        return false;
    }
    return parseInt(num);
}

function randomN(n) {
    return Math.floor(Math.random() * 255);
}


generateSquares(16);

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",() => {
    document.querySelector(".container").innerHTML = "";
    generateSquares(getSquaresNum());
})

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    document.querySelector(".container").innerHTML = "";
    generateSquares(16);
    document.querySelector("#squaresNum").value = 16;
})