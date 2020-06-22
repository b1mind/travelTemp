import './app.js'

const navMain = document.querySelector('.navMain')
const navSecondary = document.querySelector('.navSecondary')
const canHazBurger = document.querySelector('.canHazBurger')

canHazBurger.addEventListener('click', e => {
	navMain.classList.toggle('hidden')
	navSecondary.classList.toggle('hidden')
})
