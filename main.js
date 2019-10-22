
//Constants
//Pushes the key id's into the notes array
const keys = ['c-key', 'csharp-key', 'd-key', 'dsharp-key', 'e-key', 'f-key', 'fsharp-key', 'g-key', 'gsharp-key', 'a-key', 'asharp-key', 'b-key', 'chigh-key'];
const notes = [];
keys.forEach(function(key){
    notes.push(document.getElementById(key));
  })
/*Changes background colour of key to indicate key has been pressed*/
const keyDown = keys => {
    keys.target.style.backgroundColor = 'green'
}
const keyUp = keys => {
    keys.target.style.backgroundColor = ''
}
/*KeyPress uses pointer instead of mouse to allow finger input on touchscreen laptops*/
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
};

notes.forEach(keyPress);

