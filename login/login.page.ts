import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  users: any[] = [];
  private loading;
  constructor(private afAuth: AngularFireAuth, private firebaseService: AuthenticationService,
    private router:Router,
    private navctrl: NavController,
        private loadingCtrl: LoadingController) {}

  logIn() {
    this.afAuth.signInWithEmailAndPassword(this.email, this.password)
      .then((res) => {
        this.loadingCtrl.create({
          message: 'Authenticating...'
        }).then((overlay) => {
          this.loading = overlay;
          this.loading.present();
        })
        setTimeout(() =>{
          this.loading.dismiss();
          this.navctrl.navigateRoot('/tabs/home');
          alert('User logged in successfully')
        }, 4000); 
        
        console.log('User logged in successfully:', res);
      })
      .catch((error) => {
        alert(error);
      });
  }

  ngOnInit() {
    this.firebaseService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
