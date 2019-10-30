package com.rostoff.annurback.dao;

import com.rostoff.annurback.entities.Contact;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    @Query("SELECT c FROM Contact c WHERE c.nom LIKE :x")
    public Page<Contact> chercher(@Param("x") String mc, Pageable pageable);

//    @Query("SELECT u FROM Contact u " +
//            " where u.username = ?1")
//    Optional<Contact> findUserWithName(String username);
}
