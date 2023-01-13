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
    name:"ax",
    email:"ax",
    address:"add",
    phone:"0000"
  },
    {
    name:"ax",
    email:"ax",
    address:"add",
    phone:"0000"
  },
    {
    name:"ax",
    email:"ax",
    address:"add",
    phone:"0000"
  },
    {
    name:"ax",
    email:"ax",
    address:"add",
    phone:"0000"
  },
    {
    name:"ax",
    email:"ax",
    address:"add",
    phone:"0000"
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
