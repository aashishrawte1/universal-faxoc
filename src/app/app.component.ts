
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import "rxjs/add/operator/pluck";
import { filter, pluck, tap } from 'rxjs/operators';
import { FeedsService } from './feeds/feeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'universal-faxoc';
  meta: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaService: FeedsService
  ) {}
  ngOnInit(): void {
      this.router.events
          .pipe(
             filter(event => event instanceof NavigationEnd),
             pluck('urlAfterRedirects'),
             tap((data: string)=> this.meta.updateMeta(data))
         ).subscribe();
  }
}
