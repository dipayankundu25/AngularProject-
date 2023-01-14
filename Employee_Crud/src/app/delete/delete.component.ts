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
  multiDeleteFlag = false;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.currentEmployeeList.subscribe((res) => {
      this.employeeList = res;
    });
    this.modalService.currentDeleteIndex.subscribe((res) => {
      this.deleteIndex = res;
    });
    this.modalService.currentMultiSelectFlag.subscribe((res) => {
      this.multiDeleteFlag = res;
    });
  }

  closeDeleteModal() {
    this.modalService.closeDeleteModal();
  }

  deleteEmployeeDetails() {
    if (this.multiDeleteFlag) {
      this.modalService.changeMultiselectFlag(false);
      this.modalService.updateEmployeeDetails(
        this.employeeList.filter((elm: any) => {
          return !elm.isChecked;
        })
      );
    } else {
      this.modalService.updateEmployeeDetails([
        ...this.employeeList.slice(0, this.deleteIndex),
        ...this.employeeList.slice(
          this.deleteIndex + 1,
          this.employeeList.length
        ),
      ]);
    }

    this.closeDeleteModal();
  }
}
