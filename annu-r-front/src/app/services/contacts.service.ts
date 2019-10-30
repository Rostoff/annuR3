import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Contact} from '../../model/model.contact';

@Injectable()
export class ContactsService {
  constructor(public http: HttpClient) {}

  // C'est cette méthode getContact qui envoi une requête HTTP pour récupérer les contacts
  // Il faut donc injecter le service http via le constructeur
  getContacts(motCle:string, page:number, size:number) {
    return this.http.get('http://localhost:8080/chercher?mc=' + motCle + '&size=' + size + '&page=' + page).pipe(
      map(resp => resp));
  }

  getContact(id: number) {
    return this.http.get('http://localhost:8080/contacts/' + id).pipe(
      map(resp => resp));
  }

  // Méthode pour sauvegarder le contact
  saveContact(contact: Contact) {
    // On utilise la méthode POST pour enregistre sur la BDD
    return this.http.post('http://localhost:8080/contacts/', contact).pipe(
      map(resp => resp));
  }

  updateContact(contact: Contact) {
    // On utilise la méthode POST pour enregistre sur la BDD
    return this.http.put('http://localhost:8080/contacts/' + contact.id, contact).pipe(
      map(resp => resp));
  }

  deleteContact(id: number) {
    return this.http.delete('http://localhost:8080/contacts/' + id).pipe(
      map(resp => resp));
  }

}
