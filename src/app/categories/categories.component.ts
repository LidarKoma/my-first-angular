import { Component, OnInit } from '@angular/core'
//import { Observable } from 'rxjs';
import { LaravelService } from '../laravel.service';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  services: any[];

  constructor(private ls:LaravelService) {
  this.ls.getServices().subscribe(
    data => {
      this.services=data['data']
        console.log("PATCH Request is successful ", data);
    },
    error => {
        console.log("Error", error);
    }
);

}


  ngOnInit() {
  }


}
