> code which is responsible to navigate to the dynamic routers  

>> file: feeds.component.html


<button (click)="navigate(navs[0])">{{navs[0]}}</button>
<button (click)="navigate(navs[1])">{{navs[1]}}</button>
<button (click)="navigate(navs[2])">{{navs[2]}}</button>

> router configuration which help us to navigate on any dynamic router

>> file: app-routing.module.ts

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
  }
];

>> here :type indicates that it is going to take dynamic router values

> meta data configuration file for dynamicaly generated routers

>> file: meta.ts

export const META_INFO : { [key: string]: any } = {
    "/feeds/trending": {
      title: "About Page - Know our team",
      description: "Welcome to the trending section of the application"
    },
    "/feeds/subscriptions": {
      title: "Products - Find the latest and hottest products",
      description: "Welcome to the subscriptions section of the application"
    },
    "/feeds/all": {
      title: "Products - Find the latest and hottest products",
      description: "Welcome to the all section of the application"
    }
};


> dynamic metadata configuration services logics

>> file: feeds.service.ts

>> logic to update metadata ( title and description for router )

updateMeta(route: string){
    if(Object.prototype.hasOwnProperty.call(META_INFO, route)){
      const {title, description} = META_INFO[route];
      this.updateTitle(title);
      this.updateDescription(description)
    }
  }

>> logic to update metadata - title to the nevigtated router

updateTitle(title: string) {
    if (title) {
      this.title.setTitle(title);
    }
  }

>> logic to update metadata -  description for nevigated routes

updateDescription(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }


