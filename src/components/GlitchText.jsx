import { Fragment, useEffect, useState } from 'react'

const RU = 'абвгдежзиклмнопрстуфхцчшэюя'
const EN = 'abcdefghijklmnoprstuvwxyz'

// Периодически буква пропадает или на миг превращается в другую. Работает с любым текстом.
export default function GlitchText({ text, interval = 1500 }) {
  const [swaps, setSwaps] = useState({})

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const letters = [...text].flatMap((c, i) => (/\p{L}/u.test(c) ? [i] : []))
    if (!letters.length) return
    let next, hide
    const run = () => {
      const picked = {}
      const count = text.length > 60 ? 2 : 1
      for (let k = 0; k < count; k++) {
        const i = letters[Math.floor(Math.random() * letters.length)]
        let alt = ''
        if (Math.random() > 0.4) {
          const pool = /[a-z]/i.test(text[i]) ? EN : RU
          alt = pool[Math.floor(Math.random() * pool.length)]
          if (text[i] === text[i].toUpperCase()) alt = alt.toUpperCase()
        }
        picked[i] = alt
      }
      setSwaps(picked)
      hide = setTimeout(() => setSwaps({}), 800)
      next = setTimeout(run, interval * (0.7 + Math.random()))
    }
    next = setTimeout(run, 400 + Math.random() * interval * 2)
    return () => {
      clearTimeout(next)
      clearTimeout(hide)
    }
  }, [text, interval])

  const words = text.split(' ')
  const starts = words.map((_, w) => words.slice(0, w).reduce((n, x) => n + x.length + 1, 0))
  return (
    <span aria-label={text}>
      {words.map((word, w) => {
        const start = starts[w]
        return (
          <Fragment key={w}>
            <span className="word" aria-hidden="true">
            {[...word].map((c, k) => {
              const i = start + k
              const on = i in swaps
              return (
                <span key={k} className={on ? 'ch on' : 'ch'} data-alt={on ? swaps[i] : ''}>
                  {c}
                </span>
              )
            })}
            </span>{' '}
          </Fragment>
        )
      })}
    </span>
  )
}
