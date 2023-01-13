import { Injectable, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { BehaviorSubject } from 'rxjs';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteComponent } from './delete/delete.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  deleteModalRef?: BsModalRef;
  addemployeeModalRef?: BsModalRef;
  private employeeList = new BehaviorSubject([
    {
    name:"Thomas Hardy",
    email:"thomashardy@mail.com",
    address:"89 Chiaroscuro Rd, Portland, USA",
    phone:"(171)555-2222"
  },
    {
    name:"Dominique Perrier",
    email:"dominiqueperrier@mail.com",
    address:"Obere Str. 57, Berline, Germany",
    phone:"(313)555-5735"
  },
    {
    name:"Maria Anders",
    email:"mariaanders@mail.com",
    address:"25, rue Lauriston, Paris, France",
    phone:"(503)55-9931"
  },
    {
    name:"Fran Wilson",
    email:"franwilson@mail.com",
    address:"C/ Araquil, 67, Madrid, Spain",
    phone:"(204)619-5731"
  },
    {
    name:"Martin Blank",
    email:"martinblank@mail.com",
    address:"Via Monte Bianco 34, Turin, Italy",
    phone:"(480)631-2097"
  }
]);
  currentEmployeeList = this.employeeList.asObservable();
  constructor(private modalService: BsModalService) {}

  openDeleteModal(list: any) {
    this.deleteModalRef = this.modalService.show(DeleteComponent);
  }
  closeDeleteModal() {
    this.deleteModalRef?.hide();
  }
  openAddModal(list: any) {
    this.addemployeeModalRef = this.modalService.show(AddEmployeeComponent);
  }
  closeAddModal() {
    this.addemployeeModalRef?.hide();
  }
}
