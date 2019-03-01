import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAzaKm0865BrZPEIHo8ToKphh-OtpnrxPk",
    authDomain: "freehandprojectsadmin.firebaseapp.com",
    databaseURL: "https://freehandprojectsadmin.firebaseio.com",
    projectId: "freehandprojectsadmin",
    storageBucket: "freehandprojectsadmin.appspot.com",
    messagingSenderId: "1087724835316"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;