import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { getInfo } from '../../actions/info.actions';
/* import { ToastrService } from 'ngx-toastr'; */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchForm = this.fb.group({
    query: ['', [Validators.required]],
  });

 
  constructor(private fb: FormBuilder,private store: Store<fromRoot.appState>) { }

  ngOnInit() {
    
  }

  search(): void {
    console.log("__SEARCH__");
    //this.toastr.error('No se pudo conectar con el server','Error!!');
    //this._toastService.info('message');
    this.store.dispatch(getInfo({ query: this.searchForm.value.query, limit: 5 }));

  }

}
