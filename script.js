let displayElement = document.getElementById("display");
let stored = 0;
let reset = false;
let decimal = false;
let last;

let buttons = {
    clear: {
        id: "ac",
        display: "0",
        press(){
            reset = false;
            decimal = false;
            stored = 0;
            clear_display();
        },
        element: document.getElementById("ac"),
    },
    pm: {
        id: "pm",
        display: "+/-",
        press(){
            console.log("pressed +/-");
        },
        element: document.getElementById("pm"),
    },
    percent: {
        id: "percent",
        display: "%",
        press(){
            console.log(`pressed ${this.display}`);
        },
        element: document.getElementById("percent"),
    },
    divide: {
        id: "divide",
        display: "/",
        press(){
            reset = true;
            console.log(`pressed ${this.display}`);
        },
        element: document.getElementById("divide"),
    },
    multiply: {
        id: "multiply",
        display: "*",
        press(){
            reset = true;
            console.log(`pressed ${this.display}`);
        },
        element: document.getElementById("multiply"),
    },
    subtract: {
        id: "subtract",
        display: "-",
        press(){
            reset = true;
            console.log(`pressed ${this.display}`);
        },
        element: document.getElementById("subtract"),
    },
    add: {
        id: "add",
        display: "+",
        press(){
            reset = true;
            add();
            console.log(`pressed ${this.display}`);
        },
        element: document.getElementById("add"),
    },
    equals: {
        id: "equals",
        display: "=",
        press(){
            last();
            clear_display();
            update_display(stored);
            console.log(`pressed ${this.display}`);
        },
        element: document.getElementById("equals"),
    },
    one: {
        id: "one",
        display: "1",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("one"),
    },
    two: {
        id: "two",
        display: "2",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("two"),
    },
    three: {
        id: "three",
        display: "3",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("three"),
    },
    four: {
        id: "four",
        display: "4",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("four"),
    },
    five: {
        id: "five",
        display: "5",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("five"),
    },
    six: {
        id: "six",
        display: "6",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("six"),
    },
    seven: {
        id: "seven",
        display: "7",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("seven"),
    },
    eight: {
        id: "eight",
        display: "8",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("eight"),
    },
    nine: {
        id: "nine",
        display: "9",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("nine"),
    },
    zero: {
        id: "zero",
        display: "0",
        press(){
            if (reset) {clear_display()};
            reset = false;
            update_display(this.display);
        },
        element: document.getElementById("zero"),
    },
    dot: {
        id: "dot",
        display: ".",
        press(){
            update_display(this.display);
        },
        element: document.getElementById("dot"),
    },
}

for (const property in buttons) {
    //console.log(`${property}: ${buttons[property].element}`);
    buttons[property].element.addEventListener("click", () => {
        buttons[property].press();
    })
}

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

function storeNum() {
    stored = parseInt(display.textContent);
}

function add() {
    stored += parseInt(display.textContent);
    last = add;
}

function multiply() {
    stored *= parseInt(display.textContent);
    last = multiply;
}