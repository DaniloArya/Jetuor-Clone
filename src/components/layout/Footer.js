import Link from 'next/link'

const Footer = ()=>{
  return (
    <footer className="flex flex-col p-5 gap-10 items-center bg-black text-white text-center proxima-nova-light text-xs">
      <div className="flex flex-col p-4 pt-16 gap-3 uppercase tracking-[0.2rem]">
        <p>Jetour 2021.</p>
        <p>TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
      <p className="px-5 md:px-[15%] leading-6 tracking-widest">*Imágenes referenciales. Precio de US$17,490 o S/69,960 corresponden al modelo Jetour X70 Full MT MY2022. Tipo de cambio referencial S/ 4,00, al momento de la transacción se aplicará el TC del día. Precios no incluyen trámite de placas, tarjeta de propiedad ni flete a Provincias. El equipamiento varía por versión del modelo. Precios válidos hasta el 28/02/2022 o hasta agotar el stock disponible. Válido para Concesionarios Autorizados de la Red Altos Andes a Nivel Nacional.</p>
      <div className="h-16 w-48 my-6 bg-slate-50">
      </div>
      <ul className="flex flex-col lg:flex-row uppercase tracking-[0.2rem] gap-6 lg:gap-24">
        <li><Link href="/"><a>Inicio</a></Link></li>
        <li><Link href="#historia"><a>Historia</a></Link></li>
        <li><Link href="/modelos"><a>Modelos</a></Link></li>
        <li><Link href="/postventa"><a>Postventa</a></Link></li>
        <li><Link href="/concesionarios"><a>Red de Concecionarios</a></Link></li>
        <li><Link href="/blog"><a>Blog</a></Link></li>
      </ul>
      <div className="w-full flex justify-between items-center">
        <div className="hidden md:block text-left opacity-60 tracking-widest">
          JETOUR 2021. TODOS LOS DERECHOS RESERVADOS ・ <Link href="/politicas-privacidad"><a>PROTECCIÓN DE DATOS PERSONALES</a></Link>{'・'}<Link href="/reglamentacion-neumaticos"><a>REGLAMENTACIÓN SOBRE NEUMÁTICOS FUERA DE USO</a></Link>
        </div>
        <div className="w-full md:w-auto flex justify-center gap-4">
          <div className="w-10 h-10 bg-white rounded"></div>
          <div className="w-10 h-10 bg-white rounded"></div>
          <div className="w-10 h-10 bg-white rounded"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer