import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1WnKKSbdiPDd8y1ZX75ILdALQcQwGT0M",
    authDomain: "practica3-f59d0.firebaseapp.com",
    databaseURL: "https://practica3-f59d0-default-rtdb.firebaseio.com"
});
const base = Rebase.createClass(firebaseApp.database());
//this is a named export
export { firebaseApp };
//this is a default export
export default base;