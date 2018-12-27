import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  constructor() {  
   }
   fruits =[
     { name: "Apple", color: "red" },
     { name: "Orange", color: "orange" },
     { name: "Pineapple", color: "yellow" }
   ]
  ngOnInit() {
  }

}
