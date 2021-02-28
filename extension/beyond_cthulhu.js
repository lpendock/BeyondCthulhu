//How to create a button.
//We will need to create new buttons where appropriate, not just at the end of some body but this is a good first step.

const aNewButtonElement = document.createElement("button");

aNewButtonElement.name = "mybutton";
aNewButtonElement.innerText = "New Button"

//We want this button to send messages to the extension.

aNewButtonElement.onclick = buttonClicked;

document.body.appendChild(aNewButtonElement);

function handleResponse(message) {
    console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
    console.log(`Error: ${error}`);
  }

function buttonClicked() {
    var tempid = "96551d300425ca0be6bf51c3f9962841c48051e0@temporary-addon"
    var message = {hello: "This is a message from me, your extension."};
    console.log('Sent message ' + message);
    var response = browser.runtime.sendMessage(
        tempid,
        message
    );
    response.then(handleResponse, handleError);
}