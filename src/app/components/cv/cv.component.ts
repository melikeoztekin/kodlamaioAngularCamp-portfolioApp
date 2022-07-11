import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  routeUrl: string;
  createVisible = false;
  constructor(
    private _firebaseService: FirebaseService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param) => {
      if (param['userName']) {
        this._firebaseService.getUser(param['userName']);
      } else {
        this._firebaseService.getUser('philipgilbert');
      }
    });
  }
}
