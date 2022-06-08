import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatDividerModule } from '@angular/material/divider'
import { FlexLayoutModule } from '@angular/flex-layout'
import { HomeComponent } from './pages/home/home.component';
import { ConductCodeComponent } from './pages/conduct-code/conduct-code.component';
import { Call4papersComponent } from './pages/call4papers/call4papers.component';
import { LicorcaTeamComponent } from './pages/licorca-team/licorca-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConductCodeComponent,
    Call4papersComponent,
    LicorcaTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
