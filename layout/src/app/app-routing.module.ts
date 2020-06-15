import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { BodyComponent } from './body/body.component';
import { Body1Component } from './body1/body1.component';


const routes: Routes = [
{path: '', component: BodyComponent},
{path: 'body1', component: Body1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

exports: [RouterModule]
})
export class AppRoutingModule { }
