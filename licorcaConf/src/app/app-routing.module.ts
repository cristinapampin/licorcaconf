import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Call4papersComponent } from './pages/call4papers/call4papers.component';
import { ConductCodeComponent } from './pages/conduct-code/conduct-code.component';
import { HomeComponent } from './pages/home/home.component';
import { LicorcaTeamComponent } from './pages/licorca-team/licorca-team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'call-4-papers', component: Call4papersComponent },
  { path: 'conduct-code', component: ConductCodeComponent },
  { path: 'licorca-team', component: LicorcaTeamComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
