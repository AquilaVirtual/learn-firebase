import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../filter.pipe';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  pipes: [FilterPipe]
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
