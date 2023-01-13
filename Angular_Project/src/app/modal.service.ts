import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RemoveComponent } from './remove/remove.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalRef?: BsModalRef;
  // private urlSource = new BehaviorSubject('');
  // currentUrl = this.urlSource.asObservable();
  constructor(private modalService: BsModalService) {}

  openRemoveModal() {
    this.modalRef = this.modalService.show(RemoveComponent);
  }
  closeModal() {
    this.modalRef?.hide();
  }
}