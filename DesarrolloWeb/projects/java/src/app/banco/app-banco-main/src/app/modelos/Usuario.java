package banco.modelos;

public class Usuario {

	// los atributos protected actuan como private
	// pero son accesibles en las clase que heredan de esta (Gestor y Cliente)
	// dentro de la misma clase podemos acceder a ellos con "this."
	// si el nombre del atributo no es el mismo que el de otra variable o parametro
	// no es necesario usar "this"
	// pero puede hacer mas legible y semantico el codigo
	protected Integer id;
	protected String usuario;
	protected String password;
	protected String correo;

	// constructor vacio
	// creara un objeto o instancia de Usuario
	// con los atributos sin inicializar (sin valor o con su valor por defecto)
	public Usuario() {

	}

	// constructor parametrizado (con parametros)
	// recibe valores declarados como parametros (entre parentesis)
	// en este caso inicializa los atribudos (marcados con "this") asignandoles los
	// valores que se reciban en los parametros
	public Usuario(Integer id, String usuario, String password, String correo) {
		// en este caso el "this" es necesario
		// de otro modo no distinguimos entre el id "atributo de clase" y el id
		// "parametro del metodo"
		// el resultado de id = id seria que el atributo de clase no se inicializa
		// (spoiler: muchos problemas)
		// una alternativa seria que el parametro se llamara nuevoId y hacer id = nuevoId.
		// No es lo habitual.
		this.id = id;
		this.usuario = usuario;
		this.password = password;
		this.correo = correo;
	}

	// los metodos consultores (getters) publicos (public)
	// permiten leer los atributos privados o protegidos fuera de la clase
	public Integer getId() {
		return id;
	}

	// los metodos modificadores (setters) publicos (public)
	// permiten modificar los atributos privados o protegidos fuera de la clase
	// no suelen retornar nada (void), ya que su unica funcion es modificar
	public void setId(Integer id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	// los metodos toString y equals se heredan en todas las clases, aunque no lo
	// utilicemos
	// ya que todas las clases herdan por defecto de Object
	// podemos sobreescribir estos metodos para que se ajusten a nuestras
	// necesidades

	// toString traducira los objetos de esta clase a un texto (String) que podemos
	// personalizar
	public String toString() {
		return "Usuario{id: " + this.id + ", nombre: " + this.usuario + "}";
	}

	// equals se utiliza para comparar dos objetos de esta clase
	// podemos sobreescribirlo para que compare los atributos que prefiramos
	// en este caso podemos decir que dos usuarios son el mismo si tienen el mismo
	// id
	public boolean equals(Object o) {
		// como los parametros deben ser los mismos para sobreescribir una funcion
		// tenemos que convertir del tipo generico "Object" a nuestro tipo Usuario
		// esta operacion se conoce como "casting" o conversion forzada
		Usuario g = (Usuario) o;
		boolean mismoId = this.id == g.id;
		return mismoId;
	}
}
