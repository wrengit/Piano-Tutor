
/* Pushes the key id's into the notes array, making all piano key divs available to notes array */
const keys = [
  "c-key",
  "csharp-key",
  "d-key",
  "dsharp-key",
  "e-key",
  "f-key",
  "fsharp-key",
  "g-key",
  "gsharp-key",
  "a-key",
  "asharp-key",
  "b-key",
  "chigh-key"
];

const notes = [];

keys.forEach(key => {
  notes.push(document.getElementById(key));
});

/* Sets a delay before the pressed note disapears from the display in #notebox */
let timerNote;
const timerNoteDelay = () => {
  clearTimeout(timerNote);
  timerNote = setTimeout(() => {
    $("#notebox").html(" ");
  }, 1500);
};

/* Stops note audio playing on repeated key presses of the same key */
const stopAudio = audio => {
  audio.pause();
  audio.currentTime = 0;
};

/* Events triggered on a key being pressed */
const keyDown = key => {
  let playAudio = key.target.getAttribute("data-sound"); // assigns the data-sound attribute of the pressed key to playAudio
  let targetPlayAudio = document.getElementById(playAudio); // matches the data-sound info the ID of the audio track
  stopAudio(targetPlayAudio); // resets audio track if pressed before audio finished
  targetPlayAudio.play(); // plays audio on keypress
  key.target.setAttribute("style", "background-color: orange; border: orange"); // indicates key has been pressed visually
  $("#notebox").html(key.target.getAttribute("data-note")); // fetch and pass note displayed in notebox above piano
};

/* Events trigged on a key being released */
const keyUp = key => {
  key.target.setAttribute("style", "background-color: ; border: ");
  timerNoteDelay();
};

/* Assigns the keyDown and keyUp variables to pointer events and tutorDemo and makes them available to all piano keys. keyPress uses pointer instead of mouse to allow finger input on touchscreen laptops */
const keyPress = note => {
  note.onpointerdown = () => {
    keyDown(event);
  };
  note.onpointerup = () => {
    keyUp(event);
  };
  note.onpointerleave = () => {
    keyUp(event);
  };
};

/* Makes the keyPress variable available to all the key divs that were pushed to the notes array */
notes.forEach(keyPress);

$("#startTutor").click(tutorDemo);

/*
tutorDemo

Iterates through the song array, and simulates a user click on each key.
- keyObject asigns the key buttons(html) as an object
- speed changes the demo play speed
- barLength changes how much of the song is played in the demo (4 beats per bar)
'if' statement breaks the song loop when the barLength is reached
'setTimeout' example was learnt from 'https://stackoverflow.com/questions/11764714/applying-delay-between-iterations-of-javascript-for-loop', and modified
First 'setTimeout' sets the delay between notes. This is modified by the 'correctTiming' variable, which uses the 'time' value of the song array
Second 'setTimeout' simulates time the key is held down (colour highlighting)
*/

function tutorDemo() {
  let keyObject = {};
  let speed = $("select#speed-select").val();
  let barLength = $("select#bar-select").val() * 4;
  let order = frereJacques;
  for (let i = 0; i < order.length; i++) {
    let barLengthCorrected = barLength + i - order[i].time;
    if (i == barLengthCorrected) {
      break;
    }
    let correctTiming = order[i].time * speed;
    (i => {
      setTimeout(() => {
        keyId = document.getElementById(order[i].note);
        keyObject.target = keyId;
        (() => {
          setTimeout(() => {
            keyUp(keyObject);
          }, speed / 2.5);
        })();
        keyDown(keyObject);
      }, correctTiming);
    })(i);
  }
}

/*https://github.com/kayahr/jquery-fullscreen-plugin/*/

function toggleFullscreen(){
   $(document).toggleFullScreen();
}
$("#fullscreen-button").click(toggleFullscreen);

