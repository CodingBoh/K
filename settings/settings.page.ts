import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userProfile: any = {};
  private loading;
  uid: string = '';
  username: string = '';
  age: number;
  phonenumber: number;
  gender: string = '';
    email: string = '';
  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private navCtrl: NavController,
      private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.getUserProfile(user.uid);
      }
    });
  }

  getUserProfile(uid: string) {
    this.firestore.collection('users').doc(uid).valueChanges().subscribe(profile => {
      this.userProfile = profile;
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.loadingCtrl.create({
        message: 'Logging Out...'
      }).then((overlay) => {
         this.loading = overlay;
         this.loading.present();
       })
       setTimeout(() =>{
         this.loading.dismiss();
        this.navCtrl.navigateRoot('/login');
        alert('User logged out')
       }, 4000); 
    }).catch((error) => {
      console.error('Error logging out:', error);
    });
  }

  deleteUserData(userId: string) {
    this.firestore.collection('users').doc(userId).delete().then(() => {
      this.loadingCtrl.create({
        message: 'Deleting Acc...'
      }).then((overlay) => {
         this.loading = overlay;
         this.loading.present();
       })
       setTimeout(() =>{
         this.loading.dismiss();
        this.navCtrl.navigateRoot('/login');
        alert('User data deleted')
       }, 4000); 
    }).catch(error => {
      console.error('Error deleting user data', error);
    });
  }

  deleteAccount() {
    this.afAuth.currentUser.then(user => {
      if (user) {
        const userId = user.uid;
        user.delete().then(() => {
          console.log('User account deleted successfully');
          this.deleteUserData(userId); // Delete user data
          this.navCtrl.navigateRoot('/login'); // Redirect to login page after deletion
        }).catch(error => {
          console.error('Error deleting user account', error);
        });
      }
    });
  }

  updateUserInfo() {
    if (this.uid) {
      this.firestore.collection('users').doc(this.uid).update({
        username: this.username,
        age: this.age,
        phonenumber: this.phonenumber,
        gender: this.gender,
        email: this.email,
      }).then(() => {
        console.log('User profile updated successfully');
      }).catch((error) => {
        console.error('Error updating user profile:', error);
      });
    } else {
      console.error('User is not logged in or UID is missing');
    }
  }

}
