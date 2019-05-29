import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../worldcup.service';


@Component({
  selector: 'app-worldcup-list',
  templateUrl: './worldcup-list.component.html',
  styleUrls: ['./worldcup-list.component.css']
})
export class WorldcupListComponent implements OnInit {

  listmembers=[];
  constructor(private worldcupservice:WorldCupService) { 
    this.list();
  }

  list()
  {
    this.worldcupservice.get().subscribe(
      response=>{
        const body=response.json();
        this.listmembers=body.data;
      }
    );

  }


delete(member) {

  this.worldcupservice
    .delete(member.venue)
    .subscribe(response => {
      const body = response.json();
      console.log(body);

    
      this.list();
    });
}
  ngOnInit() {
  }

}
