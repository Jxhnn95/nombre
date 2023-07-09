package com.banco.bancobackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banco.bancobackend.repository.GestorRepository;

@Service
public class GestorService {

@Autowired
GestorRepository gestorRepository;
//obtener gestores
public ArrayList<Gestor> leerGestores(){
	return (ArayList<Gestor>) this.gestorRepository.findAll();
}
//guardar(crea o actualizar
public Gestor guardarGestor(Gestor gestor) {
return this.gestorRepository.save(gestor);
}

}
