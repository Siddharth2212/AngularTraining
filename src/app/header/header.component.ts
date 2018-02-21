import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = {remember: false};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);
    //form.reset();
  }

}
