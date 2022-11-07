import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './components/content-page/content-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/en',
    pathMatch: 'full'
  },
  {
    path: 'en',
    component: ContentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
