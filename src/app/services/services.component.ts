import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { LaravelService } from '../laravel.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  id:number;
  posts$: Observable<any[]>;
  //posts$2: Observable<any[]>;
  posts$2:Array<any>;
post$Array: any
  constructor(private router: Router, private route: ActivatedRoute,private wp: LaravelService) {
    //this.posts$ = this.wp.getPostByCetgory();
    //this.getPost2(this.route.snapshot.params['id']);
    //this.id=this.wp.getter();

  }

  ngOnInit() {
    window.scroll(0,0);
    //this.wp.setter(this.id);
    this.id=this.wp.getter();

    //this.getPost(this.route.snapshot.params['id']);
    this.getPost2(this.route.snapshot.params['id'],this.route.snapshot.params['name']);
   // this.getPost2(this.id);

  }

  //getPost(id) {
    //this.posts$ = this.wp.getPostByCetgory(id);
        //}
        
        getPost2(id, name) {
          this.wp.getService(id).subscribe(
            data => {
              this.posts$2=data['data']['services']
                console.log("PATCH Request is successful ",  this.posts$2);
            },
            error => {
                console.log("Error", error);
            }
        );
      


        }
}
