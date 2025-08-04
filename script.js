
const gridIcon = document.getElementById("tab-grid");
const squareIcon = document.getElementById("tab-square");
const contentGrid = document.getElementById("content-grid");
const contentSquare = document.getElementById("content-square");

function removeFocus() {
    if (document.activeElement) {
        document.activeElement.blur();
    }
}

gridIcon.addEventListener("click", () => {
    gridIcon.style.color = "#0095f6";
    squareIcon.style.color = "#888888";
    contentGrid.style.display = "block";
    contentSquare.style.display = "none";
    removeFocus();
});

squareIcon.addEventListener("click", () => {
    squareIcon.style.color = "#0095f6";
    gridIcon.style.color = "#888888";
    contentGrid.style.display = "none";
    contentSquare.style.display = "block";
    removeFocus();
});
