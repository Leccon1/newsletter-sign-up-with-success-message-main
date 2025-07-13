const form = document.getElementById('form')
const closeBtn = document.getElementById('closeBtn')
const userInput = document.getElementById('email')
const errorParagraph = document.getElementById('textError')
const card = document.getElementById('card')
const cardSuccess = document.getElementById('cardSuccess')
const userEmail = document.getElementById('userEmail')
let checkError = false

form.addEventListener('submit', function (e) {
	e.preventDefault()

	const email = userInput.value.trim()
	const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

	if (!isValid && !email.includes('.com') && checkError === false) {
		userInput.classList.add('error')
		errorParagraph.style.display = 'block'
		errorParagraph.style.opacity = '1'
		errorParagraph.style.visibility = 'visible'
	} else {
		checkError = true
		userInput.classList.remove('error')
		card.style.display = 'none'
		cardSuccess.style.display = 'block'
		userEmail.textContent = email
	}
	console.log(checkError)
})

userInput.addEventListener('click', () => {
	if (checkError === false) {
		userInput.classList.remove('error')
		errorParagraph.style.visibility = 'hidden'
		errorParagraph.style.opacity = '0'
	}
})

closeBtn.addEventListener('click', () => {
	cardSuccess.style.display = 'none'
	card.style.display = 'flex'
})
