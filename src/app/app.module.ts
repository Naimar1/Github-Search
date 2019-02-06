import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitformComponent } from './gitform/gitform.component';
import { DirectnameDirective } from './directname.directive';
import { DateCountPipe } from './date-count.pipe';
import {HttpClientModule} from '@angular/common/http'
import {RoutingModule} from './routing/routing.module'


@NgModule({
  declarations: [
    AppComponent,
    GitformComponent,
    DirectnameDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
