import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  deleteIndex: any;
  employeeList: any = [];

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.currentDeleteIndex.subscribe((res) => {
      this.deleteIndex = res;
    });
    this.modalService.currentEmployeeList.subscribe((res) => {
      this.employeeList = res;
    });
  }

  closeDeleteModal() {
    this.modalService.closeDeleteModal();
  }

  deleteEmployeeDetails() {
    this.modalService.updateEmployeeDetails([
      ...this.employeeList.slice(0, this.deleteIndex),
      ...this.employeeList.slice(
        this.deleteIndex + 1,
        this.employeeList.length
      ),
    ]);
    this.closeDeleteModal();
  }
}
