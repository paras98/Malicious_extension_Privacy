  // Function to generate a UUID
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  // Generate and store a UUID on installation
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get('userId', (result) => {
      console.log(result.userId)
      if (!result.userId) {
        const userId = generateUUID();
        chrome.storage.local.set({userId: userId});
        console.log(userId)
      }
    });
  });
  
  // Use the UUID when sending data
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.type === 'main_frame') {
        chrome.storage.local.get('userId', (result) => {
          console.log("Got the user id ",result.userId)
          const userId = result.userId;
          const data = {
            userId: userId,
            url: details.url
          };
          console.log("Sent data is ",data)
          fetch('http://127.0.0.1:3045/track', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
        });
      }
      return { cancel: false };
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  