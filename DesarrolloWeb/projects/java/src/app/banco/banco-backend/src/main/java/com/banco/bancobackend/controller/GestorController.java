package com.banco.bancobackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.banco.bancobackend.service.GestorService;
import com.banco.bancobackend.model.Gestor;

@RestController
@RequestMapping("/gestor")
public class GestorController {

	@Autowired
	GestorService gestorService;
	
	@GetMapping()
	public ArrayList<Gestor> obtenerGestor(){
		return this.gestorService.leerGestores();
		}
	
	@PostMapping()
	public Gestor guardarGestor(@RequestBody Gestor gestor) {
		return this.gestorService.guardarGestor(gestor);
		
	}
	
	

}
