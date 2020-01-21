import { Teacher } from './../../core/model/teacher';
import { Student } from './../../core/model/student';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/servers/auth/auth.service';
import { DataService } from 'src/app/servers/data/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';

@Injectable({
	providedIn: 'root'
})
export class SingUpServiceService {
	private userReg: User = {};
	constructor(private afAuth: AuthService, private afStore: DataService, private routesv: Router) {

	}

	async register() {
		this.afAuth.setUser(this.userReg);
		return await this.afAuth.register().then(() => {
			this.routesv.navigateByUrl('/tipo-usuario');//Siguiente registro
		}).catch((err) => {
			console.log(err);//Alerta
		});
	}
	async addStudent(student: Student) {
		this.afAuth.setUser(this.userReg);
		return await this.afStore.addUserProfile(this.afAuth.getAuth().currentUser.uid, student).then(() => {
			this.routesv.navigateByUrl('/logged-in');//Siguiente registro
		}).catch((err) => {
			console.log(err);//Alerta
		});
	}
	async addTeacher(teacher: Teacher) {
		this.afAuth.setUser(this.userReg);
		return await this.afStore.addUserProfile(this.afAuth.getAuth().currentUser.uid, teacher).then(() => {
			this.routesv.navigateByUrl('/logged-in');//Siguiente registro
		}).catch((err) => {
			console.log(err);//Alerta
		});
	}



    /**
     * Getter $userReg
     * @return {User }
     */
	public get $userReg(): User {
		return this.userReg;
	}

    /**
     * Setter $userReg
     * @param {User } value
     */
	public set $userReg(value: User) {
		this.userReg = value;
	}


}
