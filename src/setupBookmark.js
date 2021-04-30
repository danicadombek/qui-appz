import getElement from './utils/getElement'

export default function setupBookmark() {
  const divBookmark = getElement('.div-bookmark')

  divBookmark.addEventListener('click', () => {
    divBookmark.classList.add('selected')
  })

  divBookmark.addEventListener('click', () => {
    divBookmark.classList.toggle('unselected')
  })
}
