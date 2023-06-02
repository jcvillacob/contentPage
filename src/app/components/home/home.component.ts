import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private viewportScroller: ViewportScroller, private router: Router) {}

  goToRuta(ruta: string) {
    this.router.navigateByUrl(ruta).then(() => {
      this.viewportScroller.scrollToPosition([0,0]);
    });
  }

}
