import { Component } from '@angular/core';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent {
tabNum:number= 0;
footerOpt:string= "terms";
// clickedBtn:number=1;
// isClicked:boolean= false;


openTab(e:any){
  console.log("button working");
  this.tabNum= e;
  // this.isClicked= true;
}
footerData(data: any){
  this.footerOpt= data;
}
}
