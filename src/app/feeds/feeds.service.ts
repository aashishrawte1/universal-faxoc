import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { META_INFO } from './meta';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  constructor(private title: Title, private meta: Meta) {}

  updateMeta(route: string){
    if(Object.prototype.hasOwnProperty.call(META_INFO, route)){
      const {title, description} = META_INFO[route];
      this.updateTitle(title);
      this.updateDescription(description)
    }
  }

  updateTitle(title: string) {
    if (title) {
      this.title.setTitle(title);
    }
  }

  updateDescription(description: string) {
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
    }
  }
}
