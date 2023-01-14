import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';
import { SuivreComponent } from './suivre/suivre.component';

const routes: Routes = [
  {path:'liste',component:ListReclamationComponent,pathMatch:'full'},
  {path:'suivre',component:SuivreComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
