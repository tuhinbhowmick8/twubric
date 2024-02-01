import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubricsComponent } from './rubrics.component';

const routes: Routes = [
  {
    path:'', component:RubricsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RubricsRoutingModule { }
