/*$=JQuery;
$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}


		<div class="menu_bar">
			<a href="#" class="bt-menu"><span class="icon-list2"></span>Menú</a>
		</div>
 
		<nav>
			<ul>
				<li><a href="#"><span class="icon-house"></span>Inicio</a></li>
				<li class="submenu"><a href="#"><span class="icon-suitcase"></span>Registro de Persona</a>
				<ul class="children">
						<li><a href="#">Docente <span class="icon-dot"></span></a></li>
						<li><a href="#">Representante <span class="icon-dot"></span></a></li>
						<li><a href="#">Alumno<span class="icon-dot"></span></a></li>
					</ul></li>
				<li class="submenu">
					<a href="#"><span class="icon-rocket"></span>Registro de Conocimiento<span class="caret icon-arrow-down6"></span></a>
					<ul class="children">
						<li><a href="#">Funciones Cognitica <span class="icon-dot"></span></a></li>
						<li><a href="#">Areas de Funciones Cognitica <span class="icon-dot"></span></a></li>
						<li><a href="#">Habilidades <span class="icon-dot"></span></a></li>
						<li><a href="#">Conflictos Conignitivos <span class="icon-dot"></span></a></li>
					</ul>
				</li>
				<li class="submenu"><a href="#"><span class="icon-rocket"></span>Pensus Escolar<span class="caret icon-arrow-down6"></span></a>
					<ul class="children">
						<li><a href="#">Grado <span class="icon-dot"></span></a></li>
						<li><a href="#">Periodo Escolar <span class="icon-dot"></span></a></li>
						
					</ul>
				</li>
			</ul>
		</nav>
	</header>

*/