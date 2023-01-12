import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';


@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  imgUrl = '';

  ngOnInit(): void {
        this.modalService.currentUrl.subscribe((res) => {
      console.log(res);
      this.imgUrl = res;
    });
    console.log();
    console.log('Modal loaded');
  }
  closeModal() {
    this.modalService.closeModal();
  }
  }

}
