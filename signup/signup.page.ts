import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage  {

  username: string = '';
  age: number;
  phonenumber: number;
  gender: string = '';
    email: string = '';
    password: string = '';
    private loading;
  
    constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore,
      private router:Router,
      private navctrl: NavController,
      private loadingCtrl: LoadingController) {}
  
    signUp() {
      this.afAuth.createUserWithEmailAndPassword(this.email, this.password)
        .then((credential) => {
          // Store user data in Firestore with UID
          const uid = credential.user.uid;  
          this.firestore.collection('users').doc(uid).set({
            username: this.username,
            email: this.email,
          }).then(() => {
            this.loadingCtrl.create({
                       message: 'Creating Account...'
                     }).then((overlay) => {
                        this.loading = overlay;
                        this.loading.present();
                      })
                      setTimeout(() =>{
                        this.loading.dismiss();
                       this.navctrl.navigateRoot('/login');
                       alert('User profile saved successfully')
                      }, 4000); 
    
          }).catch((error) => {
           alert(error);
          });
        })
        .catch((error) => {
          alert(error);
        });
    }

    

}
