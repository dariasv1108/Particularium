import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';


@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: [ './register.page.scss' ]
})
export class RegisterPage implements OnInit {
	private userReg: User = {};

	constructor(private afAuth: AuthService, private afStore: DataService) {
		this.afAuth.setUser(this.userReg);
	}

	ngOnInit() {}

	async register() {
		try {
			if (await this.afAuth.register()) {
				//this.setUser();
			}
		} catch (err) {
			console.dir(err);
		}
	}
	//private setUser() {
	//	this.afStore.addProfile(this.afAuth.getAuth().currentUser.uid,this.afAuth.getUser());
	//}
}
