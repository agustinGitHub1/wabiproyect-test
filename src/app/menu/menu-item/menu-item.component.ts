import {Component, Input, ViewChild} from '@angular/core';
import {  _MatMenuTriggerBase } from '@angular/material/menu';
import { MenuItem } from '../interfaces/menuItem.interface';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  @Input() items: MenuItem[] = [];
  @ViewChild('childMenu') public childMenu: any;
}
