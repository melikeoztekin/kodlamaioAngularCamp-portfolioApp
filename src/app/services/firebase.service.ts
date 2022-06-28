import { SocialMedia } from './../models/socialMedia';
import { Experience } from './../models/experience';
import { Database, get, onValue, ref, set } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { GetUserData } from '../models/getUserData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public database: Database, private _router: Router) {}
  getUser(userName: string) {
    const startConfRef = ref(this.database, `user/${userName}`);
    onValue(startConfRef, (snapshot) => {
      const data: User = snapshot.val();
      GetUserData.email = data.email;
      GetUserData.firstName = data.firstName;
      GetUserData.lastName = data.lastName;
      GetUserData.imgUrl = data.imgUrl;
      GetUserData.country = data.country;
      GetUserData.city = data.city;
      GetUserData.preface = data.preface;
      GetUserData.socialMedia = data.socialMedia;
      GetUserData.experience = data.experience;
    });
  }
  async getExpreince(userName: string) {
    const snapshot = await get(ref(this.database, `user/${userName}`));
    return snapshot.val().experience;
  }
  setUser(
    userModel: User,
    experienceLis: Experience[],
    socialMedia: SocialMedia
  ) {
    userModel.experience = experienceLis;
    userModel.socialMedia = socialMedia;
    set(ref(this.database, 'user/' + userModel.userName), {
      email: userModel.email,
      firstName: userModel.firstName,
      lastName: userModel.lastName,
      imgUrl: userModel.imgUrl,
      country: userModel.country,
      city: userModel.city,
      preface: userModel.preface,
      socialMedia: socialMedia,
      experience: experienceLis,
    });
    alert('portfolio is being prepared');
    this._router.navigateByUrl('cv/' + userModel.userName);
  }
}
