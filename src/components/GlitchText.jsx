import { useEffect, useState } from 'react'

const POOL = 'абвгдежзиклмнопрстуфхцчшэюя'

// Периодически одна буква либо пропадает, либо на миг превращается в другую.
export default function GlitchText({ text, interval = 1100 }) {
  const [swap, setSwap] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const letters = [...text].flatMap((c, i) => (/\p{L}/u.test(c) ? [i] : []))
    let hide
    const tick = setInterval(() => {
      const i = letters[Math.floor(Math.random() * letters.length)]
      let alt = ''
      if (Math.random() > 0.4) {
        alt = POOL[Math.floor(Math.random() * POOL.length)]
        if (text[i] === text[i].toUpperCase()) alt = alt.toUpperCase()
      }
      setSwap({ i, alt })
      hide = setTimeout(() => setSwap(null), 750)
    }, interval)
    return () => {
      clearInterval(tick)
      clearTimeout(hide)
    }
  }, [text, interval])

  let pos = 0
  return (
    <span aria-label={text}>
      {text.split(' ').map((word, w) => {
        const start = pos
        pos += word.length + 1
        return (
          <span key={w} className="word" aria-hidden="true">
            {[...word].map((c, k) => {
              const on = swap && swap.i === start + k
              return (
                <span key={k} className={on ? 'ch on' : 'ch'} data-alt={on ? swap.alt : ''}>
                  {c}
                </span>
              )
            })}{' '}
          </span>
        )
      })}
    </span>
  )
}
