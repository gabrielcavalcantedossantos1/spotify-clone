import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faBook, faGlobe, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  
  const imagemArtistas = [
    'https://i.ibb.co/7z7CZ69/artista-ze-neto.jpg',
    'https://i.ibb.co/3CmctgD/artista-mateus-kauan.jpg',
    'https://i.ibb.co/MSbmBzH/artista-luan-santana.jpg',
    'https://i.ibb.co/2WfJ8tD/artista-jorge-mateus.jpg',
    'https://i.ibb.co/wCpHtfQ/artista-henrique-juliano.jpg',
    'https://i.ibb.co/XJP8Djh/artista-gustavo-limma.jpg'
  ]

  const album =[
    'https://i.ibb.co/WBgGp5q/album-white-noise.jpg',
    'https://i.ibb.co/BfbL8VL/album-ceu-explica.jpg',
    'https://i.ibb.co/MDZt76D/album-racionais.jpg',
    'https://i.ibb.co/G3kXhXc/album-hit-me.jpg',
    'https://i.ibb.co/B3b0N7H/album-caju.jpg',
    'https://i.ibb.co/VMnCmTX/album-escandalo.jpg'
  ]
  

const artistas = [
  {
    nome:"Zé Neto & Cristiano",
    imagem: imagemArtistas[0]
  },
  {
    nome:"Mateus & Kauan",
    imagem: imagemArtistas[1]
  },
  {
    nome:'Luan Santana',
    imagem:imagemArtistas[2]
  },
  {
    nome:'Jorge & Mateus',
    imagem:imagemArtistas[3]
  },
  {
    nome:"Henrique e Juliano",
    imagem:imagemArtistas[4]
  },
  {
    nome:"Gustavo Lima",
    imagem:imagemArtistas[5]
  }
]

  const albunsArtistas =[
    {
      nome:'White Noise (Sleep $ Relaxation Sounds)',
      artists:'Sleepy John',
      imagem:album[0]
    },
    {
      nome:"O Céu Explica Tudo (Ao Vivo)",
      artists:'Henrique e Juliano',
      imagem:album[1]
    },
    {
      nome:"Nada Como Um dia Após O Outro",
      artists:'Racionais',
      imagem:album[2]
    },
    {
      nome:"HIT ME HARD AND SOFT",
      artists:"Billie Eilish",
      imagem:album[3]
    },
    {
      nome:"CAJU",
      artists:"Liniker",
      imagem:album[4]
    },
    {
      nome:"Escândalo Íntimo",
      artists:"luísa Sonza",
      imagem:album[5]
    }
    
  ]

  return (
    <div className="container">

      <nav className='sidebar'>
        <div className='nav-logo'>
          <FontAwesomeIcon icon={faSpotify} />
        </div>

        <div className='nav-library'>
          <FontAwesomeIcon icon={faBook} />
          <p>Sua biblioteca +</p>
        </div>

        <div className='nav-playlist'>
          <h5>Crie sua Primeira Playlist</h5>
          <p>É facil, vamos te ajudar</p>
          <button>Criar playlist</button>
        </div>

        <div className='nav-podcast'>
          <h5>Que tal seguir um Podcast?</h5>
          <p>Avisaremos você sobre nossos episódios</p>
          <button>Explore Podcast</button>
        </div>

        <div className="nav-footer">
          <a href="#">Legal</a>
          <a href="#">Centro de Privacidade</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Cookies</a>
          <a href="#">Sobre anúncios</a>
          <a href="#">Acessibilidade</a>
        </div>

        <button className='nav-lang-button'>
          <FontAwesomeIcon icon={faGlobe} />
          Português do Brasil
        </button>
      </nav>

      <main>

        <header className='search-bar'>
          <i><FontAwesomeIcon icon={faMagnifyingGlass}/></i>
          <input type="text" placeholder='O que você quer ouvir?' />
        </header>

        <section className='content'>
          
          <h2>Artistas Populares</h2>
          <div className="artist-grid">
              {artistas.map((artista)=>(
                <div className='artistas'key={artista.nome}>
                  <img src={artista.imagem} alt={artista.nome} />
                  <h3>{artista.nome}</h3>
                  <p>artista</p>
                </div>
                ))}
          
          </div>

          <h2>Álbuns populares</h2>
          <div className="albums-grid">
              {albunsArtistas.map((item)=>(
                <div className='albuns' key={item.nome}>
                  <img src={item.imagem} alt={`album ${item.nome}`}/>
                  <h3>{item.nome}</h3>
                  <p>{item.artists}</p>
                </div>
              ))}
          </div>

        </section>
      </main>

    </div>
  )
}

export default App
