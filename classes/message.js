class Message {
  constructor(message) {
    this.message = message;
  }
  show() {
    alert("test");
  }
}

const myMessage = new Message("Hello World!");
const button = document.querySelector("#myButton");

// Attach a click event listener to the button
button.addEventListener('click', () => {
  alert('You clicked the button');
});