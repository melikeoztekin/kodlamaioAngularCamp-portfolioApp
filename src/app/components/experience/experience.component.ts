import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Experience } from './../../models/experience';
import { Component, OnInit } from '@angular/core';
import { GetUserData } from 'src/app/models/getUserData';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  users = GetUserData;
  experience: Experience[];
  constructor(
    private _firebaseService: FirebaseService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(async (param) => {
      if (param['userName']) {
        this.experience = await this._firebaseService.getExperience(
          param['userName']
        );
      } else {
        this.experience = await this._firebaseService.getExperience(
          'philipgilbert'
        );
      }
    });
  }
}
