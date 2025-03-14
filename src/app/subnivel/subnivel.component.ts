import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle, faCircleCheck, faCircleXmark, faPlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { DataServices } from '../data.service';
import { Pregunta } from '../pregunta.model';
import { AlertComponent } from '../alert/alert.component';

@Component({
	selector: 'app-subnivel',
	imports: [FontAwesomeModule, FormsModule, CommonModule],
	templateUrl: './subnivel.component.html',
	styleUrl: './subnivel.component.css'
})
export class SubnivelComponent {
	faPlay = faPlay;
	faCircle = faCircle;
	faCircleXmark = faCircleXmark;
	faCircleCheck = faCircleCheck;
	faXMark = faXmark;

	@Input() subnivel: string;
	@Input() nivel: string;

	modalJuego: bootstrap.Modal;

	constructor(private dataService: DataServices) {
		this.preguntas = [
			new Pregunta('texto', '¿Cuál es el planeta más grande del sistema solar?', ''),
			new Pregunta('texto', '¿Cuál es el planeta más cercano al sol?', ''),
			new Pregunta('texto', '¿Cuál es el planeta más pequeño del sistema solar?', ''),
			new Pregunta('texto', '¿Cuál es el planeta más alejado del sol?', ''),
			new Pregunta('texto', '¿Cuál es el planeta con anillos más grandes del sistema solar?', ''),
			new Pregunta('texto', '¿Cuál es el planeta más rápido?', ''),
			new Pregunta('texto', '¿Cuál es el planeta más brillante?', ''),
			new Pregunta('texto', '¿Cuál es el planeta con más gravedad?', '')
		];

		this.respuestasCorrectas = [
			'Júpiter',
			'Mercurio',
			'Mercurio',
			'Neptuno',
			'Saturno',
			'Mercurio',
			'Venus',
			'Júpiter'
		];

		this.respuestas = [
			'Marte', 'Venus', 'Júpiter', 'Saturno',
			'Marte', 'Mercurio', 'Venus', 'Saturno',
			'Marte', 'Venus', 'Tierra', 'Mercurio',
			'Neptuno', 'Plutón', 'Venus', 'Saturno',
			'Saturno', 'Neptuno', 'Urano', 'Plutón',
			'Mercurio', 'Plutón', 'Saturno', 'Tierra',
			'Neptuno', 'Venus', 'Mercurio', 'Tierra',
			'Mercurio', 'Júpiter', 'Saturno', 'Plutón'
		];
	}

	@Output() nAciertos = new EventEmitter<number>

	agregarAciertos(value: number) {
		this.nAciertos.emit(value);
	}

	tiempo = 100;
	aciertos = 0;
	indexPregunta = 0;

	indexRespuesta1 = 0;
	indexRespuesta2 = 1;
	indexRespuesta3 = 2;
	indexRespuesta4 = 3;

	preguntas: Pregunta[];

	respuestasCorrectas: string[];

	respuestas: string[];

	@Output() nPreguntas = new EventEmitter<number>

	agregarNPreguntas(value: number) {
		this.nPreguntas.emit(value);
	}

	jugar(event: Event) {
		let boton = event.target as HTMLButtonElement;
		let respuesta = boton.innerText;

		if (this.verificarRespuesta(respuesta)) {
			this.aciertos++;
			this.agregarAciertos(this.aciertos);

			setTimeout(() => {
				this.siguientePregunta();

				boton.classList.remove('btn-success');
				boton.classList.add('btn-outline-primary');

			}, 2000);

			let audio = new Audio('correct.mp3');
			audio.play();

			let listaPuntos = document.querySelectorAll('.punto-pregunta'+this.nivel+this.subnivel);

			// Pintar los puntos
			listaPuntos[this.indexPregunta].classList.add('text-success');

			boton.classList.add('btn-success');
			boton.classList.remove('btn-outline-primary');
		} else {
			setTimeout(() => {
				this.siguientePregunta();

				boton.classList.remove('btn-danger');
				boton.classList.add('btn-outline-primary');

			}, 2000);

			let audio = new Audio('incorrect.mp3'); // Soniod error
			audio.play();

			let listaPuntos = document.querySelectorAll('.punto-pregunta'+this.nivel+this.subnivel);

			// Pintar los puntos
			listaPuntos[this.indexPregunta].classList.add('text-danger');

			boton.classList.add('btn-danger');
			boton.classList.remove('btn-outline-primary');
		}

		let listaPuntos = document.querySelectorAll('.punto-pregunta'+this.nivel+this.subnivel);
		listaPuntos[this.indexPregunta].classList.remove('fa-fade');
	}

	verificarRespuesta(respuesta: string) {
		if (respuesta === this.respuestasCorrectas[this.indexPregunta]) {
			if (this.indexPregunta === this.preguntas.length - 1) {
				this.cerrarModal();
			}

			return true;
		} else {
			if (this.indexPregunta === this.preguntas.length - 1) {
				this.cerrarModal();
			}

			return false;
		}
	}

	cerrarModal() {
		let botonCerrarModalJuego = document.getElementById('btnCerrarModalJuego'+this.nivel+this.subnivel);

		if (botonCerrarModalJuego) {
			setTimeout(() => {
				botonCerrarModalJuego.click();
			}, 2000);
		};
	}

	siguientePregunta() {
		this.indexPregunta++;
		this.indexRespuesta1 += 4;
		this.indexRespuesta2 += 4;
		this.indexRespuesta3 += 4;
		this.indexRespuesta4 += 4;

		if (this.indexPregunta > this.preguntas.length - 1) {
			this.indexPregunta = 0;
		}

		let listaPuntos = document.querySelectorAll('.punto-pregunta'+this.nivel+this.subnivel);
		listaPuntos[this.indexPregunta].classList.add('fa-fade');
	}

	iniciarJuego() {
		this.aciertos = 0; 

		let idModal = "#modalJuego"+this.nivel+this.subnivel;

		this.modalJuego = new bootstrap.Modal(idModal);
		this.modalJuego.show();

		this.preguntas = this.dataService.getPreguntas(this.nivel, this.subnivel);
		this.respuestas = this.dataService.getRespuestas(this.nivel, this.subnivel) || [];
		this.respuestasCorrectas = this.dataService.getRespuestasCorrecta(this.nivel, this.subnivel) || [];

		// setInterval(() => {
		// 	this.tiempo--;
		// 	let progressBar = document.querySelector('.progress-bar-tiempo');

		// 	if (progressBar) {
		// 		(progressBar as HTMLElement).style.width = (parseInt((progressBar as HTMLElement).style.width) - 1) + '%';
		// 	}
		// }, 500);

		this.indexRespuesta1 = this.getNumeroAleatorio(4);
		this.indexRespuesta2 = this.getNumeroAleatorio(4);

		while (this.indexRespuesta1 == this.indexRespuesta2) {
			this.indexRespuesta2 = this.getNumeroAleatorio(4);
		}

		this.indexRespuesta3 = this.getNumeroAleatorio(4);

		while (this.indexRespuesta1 == this.indexRespuesta3 || this.indexRespuesta2 == this.indexRespuesta3) {
			this.indexRespuesta3 = this.getNumeroAleatorio(4);
		}

		this.indexRespuesta4 = this.getNumeroAleatorio(4);

		while (this.indexRespuesta1 == this.indexRespuesta4 || this.indexRespuesta2 == this.indexRespuesta4 || this.indexRespuesta3 == this.indexRespuesta4) {
			this.indexRespuesta4 = this.getNumeroAleatorio(4);
		}

		let listaPuntos = document.querySelectorAll('.punto-pregunta'+this.nivel+this.subnivel);
		listaPuntos[0].classList.add('fa-fade');

		let listaBotones = document.querySelectorAll('.btn-pregunta');

		// Pintar los puntos
		for (let i = 0; i < listaPuntos.length; i++) {
			listaPuntos[i].classList.remove('text-success');
			listaPuntos[i].classList.remove('text-danger');
		}

		// Pintar los botones
		for (let i = 0; i < listaBotones.length; i++) {
			const boton = listaBotones[i];
			boton.classList.remove('btn-success');
			boton.classList.remove('btn-danger');
			boton.classList.add('btn-outline-primary');
		}
	}

	getNumeroAleatorio(num: number) {
		// numero aleatorio no repetido
		return Math.floor(Math.random() * num);
	}
}
