import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: [ './profile.page.scss' ]
})
export class ProfilePage implements OnInit {
	private route: any = '/login';
	constructor(private routesv: Router, private afAuth: AuthService) {}

	ngOnInit() {}

	async sendVerificationEmail() {
		await this.afAuth.sendVerificationEmail();
	}

	async logOut() {
		await this.afAuth.logOut().then(() => {
			this.navigateToLog();
		});
	}

	async deleteUser() {
		await this.afAuth.deleteUser().then(() => {
			this.navigateToLog();
		});
	}

	private navigateToLog() {
		this.routesv.navigateByUrl(this.route);
	}
}
