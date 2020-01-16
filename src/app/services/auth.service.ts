import { User } from './../interfaces/User';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private afAuth: AngularFireAuth) {}

	register(user: User) {
		if (user.password !== user.cpassword) {
			return console.error('Password dont match');
		}
		return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
	}
	login(user: User) {
		return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
	}
	logOut() {
		return this.afAuth.auth.signOut();
	}
	sendVerificationEmail() {
		if (!this.isUserVerified()) {
			return this.afAuth.auth.currentUser.sendEmailVerification();
		}
	}
	private isUserVerified() {
		return this.afAuth.auth.currentUser.emailVerified;
	}
	getAuth() {
		return this.afAuth.auth;
	}
	deleteUser() {
		if (this.afAuth.auth.currentUser.providerId == null) {
			 console.log('This user doesnt exits already');
		}
		return this.afAuth.auth.currentUser.delete();
	}
}
