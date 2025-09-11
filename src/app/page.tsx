'use client'

import {useState} from 'react';
import { Lexend, Inter } from "next/font/google";
import Header from "./header";
import Cardapio from "./cardapio";
import Brewmaster from './brewmaster';
import Footer from './footer';
import Image from 'next/image';
import Ambiente  from '../../public/Frame 1 (1).png';
import Linha from '../../public/Frame 4.png';
import CafeSobre from '../../public/CafeSobreNos.png';
import AmbienteSobre from '../../public/AmbienteSobreNos.png';

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})


export default function main(){
  return(
    <div className=''>
    <div className={`${lexend.variable} ${inter.variable}`}>
      <div className="bg-white h-full w-full
      ">
        
        <Header />
        <Hero />
        <SobreNos/>
        <Cardapio/>
        <Brewmaster/>
        <Footer/>
      </div>
    </div>
    </div>
  )
}

function Hero(){
  return(
    
      <div id="SobreNos" className = "flex flex-col items-center justify-between text-[#1e1e1e] gap-4 pb-12">
      <Image src={Ambiente} alt = "Imagem do ambiente" className='mt-16 h-32 sm:mt-20 sm:h-full'/>
      <Image src={Linha} alt = "Linha decorativa " className="sm:w-xl w-xs"/>
      <p className="font-lexend text-xs sm:w-xl w-xs text-justify">
        No Java Beans, cada xícara conta uma história.
        Somos apaixonados por bons cafés, boas ideias
        e bons encontros. De grãos selecionados a 
        receitas autorais, tudo aqui é feito para 
        despertar sentidos e criar conexões. Entre,
        sente-se e descubra seu novo lugar favorito.
      </p>
    </div>
    
  )
}

function SobreNos(){
  return(
   
      <div className="flex flex-col justify-between gap-6">

        <div id="NossoCafe" className="lg:h-80 bg-bg flex items-center flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-16 gap-8"  >
          <Image src={CafeSobre} alt="Imagem café na seção Sobre nós" className="w-full h-80 lg:h-full object-cover object-center md:h-72" />

          <div className="flex flex-col gap-4 h-fit lg:mr-10 mb-10 sm:mx-20 mx-14 text-justify">
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

        <div id = "NossoAmbiente" className="lg:gap-16 lg:h-96 lg:flex-row flex-col-reverse gap-8 bg-bg flex justify-between items-center">
          <div className="flex flex-col gap-4 mx-14 sm:mx-20 text-justify mb-10 lg:mb-0">
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
          <Image src={AmbienteSobre} alt="Imagem ambiente na seção sobre nós" className='lg:h-96 lg:max-w-1/2 object-cover w-full md:h-72 object-center' height={320}/>
        </div>
      </div>
  )
}

