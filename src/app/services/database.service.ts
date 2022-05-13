import { Injectable } from '@angular/core';
import { Item } from '../classes/item';

@Injectable({ providedIn: 'root' })
export class Database {
  dataMenu = [
    {
      name: 'Bebidas',
      id: 1,
    },
    {
      name: 'Comidas',
      id: 2,
    },
    {
      name: 'Limpieza',
      id: 3,
    },
    {
      name: 'Gaseosas',
      id: 100,
      parentId: 1,
    },
    {
      name: 'Con Alcohol',
      id: 1010,
      parentId: 100,
    },
    {
      name: 'Sin Alcohol',
      id: 1009,
      parentId: 100,
    },
    {
      name: 'Con Azúcar',
      id: 101,
      parentId: 1009,
    },
    {
      name: 'Sin Azucar',
      id: 103,
      parentId: 1009,
    },
    {
      name: 'Jugos',
      id: 189,
      parentId: 103,
    },
    {
      name: 'Energizantes',
      id: 1222,
      parentId: 103,
    },
    {
      name: 'Fruta',
      id: 1223,
      parentId: 1222,
    },
    {
      name: 'Sin grasa',
      id: 12231231,
      parentId: 1223,
    },
  ];

  rootLevel: any = this.dataMenu.filter((item) => !item.parentId);

  getChildren(item: Item) {
    return this.dataMenu.filter((element) => item.id === element.parentId);
  }

  isExpandable(item: Item) {
    return this.getChildren(item).length > 0;
  }

  getId(node: string) {
    return this.dataMenu.filter((element) => node === element.name)[0].id;
  }

  getChildrenByParentId(id: number) {
    return this.dataMenu.filter((element) => id === element.parentId);
  }
}
