window.addEventListener('load', () => {

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