# Vibration API Playground

## Aim
A project that aims explore the vibration API
 - [W3C Spec](https://www.w3.org/TR/vibration/)
 - [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)
 - [caniuse.com listing](https://caniuse.com/?search=vibration%20api): Outlines browser compatibility

## Outcomes
 - Discoveded that Chrome on Android doesn't seem to trigger vibration when a value <= 1000ms is used
   - e.g. `navigator.vibrate(500)`

<br/><br/>
# Installation

## Pre requisites
 
Have installed on your system
 - install [node.js](https://nodejs.org/en)

## Steps to run

  1. Download the project repository
  2. In a terminal/command line naviagte inside the project repository
  3. Install the required node packages<pre>npm install</pre>
  4. Run the project <pre>`npm start`</pre>
