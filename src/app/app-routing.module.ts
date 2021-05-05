import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { ProductInforComponent } from './product-infor/product-infor.component';
import { ProductsComponent } from './products/products.component';
import { Product } from './_models/product';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path: 'product-infor/:id', component:ProductInforComponent},
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'carts', component:CartsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
