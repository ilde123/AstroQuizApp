import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SubnivelComponent } from '../subnivel/subnivel.component';
import { DataServices } from '../data.service';
import { Pregunta } from '../pregunta.model';

@Component({
	selector: 'app-nivel',
	imports: [FontAwesomeModule, FormsModule, CommonModule, SubnivelComponent],
	templateUrl: './nivel.component.html',
	styleUrl: './nivel.component.css'
})
export class NivelComponent {
	faPlay = faPlay;

	@Input() subnivel: string;
	@Input() nivel: string;

	aciertos = 0;
	@Output() nAciertos = new EventEmitter<number>;

	agregarNAciertos(value: number) {
		this.nAciertos.emit(value);
	}

	preguntas: Pregunta[];
	@Output() nPreguntas = new EventEmitter<number>;

	constructor(private dataService: DataServices) {
		
	}

	ngOnInit() {
		this.preguntas = this.dataService.getPreguntas(this.nivel, this.subnivel);
	}

	agregarNPreguntas(value: number) {
		this.nPreguntas.emit(value);
	}

	agregarAciertos(value: number) {
		this.aciertos = value;
		this.agregarNAciertos(this.aciertos);

		let porcentaje = (this.aciertos / this.preguntas.length) * 100;

		if (porcentaje >= 100) {
			let img3 = document.getElementById('img3'+this.nivel+this.subnivel);
			let img2 = document.querySelector('#img2'+this.nivel+this.subnivel);
			let img1 = document.querySelector('#img1'+this.nivel+this.subnivel);

			if (img1) {
				(img1 as HTMLImageElement).src = "Saturno.png";
			}

			if (img2) {
				(img2 as HTMLImageElement).src = "Saturno.png";
			}

			if (img3) {
				(img3 as HTMLImageElement).src = "Saturno.png";
			}
		} else if (porcentaje >= 80) {
			let img2 = document.querySelector('#img2'+this.nivel+this.subnivel);
			let img1 = document.querySelector('#img1'+this.nivel+this.subnivel);

			if (img1) {
				(img1 as HTMLImageElement).src = "Saturno.png";
			}

			if (img2) {
				(img2 as HTMLImageElement).src = "Saturno.png";
			}
		} else if (porcentaje>= 50) {
			let img1 = document.querySelector('#img1'+this.nivel+this.subnivel);

			if (img1) {
				(img1 as HTMLImageElement).src = "Saturno.png";
			}
		} else {
			let img3 = document.querySelector('#img3');
			let img2 = document.querySelector('#img2');
			let img1 = document.querySelector('#img1');

			if (img1) {
				(img1 as HTMLImageElement).src = "Saturno_gris.png";
			}

			if (img2) {
				(img2 as HTMLImageElement).src = "Saturno_gris.png";
			}

			if (img3) {
				(img3 as HTMLImageElement).src = "Saturno_gris.png";
			}
		}
	}

	// agregarPreguntas(value: number) {
	// 	this.preguntas = value;
	// 	this.agregarNPreguntas(this.preguntas);
	// }
}
