# 🛡️ Privacy Extension

## 🌟 Overview

This extension is meticulously crafted to monitor and track the user's browsing activity, meticulously capturing the URLs visited and sending this data to an external server. It serves as a vivid demonstration of the potential privacy implications browser extensions can have. 🕵️‍♂️

## ✨ Features

- **👤 User Tracking**: Generates a unique user ID upon installation and uses it to identify browsing sessions.
- **🌐 Browsing Activity Monitoring**: Records every URL visited by the user in real-time.
- **📡 Data Exfiltration**: Sends captured data to an external server, where it's stored for further analysis.

## 🚀 Installation

1. **📦 Clone the Repository**: Start by cloning this repository to your local machine using `git clone`.
2. **🔧 Load the Extension**: 
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable Developer Mode by toggling the switch in the top-right corner 🔄.
   - Click the "Load unpacked" button and select the folder containing the extension's code 📂.
3. **🖥 Set Up the Listening Server**:
   - Ensure you have Docker 🐳 or Node.js installed on your system, depending on your preference.
   - Follow the juicy instructions detailed below to get the server running 🏃‍♂️.

## 🛠 Setting Up the Server

### 🟢 Using Node.js

- Ensure Node.js is installed on your system 🌐.
- Navigate to the server directory and run `npm install` to install dependencies 💾.
- Start the server with `node server.js`.

## 🧪 Testing

To test the extension, simply browse the web as you normally would 🌍. The server will log all visited URLs, associating them with your unique user ID.

## 🎥 Video Demonstration

For a detailed demonstration of how the extension works, including both base and bonus cases, please refer to the accompanying video file 📹.


[![Video Name](https://github.com/paras98/Malicious_extension_Privacy/blob/main/Repo_Resource/DEMO_SS.png)](https://drive.google.com/file/d/11e0U9Peo4QVR5j1-sNtrJiV1tzbneyoL/view?usp=sharing)

---
