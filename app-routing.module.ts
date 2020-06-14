import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path : '', component : UsersListComponent},
  {path : 'add-user', component : AddUserComponent},
  {path: 'profile/:userId' , component: UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
