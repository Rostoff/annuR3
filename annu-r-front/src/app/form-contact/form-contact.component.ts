import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsService} from '../services/contacts.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {

  contact: any = new Contact();
  mode = 1;

  constructor(public contactService: ContactsService) { }

  ngOnInit() {
  }

  saveContact() {
    // console.log(this.contact);
    this.contactService.saveContact(this.contact)
      .subscribe(data => {
        this.contact = data;
        this.mode = 2;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
}
