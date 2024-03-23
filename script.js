const container = document.getElementById("gridContainer");

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
for(const child of container.children) {
    child.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = ("#" + (Math.floor(Math.random()*16777215).toString(16)));
    });

    child.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = '';
    });
}