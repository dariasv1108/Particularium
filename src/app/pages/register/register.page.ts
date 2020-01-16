import { User } from './../../interfaces/User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: [ './register.page.scss' ]
})
export class RegisterPage implements OnInit {
	private userReg: User = {};

	constructor(public afAuth: AuthService) {}

	ngOnInit() {}

	async register() {
		try {
			return await this.afAuth.register(this.userReg);
		} catch (err) {
			console.dir(err);
		}
	}
}
