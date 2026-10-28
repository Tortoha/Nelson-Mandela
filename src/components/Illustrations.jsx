const G = '#e0a526'
const GREEN = '#2e8b57'
const RED = '#c8382c'
const BLUE = '#2a5db0'
const INK = '#1a160f'

const Frame = ({ children }) => (
  <svg viewBox="0 0 400 300" role="img" className="illus" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill={INK} />
    {children}
  </svg>
)

// Детство: холмы Транскея, хижина, солнце
const Village = () => (
  <Frame>
    <circle cx="310" cy="85" r="34" fill={G} />
    <path d="M0 220 Q100 140 200 200 T400 190 V300 H0Z" fill={GREEN} opacity=".7" />
    <path d="M0 250 Q120 190 240 240 T400 230 V300 H0Z" fill="#1f5c3a" />
    <rect x="120" y="190" width="70" height="45" fill="#8a5a2b" />
    <path d="M110 192 L155 150 L200 192Z" fill={G} />
    <rect x="145" y="208" width="20" height="27" fill={INK} />
  </Frame>
)

// Юрист: весы правосудия
const Scales = () => (
  <Frame>
    <rect x="196" y="70" width="8" height="170" fill={G} />
    <rect x="150" y="238" width="100" height="10" fill={G} />
    <rect x="90" y="84" width="220" height="7" fill={G} />
    <circle cx="200" cy="72" r="10" fill={G} />
    <path d="M100 91 L70 170 M100 91 L130 170 M300 91 L270 170 M300 91 L330 170" stroke={G} strokeWidth="3" />
    <path d="M62 170 H138 A38 30 0 0 1 62 170Z" fill="#f3ead8" />
    <path d="M262 170 H338 A38 30 0 0 1 262 170Z" fill="#f3ead8" />
  </Frame>
)

// Борьба: толпа людей с флагом
const March = () => (
  <Frame>
    <rect x="198" y="40" width="5" height="150" fill="#f3ead8" />
    <path d="M203 40 H290 L270 68 L290 96 H203Z" fill={RED} />
    {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
      <g key={x} fill={[GREEN, G, BLUE][i % 3]}>
        <circle cx={x} cy={200 - (i % 2) * 14} r="14" />
        <path d={`M${x - 20} 300 V${236 - (i % 2) * 14} Q${x} ${212 - (i % 2) * 14} ${x + 20} ${236 - (i % 2) * 14} V300Z`} />
      </g>
    ))}
  </Frame>
)

// Роббен-Айленд: решётка, море, остров
const Prison = () => (
  <Frame>
    <rect x="0" y="170" width="400" height="130" fill={BLUE} opacity=".5" />
    <path d="M120 170 Q200 120 280 170Z" fill="#4b4636" />
    <circle cx="200" cy="90" r="30" fill={G} opacity=".8" />
    {[40, 90, 140, 190, 240, 290, 340].map((x) => (
      <rect key={x} x={x} y="0" width="12" height="300" fill="#0b0906" />
    ))}
    <rect x="0" y="120" width="400" height="12" fill="#0b0906" />
  </Frame>
)

// Свобода: рассвет и птица
const Freedom = () => (
  <Frame>
    <circle cx="200" cy="230" r="90" fill={G} />
    <rect x="0" y="230" width="400" height="70" fill={INK} />
    {[...Array(9)].map((_, i) => (
      <line key={i} x1="200" y1="230" x2={200 + 170 * Math.cos(Math.PI + (i * Math.PI) / 8)} y2={230 + 170 * Math.sin(Math.PI + (i * Math.PI) / 8)} stroke={G} strokeWidth="2" opacity=".5" />
    ))}
    <path d="M150 90 Q175 60 200 90 Q225 60 250 90 Q225 82 200 106 Q175 82 150 90Z" fill="#f3ead8" />
  </Frame>
)

// Нобелевская премия: медаль на ленте
const Nobel = () => (
  <Frame>
    <path d="M160 0 L200 110 L240 0Z" fill={BLUE} />
    <circle cx="200" cy="170" r="74" fill={G} />
    <circle cx="200" cy="170" r="60" fill="none" stroke={INK} strokeWidth="3" />
    <path d="M165 180 Q185 150 200 175 Q215 150 235 180 Q215 176 200 196 Q185 176 165 180Z" fill={INK} />
  </Frame>
)

// Радужная нация: цвета флага ЮАР
const Rainbow = () => (
  <Frame>
    {[RED, G, GREEN, BLUE, '#f3ead8'].map((c, i) => (
      <path key={c} d={`M${40 + i * 24} 250 A${160 - i * 24} ${160 - i * 24} 0 0 1 ${360 - i * 24} 250`} fill="none" stroke={c} strokeWidth="22" />
    ))}
    <rect x="0" y="250" width="400" height="50" fill={INK} />
  </Frame>
)

// Регби 1995: мяч на поле
const Rugby = () => (
  <Frame>
    <rect y="200" width="400" height="100" fill={GREEN} />
    <path d="M0 220 H400 M0 255 H400" stroke="#f3ead8" strokeWidth="2" opacity=".5" />
    <ellipse cx="200" cy="140" rx="90" ry="52" fill="#8a5a2b" transform="rotate(-20 200 140)" />
    <path d="M140 170 L260 110" stroke="#f3ead8" strokeWidth="3" />
    <path d="M190 150 l10 -6 M205 142 l10 -6 M175 158 l10 -6" stroke="#f3ead8" strokeWidth="3" />
  </Frame>
)

// Наследие: свеча
const Legacy = () => (
  <Frame>
    <circle cx="200" cy="110" r="80" fill={G} opacity=".15" />
    <rect x="178" y="130" width="44" height="120" rx="4" fill="#f3ead8" />
    <path d="M200 70 Q226 105 200 128 Q174 105 200 70Z" fill={G} />
    <rect x="120" y="250" width="160" height="10" fill="#4b4636" />
  </Frame>
)

export const art = { village: Village, scales: Scales, march: March, prison: Prison, freedom: Freedom, nobel: Nobel, rainbow: Rainbow, rugby: Rugby, legacy: Legacy }
