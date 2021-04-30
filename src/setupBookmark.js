import getAllElements from './utils/getAllElements'

export default function setupBookmark() {
  const bookmarks = getAllElements('.quiz-card__bookmark')

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('selected')
    })
  })
}
