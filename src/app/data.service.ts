import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pregunta } from "./pregunta.model";

@Injectable({
	providedIn: 'root'
})

export class DataServices {
	getNiveles() {
		return ["1", "2", "3", "4", "5"];
	}

	getSubniveles() {
		return ["1", "2", "3"];
	}

	getPreguntas(nivel: string, subnivel: string) {
		if (nivel === "1") {
			if (subnivel === "1") {
				return [
					new Pregunta('texto', '¿Cuál es el planeta más grande del sistema solar?', ''),
					new Pregunta('texto', '¿Cuál es el planeta más cercano al sol?', ''),
					new Pregunta('texto', '¿Cuál es el planeta más pequeño del sistema solar?', ''),
					new Pregunta('texto', '¿Cuál es el planeta más alejado del sol?', ''),
					new Pregunta('texto', '¿Cuál es el planeta con anillos más grandes del sistema solar?', ''),
					new Pregunta('texto', '¿Cuál es el planeta más rápido?', ''),
					new Pregunta('texto', '¿Cuál es el planeta más brillante?', ''),
					new Pregunta('texto', '¿Cuál es el planeta con más gravedad?', '')
				];
			} else if (subnivel === "2") {
				return [
					new Pregunta('texto', '¿Cuál es la rama de la física que ocupa del estudio de los objetos celestes y fenómenos del universo?', ''),
					new Pregunta('img', '¿Qué tipo de objeto es el la imagen?', 'nebulosa_helice.jpg'),
					new Pregunta('texto', '¿Qué tipo de objeto es la Nube de Magallanes?', ''),
					new Pregunta('texto', '¿Qué propiesdad de la luz nos proporciona información sobre la temperatura de un objeto celeste?', ''),
					new Pregunta('texto', '¿Cuál de los siguentes astronautas fue el primero en pisar la Luna?', ''),
					new Pregunta('img', '¿Qué ciclo astronómico se muestra en la imagen?', 'ciclo_solar.jpg'),
					new Pregunta('texto', '¿Cuál es el nombre del telescopio espacial lanzado por la NASA en 1990?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del fenómeno en el cual la Luna pasa por delante del Sol, bloqueando total o parcialmente su luz desde la Tierra?', '')
				];
			} else {
				return [
					new Pregunta('texto', '¿Cuál es la constelación que contiene la estrella polar y se utiliza parar orientarse en el hemisferio norte?', ''),
					new Pregunta('texto', '¿Qué parámetro astronómico describe la distancia entre la Tierra y el Sol?', ''),
					new Pregunta('texto', '¿Cuál es el nombre de la fase de la Luna en la que vemos menos de la mitad iluminada desde la tierra?', ''),
					new Pregunta('texto', '¿Cuál es la fuente primaria de energía en el interior del Sol?', ''),
					new Pregunta('img', '¿Cuál es el planeta de la imagen?', 'marte.jpg'),
					new Pregunta('texto', '¿Dónde se encuentra comunmente un agujero negro en una galaxia?', ''),
					new Pregunta('texto', 'Si Júpiter adquiriese más masa dejaría de ser un planeta y se convertiría en...', ''),
					new Pregunta('texto', '¿Qué tipo de partícula subatómica, similar al electrón pero con carga positiva, se forma en el núcleo de una estrella durante la fusión nuclear?', '')
				];
			}
		} else if (nivel === "2") {
			if (subnivel ==="1") {
				return [
					new Pregunta('texto', '¿Qué técnica se utiliza para detectar planetas extrasolares?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del concepto que describe la cantidad total de masa y energía en el universo, que se mantiene constante a lo largo del tiempo', ''),
					new Pregunta('texto', '¿Cuál es el nombre del cometa que se estrelló en Júpiter en el año 1994?', ''),
					new Pregunta('texto', '¿Qué instrumento astronómico se utiliza para medir la luminosidad de las estrellas?', ''),
					new Pregunta('texto', '¿Cuál es la fuerza que mantiene en órbita un planeta alrededor del Sol?', ''),
					new Pregunta('texto', '¿Cuál es el planeta más grande del sistema solar?', ''),
					new Pregunta('img', 'Nombra el planeta de la imagen', 'saturno_img.png'),
					new Pregunta('texto', '¿Cuál es la estrella más cercana a la Tierra?', '')
				];
			} else if (subnivel === "2") {
				return [
					new Pregunta('img', '¿Qué proceso astronómico se ilustra en la imagen?', 'colision_galaxias.jpg'),
					new Pregunta('texto', '¿Cuál es la función principal de un telescopio espacial como el Hubble?', ''),
					new Pregunta('texto', '¿En qué fase lunar ocurre un eclipse solar?', ''),
					new Pregunta('img', 'Nombra el planeta de la imagen', 'venus.jpg'),
					new Pregunta('texto', '¿Qué es un cometa?', ''),
					new Pregunta('texto', '¿Cuál de los siguientes planetas es denominado "Planeta enano"?', ''),
					new Pregunta('texto', '¿Cuál es el nombre de la técnica que utiliza la variación en el tiempo de llegada de pulsos de radio de un púlsar para detectar planetas orbitando alrededor de él?', ''),
					new Pregunta('img', '¿Qué fenómeno atmosférico se representa en la imagen?', 'aurora_polar.jpg')
				];
			} else {
				return [
					new Pregunta('texto', 'De las siguientes opciones ¿Qué planeta es conocido como "planeta rocoso"?', ''),
					new Pregunta('texto', '¿Cuál es el periodo de rotación de la Tierra?', ''),
					new Pregunta('texto', '¿Cuál es la denominación común para los objetos celestes que emiten luz propia, como el Sol?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del módulo de comando de la misión Apollo 11?', ''),
					new Pregunta('texto', '¿Cuál es el nombre de la galaxia que alberga al sistema solar?', ''),
					new Pregunta('texto', '¿Qué es un año luz?', ''),
					new Pregunta('texto', 'Tomando el Sol como referencia, escoge el quinto planeta del sistema solar', ''),
					new Pregunta('img', '¿A qué tipo de objeto astronómico pertenece la imagen?', 'andromeda.jpg'),
					new Pregunta('texto', '¿Qué instrumento se utiliza comúnmente en la astronomía observacional para recoger luz de los objetos celestes?', ''),
					new Pregunta('img', '¿Como se llama la constelación que se aprecia en la imagen?', 'constelación_tauro.jpg')
				];
			}
		} else if (nivel === "3") {
			if (subnivel === "1") {
				return [
					new Pregunta('texto', '¿Cual es el nombre del planeta más pequeño del sistema solar?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del porceso por el cual el núcleo de una estrella masiva colapsa y conduce a una explosión poderosa?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del satélite natural de la Tierra?', ''),
					new Pregunta('img', '¿Cómo se llama la capa externa del Sol que se muestra en la imagen durante un eclipse solar total?', 'eclipse_solar.jpg'),
					new Pregunta('texto', '¿Qué es un año sideral?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del fenómeno atmosférico que afecta a la calidad de la observación astronómica desde la Tierra?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del planeta más pequeño del sistema solar?', ''),
					new Pregunta('texto', '¿Cuál es el término para la distancia angular ente dos estrellas en el cielo nocturno?', '')
				];
			} else if (subnivel ==="2") {
				return [
					new Pregunta('texto', '¿Cuál es la constelación zodiacal que representa un carnero?', ''),
					new Pregunta('img', 'Nombra el planeta de la imagen', 'mercurio.jpg'),
					new Pregunta('img', '¿Cómo se llama la constelación que se aprecia en la imagen?', 'constelacion_orion.jpg'),
					new Pregunta('texto', '¿Qué es un cúmulo estelar?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del primer astronauta en caminar sobre la Luna?', ''),
					new Pregunta('texto', '¿Cuál es la masa aproximada de la Luna en comparación con la Tierra?', ''),
					new Pregunta('texto', '¿Cuál es el planeta más cercano al Sol?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del primer satélite artificial de la Tierra?', ''),
					new Pregunta('texto', '¿Qué es una nebulosa?', ''),
					new Pregunta('img', '¿Cómo se llama la galaxia que se aprecia en la imagen?', 'galaxia_sombrero.jpg')
				];
			} else {
				return [
					new Pregunta('texto', '¿Qué  fenómeno astronómico se produce cuando un objeto celeste se mueve frenta a otro, oscureciendo temporalmente su luz?', ''),
					new Pregunta('texto', '¿En qué fase lunar ocurre un eclipse lunar?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del objeto dormado por la acumulación de gas y polvo en el espacio, antes de convertitse en una estrella?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del fenómeno por el cual la luz de una estrella se desplaza hacia el extremo rojo del espectro debido a su movimiento hacia nosotros?', ''),
					new Pregunta('img', '¿A qué categoría de objeto astronómico se refiere la imagen?', 'exoplaneta.png'),
					new Pregunta('texto', '¿Cuál es el nombre del intrumento que divide la luz en sus componentes espectrales, permitiendo el análisis de la composición química de las estrellas?', ''),
					new Pregunta('texto', '¿Qué tipo de luz es invisible al ojo humano pero es crucial para estudiar ciertos objetos celestes?', ''),
					new Pregunta('texto', '¿Qué objeto celeste se encuentra más cerca de la Tierra?', ''),
					new Pregunta('img', 'Nombra el planeta de la imagen', 'jupiter.png'),
					new Pregunta('texto', '¿Cuál es la principal ventaja de los telescopios espaciales sobre los telescopios terrestes para la observación astronómica?', '')
				];
			}
		} else if (nivel === "4") {
			if (subnivel === "1") {
				return [
					new Pregunta('img', '¿Qué fenómeno astronómico se ilustra en la imagen?', 'fases_luna.jpg'),
					new Pregunta('texto', '¿Cuantós planetas forman parte del sistema solar?', ''),
					new Pregunta('texto', '¿Cuál es el nombre del área donde se coloca el ojo para observar a través de un telescopio?', ''),
					new Pregunta('texto', '¿Cuál es el nombre de la misión espacial que llevó al hombre a la Luna?', ''),
					new Pregunta('img', '¿Qué fenómeno astrofísico representa en la imagen?', 'agujero_negro.jpg'),
					new Pregunta('img', '¿Qué famosa nebulosa se muestra en la imagen?', 'Nebulosa_orion.jpg'),
					new Pregunta('texto', '¿Qué tipo de objeto es la Gran Nube de Magallanes?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', '')
				];
			} else if (subnivel === "2") {
				return [
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', '')
				];
			} else {
				return [
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', '')
				];
			}
		} else {
			if (subnivel === "1") {
				return [
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', '')
				];
			} else if (subnivel === "2") {
				return [
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', '')
				];
			} else {
				return [
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', ''),
					new Pregunta('texto', '¿?', '')
				];
			}
		}
	}

	getRespuestas(nivel: string, subnivel: string) {
		if (nivel === "1") {
			if (subnivel === "1") {
				return [
					'Marte', 'Venus', 'Júpiter', 'Saturno',
					'Marte', 'Mercurio', 'Venus', 'Saturno',
					'Marte', 'Venus', 'Tierra', 'Mercurio',
					'Neptuno', 'Plutón', 'Venus', 'Saturno',
					'Saturno', 'Neptuno', 'Urano', 'Plutón',
					'Mercurio', 'Plutón', 'Saturno', 'Tierra',
					'Neptuno', 'Venus', 'Mercurio', 'Tierra',
					'Mercurio', 'Júpiter', 'Saturno', 'Plutón'
				];
			} else if (subnivel === "2") {
				return [
					'Geofísica', 'Astrofísica', 'Física nuclear', 'Meteorología',
					'Agujero Negro', 'Nebulosa', 'Cúmulo de estrellas', 'Galaxia',
					'Agujero Negro', 'Nebulosa', 'Cúmulo de estrellas', 'Galaxia',
					'Brillo', 'Tamaño', 'Distancia', 'Color',
					'Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins',
					'Ciclo solar', 'Ciclo lunar', 'Ciclo de eclipses', 'Ciclo de las estaciones',
					'Hubble', 'Galileo', 'Copérnico', 'Newton',
					'Eclipse Lunar', 'Eclipse Solar', 'Equinoccio', 'Solsticio'
				];
			} else {
				return [
					'Osa Mayor', 'Osa Menor', 'Cisne', 'Lyra',
					'Unidad Astronómica (UA)', 'Unidad Cósmica (UC)', 'Unidad Galáctica (UG)', 'Kilómetros',
					'Luna nueva', 'Luna llena', 'Cuarto menguante', 'Gibosa',
					'Combustión química', 'Fusión Nuclear', 'Convección', 'Frigción',
					'Mercurio', 'Júpiter', 'Marte', 'Venus',
					'En los brazos espirales', 'En la región de formación estelar', 'En la órbita ed los planetas exteriores', 'En el centro galáctico',
					'Una enana marrón', 'Un sistema binario', 'Una Supernova', 'Una enana roja',
					'Electrón', 'Mesón', 'Positrón', 'Neutrino'
				];
			}
		} else if (nivel === "2") {
			if (subnivel === "1") {
				return [
					'Método de velocidad radial', 'Método de tránsito', 'Método de microlente gravitatoria', 'Método de interferometría',
					'Ley de la relatividad', 'Ley de conservación de la masa y la energía', 'Ley de Hubble', 'Ley de Plank',
					'Cometa Ikeya-Seki', 'Cometa Encke', 'Cometa McNaught', 'Cometa Shomaker-Levy 9',
					'Espectrógrafo', 'Fotómetro', 'Astrofotografía', 'Telescopio',
					'Magnetismo', 'Gravedad', 'Electromagnetismo', 'Fuerza centrífuga',
					'Júpiter', 'Saturno', 'Urano', 'Tierra',
					'Saturno', 'Júpiter', 'Urano', 'Venus',
					'Sol', 'Próxima Centauri', 'Vega', 'Sirio'
				];
			} else if (subnivel === "2") {
				return [
					'Formación estelar', 'Colisión de galaxias', 'Expansión del universo', 'Efecto Doppler',
					'Estudiar la vida extraterrestre', 'Observar el universo desde el espacio sin la interferencia de la atmósfera', 'Medir la temperatura del espacio', 'Buscar asteroides cercanos a la Tierra',
					'Luna nueva', 'Luna llena', 'Cuarto menguante', 'Cuarto creciente',
					'Mercurio', 'Urano', 'Marte', 'Venus',
					'Una estrella fugaz', 'Un asteroide', 'Un cuerpo celesto compuesto de hielo, polvo y gases', 'Una luna de un planeta',
					'Plutón', 'Marte', 'Saturno', 'Mercurio',
					'Astrofotografía', 'Espectroscopia', 'Temporización de púlsares', 'Observación solar',
					'Efecto invernadero', 'Lluvia de estrellas', 'Aurora polar', 'Arco iris',
				];
			} else {
				return [
					'Tierra', 'Júpiter', 'Urano', 'Saturno',
					'48 horas', '24 horas', '365 días', '365.25 días',
					'Estrellas', 'Planetoides', 'Nebulosas', 'Galaxias',
					'Columbia', 'Eagle', 'Endeavour', 'Discovery',
					'Andrómeda', 'triángulo', 'Vía Láctea', 'Sombrero',
					'La distancia que recorre la luz en un año', 'La distancia entre la Tierra y el Sol', 'El tiempo que tarda la Tierra en dar una vuelta alrededor del sol', 'La distancia entre la Tierra y la Luna',
					'Marte', 'Saturno', 'Júpiter', 'Tierra',
					'Nebulosa', 'Cúmulo estelar', 'Galaxia', 'Agujero negro',
					'Microscopio', 'Telescopio', 'Radar', 'Holograma',
					'Constelación de Tauro', 'Constelación de Leo', 'Constelación de Virgo', 'Constelación de Acuario',
				];
			}
		} else if (nivel === "3") {
			if (subnivel === "1") {
				return [
					'Mercurio', 'Venus', 'Plutón', 'Marte',
					'Supernova', 'Enana blanca', 'Cúmulo estelar', 'Nebulosa planetaria',
					'Phobos', 'Luna', 'Deimos', 'Ganimedes',
					'Corona solar', 'Fotosfera', 'Cromosfera', 'Núcleo solar',
					'El tiempo que tarda la Luna en dar una vuelta alrededor de la Tierra', 'El tiempo que tarda Marte en completar una vuelta alrededor del Sol', 'El tiempo que tarda Mercurio en completar una vuelta alrededor del Sol', 'El tiempo que tarda la Tierra en completar una vuelta alrededor del Sol',
					'Turbulencia atmosférica', 'Efecto invernadero', 'Reflexión estelar', 'Absorción atmosférica',
					'Marte', 'Mercurio', 'Plutón', 'Júpiter',
					'Magnitud aparente', 'Paralaje estelar', 'Separación angular', 'Corrimiento al rojo',
				];
			} else if (subnivel === "2") {
				return [
					'Géminis', 'Aries', 'Leo', 'Capricornio',
					'Mercurio', 'Saturno', 'Marte', 'Venus',
					'Constelación de Orión', 'Constelación de Leo', 'Constelación de Virgo', 'Constelación del Cisne',
					'Agrupación de nubes moleculares', 'Estrellas errantes en el espacio', 'Restos de explosiones supernovas', 'Grupo de esetrellas unidas gravitacionalmente',
					'Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard',
					'1/60', '1/81', '1/42', '1/25',
					'Venus', 'Tierra', 'Marte', 'Mercurio',
					'Explorer 1', 'Vanguard 1', 'Asterix', 'Sputnik 1',
					'Una nube de gas y polvo en el espacio interestelar', 'Un tipo de estrella', 'Un cometa', 'Un conjunto de estrellas y planetas',
					'Galaxia del Sombrero', 'Galaxia del Molinete', 'Galaxia del Cigarro', 'Vía Láctea'
				];
			} else {
				return [
					'Eclipse', 'Tránsito', 'Corrimiento al azul', 'Paralaje',
					'Luna llena', 'Luna nueva', 'Cuarto creciente', 'Cuarto menguante',
					'Cúmulo estelar', 'Nebulosa', 'Planeta', 'Agujero negro',
					'Corrimiento al rojo', 'Corrimiento al azul', 'Aberración estelar', 'Desplazamiento gravitacional',
					'Exoplanetas', 'Planetas del sistema solar', 'Satélites naturales', 'Asteroides',
					'Telescopio', 'Radar', 'Espectrógrafo', 'Fotómetro',
					'Infrarroja', 'Ultravioleta', 'Visible', 'Radio',
					'La Luna', 'El Sol', 'Venus', 'Marte',
					'Saturno', 'Urano', 'Marte', 'Júpiter',
					'Mayor aumento', 'Más económicos', 'Mayor campo de visión', 'Evitar la atmósfera terrestre'
				];
			}
		} else if (nivel === "4") {
			if (subnivel === "1") {
				return [
					'Fases de la Luna', 'Eclipses solares', 'Tránsitos planetarios', 'Movimiento retrógrado',
					'Nueve', 'Ocho', 'Diez', 'Siete',
					'Ocular', 'Lente', 'Focalizador', 'Objetivo',
					'Mercury 7', 'Gemini 6', 'Sputnik 1', 'Apollo 11',
					'Agujero de gusano', 'Agujero de negro', 'Quásar', 'Púlsar',
					'Nebulosa de Orión', 'Nebulosa del Águila', 'Nebulosa de la Laguna', 'Nebulosa de la Hélice',
					'Nebulosa', 'Galaxia', 'Planeta', 'Cúmulo estelar',
					'', '', '', '',
					'', '', '', '',
					'', '', '', ''
				];
			} else if (subnivel === "2") {
				return [
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', ''
				];
			} else {
				return [
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', ''
				];
			}
		} else {
			if (subnivel === "1") {
				return [
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', ''
				];
			} else if (subnivel === "2") {
				return [
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', ''
				];
			} else {
				return [
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', '',
					'', '', '', ''
				];
			}
		}
	}

	getRespuestasCorrecta(nivel: string, subnivel: string) {
		if (nivel === "1") {
			if (subnivel === "1") {
				return [
					'Júpiter',
					'Mercurio',
					'Mercurio',
					'Neptuno',
					'Saturno',
					'Mercurio',
					'Venus',
					'Júpiter'
				];
			} else if (subnivel === "2") {
				return [
					'Astrofísica',
					'Nebulosa',
					'Galaxia',
					'Color',
					'Neil Armstrong',
					'Ciclo solar',
					'Hubble',
					'Eclipse Solar'
				];
			} else {
				return [
					'Osa Menor',
					'Unidad Astronómica (UA)',
					'Cuarto menguante',
					'Fusión Nuclear',
					'Marte',
					'En el centro galáctico',
					'Una enana marrón',
					'Positrón'
				];
			}
		} else if (nivel === "2") {
			if (subnivel === "1") {
				return [
					'Método de tránsito',
					'Ley de conservación de la masa y la energía',
					'Cometa Shomaker-Levy 9',
					'Fotómetro',
					'Gravedad',
					'Júpiter',
					'Saturno',
					'Sol'
				];
			} else if (subnivel === "2") {
				return [
					'Colisión de galaxias',
					'Observar el universo desde el espacio sin la interferencia de la atmósfera',
					'Luna nueva',
					'Venus',
					'Un cuerpo celesto compuesto de hielo, polvo y gases',
					'Plutón',
					'Temporización de púlsares',
					'Aurora polar'
				];
			} else {
				return [
					'Tierra',
					'24 horas',
					'Estrellas',
					'Columbia',
					'Vía Láctea',
					'La distancia que recorre la luz en un año',
					'Júpiter',
					'Galaxia',
					'Telescopio',
					'Constelación de Tauro'
				];
			}
		} else if (nivel === "3") {
			if (subnivel === "1") {
				return [
					'Mercurio',
					'Supernova',
					'Luna',
					'Corona solar',
					'El tiempo que tarda la Tierra en completar una vuelta alrededor del Sol',
					'Turbulencia atmosférica',
					'Mercurio',
					'Separación angular'
				];
			} else if (subnivel === "2") {
				return [
					'Aries',
					'Mercurio',
					'Constelación de Orión',
					'Grupo de esetrellas unidas gravitacionalmente',
					'Neil Armstrong',
					'1/81',
					'Mercurio',
					'Sputnik 1',
					'Una nube de gas y polvo en el espacio interestelar',
					'Galaxia del Sombrero'
				];
			} else {
				return [
					'Eclipse',
					'Luna llena',
					'Nebulosa',
					'Corrimiento al rojo',
					'Exoplanetas',
					'Espectrógrafo',
					'Infrarroja',
					'La Luna',
					'Júpiter',
					'Evitar la atmósfera terrestre'
				];
			}
		} else if (nivel === "4") {
			if (subnivel === "1") {
				return [
					'Fases de la Luna',
					'Ocho',
					'Ocular',
					'Apollo 11',
					'Agujero de negro',
					'Nebulosa de Orión',
					'Galaxia',
					'',
					'',
					''
				];
			} else if (subnivel === "2") {
				return [
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					''
				];
			} else {
				return [
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					''
				];
			}
		} else {
			if (subnivel === "1") {
				return [
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					''
				];
			} else if (subnivel === "2") {
				return [
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					''
				];
			} else {
				return [
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					'',
					''
				];
			}
		}
	}
}