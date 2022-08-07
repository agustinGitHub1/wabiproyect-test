import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from './interfaces/menuItem.interface';
import { CategoriasService } from './services/categorias.service';
import { LogicaService } from './services/logica.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  @ViewChild('childMenu') public childMenu: any;
  categorias: MenuItem[] = [];
  constructor(private productoService: CategoriasService,
              private logicService : LogicaService) {}
  ngOnInit(): void {
    this.productoService.getCategorias().subscribe((categorias) => {
      this.categorias = this.logicService.getNestedChildren(categorias,categorias[1].parentId);
    });
  }
}


