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

/* Assigns the keyDown and keyUp variables to pointer events and makes them available to all piano keys. keyPress uses pointer instead of mouse to allow finger input on touchscreen laptops */
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

/* Game */
const frereJacques = [
  { note: "c-key", time: 0 },
  { note: "d-key", time: 1 },
  { note: "e-key", time: 2 },
  { note: "c-key", time: 3 },
  { note: "c-key", time: 4 },
  { note: "d-key", time: 5 },
  { note: "e-key", time: 6 },
  { note: "c-key", time: 7 },
  { note: "e-key", time: 8 },
  { note: "f-key", time: 9 },
  { note: "g-key", time: 10 },
  { note: "e-key", time: 12 },
  { note: "f-key", time: 13 },
  { note: "g-key", time: 14 },
  { note: "g-key", time: 16 },
  { note: "a-key", time: 16.5 },
  { note: "g-key", time: 17 },
  { note: "f-key", time: 17.5 },
  { note: "e-key", time: 18 },
  { note: "c-key", time: 19 },
  { note: "g-key", time: 20 },
  { note: "a-key", time: 20.5 },
  { note: "g-key", time: 21 },
  { note: "f-key", time: 21.5 },
  { note: "e-key", time: 22 },
  { note: "c-key", time: 23 },
  { note: "c-key", time: 24 },
  { note: "g-key", time: 25 },
  { note: "c-key", time: 26 },
  { note: "c-key", time: 28 },
  { note: "g-key", time: 29 },
  { note: "c-key", time: 30 }
];

$("#startTutor").click(tutorDemo);

/*Iterates through the song array, and simulates a user click on each key. (https://stackoverflow.com/questions/11764714/applying-delay-between-iterations-of-javascript-for-loop)*/
function tutorDemo() {
  let order = frereJacques; //loads the selected song into the function
  let keyObject = {}; //asigns the key buttons(html) as an object
  let speed = 500; //speed that the demo play
  let barLength = $("select#bar-select").val() * 4; //user selects length of demo (4 beats per bar)
  for (let i = 0; i < order.length; i++) {
    let barLengthCorrected = barLength + i - order[i].time;
    if (i == barLengthCorrected) {
      // stops demo at chosen length
      break;
    }
    let correctTiming = order[i].time * speed;
    (i => {
      setTimeout(() => {
        //first setTimeout delays time between notes played
        keyId = document.getElementById(order[i].note);
        keyObject.target = keyId;
        (() => {
          setTimeout(() => {
            //second setTimeout simulates time the key is held down
            keyUp(keyObject);
          }, speed / 2.5);
        })();
        keyDown(keyObject);
      }, correctTiming);
    })(i);
  }
}
