import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';



import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component'
import { NavComponent } from './nav/nav.component';


import { YoutubeAPIService } from './youtube-api.service';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    FormsModule,
    InputTextareaModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path :"",component:HomeComponent},
      {path :"test",component:TestComponent}
    ])
  ],
  providers: [
    YoutubeAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
