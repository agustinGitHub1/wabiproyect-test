import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MaterialModule } from '../material/material.module';
import { MenuItemComponent } from './menu-item/menu-item.component';


@NgModule({
  declarations: [
    MenuComponent,
   MenuItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MenuComponent,
    MenuItemComponent
  ]
})
export class MenuModule { }
