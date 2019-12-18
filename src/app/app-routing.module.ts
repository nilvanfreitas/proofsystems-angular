import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SystemPageComponent } from './pages/system-page/system-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { AgencyPageComponent } from './pages/agency-page/agency-page.component';
import { BlakelyePageComponent } from './pages/case-study/blakelye-page/blakelye-page.component';
import { GcgGroupComponent } from './pages/case-study/gcg-group/gcg-group.component';
import { TokenGeneratorComponent } from './pages/case-study/token-generator/token-generator.component';
import { OnixCapitalComponent } from './pages/case-study/onix-capital/onix-capital.component';

const routes: Routes = [
  { path: '', component: MainPageComponent  },
  { path: 'systems', component: SystemPageComponent  },
  { path: 'contact', component: ContactPageComponent  },
  { path: 'works', component: WorksPageComponent },
  { path: 'agency', component: AgencyPageComponent },
  { path: 'case-study/blakelye', component: BlakelyePageComponent },
  { path: 'case-study/group', component: GcgGroupComponent  },
  { path: 'case-study/token-generator', component: TokenGeneratorComponent  },
  { path: 'case-study/onix-capital', component: OnixCapitalComponent  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }