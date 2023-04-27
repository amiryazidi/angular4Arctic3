import { OffreEmploisComponent } from './offre-emplois/offre-emplois.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'' , redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductComponent},
  {path:'offres', component:OffreEmploisComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'**', component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
