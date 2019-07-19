import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [

  {
    path: 'cg',
    component: CategoriesComponent,
    data: { title: 'cg' }
  },
  {
    path: 'service/:id/:name.html',
    component:ServicesComponent,
    data: { title: 'services' }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
