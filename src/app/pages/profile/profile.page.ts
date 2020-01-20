import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: [ './profile.page.scss' ]
})
export class ProfilePage implements OnInit {
	private route: any = '/login';

	constructor(private routesv: Router, private afAuth: AuthService, private afStoreSv: DataService) {}

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

	async getUser() {
		let user = await this.afStoreSv.getUser(this.afAuth.getAuth().currentUser.uid);
		console.log(user);
	}
}
