import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DynamicLoadComponentService } from './dynamic.service';
import { UserCardComponent } from './components/user-card/user-card.component';
import { DynamicHostDirective } from './dynamic-host.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    DynamicHostDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [DynamicLoadComponentService],
  bootstrap: [AppComponent],
  entryComponents: [UserCardComponent],
  exports: [DynamicHostDirective]
})
export class AppModule { }
