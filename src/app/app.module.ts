// Angular:
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

// Components:
import { AppComponent }         from './app.component';
import { PlayListComponent }from './playList/app.playListComponent'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                  PlayListComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
