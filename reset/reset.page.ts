import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage {

  email: string = '';

  constructor(private afAuth: AngularFireAuth) {}

  resetPassword() {
    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
       alert('Password reset email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error);
      });
  }

}
