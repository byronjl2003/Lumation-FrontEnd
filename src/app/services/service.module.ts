import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

//import {LoginGuardGuard} from './guards/login-guard.guard';
import {InfoService} from './service.index';



@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    InfoService

  ]
})
export class ServiceModule {
}
