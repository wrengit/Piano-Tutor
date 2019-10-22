/*Constants*/

const keys = ['c-key', 'csharp-key', 'd-key', 'dsharp-key', 'e-key', 'f-key', 'fsharp-key', 'g-key', 'gsharp-key', 'a-key', 'asharp-key', 'b-key', 'chigh-key'];
const notes = [];
keys.forEach(function(key){
    notes.push(document.getElementById(key));
  })

const keyDown = keys => {
    keys.target.style.backgroundColor = 'green'
}
const keyUp = keys => {
    keys.target.style.backgroundColor = ''
}
const keyPress = note => {
    note.onmousedown = () => {
        keyDown(event);
    }
    note.onmouseup = () => {
        keyUp(event);
    }
    note.onmouseout =() => {
        keyUp(event);
    }
    note.ontouchstart = () => {
        keyDown(event);
    }
    note.ontouchend = () => {
        keyUp(event);
    }
};

notes.forEach(keyPress);