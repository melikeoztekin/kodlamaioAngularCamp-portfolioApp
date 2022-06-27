import { GetUserData } from './../../models/getUserData';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  users = GetUserData;
  url: string = '';
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.url = this._router.url;
    var urlList = this.url.split('#');
    if (urlList.length > 1) {
      this.url = urlList[0];
    }
  }
}
