import { Injectable, TemplateRef } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { BehaviorSubject } from 'rxjs';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteComponent } from './delete/delete.component';
import { EditEployeeComponent } from './edit-eployee/edit-eployee.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  deleteModalRef?: BsModalRef;
  addemployeeModalRef?: BsModalRef;
  editemployeeModalRef?: BsModalRef;

  private deleteIndex = new BehaviorSubject(0);
  private editIndex = new BehaviorSubject(0);
  private multiSelectFlag = new BehaviorSubject(true);

  currenteditIndex = this.editIndex.asObservable();
  currentDeleteIndex = this.deleteIndex.asObservable();
  private employeeList = new BehaviorSubject([
    {
      isChecked: false,
      name: 'Thomas Hardy',
      email: 'thomashardy@mail.com',
      address: '89 Chiaroscuro Rd, Portland, USA',
      phone: '(171)555-2222',
    },
    {
      isChecked: false,
      name: 'Dominique Perrier',
      email: 'dominiqueperrier@mail.com',
      address: 'Obere Str. 57, Berline, Germany',
      phone: '(313)555-5735',
    },
    {
      isChecked: false,
      name: 'Maria Anders',
      email: 'mariaanders@mail.com',
      address: '25, rue Lauriston, Paris, France',
      phone: '(503)55-9931',
    },
    {
      isChecked: false,
      name: 'Fran Wilson',
      email: 'franwilson@mail.com',
      address: 'C/ Araquil, 67, Madrid, Spain',
      phone: '(204)619-5731',
    },
    {
      isChecked: false,
      name: 'Martin Blank',
      email: 'martinblank@mail.com',
      address: 'Via Monte Bianco 34, Turin, Italy',
      phone: '(480)631-2097',
    },
  ]);
  currentEmployeeList = this.employeeList.asObservable();
  currentMultiSelectFlag = this.multiSelectFlag.asObservable();
  constructor(private modalService: BsModalService) {}

  openDeleteModal() {
    this.deleteModalRef = this.modalService.show(DeleteComponent);
  }
  closeDeleteModal() {
    this.deleteModalRef?.hide();
  }
  openAddModal() {
    this.addemployeeModalRef = this.modalService.show(AddEmployeeComponent);
  }
  closeAddModal() {
    this.addemployeeModalRef?.hide();
  }

  openEditModal() {
    this.editemployeeModalRef = this.modalService.show(EditEployeeComponent);
  }

  closeEditModal() {
    this.editemployeeModalRef?.hide();
  }

  newUpdateList(data: any) {
    this.employeeList.next(data);
  }

  changeDeleteIndex(data: any) {
    this.deleteIndex.next(data);
  }

  updateEmployeeDetails(data: any) {
    this.employeeList.next(data);
  }

  updateEmployeeNewDetails(data: any) {
    this.employeeList.next(data);
  }

  changeEditIndex(data: any) {
    this.editIndex.next(data);
  }
  changeMultiselectFlag(data: any) {
    this.multiSelectFlag.next(data);
  }
}
