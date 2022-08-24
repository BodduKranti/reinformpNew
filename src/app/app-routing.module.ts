import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentFYComponent } from './pages/current-fy/current-fy.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LatestRSComponent } from './pages/latest-rs/latest-rs.component';
import { OpenItemsComponent } from './pages/open-items/open-items.component';
import { PreviousFYComponent } from './pages/previous-fy/previous-fy.component';
import { RequestArchivedStatementsComponent } from './pages/request-archived-statements/request-archived-statements.component';
import { SearchByPartnerComponent } from './pages/search-by-partner/search-by-partner.component';
import { SearchSpecificStatementComponent } from './pages/search-specific-statement/search-specific-statement.component';

const routes: Routes = [
  { path:'',component:DashboardComponent },
  { path:'open-itms', component:OpenItemsComponent },
  { path:'latest-reconciliation-statements', component:LatestRSComponent },
  { path:'search-specific-statement', component:SearchSpecificStatementComponent },
  { path:'current-fy', component:CurrentFYComponent },
  { path:'previous-fy', component:PreviousFYComponent },
  { path:'search-by-partner', component:SearchByPartnerComponent },
  { path:'request-archived-statements', component:RequestArchivedStatementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
