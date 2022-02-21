import Link from 'next/link'
import Image from 'next/image'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../../../lib/htmlSerializer'

const Footer = ({data})=>{
  
  return (
    <footer className="flex flex-col p-5 gap-10 items-center bg-black text-white text-center proxima-nova-light text-xs">
      <div className="flex flex-col p-4 pt-16 gap-3 uppercase tracking-[0.2rem]">
        <RichText 
          render={data?.data?.legal_title}
          htmlSerializer={htmlSerializer}
        />
      </div>
      <div className="px-5 md:px-[15%] leading-6 tracking-widest">
        <RichText 
          render={data?.data?.legal_description}
          htmlSerializer={htmlSerializer}
        />
      </div>
      <Image
        alt="Logo de jetour"
        src={data?.data?.logo?.url}
        width={150}
        height={45}
      />
      <ul className="flex flex-col lg:flex-row uppercase tracking-[0.2rem] gap-6 lg:gap-24">
        <li><Link href="/"><a>Inicio</a></Link></li>
        <li><Link href="#historia"><a>Historia</a></Link></li>
        <li><Link href="/modelos"><a>Modelos</a></Link></li>
        <li><Link href="/postventa"><a>Postventa</a></Link></li>
        <li><Link href="/concesionarios"><a>Red de Concecionarios</a></Link></li>
        <li><Link href="/blog"><a>Blog</a></Link></li>
      </ul>
      <div className="w-full flex justify-between items-center">
        <div className="hidden md:block w-[calc(100%-192px)] text-left opacity-60 tracking-widest">
          JETOUR 2021. TODOS LOS DERECHOS RESERVADOS ・ <Link href="/politicas-privacidad"><a>PROTECCIÓN DE DATOS PERSONALES</a></Link>{'・'}<Link href="/reglamentacion-neumaticos"><a>REGLAMENTACIÓN SOBRE NEUMÁTICOS FUERA DE USO</a></Link>
        </div>
        <div className="w-full md:w-48 md:pr-6 flex justify-center items-center gap-10">
          {data?.data?.social_networks_list.map((social_network, idx) => {
            console.log(social_network?.social_network_logo?.url)
            return (
              <a className="flex justify-center items-center transition-transform active:-translate-y-2 md:hover:-translate-y-2" key={idx} href={social_network?.social_network_link}>
                <Image 
                  alt={social_network?.social_network_name}
                  src={social_network?.social_network_logo?.url}
                  width={social_network?.social_network_logo?.dimensions?.width * 1.5}
                  height={social_network?.social_network_logo?.dimensions?.height * 1.5}
                />
              </a>)
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer