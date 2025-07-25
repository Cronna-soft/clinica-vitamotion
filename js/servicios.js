window.addEventListener('load', () => {

	// SERVICIOS 
		const serviciosList = [
			{
				titulo: "Rehabilitación Neurológica",
				texto: "Tratamientos especializados para pacientes con lesiones o afecciones del sistema nervioso.",
				imagen: "https://placehold.jp/500x500.png"
			},
			{
				titulo: "Fisioterapia Deportiva",
				texto: "Prevención y recuperación de lesiones musculares y articulares en atletas y deportistas.",
				imagen: "https://placehold.jp/500x500.png"
			},
			{
				titulo: "Terapia Postural",
				texto: "Corrección de malas posturas para aliviar dolores crónicos y mejorar el equilibrio corporal.",
				imagen: "https://placehold.jp/500x500.png"
			},
			{
				titulo: "Masoterapia",
				texto: "Técnicas de masaje terapéutico para relajar, descontracturar y mejorar la circulación.",
				imagen: "https://placehold.jp/500x500.png"
			},
			{
				titulo: "Fisioterapia Pélvica",
				texto: "Atención especializada en mujeres, enfocada en suelo pélvico y recuperación posparto.",
				imagen: "https://placehold.jp/500x500.png"
			},
			{
				titulo: "Fisioterapia Geriátrica",
				texto: "Tratamientos adaptados a adultos mayores para mantener movilidad, independencia y calidad de vida.",
				imagen: "https://placehold.jp/500x500.png"
			}
		];

		const servicios = document.getElementById('serviciosItems');

		serviciosList.forEach((ser, index) => {
			const serItem = document.createElement('div')
			serItem.classList.add('servicio-item');

			serItem.innerHTML = `
				<div class="servicio-datos">
    				<h3>${ser.titulo}</h3>
    				<p>${ser.texto}</p>
    			</div>

    			<div class="servicio-imagen">
    				<img src="${ser.imagen}" alt="Tratamiento Fisioterapeutico ${index + 1}">
    			</div>
			`;

			const hr = document.createElement('hr')

			servicios.appendChild(serItem)
			servicios.appendChild(hr)
		});

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

	// tooltips
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

	// Año actual
	const yearData = new Date().getFullYear()
	const year = document.querySelectorAll(".year")
	const yearList = [...year].map(p => p.textContent = yearData)

})