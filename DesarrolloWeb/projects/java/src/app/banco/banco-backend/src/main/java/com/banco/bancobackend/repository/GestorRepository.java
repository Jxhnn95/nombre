package com.banco.bancobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.RepositoryDefinition;

import com.banco.bancobackend.model.Gestor;

 @Repository

public interface GestorRepository extends JpaRepository<Gestor, Integer> {

}
