package banco.pruebas;

import banco.modelos.Cliente;

public class PruebasCliente {

	public static void main(String[] args) {

		Cliente cliente = 
				
		new Cliente(1, "Edu","1234", "edu@correo.es", 1000000.0, 1 );
		//new Cliente(2,"Jxhnn","1234","jxhnn@correo.com",5000.00,2);
		new Cliente(3, "paco", "1234", "correo@correo.es", 200.0,3);

		// alternativa sin parametros en el constructor
				Cliente clienteB = new Cliente();
				clienteB.setId(2);
				clienteB.setUsuario("Edu");
				clienteB.setPassword("1234");
				clienteB.setCorreo("edu@correo.com");

				System.out.println(cliente);

				if (cliente.equals(clienteB)) {
					System.out.println("Son el mismo cliente");
				} else {
					System.out.println("Son clientes distintos");
				}

			}

		}
