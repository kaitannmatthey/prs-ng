import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseComponent } from './feature/base/base.component';
import { SortPipe } from './pipe/sort.pipe';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
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
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { LineItemListComponent } from './feature/line-item/line-item-list/line-item-list.component';
import { LineItemCreateComponent } from './feature/line-item/line-item-create/line-item-create.component';
import { LineItemEditComponent } from './feature/line-item/line-item-edit/line-item-edit.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { ReviewDetailComponent } from './feature/request/review-detail/review-detail.component';
import { HomeComponent } from './core/home/home.component';
import { CheckOnComponent } from './feature/request/check-on/check-on.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    BaseComponent,
    SortPipe,
    VendorListComponent,
    ProductListComponent,
    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    UserLoginComponent,
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDetailComponent,
    RequestDetailComponent,
    LineItemListComponent,
    LineItemCreateComponent,
    LineItemEditComponent,
    RequestReviewComponent,
    ReviewDetailComponent,
    HomeComponent,
    CheckOnComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
