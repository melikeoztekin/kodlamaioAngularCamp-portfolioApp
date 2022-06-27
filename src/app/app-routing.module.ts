import { CvComponent } from './components/cv/cv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePortfolioComponent } from './components/create-portfolio/create-portfolio.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: CvComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'cv/:userName', component: CvComponent },
  {
    path: 'createPortfolio',
    component: CreatePortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
