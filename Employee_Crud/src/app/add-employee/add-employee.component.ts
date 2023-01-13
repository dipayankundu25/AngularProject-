import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  closeAddModal() {
    this.modalService.closeAddModal();
  }
}
