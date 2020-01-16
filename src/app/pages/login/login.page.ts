import { User } from './../../interfaces/User';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: [ './login.page.scss' ]
})
export class LoginPage implements OnInit {
	private userLog: User = {};
	constructor(private routesv: Router, private AuthService: AuthService) {}

	ngOnInit() {}

	async login() {
		return await this.AuthService
			.login(this.userLog)
			.then(() => {
				this.routesv.navigateByUrl('/profile');
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
