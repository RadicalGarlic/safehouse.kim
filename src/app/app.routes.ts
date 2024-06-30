import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WikiComponent } from './wiki/wiki.component';
import { WritingTopicsComponent } from './writing-topics/writing-topics.component';
import { CyBorgComponent } from './cy-borg/cy-borg.component';
import { CyBorgLoreComponent } from './cy-borg/cy-borg-lore/cy-borg-lore.component';
import { Tekken7Component } from './tekken-7/tekken-7.component';

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
  {
    path: 'cy_borg',
    component: CyBorgComponent,
  },
  {
    path: 'cy_borg/lore',
    component: CyBorgLoreComponent,
  },
  {
    path: 'tekken-7',
    component: Tekken7Component
  }
];
