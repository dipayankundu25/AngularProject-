import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css'],
})
export class RemoveComponent implements OnInit {
  constructor(private modalService: ModalService) {}
  ngOnInit(): void {}
  closeModal() {
    this.modalService.closeModal();
  }
}
