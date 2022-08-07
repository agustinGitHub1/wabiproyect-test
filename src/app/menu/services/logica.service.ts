import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menuItem.interface';


@Injectable({
  providedIn: 'root',
})
export class LogicaService {
   getNestedChildren(arr: MenuItem[], parent: number): MenuItem[] {
    let out: MenuItem[] = [];
    arr.forEach((item) => {
      if (item.parentId === parent) {
        let children: MenuItem[] = this.getNestedChildren(arr, item.id);

        if (children.length) {
          item.children = children;
        }
        out.push(item);
      }
    });
    return out;
  }
}
