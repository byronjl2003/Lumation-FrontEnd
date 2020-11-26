import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SkeletoncardComponent } from './components/skeletoncard/skeletoncard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
/* import { ToastrModule } from 'ngx-toastr'; */
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import {ServiceModule} from './services/service.module';
import { InfoEffects } from './effects/info.effects';
import { reducers } from './reducers/index';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SkeletoncardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularToastifyModule,
    /* ToastrModule.forRoot(), */
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([InfoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }