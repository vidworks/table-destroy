import {TableRow, TableState} from "@fundamental-ngx/platform/table";
import {Injectable} from "@angular/core";

export const DEFAULT_TABLE_STATE: Readonly<TableState> = {
  sortBy: [],
  filterBy: [],
  groupBy: [],
  page: {
    pageSize: 0,
    currentPage: 1
  },
  columns: [],
  columnKeys: [],
  freezeToColumn: null,
  freezeToEndColumn: null,
  searchInput: {
    text: '',
    category: ''
  }
};

@Injectable({
  providedIn: "root"
})
export class ItemTableStateService {
  currentItems: TableRow[] = [];
  currentState: TableState = DEFAULT_TABLE_STATE;

  constructor() {
  }


  snapshot(state: TableState, items: TableRow[]): void {
    this.currentState = state;
    this.currentItems = items;
  }

}
