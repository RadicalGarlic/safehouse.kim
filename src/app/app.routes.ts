import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WikiComponent } from './wiki/wiki.component';
import { WritingTopicsComponent } from './writing-topics/writing-topics.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'wiki',
    component: WikiComponent,
  },
  {
    path: 'writing-topics',
    component: WritingTopicsComponent,
  },
];
