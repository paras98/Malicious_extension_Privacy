# Privacy Extension

## Overview

This project is a privacy extension that tracks browsing activity and sends data to an external server. It consists of a Chrome extension and a server component that receives and stores the URLs visited by the user.

## Directory Structure

```
project_root/
├── extension/
│   ├── background.js
│   └── manifest.json
└── server/
    ├── server.js
    └── package.json
```

## Setup

### Server Setup

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

   The server will start listening on port 3045 (or the port you've specified in `server.js`).

### Extension Setup

1. Open the Chrome browser and go to `chrome://extensions/`.

2. Enable "Developer mode" by toggling the switch in the top-right corner.

3. Click on "Load unpacked" and select the `extension` directory from your project.

4. The extension should now be installed and active.

## Usage

### Updating the Server Port in `background.js`

If you've changed the port on which the server is running, you'll need to update the `fetch` URL in `background.js` to match the new port:

```javascript
fetch('http://127.0.0.1:NEW_PORT/track', {
  // ...
});
```

Replace `NEW_PORT` with the port number you're using for the server.

### Checking Tracked URLs

To view the list of tracked URLs, visit the following URL in your browser:

```
http://127.0.0.1:3045/urls
```

Replace `3045` with the port number if you've changed it. This page will display a list of URLs that have been tracked by the extension and sent to the server.
```

You can save this content in a file named `README.md` in the root directory of your project.