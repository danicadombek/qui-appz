const buttonHome = document.querySelector('.button-home')
const buttonBookmark = document.querySelector('.button-bookmark')
const buttonCreate = document.querySelector('.button-create')
const buttonProfile = document.querySelector('.button-profile')

const homePage = document.querySelector('.home-page')
const bookmarkPage = document.querySelector('.bookmark-page')
const createPage = document.querySelector('.create-page')

buttonHome.addEventListener('click', () => {
  buttonHome.classList.add('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
  homePage.classList.remove('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.add('hidden')
})

buttonBookmark.addEventListener('click', () => {
  buttonHome.classList.remove('active')
  buttonBookmark.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
  homePage.classList.add('hidden')
  bookmarkPage.classList.remove('hidden')
  createPage.classList.add('hidden')
})

buttonCreate.addEventListener('click', () => {
  buttonHome.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')
  homePage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.remove('hidden')
})

const cardBookmark = document.querySelector('.card-bookmark')
const divBookmark = document.querySelector('.div-bookmark')

divBookmark.addEventListener('click', () => {
  divBookmark.classList.add('selected')
})

divBookmark.addEventListener('click', () => {
  divBookmark.classList.toggle('unselected')
})
