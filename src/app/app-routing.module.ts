import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { ReviewDetailComponent } from './feature/request/review-detail/review-detail.component';
import { HomeComponent } from './core/home/home.component';
import { CheckOnComponent } from './feature/request/check-on/check-on.component';


const routes: Routes = [
  { path: '', redirectTo: '/users/login', pathMatch: 'full' }, // default path
  { path: "users/login", component: UserLoginComponent },
  { path: "users/list", component: UserListComponent },
  { path: "users/create", component: UserCreateComponent },
  { path: "users/edit/:id", component: UserEditComponent },
  { path: "users/detail/:id", component: UserDetailComponent },
  { path: "vendors/list", component: VendorListComponent },
  { path: "vendors/create", component: VendorCreateComponent },
  { path: "vendors/edit/:id", component: VendorEditComponent },
  { path: "vendors/detail/:id", component: VendorDetailComponent },
  { path: "products/list", component: ProductListComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/edit/:id", component: ProductEditComponent },
  { path: "products/detail/:id", component: ProductDetailComponent },
  { path: "requests/list", component: RequestListComponent },
  { path: "requests/create", component: RequestCreateComponent },
  { path: "requests/edit/:id", component: RequestEditComponent },
  { path: "requests/detail/:id", component: RequestDetailComponent },
  { path: "requests/list-review", component: RequestReviewComponent },
  { path: "requests/review-detail/:id", component: ReviewDetailComponent },
  { path: "requests/check-on/:id", component: CheckOnComponent },
  { path: "home", component: HomeComponent },
  // If you mess up in any way, it'll send you to this page
  { path: '**', component: HomeComponent } // NOTE: I want to change this later to something else
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
