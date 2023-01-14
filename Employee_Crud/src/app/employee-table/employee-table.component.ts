import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  employeeList: any = [];
  temp = true;
  constructor(private modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.currentEmployeeList.subscribe((res) => {
      this.employeeList = res;
    });
  }
  openDeleteModal(i : any) {
    this.modalService.changeDeleteIndex(i);
    this.modalService.openDeleteModal();
  }

  openAddModal() {
    this.modalService.openAddModal();
  }
  openEditModal(i : any) {
    this.modalService.changeEditIndex(i);
    this.modalService.openEditModal();
  }
  multiDeleteClicked(){
    this.modalService.updateEmployeeDetails(this.employeeList);
    this.modalService.changeMultiselectFlag(true);
    this.modalService.openDeleteModal();
  }
}
