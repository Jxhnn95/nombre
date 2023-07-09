package banco.main;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import banco.modelos.Cliente;
import banco.modelos.Gestor;
import banco.modelos.Mensaje;
import banco.modelos.Usuario;
import banco.util.Utiles;

public class ConsolaBanco {

	// atributos de la clase consola

	// simula "base de datos" de gestores
	private List<Gestor> gestores;
	private List<Cliente> clientes;

	// para garantizar que el id es único
	private Integer siguienteIdGestor;
	private Integer siguienteIdCliente;
	private Scanner teclado;

	// inicializamos los atributos en el constructor
	ConsolaBanco() {
		this.gestores = new ArrayList<>();
		this.siguienteIdGestor = 1;

		this.clientes = new ArrayList<>();
		this.siguienteIdCliente = 2;
		this.teclado = new Scanner(System.in);
	}

	// main siempre es el punto de entrada a un programa
	public static void main(String[] args) {

		ConsolaBanco consola = new ConsolaBanco();
		consola.iniciar();
	}

	private void iniciar() {

		int opcion;

		do {
			mostrarMenu();

			System.out.print("Selecciona una opción: ");
			try {
				opcion = teclado.nextInt();
			} catch (Exception e) {
				opcion = 0;
			}

			switch (opcion) {
			case 1:
				loginGestor();
				break;
			case 2:
				consultarGestor();
				break;
			case 3:
				mostrarGestores();
				break;
			case 4:
				insertarGestor();
				break;
			case 5:
				insertarGestoresDePrueba();
				break;
			case 6:
				actualizarGestor();
				break;
			case 7:
				eliminarGestor();
				break;

			case 8:
				insertarCliente();
				break;
			case 9:
				loginCliente();
				break;
			case 10:
				consultarSaldo();
				break;
			case 11:
				tranferenciaEnviar();
				break;
			case 12:
				transferenciaSolicitar();
				break;
			case 13:
				transferenciaRecibidaDetalles();
				break;
			case 14:
				transferenciaEnviadaDetalles();
				break;
			case 15:
				historialTransferencias();
				break;
			case 16:
				datosCuentaBancaria();
				break;
			case 17:
				actualizarCliente();
				break;
			case 18:
				eliminarCliente();
				break;

			case 0:
				cerrar();
				break;

			default:
				System.out.println("Opción no encontrada...");
			}

		} while (opcion != 0);
	}

	private void mostrarMenu() {

		System.out.println("1. Iniciar sesión como gestor");
		System.out.println("2. Consultar gestor");
		System.out.println("3. Ver todos los gestores");
		System.out.println("\n4. Insertar gestor");
		System.out.println("5. Insertar gestores de prueba");
		System.out.println("6. Actualizar gestor");
		System.out.println("7. Eliminar un gestor");

		System.out.println("\n8. Crear cuenta bancaria");
		System.out.println("9. Iniciar sesión como cliente");
		System.out.println("10. Consultar saldo");
		System.out.println("11. Enviar transferencia");
		System.out.println("12. Solicitar transferencia");
		System.out.println("13. Detalles de transferencia recibida");
		System.out.println("14. Detalles de transferencia enviada");
		System.out.println("15. Historial de transferencias enviadas y recibidas");
		System.out.println("16. Consultar datos tarjeta bancaria");
		System.out.println("17. Actualizar cuenta");
		System.out.println("18. Eliminar cuenta bancaria");
		System.out.println("0. Salir\n");

		// System.out.println("4. poner algo aqui");
		// System.out.println("\n4. poner algo aqui\n"); \n en principio:crear otro
		// apartado final; retroceder "pagina"
	}

	private void loginGestor() {
		System.out.print("Id gestor: ");
		int idGestor = teclado.nextInt();
		System.out.print("Contraseña: ");
		String pass = teclado.next();
		Gestor gestor = buscarGestorPorId(idGestor);
		// si el gestor existe
		if (gestor != null) {
			// si la contraseña coincide
			if (gestor.getPassword().equals(pass)) {
				System.out.println("Login correcto!");
			} else {
				System.out.println("Login incorrecto!");
			}
		} else {
			System.out.println("El usuario no existe...");
		}
	}
	



	private void consultarGestor() {
		System.out.print("Id del gestor a consultar: ");
		int idGestor = teclado.nextInt();
		Gestor gestorResultado = buscarGestorPorId(idGestor);
		// si se ha encontrado
		if (gestorResultado != null) {
			System.out.println(gestorResultado);
		} else {
			System.out.println("No se pudo encontrar un gestor con el id " + idGestor);
		}
	}

	void mostrarGestores() {
		if (gestores.isEmpty()) {
			System.out.println("Todavía no hay gestores.");
		}
		gestores.forEach(gestor -> {
			System.out.println(gestor);
		});
	}

	private void insertarGestor() {

		System.out.print("Nombre: ");
		String nombre = teclado.next();
		System.out.print("Email: ");
		String email = teclado.next();
		System.out.print("Contraseña: ");
		String pass = teclado.next();
		System.out.print("Oficina: ");
		String oficina = teclado.next();
		Gestor nuevoGestor = new Gestor(siguienteIdGestor, nombre, pass, email, oficina);
		gestores.add(nuevoGestor);
		siguienteIdGestor++;
		System.out.println("Gestor creado con éxito.");
	}

	private void insertarGestoresDePrueba() {
		System.out.print("Número de gestores: ");
		int numeroGestores = teclado.nextInt();
		for (int i = 0; i < numeroGestores; i++) {
			String usuario = Utiles.nombreAleatorio();
			String correo = Utiles.correoAleatorio();
			Gestor gestor = new Gestor(siguienteIdGestor, usuario, "", correo, "Valencia");
			gestores.add(gestor);
			siguienteIdGestor++;
		}
	}

	private void actualizarGestor() {
		System.out.print("Id del gestor a actualizar: ");
		int idGestor = teclado.nextInt();
		Gestor gestorResultado = buscarGestorPorId(idGestor);
		// si se ha encontrado
		if (gestorResultado != null) {
			System.out.println(gestorResultado);
			System.out.println("[n] Nombre");
			System.out.println("[e] Email");
			System.out.println("[c] Contraseña");
			System.out.println("[o] Oficina");
			System.out.println("[x] Cancelar");
			System.out.print("Campo a actualizar: ");
			char opcionActualizar = teclado.next().charAt(0);
			switch (opcionActualizar) {
			case 'n':
				System.out.print("Nombre: ");
				String nombre = teclado.next();
				gestorResultado.setUsuario(nombre);
				break;
			case 'e':
				System.out.print("Email: ");
				String email = teclado.next();
				gestorResultado.setCorreo(email);
				break;
			case 'c':
				System.out.print("Contraseña: ");
				String pass = teclado.next();
				gestorResultado.setPassword(pass);
				break;
			case 'o':
				System.out.print("Oficina: ");
				String oficina = teclado.next();
				gestorResultado.setOficina(oficina);
				break;
			case 'x':
				System.out.print("Cancelando actualización...");
				break;
			default:
				System.out.println("Opción no válida.");
			}
			if (opcionActualizar != 'x') {
				System.out.println("Se actualizó el gestor con el id " + idGestor);
			}
		} else {
			System.out.println("No se pudo encontrar un gestor con el id " + idGestor);
		}
	}

	private void eliminarGestor() {
		System.out.print("Id del gestor a eliminar: ");
		int idGestor = teclado.nextInt();
		Gestor gestorResultado = null;
		int posicionGestor = -1;
		for (int i = 0; i < gestores.size(); i++) {
			Gestor gestor = gestores.get(i);
			if (gestor.getId() == idGestor) {
				gestorResultado = gestor;
				posicionGestor = i;
				// como ya lo hemos encontrado, rompemos el bucle
				break;
			}
		}
		// si se ha encontrado
		if (gestorResultado != null) {
			gestores.remove(posicionGestor);
			System.out.println("Se eliminó el gestor con el id " + idGestor);
		} else {
			System.out.println("No se pudo encontrar un gestor con el id " + idGestor);
		}
	}

	// retorna el gestor con el id si existe, si no, null
	private Gestor buscarGestorPorId(int id) {
		Gestor gestorResultado = null;
		for (int i = 0; i < gestores.size(); i++) {
			Gestor gestor = gestores.get(i);
			if (gestor.getId() == id) {
				gestorResultado = gestor;
				// como ya lo hemos encontrado, rompemos el bucle
				return gestorResultado;
			}
		}
		return null;
	}

	// desde aqui cliente

	// retorna el cliente con el id si existe, si no, null

	private Cliente buscarClientePorId(int id) {
		Cliente clienteResultado = null;
		for (int i = 0; i < clientes.size(); i++) {
			Cliente cliente = clientes.get(i);
			if (cliente.getId() == id) {
				clienteResultado = cliente;
				// como ya lo hemos encontrado, rompemos el bucle
				return clienteResultado;
			}
		}
		return null;
	}
	private void consultarCliente() {
		System.out.print("Id del cliente a consultar: ");
		int idCliente = teclado.nextInt();
		Cliente clienteResultado = buscarClientePorId(idCliente);
		// si se ha encontrado
		if (clienteResultado != null) {
			System.out.println(clienteResultado);
		} else {
			System.out.println("No se pudo encontrar un cliente con el id " + idCliente);
		}
	}

	void mostrarClientes() {
		if (clientes.isEmpty()) {
			System.out.println("Todavía no hay clientes.");
		}
		gestores.forEach(cliente -> {
			System.out.println(cliente);
		});
	}


	private void insertarCliente() {
		System.out.print("Nombre: ");
		String nombre = teclado.next();
		System.out.print("Email: ");
		String email = teclado.next();
		System.out.print("Contraseña: ");
		String pass = teclado.next();
		System.out.print("Direccion: ");
		String direccion = teclado.next();
		Cliente nuevoCliente = new Cliente(siguienteIdCliente, nombre, pass, email, direccion);
		clientes.add(nuevoCliente);
		siguienteIdCliente++;
		System.out.println("Usuario creado con éxito.");
	}

	private void loginCliente() {
		System.out.print("Id client: ");
		int idCliente = teclado.nextInt();
		System.out.print("Contraseña: ");
		String pass = teclado.next();
		Cliente cliente = buscarClientePorId(idCliente);
		// si el gestor existe
		if (cliente != null) {
			// si la contraseña coincide
			if (cliente.getPassword().equals(pass)) {
				System.out.println("Login correcto!");
			} else {
				System.out.println("Login incorrecto!");
			}
		} else {
			System.out.println("El usuario no existe...");
		}
	}

	private void consultarSaldo() {
		System.out.print("Su saldo actual es:");
		double saldo = teclado.nextDouble();
		Cliente saldoTotal = idSaldo(Double.toString(saldo));
		if (saldoTotal != null) {
			System.out.println(Double.toString(saldo));
		} else {
			System.out.println("Sin saldo disponible " + Double.toString(saldo));
		}

		double solicitudDinero = teclado.nextDouble();
		if (solicitudDinero > 0) {
			saldo += solicitudDinero;
		}
	}


	private Cliente idSaldo(String string) {
		// TODO Auto-generated method stub
		return null;
	}

	private void tranferenciaEnviar() {
		System.out.print("Id beneficiario:");
		String idBeneficiario=teclado.next();
		System.out.print("asunto:");
		String asunto = teclado.next();
		System.out.print("Introducir cantidad de $:");
		double envio = teclado.nextDouble();
		if (envio > 0) {
			8 -= envio;
		}
	}
	
	private void transferenciaSolicitar() {
		System.out.print("Id para solicitar el dinero :");
		String idSolicitud = teclado.next();
		System.out.print("asunto:");
		String asunto = teclado.next();
		System.out.print("Introducir cantidad de $:");
		double cantidad = teclado.nextDouble();
		System.out.print("cantidad:");
		double cantidadTotal = teclado.nextDouble();

	}
	
	private void transferenciaRecibidaDetalles() {
		System.out.print("Id del ordenante :");
		String idOrdenante = teclado.next();
		System.out.print("Id del Beneficiario:");
		String idBeneficiario = teclado.next();
		System.out.print("asunto:");
		String asunto = teclado.next();
		System.out.print("cantidad:");
		double cantidad = teclado.nextDouble();
		if (cantidad > 0) {
			saldo -= cantidad;
		}
		System.out.print("fecha:");
		double fecha = teclado.nextDouble();
	}
	
	private void transferenciaEnviadaDetalles() {
		System.out.print("Id del beneficiario:");
		String idBeneficiario = teclado.next();
		System.out.print("Id del ordenante :");
		String idOrdenante = teclado.next();
		System.out.print("asunto:");
		String asunto = teclado.next();
		System.out.print("cantidad:");
		double cantidad = teclado.nextDouble();
		if (cantidad > 0) {
			saldo -= cantidad;
		}
		System.out.print("fecha:");
		double fecha = teclado.nextDouble();
	}
	
	private void historialTransferencias() {
		System.out.print("fecha:");
		double fecha = teclado.nextDouble();
	System.out.print("Id del ordenante :");
	String idOrdenante = teclado.next();
	System.out.print("cantidad:");
	double cantidad = teclado.nextDouble();
	if (cantidad > 0) {
		saldo -= cantidad;	}
	System.out.print("asunto:");
	String asunto = teclado.next();
	}
	
	private void datosCuentaBancaria() {

		System.out.println("Id");
		int id = teclado.nextInt();
		System.out.println("[2] Nombre");
		String nombre = teclado.next();
		System.out.println("[3] Direccion:");
		String direccion = teclado.next();
		System.out.print("[4]fecha de caducidad:");
		double fecha = teclado.nextDouble();
		}
	
	private void actualizarCliente() {
		System.out.print("Actualizar cuenta: ");
		int idCliente = teclado.nextInt();
		Cliente clienteResultado = buscarClienterPorId(idCliente);
		// si se ha encontrado
		if (clienteResultado != null) {
			System.out.println(clienteResultado);
			System.out.println("[n] Nombre");
			System.out.println("[e] Email");
			System.out.println("[c] Contraseña");
			System.out.println("[d] Direccion");
			System.out.println("[x] Cancelar");
			System.out.print("Campo a actualizar: ");
			char opcionActualizar = teclado.next().charAt(0);
			switch (opcionActualizar) {
			case 'n':
				System.out.print("Nombre: ");
				String nombre = teclado.next();
				clienteResultado.setUsuario(nombre);
				break;
			case 'e':
				System.out.print("Email: ");
				String email = teclado.next();
				clienteResultado.setCorreo(email);
				break;
			case 'c':
				System.out.print("Contraseña: ");
				String pass = teclado.next();
				clienteResultado.setPassword(pass);
				break;
			case 'd':
				System.out.print("Direccion: ");
				String direccion = teclado.next();
				clienteResultado.setDireccion(direccion);
				break;
			case 'x':
				System.out.print("Cancelando actualización...");
				break;
			default:
				System.out.println("Opción no válida.");
			}
			if (opcionActualizar != 'x') {
				System.out.println("Se actualizó su cuenta " + idCliente);
			}
		} else {
			System.out.println("No se pudo encontrar una cuenta con el id " + idCliente);
		}
	}
	
	private void eliminarCliente() {
		System.out.print("¡Eliminada!: ");
		int idCliente = teclado.nextInt();
		Cliente clienteResultado = null;
		int posicionCliente = -1;
		for (int i = 0; i < clientes.size(); i++) {
			Cliente cliente = clientes.get(i);
			if (cliente.getId() == idCliente) {
				clienteResultado = cliente;
				posicionCliente = i;
				// como ya lo hemos encontrado, rompemos el bucle
				break;
			}
		}
		// si se ha encontrado
		if (clienteResultado != null) {
			clientes.remove(posicionCliente);
			System.out.println("Se eliminó su cuenta bancaria " + idCliente);
		} else {
			System.out.println("No se pudo encontrar su cuenta bancaria " + idCliente);
		}
	}
	
	
	
	
	private void cerrar() {
		teclado.close();
		System.out.println("¡Hasta pronto!");
	}
}
