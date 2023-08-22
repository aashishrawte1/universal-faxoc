import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './feeds/feeds.component';

const routes: Routes = [
  {  
    path:'',
    component: FeedsComponent,
  },
  {
    path: 'feeds/:type',
    component: FeedsComponent,
    // data: {
    //   title: "About Page - Know our team",
    //   description: `Welcome to the feed page of the application`
    // }
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
