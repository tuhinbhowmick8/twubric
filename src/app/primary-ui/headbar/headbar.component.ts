import { Component, OnInit, Input, OnDestroy, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss']
})
export class HeadbarComponent implements OnInit, OnDestroy {

  @Input() collapsed = false;

  @Input() screenWidth = 0;


  private routerSubscription: Subscription;

  activePath: string = '';
  currentUrlEndPoint: string = ''

  constructor(private router: Router) {

    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.url;
        this.currentUrlEndPoint = window.location.pathname;
        this.makeHeaderName()
      }
    });

  }

  pageTitle = ''
  makeHeaderName() {
    switch (this.currentUrlEndPoint) {
      case '/home':
        this.pageTitle = 'Home'
        break;
      case '/rubrics':
        this.pageTitle = 'Rubrics'
        break;
      default:
        this.pageTitle = ''
        break;
    }
  }


  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }


  getHeadClass() {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    }
    else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }








}




