/*Pushes the key id's into the notes array, making all paino key divs available to notes array*/
const keys = ['c-key', 'csharp-key', 'd-key', 'dsharp-key', 'e-key', 'f-key', 'fsharp-key', 'g-key', 'gsharp-key', 'a-key', 'asharp-key', 'b-key', 'chigh-key']
const notes = []

keys.forEach((key) => {
    notes.push(document.getElementById(key));
})
/*Assigns #notebox to noteDataBox*/
const noteDataBox = document.getElementById("notebox");

/*Changes background colour of key to indicate key has been pressed, displays played note above piano on keyUp/Down variable*/
let timerNote;
function timerNoteDelay() { 
    clearTimeout(timerNote);
    timerNote = setTimeout (() => {
        noteDataBox.innerHTML = ""
    }, 1500)
};

const keyDown = key => {
    key.target.style.backgroundColor = 'green';
    noteDataBox.innerHTML = key.target.getAttribute("data-note");
}
const keyUp = key => {
    key.target.style.backgroundColor = ''; 
    timerNoteDelay();
}

/*Assigns the keyDown and keyUp variables to pointer events and makes them available to all piano keys. keyPress uses pointer instead of mouse to allow finger input on touchscreen laptops*/

const keyPress = note => {
    note.onpointerdown = () => {
        keyDown(event);
    }
    note.onpointerup = () => {
        keyUp(event);
    }
    note.onpointerleave = () => {
        keyUp(event);
    }
}
notes.forEach(keyPress);
