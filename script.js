const container = document.querySelector("#gridContainer");

cells = 6;

for(let i = 1; i <= cells; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for(let j = 1; j <= cells; j++) {
        let column = document.createElement("div");
        column.className = "column";
        column.textContent = "Hover Over Me!";
        row.appendChild(column);
    }
    container.appendChild(row);
}