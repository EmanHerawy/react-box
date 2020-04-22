import { Component } from '@angular/core';
import { SimpleStorageService } from './service/simple-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SimpleStorageService]
})
export class AppComponent {
  title = 'app works!';
  storageValue=0;
  account="0xe092b1fa25DF5786D151246E492Eed3d15EA4dAA"
  constructor (private service :SimpleStorageService){
    this.service.get().then(s=>{
      this.storageValue=s;
    });

  }
  async setValue(value=5){
await this.service.set(value,this.account,200000)
this.storageValue= await this.service.get();
  }
}
