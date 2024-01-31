import { Component, EventEmitter, Output } from "@angular/core";
import { Subject } from "rxjs";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  eventsSubject: Subject<void> = new Subject<void>();
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();


  sideBarOpen1 = false;
  sideBarOpen = true;


  dismissSidebar() {

    if (this.sideBarOpen1 == false) {
      this.sideBarOpen1 = !this.sideBarOpen1;
    }
    this.eventsSubject.next();
  }

  sideBarToggler1() {

    this.sideBarOpen1 = !this.sideBarOpen1;

    this.sideBarOpen1;
    this.toggleSidebarForMe.emit();

  }



  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }


}













