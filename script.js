let display = document.getElementById("display");

let clearBtn = document.getElementById("ac");

let nineBtn = document.getElementById("nine");



nineBtn.addEventListener("click", () => {
    update_display("9");
})

clearBtn.addEventListener("click", () => {
    clear_display()
});

function update_display(s) {
    if (display.textContent == "0") {
        display.textContent = s;
        return;
    }
    display.textContent += s;
}

function clear_display() {
    display.textContent = "0";
}