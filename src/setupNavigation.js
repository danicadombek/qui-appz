import getElement from './utils/getElement'

export default function setupNavigation() {
  const buttonHome = getElement('.button-home')
  const buttonBookmark = getElement('.button-bookmark')
  const buttonCreate = getElement('.button-create')
  const buttonProfile = getElement('.button-profile')

  const homePage = getElement('.home-page')
  const bookmarkPage = getElement('.bookmark-page')
  const createPage = getElement('.create-page')

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
}
