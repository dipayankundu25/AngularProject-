import { Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RemoveComponent } from './remove/remove.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalRef?: NgbModal;
  private urlSource = new BehaviorSubject('');
  currentUrl = this.urlSource.asObservable();

  constructor(private modalService: NgbActiveModal) {}
  openModal(url: string) {
    this.urlSource.next(url);
    this.modalRef = this.modalService.show(RemoveComponent);
  }
  closeModal() {
    this.modalRef?.hide();
  }
}
