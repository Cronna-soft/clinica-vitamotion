window.addEventListener('load', () => {

	// VALORES
		const valoresList = [
			{
				icon: "bi bi-globe",
				titulo: "Empatía",
				texto: "Escuchamos con atención y comprensión."
			},
			{
				icon: "bi bi-bullseye",
				titulo: "Compromiso",
				texto: "Acompañamos a cada paciente en su proceso."
			},
			{
				icon: "bi bi-bell",
				titulo: "Ética Profesional",
				texto: "Trabajamos con transparencia y respeto."
			},
			{
				icon: "bi bi-heart-fill",
				titulo: "Calidez Humana",
				texto: "Cuidamos a las personas, no solo síntomas."
			},
			{
				icon: "bi bi-gear-wide-connected",
				titulo: "Eficiencia Clínica",
				texto: "Terapias adaptadas y con resultados reales."
			},
			{
				icon: "bi bi-lightbulb",
				titulo: "Innovación",
				texto: "Aplicamos técnicas actualizadas y efectivas."
			}
		];

		const valores = document.getElementById('valores');

		valoresList.forEach(val => {
			const valorItem = document.createElement('div')
			valorItem.classList.add('valores-item');

			valorItem.innerHTML = `
				<i class="${val.icon}"></i>
				<div>
	  				<h4>${val.titulo}</h4>
	  				<p>${val.texto}</p>
				</div>
			`

			valores.appendChild(valorItem)
		});

	// TERAPEUTAS
		const terapeutasList = [
			{
				foto: "https://placehold.jp/500x500.png",
				nombre: "Dra. Laura Sánchez",
				especialidad: "Fisioterapeuta especializada en rehabilitación neuromuscular y terapia manual.",
				redes: {
					instagram: "#",
					linkedin: "#"
				}
			},
			{
				foto: "https://placehold.jp/500x500.png",
				nombre: "Dr. Andrés Cárdenas",
				especialidad: "Especialista en fisioterapia deportiva y prevención de lesiones musculares.",
				redes: {
					instagram: "#",
					linkedin: "#"
				}					
			},
			{
				foto: "https://placehold.jp/500x500.png",
				nombre: "Dra. Valentina Ríos",
				especialidad: "Masoterapeuta certificada, enfocada en alivio del estrés y técnicas posturales.",
				redes: {
					instagram: "#",
					linkedin: "#"
				}					
			},
			{
				foto: "https://placehold.jp/500x500.png",
				nombre: "Dra. Laura Sánchez",
				especialidad: "Fisioterapeuta especializada en rehabilitación neuromuscular y terapia manual.",
				redes: {
					instagram: "#",
					linkedin: "#"
				}					
			},
			{
				foto: "https://placehold.jp/500x500.png",
				nombre: "Dra. Valentina Ríos",
				especialidad: "Masoterapeuta certificada, enfocada en alivio del estrés y técnicas posturales.",
				redes: {
					instagram: "#",
					linkedin: "#"
				}					
			}
		];

		const terapeutasItems = document.getElementById('terapeutasItems');
		const indicatorCarousel = document.getElementById('indicatorCarousel');

		terapeutasList.forEach((ind, index) => {
			const itemIndicator = document.createElement('button');
			itemIndicator.setAttribute('data-bs-target', '#carouselExampleDark');
			itemIndicator.setAttribute('data-bs-slide-to', `${index}`);
			itemIndicator.setAttribute('aria-current', 'true');
			itemIndicator.setAttribute('aria-label', `Slide ${index + 1}`)

			if (terapeutasList[index] == terapeutasList[0]) {			
				itemIndicator.classList.add("active");
			}

			indicatorCarousel.appendChild(itemIndicator)
		})

		terapeutasList.forEach((t, index) => {
			const terapeutaItem = document.createElement('div')
			terapeutaItem.classList.add('carousel-item')

			if (terapeutasList[index] == terapeutasList[0]) {			
				terapeutaItem.classList.add("active");
			}

			terapeutaItem.innerHTML = `
				<div class="terapeuta-item">
			    	<div class="terapeuta-datos">
			    		<p>${t.especialidad}</p>

			    		${t.redes && (
		                    t.redes.instagram ||
		                    t.redes.linkedin
		                  ) 
		                  ? `<ul>
		                      ${t.redes.linkedin ? `<a href="${t.redes.linkedin}" rel="noopener noreferrer" target="_blank" type="button" data-bs-title="LinkedIn" data-bs-toggle="tooltip" data-bs-placement="bottom"><li><i class="bi bi-linkedin"></i></li></a>` : ''} 
		                      ${t.redes.instagram ? `<a href="${t.redes.instagram}" rel="noopener noreferrer" target="_blank" type="button" data-bs-title="Instagram" data-bs-toggle="tooltip" data-bs-placement="bottom"><li><i class="bi bi-instagram"></i></li></a>` : ''}
		                    </ul>`
		                  : ''
		                  }
			    	</div>

			    	<div class="terapeuta-imagen">
			    		<h6>${t.nombre}</h6>
			    		<img src="${t.foto}" alt="Foto terapeuta ${index + 1}">
			    	</div>
				</div>
			`;

			terapeutasItems.appendChild(terapeutaItem)
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
				name: "LinkedIn",
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