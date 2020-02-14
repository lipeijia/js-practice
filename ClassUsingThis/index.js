// ---------- behind the scenes ------------
// https://babeljs.io/

// function _defineProperty(obj, key, value) {
//   if (key in obj) {
//     Object.defineProperty(obj, key, {
//       value: value,
//       enumerable: true,
//       configurable: true,
//       writable: true
//     });
//   } else {
//     obj[key] = value;
//   }
//   return obj;
// }

// class Timer {
//   constructor(durationInput, startButton, pauseButton) {
//     console.log(this);
//     _defineProperty(this, "start", () => {
//       this.importantMethodToCall();
//     });

//     this.durationInput = durationInput;
//     this.startButton = startButton;
//     this.pauseButton = pauseButton;
//     this.startButton.addEventListener("click", this.start);
//   }

//   importantMethodToCall() {
//     console.log("Time to start the timer!");
//   }
// }

// Method 1 -- using arrow function
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
  }
// using arrow function  
  start = () => {
    console.log(this);
    this.importantMethodToCall();
  }
  importantMethodToCall() {
    console.log('Time to start the timer!');
  }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);


// Method 2 -- using bind(), call() or apply()
// class Timer {
//   constructor(durationInput, startButton, pauseButton) {
//     this.durationInput = durationInput;
//     this.startButton = startButton;
//     this.pauseButton = pauseButton;

//     this.startButton.addEventListener('click', this.start.bind(this));
//   }
//   start() {
//     console.log(this);
//     this.importantMethodToCall();
//   }
//   importantMethodToCall() {
//     console.log('Time to start the timer!');
//   }
// }

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
