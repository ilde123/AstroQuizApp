import { Component } from '@angular/core';

@Component({
	selector: 'app-alert',
	imports: [],
	templateUrl: './alert.component.html',
	styleUrl: './alert.component.css'
})
export class AlertComponent {
	ocultarAlert() {
		const alertElement = document.querySelector('.alert');
		if (alertElement) {
			(alertElement as HTMLElement).style.transform = "";
		}
	}

	msg(txt: string, color: string) {
		this.ocultarAlert();

		let clase = "";
		let icono = document.createElement('i');
		icono.classList.add('fa-solid icon-alert');

		switch (color) {
			case 'success':
				icono.classList.add('fa-circle-check');
				break;

			case 'danger':
				icono.classList.add('fa-circle-xmark');
				break;

			case 'primary':
				icono.classList.add('fa-circle-check');
				break;

			case 'info':
				icono.classList.add('fa-circle-info');
				break;

			case 'warning':
				icono.classList.add('fa-triangle-exclamation');
				break;
		}

		setTimeout(() => {
			let alert = document.createElement('div');
			let texto = document.createElement('strong');

			texto.innerText = txt;
			alert.append(icono);

			let boton = document.createElement('button');

			boton.dataset['bsDismiss'] = 'alert';
			boton.classList.add('btn-close');

			alert.classList.add(`alert ${clase} shadow alert-dismissible justify-content-start`);
			alert.append(texto);

			const body = document.querySelector('body');
			if (body) {
				body.append(alert);
			}
			alert.append(boton);

			const alertElement = document.querySelector('.alert');
			if (alertElement) {
				(alertElement as HTMLElement).style.transform = "translateY(10em)";
			}

			setTimeout(() => { // Ocultar alert
				const alertToHide = document.querySelector('.alert');
				if (alertToHide) {
					(alertToHide as HTMLElement).style.transform = "";
				}
			}, 3000);

			document.querySelector('.btn-close')?.addEventListener('click', (e) => {
				e.preventDefault();

				(document.querySelector('.alert') as HTMLElement).style.transform = "";
			});
		}, 500);
	}
}
