import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ProdutoCrudComponent } from "./views/produto-crud/produto-crud.component";
import { ProdutoCriarComponent } from './components/produto/produto-criar/produto-criar.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutoCrudComponent
  },
  {
    path: "produtos/criar",
    component: ProdutoCriarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
