import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent {
   reclamations:any;
  constructor(private Apiservice:ApiService){}

  ngOnInit():void {
    this.Apiservice.results$.subscribe(results => {
      this.reclamations = results;

  })
}
}
