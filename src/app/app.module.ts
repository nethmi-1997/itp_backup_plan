import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CustomerComponent } from './customer/customer.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SalaryComponent } from './salary/salary.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AdjustmentsComponent } from './adjustments/adjustments.component';
import { ProvidersComponent } from './providers/providers.component';
import { OrderComponent } from './order/order.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProductsComponent } from './products/products.component';
import { PettycashComponent } from './pettycash/pettycash.component';
import { EmployeeComponent } from './employee/employee.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CustomerComponent,
    DeliveryComponent,
    SalaryComponent,
    AttendanceComponent,
    AdjustmentsComponent,
    ProvidersComponent,
    OrderComponent,
    DocumentsComponent,
    ProductsComponent,
    PettycashComponent,
    EmployeeComponent,
    WarehouseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
