// your.module.ts

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent,
    // Other components, directives, or pipes used in the module
  ],
  imports: [
    // Other modules
    ReactiveFormsModule,
  ],
  // Other module metadata such as providers, bootstrap, etc.
})
export class YourModule { }
