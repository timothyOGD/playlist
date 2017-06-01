import { Component }  from '@angular/core';

@Component({
  selector: 'playList',
  templateUrl: './playList.html',
})
export class PlayListComponent  {
  public playList = ["Milk", "Sugar", "Eggs"];
}
