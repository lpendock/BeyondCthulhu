function handleMessage(request, sender, sendResponse) {
    console.log("Message from the content script: " +
      request.hello);
    sendResponse({response: "I can hear you loud and clear!"});
  }
  
  browser.runtime.onMessage.addListener(handleMessage);


/*
We can establish commuication between the two pages!
*/