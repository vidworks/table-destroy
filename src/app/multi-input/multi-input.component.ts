import {Component} from '@angular/core';
import {map, Observable, startWith, Subject, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.scss']
})
export class MultiInputComponent {
  readonly searchValue$ = new Subject<string>();
  readonly dropdownValues$: Observable<OptionItem[]>;
  selected = [];

  displayFn = (v: any): string => v.label;
  valueFn = (v: any): string => v.value;

  constructor(private http: HttpClient) {
    this.dropdownValues$ = this.searchValue$.pipe(
      startWith(''),
      debounceTime(200),
      switchMap((searchQuery) => this.serverRequest(searchQuery))
    );
  }

  /**
   * Server request emulation
   */
  private serverRequest(searchQuery: string): Observable<OptionItem[]> {
    const preparedQuery = searchQuery.trim().toLowerCase();
    console.log('String to query is: ', preparedQuery);
    return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(
      map((res: any) => {
          const filtered = res.filter((photo: any) => photo.title.startsWith(preparedQuery))
            .map((item: any) => {
              return {
                label: item.title,
                value: item.url
              }
            });
          console.log(filtered);
          return filtered;
        }
      )
    );
  }
}

interface OptionItem {
  label: string;
  value: string;
}
