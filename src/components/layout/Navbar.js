import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'

const Navbar = () => {

  const [effect, setEffect] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEffect(true);
    }, );
  }, []);

  return (
    <nav className="fixed z-50 w-full h-20 p-3 lg:p-5 lg:px-12 flex justify-between bg-gradient-to-b from-black text-white proxima-nova-regular">
      <Link href="/">
        <a aria-hidden="true">
          <div className={`relative z-10 h-full w-56 transition-all duration-700 ${effect?'translate-y-0 opacity-100':'-translate-y-20 opacity-0'}`}>
            <Image src="/logoJetour.svg" layout="fill" alt="logo Jetour" />
          </div>
        </a>
      </Link>
      <button className="relative z-10 pr-3 lg:hidden" onClick={()=>(setShowMenu(!showMenu))}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 12V9H31.5V12H4.5Z" />
          <path d="M4.5 19.5H31.5V16.5H4.5V19.5Z" />
          <path d="M18 27H31.5V24H18V27Z" />
        </svg>
      </button>
      <ul className={`${showMenu?'flex':'hidden'} lg:flex top-0 left-0 absolute lg:relative h-screen lg:h-full w-full gap-8 bg-[#da0010] lg:bg-transparent flex-col lg:flex-row justify-center lg:justify-end items-center text-xs text-center tracking-widest uppercase`}>
        <li className={`transition-all duration-700 ${effect?'translate-y-0 delay-100 opacity-100':'-translate-y-20 opacity-0'}`}><Link href="/"><a>Inicio</a></Link></li>
        <li className={`transition-all duration-700 ${effect?'translate-y-0 delay-200 opacity-100':'-translate-y-20 opacity-0'}`}><Link href="#historia"><a>Historia</a></Link></li>
        <li className={`transition-all duration-700 ${effect?'translate-y-0 delay-300 opacity-100':'-translate-y-20 opacity-0'}`}><Link href="/modelos"><a>Modelos</a></Link></li>
        <li className={`transition-all duration-700 ${effect?'translate-y-0 delay-[400ms] opacity-100':'-translate-y-20 opacity-0'}`}><Link href="/postventa"><a>Postventa</a></Link></li>
        <li className={`transition-all duration-700 ${effect?'translate-y-0 delay-500 opacity-100':'-translate-y-20 opacity-0'}`}><Link href="/concesionarios"><a>Red de Concecionarios</a></Link></li>
        <li className={`transition-all duration-700 ${effect?'translate-y-0 delay-[600ms] opacity-100':'-translate-y-20 opacity-0'}`}><Link href="/blog"><a>Blog</a></Link></li>
        <Link href="/cotizar"><a><li className={`transition-all duration-700 ${effect?'translate-y-0 delay-700 opacity-100':'-translate-y-20 opacity-0'} py-3 px-20 lg:px-10 bg-black lg:bg-[#da0010] proxima-nova-semibold`}>Cotizar</li></a></Link>
      </ul>
    </nav>
  );
}

export default Navbar;