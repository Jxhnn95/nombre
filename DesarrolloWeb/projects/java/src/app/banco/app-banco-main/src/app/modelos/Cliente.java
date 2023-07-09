package banco.modelos;

// cuando una clase "extiende" a otra hereda sus atributos y sus metodos
// la herencia hace mas mantenible y reutilizable nuestro codigo
// Gestor y Cliente comparten atributos exactamente iguales
// ahora solo los tenemos que declarar una vez en Usuario
// ademas podriamos añadir nuevas clases de Usuario (Ej. Asesor, Admin...) de forma totalmente compatible
public class Cliente extends Usuario {

	// a los atributos de esta clase señaden los de la clase de la que hereda (Usuario)
	private Integer idCliente;
	private Double saldo;



	public Cliente() {
		// con super hacemos referencia al constructor de la clase de la que hereda
		// Nota: para los constructores vacios como este no es necesario
		super();
	}
	
	public Cliente(Integer id, String usuario, String password, String correo, Double saldo, Integer idCliente) {
		// en este caso llamamos al constructor del que hereda con los parametros que necesita
		super(id, usuario, password, correo);
		// luego inicializamos los atributos propios de esta clase
		// con el resto de los parametros o los valores que proceda en cada caso
		this.saldo = saldo;
		this.idCliente = idCliente;
		
	}

	public Cliente(Integer siguienteIdCliente, String nombre, String pass, String email, String direccion) {
		// TODO Auto-generated constructor stub
	}

	// solo necesitamos declarar los metodos consultores y modificadores de los atributos propios de esta clase
	public Integer getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(Integer idCliente) {
		this.idCliente = idCliente;
	}

	public Double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
	public void  transferenciaRecibir(Double cantidad) {
		saldo += cantidad;
	}
	public void transferenciaEnviar(Double cantidad) {
		saldo -= cantidad;
	}

	// podemos sobreescibir metodos de la clase de la que hereda si se llaman igual y tienen los mismos parametros
	public String toString() {
		// los atributos de la clase de laque hereda son accesibles siempre que sean "protected" y no "private"
		return "Cliente{id: " + this.id + ", nombre: " + this.usuario + ", saldo: " + this.saldo + "}";
	}

	public void setDireccion(String direccion) {
		// TODO Auto-generated method stub
		
	}



}
