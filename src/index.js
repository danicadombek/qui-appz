const buttonHome = document.querySelector('.button-home')
const buttonBookmark = document.querySelector('.button-bookmark')
const buttonCreate = document.querySelector('.button-create')
const buttonProfile = document.querySelector('.button-profile')

const homePage = document.querySelector('.home-page')
const bookmarkPage = document.querySelector('.bookmark-page')
const createPage = document.querySelector('.create-page')

buttonHome.addEventListener('click', () => {
  hideAllPages()
  homePage.classList.remove('hidden')
  deactiveButtons()
  buttonHome.classList.add('active')
})

buttonBookmark.addEventListener('click', () => {
  hideAllPages()
  bookmarkPage.classList.remove('hidden')
  deactiveButtons()
  buttonBookmark.classList.add('active')
})

buttonCreate.addEventListener('click', () => {
  hideAllPages()
  createPage.classList.remove('hidden')
  deactiveButtons()
  buttonCreate.classList.add('active')
})

const divBookmark = document.querySelector('.div-bookmark')

divBookmark.addEventListener('click', () => {
  divBookmark.classList.add('selected')
})

divBookmark.addEventListener('click', () => {
  divBookmark.classList.toggle('unselected')
})

const buttonAnswer = document.querySelector('.button-answer')
const answerText = document.querySelector('.answer-text')

buttonAnswer.addEventListener('click', () => {
  answerText.classList.toggle('answer-text')
})

buttonAnswer.addEventListener('click', () => {
  answerText.classList.toggle('hidden')
})

function hideAllPages() {
  homePage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.add('hidden')
}

function deactiveButtons() {
  buttonHome.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
}
