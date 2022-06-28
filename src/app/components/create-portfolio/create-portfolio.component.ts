import { SocialMedia } from './../../models/socialMedia';
import { Experience } from './../../models/experience';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css'],
})
export class CreatePortfolioComponent implements OnInit {
  experienceList: Experience[] = [];
  socialMediaList: SocialMedia[] = [];
  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    imgUrl: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    preface: new FormControl('', [Validators.required]),
  });
  socialMediaForm = new FormGroup({
    linkedin: new FormControl(''),
    github: new FormControl(''),
    stackoverflow: new FormControl(''),
    medium: new FormControl(''),
    facebook: new FormControl(''),
    twitter: new FormControl(''),
    instagram: new FormControl(''),
  });
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.firebaseService.setUser(
      this.userForm.value,
      this.experienceList,
      this.socialMediaForm.value
    );
  }
  addExperience() {
    this.experienceList.push({
      location: '',
      position: '',
      startDate: '',
      finishDate: '',
      description: '',
    });
  }
  addSocialMedia() {
    this.socialMediaList.push({
      github: '',
      linkedin: '',
      medium: '',
      stackoverflow: '',
      facebook: '',
      twitter: '',
      instagram: '',
    });
  }
}
