import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import { RegisterComponent } from './components/register/register.component';
import {authReducer} from "./store/reducers";
import {AuthService} from "./auth.service";
import {RegisterEffect} from "./store/effects/register.effect";
import {PersistenceService} from "../shared/services/persistence.service";
import {LoginEffect} from "./store/effects/login.effect";
import {LoginComponent} from "./components/login/login.component";
import {BackendErrorMessagesModule} from "../shared/modules/backendErrorMessages/backendErrorMessages.Module";
import {GetCurrentUserEffect} from "./store/effects/getCurrentUser.effect";

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature(
      [
        RegisterEffect,
        LoginEffect,
        GetCurrentUserEffect
      ]
    ),
    BackendErrorMessagesModule
  ],
  providers: [AuthService, PersistenceService]
})
export class AuthModule { }
