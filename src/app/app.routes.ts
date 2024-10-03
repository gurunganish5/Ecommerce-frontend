import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderListComponent } from './components/order-list/order-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'products', component: ProductListComponent},
    { path: 'products/:id', component: ProductDetailComponent},
    { path: 'cart', component: ShoppingCartComponent},
    { path: 'orders', component: OrderListComponent},
 
];
