import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Observable<string[]>
  search = new FormControl();


  ngOnInit() {
    this.list = this.search.valueChanges
      .filter(value => value.length > 0)
      .debounceTime(500)
      .switchMap(this.fakeHttpRequest);
  }

  fakeHttpRequest(value) {
    return Observable.create((obs: Observer<string[]>) => {
      setTimeout(() => {
        console.log("make request " + value);
        obs.next([value + " one", value + " two", value + " three"]);
        obs.complete();
      }, 1000);
    });

  }

}
