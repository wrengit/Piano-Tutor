
//Constants
/*Pushes the key id's into the notes array*/
const keys = ['c-key', 'csharp-key', 'd-key', 'dsharp-key', 'e-key', 'f-key', 'fsharp-key', 'g-key', 'gsharp-key', 'a-key', 'asharp-key', 'b-key', 'chigh-key']
const notes = []

keys.forEach((key) => {
    notes.push(document.getElementById(key));
})
/*Asigns #notebox to noteDataBox*/
const noteDataBox = document.getElementById("notebox");

/*Changes background colour of key to indicate key has been pressed, displays played note above piano*/
const keyDown = key => {
    key.target.style.backgroundColor = 'green';
    noteDataBox.innerHTML = key.target.getAttribute("data-note");
}
const keyUp = key => {
    key.target.style.backgroundColor = ''
}

/*keyPress uses pointer instead of mouse to allow finger input on touchscreen laptops*/

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

/*Stored song arrays*/