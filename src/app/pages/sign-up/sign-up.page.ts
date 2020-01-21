import { SingUpServiceService } from './../../servers/singUp/sing-up-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private userReg: User = {};

  constructor(private servSingUp: SingUpServiceService) { 
    this.servSingUp.$userReg = this.userReg;
  }

  ngOnInit() {
  }

  


  registrar(){
    console.log("html: "+this.userReg.email)
    console.log("servicio: "+this.servSingUp.$userReg.email)
    this.servSingUp.register()
  }

}
