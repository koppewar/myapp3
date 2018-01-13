import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  list:Array<string>=new Array<string>();

  constructor() { 
	this.list.push("c");
  	this.list.push("cpp");
  	this.list.push("oracle");
  	this.list.push(".net");	
  }

  ngOnInit() {
  	
  }

  removeitem(ndx)
  {
  	this.list.splice(ndx,1);
  }

}
