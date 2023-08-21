
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import "rxjs/add/operator/pluck";
import { FeedsService } from './feeds/feeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'universal-faxoc';
  meta: any;
  // firstChildData$: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: FeedsService,
  ) {}
  ngOnInit(): void {
    // console.log(this.router);
      // this.router.events
      //     .pipe(
      //        filter(event => event instanceof NavigationEnd),
      //        pluck('urlAfterRedirects'),
      //        tap((data: string)=> this.meta.updateMeta(data))
      //    ).subscribe();

      // const routerData$ = this.router.events


      // this.router.events.pipe(
      //   filter(event => event instanceof NavigationEnd),
      // ).subscribe(data  => {
      //   var rt = this.getChild(this.activatedRoute)
      //   console.log('rt', rt, data);
      //   this.metaService.updateMeta(data);

      //   // if (data) {
      //   //   this.metaService.updateMeta({ name: 'description', content: data.descrption })
      //   // } else {
      //   //   // this.metaService.removeTag("name='description'")
      //   // }
      // })

      // this.firstChildData$ = this.router.events.pipe(
      //   filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      //   map(e => {
      //     // e is now NavigationEnd
      //     console.log(e);
      //   })
      // );

    this.router.events.subscribe(value => {
      console.log('current route: ', this.router.url.toString());
      this.metaService.updateMeta(this.router.url.toString());
    });
  }

  // getChild(activatedRoute: ActivatedRoute): any {
  //   console.log(activatedRoute, activatedRoute.firstChild);
  //   if (activatedRoute.firstChild) {
  //     return this.getChild(activatedRoute.firstChild);
  //   } else {
  //     return activatedRoute;
  //   }
 
  // }
}
