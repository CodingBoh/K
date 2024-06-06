import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, NavController } from '@ionic/angular';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile: any = {};
  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private productService: CartService
    
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.getUserProfile(user.uid);
      }
    });
    this.loadFavorites();
  }

  getUserProfile(uid: string) {
    this.firestore.collection('users').doc(uid).valueChanges().subscribe(profile => {
      this.userProfile = profile;
    });
  }
  
  favorites = [];



  loadFavorites() {
    this.favorites = this.productService.getFavorites();
  }

  removeFromFavorites(product) {
    this.productService.removeFromFavorites(product);
    this.loadFavorites();
  }
}
