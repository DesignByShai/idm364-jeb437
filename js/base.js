import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBRk_PiPPd7EioNqve1EadTp6kwZl60nJY",
    authDomain: "idm-persisting-state-master45.firebaseapp.com",
    databaseURL: "https://idm-persisting-state-master45.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {
	firebaseApp
};
export default base;