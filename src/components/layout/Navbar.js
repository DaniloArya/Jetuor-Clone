import Image from 'next/image'
import Link from 'next/link'
import {useState, useEffect} from 'react'

const Navbar = () => {

  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEffect(true);
    }, );
  }, []);

  return (
    <nav className="h-20 p-5 sm:px-10 flex justify-between bg-gradient-to-b from-black text-white">
      <Link href="/">
        <a aria-hidden="true">
          <div className={`relative h-full w-56 transition-all duration-500 ${effect?'translate-y-0 opacity-100':'-translate-y-20 opacity-0'}`}>
            <Image src="/logoJetour.svg" layout="fill" alt="logo Jetour" />
          </div>
        </a>
      </Link>
      <ul className="h-full flex justify-end items-center text-xs text-center tracking-widest uppercase proxima-nova-regular gap-8">
        <li className={`transition-all duration-500 ${effect?'translate-y-0 delay-100 opacity-100':'-translate-y-20 opacity-0'}`}>Inicio</li>
        <li className={`transition-all duration-500 ${effect?'translate-y-0 delay-200 opacity-100':'-translate-y-20 opacity-0'}`}>Historia</li>
        <li className={`transition-all duration-500 ${effect?'translate-y-0 delay-300 opacity-100':'-translate-y-20 opacity-0'}`}>Modelos</li>
        <li className={`transition-all duration-500 ${effect?'translate-y-0 delay-[400ms] opacity-100':'-translate-y-20 opacity-0'}`}>Postventa</li>
        <li className={`transition-all duration-500 ${effect?'translate-y-0 delay-500 opacity-100':'-translate-y-20 opacity-0'}`}>Red de Concecionarios</li>
        <li className={`transition-all duration-500 ${effect?'translate-y-0 delay-[600ms] opacity-100':'-translate-y-20 opacity-0'}`}>Blog</li>
        <li className={`transition-all duration-500 ${effect?'translate-y-0 delay-700 opacity-100':'-translate-y-20 opacity-0'} py-3 px-8 bg-red-600 `}>Cotizar</li>
      </ul>
    </nav>
  );
}

export default Navbar;