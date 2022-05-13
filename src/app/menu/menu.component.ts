import { Component, Input } from '@angular/core';
import { Item } from '../classes/item';
import { Database } from '../services/database.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  @Input() title = 'Menu';
  @Input() data: Item[] = [];
  @Input() item: Item | undefined;
  @Input() isRootNode = false;

  constructor(private database: Database) {}

  getData(node: string) {
    let parentId = this.database.getId(node);
    this.data = this.database.getChildrenByParentId(parentId);
  }

  isExpandable(item: Item) {
    return this.database.isExpandable(item);
  }
}
