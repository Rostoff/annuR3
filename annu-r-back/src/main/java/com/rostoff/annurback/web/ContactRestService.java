package com.rostoff.annurback.web;

import com.rostoff.annurback.dao.ContactRepository;
import com.rostoff.annurback.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ContactRestService {
    @Autowired
    private ContactRepository contactRepository;

    // Afficher tous les contacts
    @GetMapping(value="/contacts")
    public List<Contact> getContacts(){
        return contactRepository.findAll();
    }

    // Afficher un contact
    @GetMapping(value="/contacts/{id}")
    public Contact getContact(@PathVariable Long id){
        return contactRepository.findById(id).orElse(null);
    }


    //Ajouter un élément
    @PostMapping(value="/contacts")
    public Contact addContact(@RequestBody Contact c){
        return contactRepository.save(c);
    }

    //Supprimer un élément à la fois par ID
    @DeleteMapping(value="/contacts/{id}")
    public boolean deleteContactById(@PathVariable Long id){
        contactRepository.deleteById(id);
        return true;
    }

    //Modifier un élément
    @PutMapping(value="/contacts/{id}")
    public Contact modifyContact(@PathVariable Long id, @RequestBody Contact c){
        c.setId(id);
        return contactRepository.save(c);
    }

    //Chercher un élément par ID
    @GetMapping(value="/chercher")
    public Page<Contact> chercher(
            @RequestParam(name="mc", defaultValue = "") String mc,
            @RequestParam(name="page", defaultValue = "0") int page,
            @RequestParam(name="size", defaultValue = "5") int size) {
        return contactRepository.chercher("%"+mc+"%", PageRequest.of(page, size));
    }
}
