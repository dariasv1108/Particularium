import { Student } from './../../core/model/student';
import { Teacher } from './../../core/model/teacher';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/core/model/user';

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

	async getProfileUser() {
		let user = await this.afStoreSv.getProfile(this.afAuth.getAuth().currentUser.uid);
		console.log(user);
	}
	async addUserProfile() {
		//await this.afStoreSv.addUserProfile(this.afAuth.getAuth().currentUser.uid, this.user);
	}
	async test(){
		//await this.afStoreSv.updateTeacherProfile(this.afAuth.getAuth().currentUser.uid, this.user);
	}
}
