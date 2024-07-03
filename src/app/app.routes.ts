import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WikiComponent } from './wiki/wiki.component';
import { WritingTopicsComponent } from './writing-topics/writing-topics.component';
import { CyBorgComponent } from './cy-borg/cy-borg.component';
import { CyBorgLoreComponent } from './cy-borg/cy-borg-lore/cy-borg-lore.component';
import { Tekken7Component } from './tekken-7/tekken-7.component';

export const RoutePaths = {
  wiki: 'wiki',
  writingTopics: 'writing-topics',
  cyBorg: 'cy_borg',
  cyBorgLore: 'cy_borg/lore',
  tekken7: 'tekken-7',
  shoppingList: 'shopping-list',
}

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: RoutePaths.wiki,
    component: WikiComponent,
  },
  {
    path: RoutePaths.writingTopics,
    component: WritingTopicsComponent,
  },
  {
    path: RoutePaths.cyBorg,
    component: CyBorgComponent,
  },
  {
    path: RoutePaths.cyBorgLore,
    component: CyBorgLoreComponent,
  },
  {
    path: RoutePaths.tekken7,
    component: Tekken7Component
  }
];
