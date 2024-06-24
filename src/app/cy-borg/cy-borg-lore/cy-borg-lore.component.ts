import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cy-borg-lore',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cy-borg-lore.component.html',
  styleUrl: './cy-borg-lore.component.scss'
})
export class CyBorgLoreComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public scrollToId(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
