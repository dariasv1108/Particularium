import { User } from './../../interfaces/User';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage implements OnInit {
	private userLog: User = {};

	constructor(private routesv: Router, private afAuth: AuthService, private afStore: DataService) {
		this.afAuth.setUser(this.userLog);
	}

	ngOnInit() {}

	async login() {
		return await this.afAuth
			.login()
			.then(() => {
				this.routesv.navigateByUrl('/profile');
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
