# TBZLunchLocations
A React Native app which lets TBZ students rate food locations near the school.  
React native allows developers to develop performant mobile apps targeting both Android and Ios.  
Unlike the Ionic Framwork, Apache Cordova, PhoneGap etc. react native uses native components instead of rendering  Webviews.
## Prerequisites
- Nodejs 10+ installed. [Download here](https://nodejs.org/en/)
- Java 8+. [Download here](https://java.com/en/download/)
- Latest android SDK. [Download here](https://developer.android.com/studio/#downloads)
- Built and start node JSON-REST-API server. [Repository URL](https://github.com/danielHpeters/tbz-lunch-locations-webservice)

## Build instructions
- Install dependencies with `npm install`.
- Change the API_HOST variable in `src/config/AppConfig.ts` to the ip of the machine where you run API Server, but don't change the port number (Make sure the phone and the server are in the same network.).
- Alternatively you could change the host to localhost and enter adb reverse tcp:3000 tcp:3000. (This makes the android phone to use port :3000 of dev machine instead of itself when calling localhost. Works when devices are connected via USB)
- To build and run android version:  `react-native run-android`. (IOS Versuion currently not supported.)

## Tips
- Shaking the Phone when the App is running opens a dev menu.
- See changes instantly after save by checking the option in the dev menu in app.
- You can debug and make changes to the app without connecting your device via cable by setting the server host and debug port (8081) in the dev settings of the app (for example: `192.168.3.120:8081`). You then only need to execute `react-native start` command on dev machine to start debug and bundler server.
