import {TableComponent, TableRow, TableState} from "@fundamental-ngx/platform/table";
import {Injectable, NgZone} from "@angular/core";
import {debounceTime, filter} from 'rxjs/operators';
import {Subscription} from "rxjs";

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
  currentScrollPos = 0;

  private _initialScroll = false;
  subscriptions = new Subscription();


  set table(value: TableComponent) {
    this._table = value;

    this._listenForTableScroll();
  }

  private _table: TableComponent | undefined;

  constructor(private readonly _ngZone: NgZone) {
  }

  snapshot(state: TableState, items: TableRow[]): void {
    this.currentState = state;
    this.currentItems = items;
  }

  private _listenForTableScroll(): void {
    if (!this._table) {
      return;
    }
    this.subscriptions.add(
      (this._table as any)._tableScrollDispatcher
        .verticallyScrolled()
        .pipe(
          filter(() => this._table!.virtualScroll && !!this._table!.bodyHeight),
          debounceTime(400)
        )
        .subscribe(() => {
          if (!this._initialScroll) {
            this.currentScrollPos = this.scrollPosition;
          }
          this._initialScroll = false;
        })
    );
  }


  get scrollPosition(): number {
    if (!this._table) {
      return 0;
    }
    return this.scrollable?.scrollTop || 0;
  }

  get scrollable(): HTMLDivElement | null {
    return this._table!.table.nativeElement.closest('.fdp-table__body');
  }

  restoreScrollPos() {
    if (!this._table || this.currentItems.length === 0) {
      return;
    }
    this._initialScroll = true;

    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        const scrollDiv = this.scrollable as HTMLDivElement;
        scrollDiv.scrollTop = this.currentScrollPos;
      });
    });
  }
}
