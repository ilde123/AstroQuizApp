import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NivelComponent } from './nivel/nivel.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from "@angular/common/http";
import * as bootstrap from 'bootstrap';
import { DataServices } from './data.service';

@Component({
	selector: 'app-root',
	imports: [CommonModule, NivelComponent, FontAwesomeModule, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	titulo = 'AstroQuiz';
	faCircleChevronDown = faCircleChevronDown;

	nAciertos = 0;
	nAciertosTotales = 0;
	nPreguntas = 8;
	porcentaceAcierto = 0;

	constructor(private dataService: DataServices) {
			
	}

	ngOnInit() {
		this.niveles = this.dataService.getNiveles();
		this.subniveles = this.dataService.getSubniveles();
	}

	mostrarNivel(nivel: string) {
		let bsCollapse = new bootstrap.Collapse('#nivel'+nivel, {
			toggle: false
		});

		bsCollapse.toggle();
	}

	agregarNAciertos(value: number, nivel: string) {
		this.nAciertos = value;
		this.nAciertosTotales = this.nAciertos;
		this.porcentaceAcierto = Math.round((this.nAciertos/this.nPreguntas) * 100 / this.subniveles.length);
		let progressBar = document.getElementsByClassName('progress-bar'+nivel);

		if (progressBar.length > 0) {
			let progressBarWidth = parseFloat((progressBar[0] as HTMLElement).style.width);
			(progressBar[0] as HTMLElement).style.width =+ Math.round(this.porcentaceAcierto) + '%';
		}
	}

	agregarNPreguntas(value: number) {
		this.nPreguntas = value;
	}

	niveles: string[] = ["1", "2", "3", "4", "5"];
	subniveles: string[] = ["1", "2", "3"];
}
