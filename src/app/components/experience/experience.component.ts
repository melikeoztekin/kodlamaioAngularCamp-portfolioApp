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
  userData = GetUserData;
  experience: Experience[];
  constructor(
    private firebaseService: FirebaseService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (param) => {
      if (param['userName']) {
        this.experience = await this.firebaseService.getExpreince(
          param['userName']
        );
      }
    });
  }
}
