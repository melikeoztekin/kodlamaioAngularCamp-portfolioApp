import { GetUserData } from './../../models/getUserData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  users = GetUserData;

  constructor() {}

  ngOnInit(): void {}
}
