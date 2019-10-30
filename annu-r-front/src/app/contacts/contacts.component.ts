import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ContactsService} from '../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts: any;
  motCle: string = '';
  page: number = 0;
  size: number = 5;
  pages: Array<number>;
  constructor(public http: HttpClient, public contactservice: ContactsService,
              public router: Router ) { }

  ngOnInit() {

  }

  doSearch() {
    this.contactservice.getContacts(this.motCle, this.page, this.size) // GetContact va renvoyer un observable
      .subscribe((data: any) => {
        this.pageContacts = data;
        // Au moment de l'execution de cette fonction, on initialise la pagination
        this.pages = new Array(data.totalPages); // Ici, on recupère le nombre de pages indiqués à "totalPages"
      }, error => {
        console.log(error);
      });
  }

  // On va à présent appeler cette fonction. Par contre, on va envoyer dans getContact la page, le mot-clé, etc...
  // Il faudra changer cela au niveau du service

  chercher() {
    this.doSearch();
  }

  goToPage(i: number) {
    this.page = i;
    this.doSearch();
  }

  onEditContact(id: number) {
    this.router.navigate(['editContact', id]);
  }

  onDeleteContact(c: Contact) {
    const confirm = window.confirm('Êtes-vous sûr de vouloir supprimer?');
    if (confirm === true) {
      this.contactservice.deleteContact(c.id)
        .subscribe(data => {
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c), 1
          );
        }, error => {
          console.log(error);
        });
    }
  }
}
