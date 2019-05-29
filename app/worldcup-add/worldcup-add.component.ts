import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../worldcup.service';


@Component({
  selector: 'app-worldcup-add',
  templateUrl: './worldcup-add.component.html',
  styleUrls: ['./worldcup-add.component.css']
})
export class WorldcupAddComponent implements OnInit {
country='';
year=0;
noofteam=0;
venue='';

  constructor(private wservice:WorldCupService) { 


  }
addList()
{
  this.wservice.post(this.country,this.year,this.noofteam,this.venue).subscribe(
    response=>{
      const body=response.json();
      
    }
  );

}
  ngOnInit() {
  }

}
