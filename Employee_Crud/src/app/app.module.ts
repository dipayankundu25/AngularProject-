import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { DeleteComponent } from './delete/delete.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEployeeComponent } from './edit-eployee/edit-eployee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    DeleteComponent,
    AddEmployeeComponent,
    EditEployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
