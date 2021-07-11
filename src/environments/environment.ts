// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCVtxu6lSIPfSUnYHBeOMck7yRO0IcFyYk",
    authDomain: "gina-app-f2bbf.firebaseapp.com",
    projectId: "gina-app-f2bbf",
    storageBucket: "gina-app-f2bbf.appspot.com",
    messagingSenderId: "131636642671",
    appId: "1:131636642671:web:f8b0568cde538994365e9a",
    measurementId: "G-K0Y5YK5JF6"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
