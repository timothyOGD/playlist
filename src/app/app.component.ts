import { Component }            from '@angular/core';
import { HeaderComponent }      from './header/app.headerComponent'
import { NavComponent }         from './nav/app.navComponent'
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent'
import { FooterComponent }      from './footer/app.footerComponent'

@Component({
  selector: 'my-app',
  templateUrl: './main.html',
})
export class AppComponent  { name = 'Angular'; }
