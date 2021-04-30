const buttonHome = getElement('.button-home')
const buttonBookmark = getElement('.button-bookmark')
const buttonCreate = document.getElement('.button-create')
const buttonProfile = document.getElement('.button-profile')

const homePage = document.getElement('.home-page')
const bookmarkPage = document.getElement('.bookmark-page')
const createPage = document.getElement('.create-page')

buttonHome.addEventListener('click', navigateToHome)
buttonBookmark.addEventListener('click', navigateToBookmark)
buttonCreate.addEventListener('click', navigateToCreate)

function navigateToHome() {
  changePage(homePage)
  activatetButton(buttonHome)
}

function navigateToBookmark() {
  changePage(bookmarkPage)
  activatetButton(buttonBookmark)
}

function navigateToCreate() {
  changePage(createPage)
  activatetButton(buttonCreate)
}

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

function changePage(page) {
  homePage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.add('hidden')
  page.classList.remove('hidden')
}

function activatetButton(button) {
  deactiveButtons()
  button.classList.add('active')
}

// function hideAllPages() {
//   homePage.classList.add('hidden')
//   bookmarkPage.classList.add('hidden')
//   createPage.classList.add('hidden')
// }

function deactiveButtons() {
  buttonHome.classList.remove('active')
  buttonBookmark.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
}

function getElement(selector) {
  return document.querySelector(selector)
}
