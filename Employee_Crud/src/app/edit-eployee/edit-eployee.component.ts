import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-edit-eployee',
  templateUrl: './edit-eployee.component.html',
  styleUrls: ['./edit-eployee.component.css'],
})
export class EditEployeeComponent implements OnInit {
  editName = '';
  editEmail = '';
  editAddress = '';
  editPhone = '';

  editIndex: any;
  employeeList: any = [];
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.currenteditIndex.subscribe((res) => {
      this.editIndex = res;
    });
    this.modalService.currentEmployeeList.subscribe((res) => {
      this.employeeList = res;
      this.editName = this.employeeList[this.editIndex].name;
      this.editEmail = this.employeeList[this.editIndex].email;
      this.editAddress = this.employeeList[this.editIndex].address;
      this.editPhone = this.employeeList[this.editIndex].phone;
    });
  }

  updateNewDetails() {
    this.employeeList[this.editIndex].name = this.editName;
    this.employeeList[this.editIndex].email = this.editEmail;
    this.employeeList[this.editIndex].address = this.editAddress;
    this.employeeList[this.editIndex].phone = this.editPhone;
    this.modalService.updateEmployeeDetails(this.employeeList);
    this.closeEditModal();
  }

  closeEditModal() {
    this.modalService.closeEditModal();
  }
}
