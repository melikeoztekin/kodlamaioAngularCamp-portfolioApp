import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.css'],
})
export class PageTopComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  createSubmit() {
    this.newItemEvent.emit(true);
    this._router.navigateByUrl('/createPortfolio');
  }
}
