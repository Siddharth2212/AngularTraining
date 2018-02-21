import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('myModal') myModal: ElementRef;

  openModel() {
    this.myModal.nativeElement.className = 'modal fade show';
  }
  closeModel() {
    this.myModal.nativeElement.className = 'modal hide';
  }
}
