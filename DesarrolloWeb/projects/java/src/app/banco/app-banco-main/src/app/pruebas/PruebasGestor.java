package banco.pruebas;


import banco.modelos.Gestor;

public class PruebasGestor {

	public static void main(String[] args) {

		Gestor gestor = new Gestor(1, "Jxhnn", "1234", "jxhnn@correo.com");
		gestor.setOficina("Valencia");
		
		// alternativa sin parametros en el constructor
		Gestor gestorB = new Gestor();
		gestorB.setId(2);
		gestorB.setUsuario("Edu");
		gestorB.setPassword("1234");
		gestorB.setCorreo("edu@correo.com");

		System.out.println(gestor);

		if (gestor.equals(gestorB)) {
			System.out.println("Son el mismo gestor");
		} else {
			System.out.println("Son gestores distintos");
		}

	}

}
