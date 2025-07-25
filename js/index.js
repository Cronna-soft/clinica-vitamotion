console.log("Este proyecto fue desarrollado por Cronna Soft (Daniel Audor)")

window.addEventListener("load", () => {

	// SERVICIOS DESTACADOS

		const destacadosList = [
			{
				titulo: "Rehabilitación física",
				descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta quam dolorum."
			},
			{
				titulo: "Masoterapia",
				descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta quam dolorum."
			},
			{
				titulo: "Terapia deportiva",
				descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta quam dolorum."
			},
			{
				titulo: "Electroterapia",
				descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta quam dolorum."
			}
		]

		const destacados = document.getElementById('destacados')

		// El array "destacados" es recorrido por el metodo ".forEach()"
		destacadosList.forEach(des => {
			const s = document.createElement('div')
			s.classList.add("card", "destacado-item")

			s.innerHTML = `
				<div class="card-body">
					<h4 class="servicio-titulo">${des.titulo}</h4>
					<p class="servicio-texto">${des.descripcion}</p>
				</div>
			`;
			destacados.appendChild(s)
		})
	
	// GALERIA
		const galeriaList = [
			{ img: "https://placehold.jp/500x500.png" },
			{ img: "https://placehold.jp/500x500.png" },
			{ img: "https://placehold.jp/500x500.png" },
			{ img: "https://placehold.jp/500x500.png" },
			{ img: "https://placehold.jp/500x500.png" },
			{ img: "https://placehold.jp/500x500.png" },
			{ img: "https://placehold.jp/500x500.png" }
		];

		const galeria = document.getElementById('galeriaItems');

		galeriaList.forEach((gl, index) => {
			const imgGaleria = document.createElement('img')
			imgGaleria.setAttribute("src", `${gl.img}`);
			imgGaleria.setAttribute("alt", `Imagen VitaMotion ${index + 1}`)

			galeria.appendChild(imgGaleria)
		});

	// TESTIMONIOS
		const clientes = [
			{
				imagen: "https://placehold.jp/500x500.png",
				nombre: "Andrea Ruiz",
				texto: "Gracias a VitaMotion pude volver a caminar sin dolor. Excelente atención y resultados reales."
			},
			{
				imagen: "https://placehold.jp/500x500.png",
				nombre: "Camilo Restrepo",
				texto: "La terapia deportiva me ayudó a recuperarme de una lesión en tiempo récord. 100% recomendados."
			},
			{
				imagen: "https://placehold.jp/500x500.png",
				nombre: "María Fernanda Ruiz",
				texto: "Muy profesionales, empáticos y pacientes. El ambiente es tranquilo y seguro."
			}
		]

		const testimonios = document.getElementById('testimonios');
		
		clientes.forEach((tes, index) => {
			// Items del carrusel
			const testi = document.createElement("div")
			testi.classList.add("card", "carousel-item", "testimonio-item");

			if (clientes[index] == clientes[0]) {			
				testi.classList.add("active");
			}

			testi.innerHTML = `
				<div class="card-body">
				  	<div>
					    <p class="testimonio-texto">"${tes.texto}"</p>
					    <h5 class="testimonio-titulo">- ${tes.nombre}</h5>
				  	</div>

				  	<div>
				  		<img src="${tes.imagen}" alt="Testimonio ${tes.length + 1}" class="testimonio-imagen">
				  	</div>
				</div>
			`;

			testimonios.appendChild(testi)
		})

	// REDES SOCIALES DESARROLLADOR
		const redesDevelop = [
			{
				name: "Github",
				icon: "bi bi-github",
				url: "https://github.com/Cronna-soft/"
			},
			{
				name: "Instagram",
				icon: "bi bi-instagram",
				url: "https://www.instagram.com/mr.dannnor_"
			},
			{
				name: "Linkedin",
				icon: "bi bi-linkedin",
				url: "https://www.linkedin.com/in/dannnor"
			},
			{
				name: "WhatsApp",
				icon: "bi bi-whatsapp",
				url: "https://api.whatsapp.com/send?phone=573175403782"
			}
		]

		const redesDev = document.getElementById("redesDev");

		redesDevelop.forEach(rs => {
			
			const listadoRedesDev = document.createElement("a")
			listadoRedesDev.setAttribute("href", `${rs.url}`)
			listadoRedesDev.setAttribute("data-bs-title", `${rs.name}`)
			listadoRedesDev.setAttribute("data-bs-toggle", "tooltip")
			listadoRedesDev.setAttribute("data-bs-placement", "top")
			listadoRedesDev.setAttribute("target", "_blank")
			listadoRedesDev.setAttribute("rel", "noopener noreferrer")

			listadoRedesDev.innerHTML = `
				<li class="redes-dev-link"><i class="${rs.icon}"></i></li>
			`;

			redesDev.appendChild(listadoRedesDev)
		})

	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
	
	// Año actual
	const yearData = new Date().getFullYear()
	const year = document.querySelectorAll(".year")
	const yearList = [...year].map(p => p.textContent = yearData)

})