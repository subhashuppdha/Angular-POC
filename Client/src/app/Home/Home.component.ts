import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth.guard';


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
