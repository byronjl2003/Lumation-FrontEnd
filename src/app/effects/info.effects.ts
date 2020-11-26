import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, exhaustMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { InfoService } from '../services/service.index';
/* import { ToastrService } from 'ngx-toastr'; */
import { setInfo, setSkee, removeSkee, getInfo, setLimit } from '../actions/info.actions';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { ToastService } from 'angular-toastify'; 
@Injectable()
export class InfoEffects {

    constructor(
        private actions: Actions,
        private store: Store<fromRoot.appState>,
        private _service: InfoService,
        private _toastService: ToastService
        
    ) {

    }

    getInfo$ = createEffect(() =>
        this.actions.pipe(
            ofType(getInfo),
            withLatestFrom(this.store.select(fromRoot.selectLimit)),
            mergeMap(([action, limit]) => {
                this.store.dispatch(setSkee());
                return this._service.getInfo(action.query, limit).pipe(
                    map((response) => {
                        if (response.ok) {
                            return setInfo({ linfo: response.body });
                        }
                        else {
                            //this.toastr.error('No se pudo conectar con el server','Error!!');
                            this._toastService.error('Error de conexion con el servidor');
                            return setInfo({ linfo: [] });
                        }
                        
                    }),
                    catchError(error => {
                        console.log('BBBB:', error);
                        this._toastService.error('Error de conexion con el servidor');
                        return of(setInfo({ linfo: [] }));
                    })
                )

            })
        )
    )

    setInfo$ = createEffect(() =>
        this.actions.pipe(
            ofType(setInfo),
            mergeMap(action => {
                return of(removeSkee());
             })

        )
    )

}