import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
 fruit: string;
  constructor(private route: ActivatedRoute) {
    this.fruit = route.snapshot.params['fruit'];
   }

  ngOnInit() {
  }

}
