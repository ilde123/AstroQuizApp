export class Respuesta {
	tipo: string;
	texto: string;
	img: string

	constructor(tipo: string, texto: string, img: string) {
		this.tipo = tipo;
		this.texto = texto;
		this.img = img;
	}
}