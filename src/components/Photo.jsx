import { useEffect, useState } from 'react'

// Фото, которое иногда пропадает и либо возвращается, либо сменяется следующим из списка.
export default function Photo({ items, ratio = '4 / 3', delay = 4500 }) {
  const [idx, setIdx] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    items.forEach((it) => {
      new Image().src = it.src
    })
  }, [items])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let t1, t2
    const run = () => {
      setHidden(true)
      t1 = setTimeout(() => {
        setIdx((i) => (i + 1) % items.length)
        setHidden(false)
      }, items.length > 1 ? 700 : 1100)
      t2 = setTimeout(run, delay * (0.7 + Math.random() * 0.8))
    }
    t2 = setTimeout(run, delay * (0.5 + Math.random()))
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [items.length, delay])

  const cur = items[idx]
  return (
    <figure className="photo">
      <div className="frame" style={{ aspectRatio: ratio }}>
        <img
          src={cur.src}
          alt={cur.cap}
          loading="lazy"
          className={hidden ? 'gone' : ''}
          style={{ objectPosition: cur.pos || 'center' }}
        />
      </div>
      <figcaption className={hidden ? 'gone' : ''}>{cur.cap}</figcaption>
    </figure>
  )
}
