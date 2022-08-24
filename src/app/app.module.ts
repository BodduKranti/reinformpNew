import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './Components/left-sidebar/left-sidebar.component';
import { TopHeaderComponent } from './Components/top-header/top-header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OpenItemsComponent } from './pages/open-items/open-items.component';
import { LatestRSComponent } from './pages/latest-rs/latest-rs.component';
import { SearchSpecificStatementComponent } from './pages/search-specific-statement/search-specific-statement.component';
import { CurrentFYComponent } from './pages/current-fy/current-fy.component';
import { PreviousFYComponent } from './pages/previous-fy/previous-fy.component';
import { SearchByPartnerComponent } from './pages/search-by-partner/search-by-partner.component';
import { RequestArchivedStatementsComponent } from './pages/request-archived-statements/request-archived-statements.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    TopHeaderComponent,
    DashboardComponent,
    OpenItemsComponent,
    LatestRSComponent,
    SearchSpecificStatementComponent,
    CurrentFYComponent,
    PreviousFYComponent,
    SearchByPartnerComponent,
    RequestArchivedStatementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
