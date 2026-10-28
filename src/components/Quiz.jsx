import { useState } from 'react'
import GlitchText from './GlitchText'

const questions = [
  {
    q: 'Сколько лет Нельсон Мандела провёл в тюрьме?',
    options: ['10 лет', '18 лет', '27 лет', '33 года'],
    answer: 2,
    note: 'Он провёл за решёткой 27 лет, из них 18 на острове Роббен.',
  },
  {
    q: 'В каком году Мандела получил Нобелевскую премию мира?',
    options: ['1990', '1993', '1994', '1999'],
    answer: 1,
    note: 'В 1993 году, вместе с президентом Ф. В. де Клерком.',
  },
  {
    q: 'Как называется остров, где Мандела отбывал заключение?',
    options: ['Роббен', 'Занзибар', 'Мадагаскар', 'Святой Елены'],
    answer: 0,
    note: 'Остров Роббен недалеко от Кейптауна, сейчас там музей.',
  },
  {
    q: 'Какое имя Мандела получил при рождении?',
    options: ['Нельсон', 'Ролилахла', 'Тембу', 'Оливер'],
    answer: 1,
    note: 'Имя «Нельсон» ему позже дала школьная учительница.',
  },
  {
    q: 'Какой образ страны Мандела поддерживал после конца апартеида?',
    options: ['«Чёрная звезда»', '«Золотой век»', '«Радужная нация»', '«Новый Юг»'],
    answer: 2,
    note: 'Идея «Радужной нации» объединяла людей всех рас в одной стране.',
  },
]

export default function Quiz() {
  const [picked, setPicked] = useState({})
  const done = Object.keys(picked).length === questions.length
  const score = questions.filter((x, i) => picked[i] === x.answer).length

  return (
    <div className="quiz">
      {questions.map((x, i) => {
        const chosen = picked[i]
        const answered = chosen !== undefined
        return (
          <div key={x.q} className="qcard">
            <h3><span className="qnum">{i + 1}.</span> <GlitchText text={x.q} /></h3>
            <div className="opts">
              {x.options.map((o, j) => {
                let cls = 'opt'
                if (answered && j === x.answer) cls += ' right'
                else if (answered && j === chosen) cls += ' wrong'
                return (
                  <button key={o} className={cls} disabled={answered} onClick={() => setPicked({ ...picked, [i]: j })}>
                    {o}
                  </button>
                )
              })}
            </div>
            {answered && (
              <p className="note">{chosen === x.answer ? 'Верно. ' : 'Неверно. '}{x.note}</p>
            )}
          </div>
        )
      })}
      {done && (
        <div className="result">
          <div className="score">{score} из {questions.length}</div>
          <button className="opt" onClick={() => setPicked({})}>Пройти ещё раз</button>
        </div>
      )}
    </div>
  )
}
