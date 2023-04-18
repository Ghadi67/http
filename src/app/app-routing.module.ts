import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 { path: 'detail/:id', component: UsersDetailComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
