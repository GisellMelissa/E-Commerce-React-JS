import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCUceooR-FEvfwr2jl9yjG34PLlat5waLE",
    authDomain: "coderhouse-proyecto-c8839.firebaseapp.com",
    projectId: "coderhouse-proyecto-c8839",
    storageBucket: "coderhouse-proyecto-c8839.appspot.com",
    messagingSenderId: "654677643900",
    appId: "1:654677643900:web:6eff1f85e82a9c4b202ff9",
    measurementId: "G-QJHVTP6BH2"
};

const app = firebase.initializeApp(firebaseConfig); 

export default app; 

