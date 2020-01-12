import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  floatButtonVisibility:boolean = false;

  showFloat(){
    if((document.documentElement.scrollTop+70)>=window.innerHeight)
      this.floatButtonVisibility = true;
    else
      this.floatButtonVisibility = false;
  }

  getTop(){
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
    this.showFloat();
  }

}
