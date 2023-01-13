import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.currentEmployeeList.subscribe((res) => {
      console.log(res);
    });
  }
  openDeleteModal() {
    this.modalService.openDeleteModal('data');
  }
}
