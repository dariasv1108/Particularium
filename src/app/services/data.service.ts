import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User } from '../core/model/user';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor(private afStoreSv: AngularFirestore) {}
	addProfile(idUser: string, user: User) {
		return this.afStoreSv.collection('user').doc(idUser).set(Object.assign({}, user));
	}
	getUser(idUser: string) {
		let user = this.afStoreSv.collection('user').doc(idUser).get();
		return user
			.toPromise()
			.then((doc) => {
				if (doc.exists) {
					return doc.data();
					console.log('Document data:', doc.data());
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			})
			.catch(function(error) {
				console.log('Error getting document:', error);
			});
	}
	addDemand() {
		//to do
	}
	getDemand() {
		//to do
	}
	getAllDemands() {
		//to do
	}
	addOffer() {
		//to do
	}
	getOffer() {
		//to do
	}
	getAllOffers() {
		//to do
	}
}
