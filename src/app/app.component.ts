import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  routeUrl: string;
  constructor(
    private _firebaseService: FirebaseService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.routeUrl = this._router.url;
    this._activatedRoute.params.subscribe((param) => {
      if (param['userName']) {
        this._firebaseService.getUser(param['userName']);
      } else {
        this._firebaseService.getUser('philipgilbert');
      }
    });
  }
  title = 'portfolioApp';
}
