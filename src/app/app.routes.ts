import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { OrderListComponent } from './features/orders/order-list/order-list.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { MenuListComponent } from './features/menu/menu-list/menu-list.component';
import { CustomerListComponent } from './features/customers/customer-list/customer-list.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'orders', component: OrderListComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'menu', component: MenuListComponent },
    { path: 'customers', component: CustomerListComponent },
    { path: 'home', component: HomeComponent },
  ];
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}