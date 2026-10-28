import { useState } from 'react'
import './App.css'
import EffectPage from './components/EffectPage'
import GlitchText from './components/GlitchText'
import Photo from './components/Photo'
import Quiz from './components/Quiz'
import Reveal from './components/Reveal'
import credits from './credits.json'

const p = (name, cap, pos) => ({ src: `/photos/${name}.jpg`, cap, pos })

const heroPhotos = [
  p('portrait2008', 'Нельсон Мандела, 2008'),
  p('portrait2000', 'Нельсон Мандела, 2000'),
  p('young', 'Молодой Мандела', 'top'),
  p('dc1994', 'Мандела в Вашингтоне, 1994', 'top'),
]

const steps = [
  {
    year: '1918',
    title: 'Детство в Мвезо',
    text: 'Родился 18 июля в деревне Мвезо (Транскей, ЮАР) в семье вождя народа тембу. При рождении получил имя Ролилахла. Имя «Нельсон» ему позже дала школьная учительница.',
    photos: [p('qunu', 'Музей в Мвезо, месте рождения Манделы')],
  },
  {
    year: '1940–1952',
    title: 'Учёба и юриспруденция',
    text: 'Изучал право в университете Витватерсранда. В 1952 году вместе с Оливером Тамбо открыл в Йоханнесбурге первую в стране юридическую контору, где чернокожие могли получить защиту.',
    photos: [p('young', 'Молодой Нельсон Мандела', 'top')],
  },
  {
    year: '1944–1962',
    title: 'Борьба против апартеида',
    text: 'Вступил в Африканский национальный конгресс и основал его Молодёжную лигу. После расстрела в Шарпевилле в 1960 году АНК запретили. В 1962 году тайно ездил по Африке за поддержкой, в том числе в Алжир.',
    photos: [p('algeria', 'Мандела с алжирскими бойцами, 1962')],
  },
  {
    year: '1962–1990',
    title: '27 лет за решёткой',
    text: 'В 1964 году на Ривонийском процессе приговорён к пожизненному заключению. 18 лет провёл на острове Роббен, работая в каменоломне. Отказывался от свободы в обмен на отказ от борьбы.',
    photos: [p('cell', 'Камера на острове Роббен')],
  },
  {
    year: '1990',
    title: 'Освобождение',
    text: '11 февраля вышел на свободу. Мир наблюдал за этим моментом в прямом эфире. Сразу после выхода начал переговоры о мирном конце апартеида и отправился в мировое турне.',
    photos: [p('bush1990', 'С Джорджем Бушем-старшим, 1990', 'top')],
  },
  {
    year: '1993',
    title: 'Нобелевская премия мира',
    text: 'Получил премию вместе с президентом Ф. В. де Клерком за мирное прекращение режима апартеида и закладку основ новой демократии.',
    photos: [
      p('deklerk', 'Мандела и де Клерк, Филадельфия, 1993'),
      p('clinton', 'Мандела и Билл Клинтон, 1993'),
    ],
  },
  {
    year: '1994–1995',
    title: 'Первый чернокожий президент',
    text: 'После первых многорасовых выборов 10 мая 1994 года стал президентом ЮАР. Создал Комиссию правды и примирения. В 1995-м вышел на финал Кубка мира по регби в форме сборной «Спрингбокс», и этот жест объединил страну.',
    photos: [
      p('voting', 'Мандела голосует на выборах, 1994', 'top'),
      p('dc1994', 'Мандела в Вашингтоне, октябрь 1994', 'top'),
    ],
  },
  {
    year: '2013',
    title: 'Наследие',
    text: 'Умер 5 декабря в Йоханнесбурге в возрасте 95 лет. Его день рождения, 18 июля, ООН объявила Международным днём Нельсона Манделы.',
    photos: [
      p('portrait2008', 'Нельсон Мандела, 2008'),
      p('square', 'Статуя Манделы на площади его имени, Йоханнесбург'),
    ],
  },
]

const quotes = [
  ['Образование — самое мощное оружие, которым можно изменить мир.', 'о роли знаний'],
  ['Я понял, что мужество — это не отсутствие страха, а победа над ним.', 'из книги «Долгий путь к свободе»'],
  ['Никто не рождается с ненавистью. Людей учат ненавидеть, а значит, их можно научить любить.', 'о примирении'],
  ['Всё кажется невозможным, пока это не сделано.', 'о настойчивости'],
]

const T = ({ children }) => <GlitchText text={children} />

export default function App() {
  const [page, setPage] = useState(() => (location.hash === '#effect' ? 'effect' : 'bio'))
  const go = (next) => {
    setPage(next)
    history.replaceState(null, '', next === 'effect' ? '#effect' : location.pathname)
    window.scrollTo(0, 0)
  }
  const tab = (id) => (page === id ? 'tab on' : 'tab')

  return (
    <>
      <nav>
        <button className={tab('bio')} onClick={() => go('bio')}>Биография</button>
        <button className={tab('effect')} onClick={() => go('effect')}>Эффект Манделы</button>
        {page === 'bio' && (
          <>
            <a href="#life"><T>Жизнь</T></a>
            <a href="#quotes"><T>Фразы</T></a>
            <a href="#quiz"><T>Тест</T></a>
          </>
        )}
      </nav>

      {page === 'effect' ? <EffectPage /> : (
      <>

      <header id="top" className="hero">
        <div className="hero-text">
          <h1><T>Нельсон Мандела</T></h1>
          <p><T>Борец за свободу, политзаключённый, президент</T></p>
          <div className="years">1918 — 2013</div>
          <div className="flag-bar">
            {['#c8382c', '#e0a526', '#2e8b57', '#2a5db0', '#f3ead8'].map((c) => <i key={c} style={{ background: c }} />)}
          </div>
          <p className="authors">
            <T>Презентацию сделал великий, прекрасный, красивый, великодушный господин Сулейменов Искандер и менее прекрасный, но не менее ужасный Сулейменов Тастемир</T>
          </p>
        </div>
        <Photo items={heroPhotos} ratio="4 / 5" delay={3500} />
      </header>

      <section id="life" className="block">
        <h2><T>Главные моменты жизни</T></h2>
        {steps.map((s) => (
          <Reveal key={s.year} className="step">
            <Photo items={s.photos} />
            <div>
              <div className="year">{s.year}</div>
              <h3><T>{s.title}</T></h3>
              <p><T>{s.text}</T></p>
            </div>
          </Reveal>
        ))}
      </section>

      <section id="quotes" className="block">
        <h2><T>Знаменитые фразы</T></h2>
        <Reveal className="quotes">
          {quotes.map(([q, note]) => (
            <figure key={q} className="quote">
              <q><T>{q}</T></q>
              <cite><T>{note}</T></cite>
            </figure>
          ))}
        </Reveal>
      </section>

      <section id="quiz" className="block">
        <h2><T>Проверь себя</T></h2>
        <Quiz />
      </section>

      </>
      )}

      <footer>
        <p><T>Презентация о Нельсоне Манделе. Фразы приведены в вольном переводе.</T></p>
        <details>
          <summary>Источники фото (Wikimedia Commons)</summary>
          <ul>
            {Object.values(credits).map((c) => (
              <li key={c.page}>
                <a href={c.page} target="_blank" rel="noreferrer">{c.title}</a> · {c.author} · {c.license}
              </li>
            ))}
          </ul>
        </details>
      </footer>
    </>
  )
}
