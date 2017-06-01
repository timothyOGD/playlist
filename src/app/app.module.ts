// Angular:
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

// Components:
import { AppComponent }         from './app.component';
import { HeaderComponent }      from './header/app.headerComponent'
import { NavComponent }         from './nav/app.navComponent'
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent'
import { FooterComponent }      from './footer/app.footerComponent'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  NavComponent,
                  ContentAreaComponent,
                  FooterComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
