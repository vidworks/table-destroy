import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit(): void {
    console.log('LandingPageComponent on Init');
  }

  ngOnDestroy(): void {
    console.log('LandingPageComponent on Destroy');
  }

}
