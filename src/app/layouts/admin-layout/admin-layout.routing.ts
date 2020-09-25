import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CustomerComponent } from 'app/customer/customer.component';
import { AttendanceComponent } from 'app/attendance/attendance.component';
import { ProductsComponent } from 'app/products/products.component';
import { OrderComponent } from 'app/order/order.component';
import { DeliveryComponent } from 'app/delivery/delivery.component';
import { WarehouseComponent } from 'app/warehouse/warehouse.component';
import { EmployeeComponent } from 'app/employee/employee.component';
import { SalaryComponent } from 'app/salary/salary.component';
import { AdjustmentsComponent } from 'app/adjustments/adjustments.component';
import { PettycashComponent } from 'app/pettycash/pettycash.component';
import { DocumentsComponent } from 'app/documents/documents.component';
import { AddCustomerComponent } from 'app/add-customer/add-customer.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'product',      component: ProductsComponent },
    { path: 'order',      component: OrderComponent },
    { path: 'delivery',      component: DeliveryComponent },
    { path: 'warehouse',      component: WarehouseComponent },
    { path: 'employee',           component: EmployeeComponent },
    { path: 'customer',          component: CustomerComponent },
    { path: 'attendance',     component: AttendanceComponent },
    { path: 'salary',          component: SalaryComponent },
    { path: 'adjustments',           component: AdjustmentsComponent },
    { path: 'pettycash',  component: PettycashComponent },
    { path: 'documents',  component: DocumentsComponent },
    { path: 'add-customer',  component: AddCustomerComponent },
];
