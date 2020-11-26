import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Info } from 'src/app/models/info.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prueba-lum';
  isSkeet: boolean = false;
  info: Info[] = null;
  constructor(private store: Store<fromRoot.appState>,) { }
  ngOnInit() {
    this.store.pipe(select(fromRoot.selectInfo)).subscribe(
      (val) => { 
        console.log(val);
        this.info = val;
      }
    );

    this.store.pipe(select(fromRoot.selectSkee)).subscribe(
      (val) => {
        this.isSkeet = val;
       }
    )
  }
}
