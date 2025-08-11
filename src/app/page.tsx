import { Lexend } from "next/font/google";
import Header from "./header";
import Image from 'next/image';
import Ambiente from '../../public/Frame 1 (1).png'
import Linha from '../../public/Frame 4.png'
import CafeSobre from '../../public/CafeSobreNos.png'
import AmbienteSobre from '../../public/AmbienteSobreNos.png'

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});


export default function main(){
  return(
    <div className="bg-white">
    <Header />
    <Hero />
    <SobreNos/>
    </div>
  )
}

function Hero(){
  return(
    <div className={`${lexend.variable}`}>
      <div className = "flex flex-col items-center justify-between text-[#1e1e1e] gap-4 pb-12">
      <Image src={Ambiente} alt = "Imagem do ambiente"/>
      <Image src={Linha} alt = "Linha decorativa " width={500}/>
      <p className="font-lexend text-xs w-[500px]">
        No Java Beans, cada xícara conta uma história.
        Somos apaixonados por bons cafés, boas ideias
        e bons encontros. De grãos selecionados a 
        receitas autorais, tudo aqui é feito para 
        despertar sentidos e criar conexões. Entre,
        sente-se e descubra seu novo lugar favorito.
      </p>
    </div>
    </div>
  )
}

function SobreNos(){
  return(
    <div className={`${lexend.variable}`}>
      <div className="flex flex-col justify-between h-[700px]">

        <div className="h-80 bg-bg flex  items-center" >
          <Image src={CafeSobre} alt="Imagem café na seção Sobre nós" height={320} />

          <div className="flex flex-col gap-4 mx-24">
            <h1 className="font-lexend font-bold text-2xl text-black">
              Nosso café
            </h1>
            <p className="font-lexend text-black text-[16px] ">
              Trabalhamos com torrefações artesanais e métodos de preparo variados, do 
              espresso clássico ao coado delicado, para valorizar todas as nuances do café.
              Seja qual for sua preferência, temos um ritual preparado com carinho e técnica,
              do grão à xícara.
            </p>
          </div>
        </div>

        <div className="h-80 bg-bg flex justify-between items-center">
          <div className="flex flex-col gap-4 mx-24">
            <h1 className="font-lexend font-bold text-2xl text-black">
              Nosso ambiente
            </h1>
            <p className="font-lexend text-black text-[16px]">
              Cada detalhe do espaço foi pensado para proporcionar conforto, 
              acolhimento e inspiração. Entre o aroma fresco do café moído na
               hora e uma trilha sonora suave, criamos um ambiente que equilibra
                tranquilidade e criatividade — perfeito para uma pausa revigorante, 
                uma boa conversa ou até mesmo horas de foco e produtividade.
            </p>
          </div>
          <Image src={AmbienteSobre} alt="Imagem ambiente na seção sobre nós" height={320}/>
        </div>
      </div>

    </div>
  )
}