import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'

var config = {
	apiKey: "AIzaSyCHB5NrkTlwYu-evigzTV-4pRq05sg2DKc",
  	authDomain: "react-app-dfa8b.firebaseapp.com",
  	databaseURL: "https://react-app-dfa8b-default-rtdb.firebaseio.com",
  	projectId: "react-app-dfa8b",
  	storageBucket: "react-app-dfa8b.appspot.com",
  	messagingSenderId: "132446543454",
  	appId: "1:132446543454:web:edbc2977c33b3649111ecf"
}

firebase.initializeApp(config)


class Firebase {
	constructor() {
		
		this.auth = firebase.auth()
		this.db = firebase.firestore()
	}
	

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
		
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	
}

export default new Firebase()
