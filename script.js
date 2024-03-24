function displayGrid(size = 8) {
    for(let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for(let j = 1; j <= size; j++) {
            let column = document.createElement("div");
            column.className = "column";
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

function alterElementColor() {
    // Ittirates over each child in parent div
    for(const child of container.children) {
        child.addEventListener('mouseover', (e) => {
            // Changes color of all div children to a random color
            e.target.style.backgroundColor = ("#" + (Math.floor(Math.random()*16777215).toString(16)));
        });

        child.addEventListener('mouseout', (e) => {
            e.target.style.backgroundColor = '';
        });
    }

    button.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = ("#" + (Math.floor(Math.random()*16777215).toString(16)));
    })
    
    button.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = '';
    })
}

function changeGridSize() {
    button.addEventListener("click", (e) => {
        let verifyInput = true;

        while(verifyInput) {
            // Turn user input from string to number
            let input = Number(prompt("Enter the number of squares per side for the new grid: "));

            if (input <= 100) {
                // Removes all children from parent div
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
                displayGrid(input);
                alterElementColor();
                //Exits while loop
                verifyInput = false;
            } else {
                alert("Please enter a number that is equal to or less than 100.")
                continue;
            }
        }
    })
}

const container = document.getElementById("gridContainer");
const button = document.querySelector("button");

displayGrid();
alterElementColor();
changeGridSize();