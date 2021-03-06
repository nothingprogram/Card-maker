import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserChange) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChange(user);
    });
  }

  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
