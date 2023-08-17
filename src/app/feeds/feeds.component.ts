import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent {
  type = '';
  navs: any = ['trending', 'subscriptions', 'all'];
  constructor(public router: Router, public route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.type = params["type"];
    });
  }
  
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    
  }

  navigate(nav: string) {
    this.router.navigate(["feeds/" + nav]); 
  }
}
