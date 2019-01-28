import { Usuario } from './usuario'

export class UsuariosLista{
	private lista: Usuario[] = [];
 
	// agregar un usuario
	public agregar(usuario: Usuario){
		this.lista.push( usuario );
		console.log(this.lista); 
		return usuario;
	}

	// 
	public actualizarNombre( id: string, nombre:string ){
		for( let usuario of this.lista ){
			if (usuario.id === id) {
				usuario.nombre = nombre;
				break;
			}
		}

		console.log("=== Actualizando usuario ===");
		console.log(this.lista);
	}	

	public getLista(){
		return this.lista.filter( usuario=> usuario.nombre !== 'sin-nombre');
	}

	public getUsuario( id:string ){

		//return this.lista.find( (usuario: any) => usuario.id === id)
	}

	// obtener usuario en una sala en particular
	public getUsuariosEnSala( sala:string ){
		return this.lista.filter( usuario => usuario.sala === sala)
	}	

	public borrarUsuario( id:string ){
		const tempUsuario = this.getUsuario(id);
		this.lista = this.lista.filter( usuario =>{
			return usuario.id !== id;
		});

		// console.log(this.lista); 

		return tempUsuario;
	}
}