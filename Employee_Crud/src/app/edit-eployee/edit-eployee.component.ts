import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-edit-eployee',
  templateUrl: './edit-eployee.component.html',
  styleUrls: ['./edit-eployee.component.css']
})
export class EditEployeeComponent implements OnInit {

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {

  }

}
