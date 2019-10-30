package com.rostoff.annurback;

import com.rostoff.annurback.dao.ContactRepository;
import com.rostoff.annurback.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

@SpringBootApplication
public class AnnuRBackApplication implements CommandLineRunner {

    // On utilise l'annotation Autowired pour l'injection des dépendances
    @Autowired
    ContactRepository contactRepository;

    public static void main(String[] args) {
        SpringApplication.run(AnnuRBackApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
        contactRepository.save(new Contact("COUCHY", "Christophe", df.parse("23/06/1981"), "0123456789", "0674944590", "christophe.couchy@gmail.com", "e-commerce", "moi.jpg"));
        contactRepository.save(new Contact("MACLANE", "John", df.parse("20/09/1971"), "0123456789", "0674944590", "john.maclane@gmail.com", "e-commerce", "diehard.jpg"));
        contactRepository.save(new Contact("BALBOA", "Rocky", df.parse("13/11/1965"), "0123456789", "0674944590", "rocky.balboa@gmail.com", "e-commerce", "rocky.jpg"));

        // Pour chaque contact c....
        contactRepository.findAll().forEach(c->{
            System.out.println(c.getNom());
        });
    }
}
