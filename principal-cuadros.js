

function cargaPrincipal(){
	let cabezas = document.getElementsByClassName("circulos");
	let i = 1;
	// Oculta las cabezas
	while(i<cabezas.length){
		cabezas[i].style.display = "none";
		i++;
	}
	let j = 0;

	let adelante = document.getElementById('right-triangle');
	let atras = document.getElementById('left-triangle');



	//funcion de boton derecho
	adelante.addEventListener('click',
	function(){
		cabezas[j].style.display = "none";
		if(j==cabezas.length-1){
			j=0;
			cabezas[j].style.display = "flex";
		}else{
			j++;
			cabezas[j].style.display = "flex";
		}
		cabezas[j].addEventListener('click',function(){
			const ventanaCuadro = window.open('./cuadro.html');
				ventanaCuadro.addEventListener('DOMContentLoaded',function(){
				ventanaCuadro.mostrarElemento(j);
			});
		});
		
	});

	//Funcion Boton izquierdo
	atras.addEventListener('click',
		function(){
			cabezas[j].style.display = "none";
			if(j==0){
				j = cabezas.length-1;
				cabezas[j].style.display = "flex";
			}else{
				j--;
				cabezas[j].style.display	= "flex";
			}

			cabezas[j].addEventListener('click',function(){
				const ventanaCuadro = window.open('./cuadro.html');
					ventanaCuadro.addEventListener('DOMContentLoaded',function(){
					ventanaCuadro.mostrarElemento(j);
				});
			});
		}

	)

	cabezas[j].addEventListener('click',function(){
		const ventanaCuadro = window.open('./cuadro.html');
			ventanaCuadro.addEventListener('DOMContentLoaded',function(){
			ventanaCuadro.mostrarElemento(j);
		});
	});

	// Pie de pagina
	window.addEventListener('scroll',()=>{
		let animado = document.getElementsByClassName('pieDePagina');
		let posicion = animado[0].getBoundingClientRect().top
		let tamañoPantalla = window.innerHeight/1.5;

		if(posicion < tamañoPantalla){
				animado[0].style.webkitAnimation= 'mostrar 5s forwards ';
		}

});
};

function mostrarElemento(posicion){
	
	// Carga de json
		const xhttp = new XMLHttpRequest();
  	xhttp.open('GET','battlesData.json',true);
		xhttp.send();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				let dtosBatallas = JSON.parse(this.responseText);
				let indice = dtosBatallas[posicion];
				console.log(indice);

				cargarDatos(indice);
			}
		};



	}

	function cargarDatos(indice){
		let divTitulo = document.getElementById('tituloCabecera');
		divTitulo.innerHTML = indice.id;
		
		let divInformacion = indice.infoDeFila;
		divTabla = document.getElementById('tabla');
		divTablaDes = document.getElementById('tabla-description');

		let i = 0;
		let j = 0;
		let infor;
		while(i<divInformacion.length){
			infor = divInformacion[i];
			divTabla.innerHTML+= `<div class='table-content' > ${infor.integrantes} </div>`;
			divTabla.innerHTML+= `<div class='table-content' > ${infor.inicio} </div>`;
			divTabla.innerHTML+= `<div class='table-content' > ${infor.fin} </div>`;
			divTabla.innerHTML+= `<div class='table-content' > ${infor.ganador} </div>`;
			divTabla.innerHTML+= `<div class='table-content' >  <a class = "mostrar" href="${infor.link}">Ver Video</a></div>`;
			divTabla.innerHTML+= `<div class='table-content' > <button class = "mostrar">Mostrar</button></div>`;
			
			divTablaDes.innerHTML+= `<div class='table-description' > ${infor.descripcion} </div>`;
			
			i++;
		}
		
		
	}