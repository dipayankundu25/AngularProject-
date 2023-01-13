import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  employeeList: any = [];
  constructor(private modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.currentEmployeeList.subscribe((res) => {
      this.employeeList = res;
    });
  }
  openDeleteModal(i : any) {
    this.modalService.changeDeleteIndex(i);
    this.modalService.openDeleteModal('data');
  }

  openAddModal() {
    this.modalService.openAddModal('data');
  }
  openEditModal(i : any) {
    this.modalService.changeEditIndex(i);
    this.modalService.openEditModal('data');
  }
}
