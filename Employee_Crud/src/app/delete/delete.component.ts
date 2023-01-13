import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  closeDeleteModal() {
    this.modalService.closeDeleteModal();
  }
}
