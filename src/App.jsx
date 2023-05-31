import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa'

import './App.css'

import imgLogo from './assets/logo_1.svg'

export function App() {
  return (
    <>
      <section className="container">
        <main className="content">
          <main className="infoProfile">
            <img src={imgLogo} alt="Logo da marca" />
            <a
              href="https://2system.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>2System</h2>
            </a>
          </main>

          <aside className="linksProfile">
            <button>
              <a
                href="https://houseyour.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Plataforma Imóbiliaria
              </a>
            </button>

            <button>
              <a
                href="https://dramaryjane.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Modelo de Landing Page para Clínica Odontológica
              </a>
            </button>

            <button>
              <a
                href="https://callservice.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Plataforma de Gestão de Chamados
              </a>
            </button>

            <button>
              <a
                href="https://tftech.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Modelo de Landing Page para empresas
              </a>
            </button>

            <button>
              <a
                href="https://eyesgreen-store.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                Modelo de Ecoommerce
              </a>
            </button>

            <button>
              <a
                href="https://gymfitnessplus.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Modelo Landing Page para Academia{' '}
              </a>
            </button>
          </aside>

          <footer>
            <a
              href="https://github.com/ElvisFelix-dev"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={25} />
            </a>

            <a
              href="https://www.instagram.com/eyesgreen_tech/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={25} />
            </a>

            <a
              href="https://wa.me/5516996318063"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/elvis-felix/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={25} />
            </a>

            <a href="https://t.me/elvisfelixx" target="_blank" rel="noreferrer">
              <FaTelegram size={25} />
            </a>
          </footer>
        </main>
      </section>
    </>
  )
}
