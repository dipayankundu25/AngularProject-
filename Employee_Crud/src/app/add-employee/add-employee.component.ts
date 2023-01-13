import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeList: any = [];
  newName: any;
  newEmail: any;
  newAddress: any;
  newPhone: any;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.currentEmployeeList.subscribe((res) => {
      this.employeeList = res;
    });
  }

  addNewEmployee() {
    this.employeeList.push({
      name: this.newName,
      email: this.newEmail,
      address: this.newAddress,
      phone: this.newPhone,
    });
    this.modalService.newUpdateList(this.employeeList);
    this.closeAddModal();
  }

  closeAddModal() {
    this.modalService.closeAddModal();
  }
}
