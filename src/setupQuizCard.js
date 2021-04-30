import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

export default function setupQuizCards() {
  const buttonAnswer = getElement('.button-answer')
  const answerText = getElement('.answer-text')

  buttonAnswer.addEventListener('click', () => {
    answerText.classList.toggle('answer-text')
  })

  buttonAnswer.addEventListener('click', () => {
    answerText.classList.toggle('hidden')
  })
}
