import {useState} from 'react';
import { Lexend, Inter } from "next/font/google";
import Header from "./header";
import Cardapio from "./cardapio";
import Image from 'next/image';
import Ambiente  from '../../public/Frame 1 (1).png';
import Linha from '../../public/Frame 4.png';
import CafeSobre from '../../public/CafeSobreNos.png';
import AmbienteSobre from '../../public/AmbienteSobreNos.png';

import AreaGerente from '../../public/AreaGerente.png';

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
    <div className={`${lexend.variable} ${inter.variable}`}>
      <div className="bg-white">
        <Header />
        <Hero />
        <SobreNos/>
        <Cardapio/>
        </div>
    </div>
    
  )
}

function Hero(){
  return(
    
      <div id="SobreNos" className = "flex flex-col items-center justify-between text-[#1e1e1e] gap-4 pb-12">
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
    
  )
}

function SobreNos(){
  return(
   
      <div className="flex flex-col justify-between h-[700px]">

        <div id="NossoCafe" className="h-80 bg-bg flex  items-center" >
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

        <div id = "NossoAmbiente" className="h-80 bg-bg flex justify-between items-center">
          <div className="flex flex-col gap-4 mx-24 ">
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
  )
}

// function CardapioFixo(){
  
//   return(
//     <div className = "flex flex-col mt-8 pb-8 mb-4 gap-7 items-center shadow-2xs">
//       <p className = "font-bold font-inter text-main text-2xl">nosso cardápio</p>
//       <ul className="flex justify-around text-black w-full">
       
//         <li id = "Classicos" className="flex flex-col items-center gap-3 max-w-20 text-center">
//           <Image src={Copo} alt="Copo" height={57}/>
//           <p className="font-inter ">Clássicos</p>
//         </li>
//         <li className="flex flex-col items-center gap-3 max-w-20 text-center">
//           <Image src={Grao} alt="Copo" height={57}/>
//           <p className="font-inter">Da Casa</p>
//         </li>
//         <li className="flex flex-col items-center gap-3 max-w-20 text-center">
//           <Image src={Bebida} alt="Copo" height={57}/>
//           <p className="font-inter">Outras Bebidas</p>
//         </li>
//         <li className="flex flex-col items-center gap-3 max-w-20 text-center">
//           <Image src={Capsula} alt="Capsula" height={57}/>
//           <p className="font-inter">Capsulas</p>
//           <Image src={New} alt= "New" height={53} className="absolute ml-17 mt-3"/>
//         </li >
//         <li className="flex flex-col items-center gap-3 max-w-20 text-center">
//           <Image src={Pao} alt="Comidas" height={57}/>
//           <p className="font-inter">Comidas</p>
//         </li>
//         <li className="flex flex-col items-center gap-3 max-w-20 text-center">
//           <Image src={Shop} alt="Shop" height={57}/>
//           <p className="font-inter">Shop</p>
//         </li>
//       </ul>
//     </div>
//   )
// }

// function CardapioClassico(){
  
//   return(
    
//     <ul className="flex gap-28 text-black font-inter text-center justify-center hidden">
//       <li className="flex flex-col gap-3 items-center">
//         <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
//         <p>Plain old Java Espresso</p>
//       </li>
      
//       <li className="flex flex-col gap-3 items-center">
//         <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
//         <p>Plain old Java Espresso</p>
//       </li>

//       <li className="flex flex-col gap-3 items-center">
//         <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
//         <p>Plain old Java Espresso</p>
//       </li>   
      
//       <li className="flex flex-col gap-3 items-center">
//         <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
//         <p>Plain old Java Espresso</p>
//       </li>

//       <li className="flex flex-col gap-3 items-center">
//         <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
//         <p>Plain old Java Espresso</p>
//       </li>
//     </ul>
    
//   )
// }

// function CardapioBebidas(){
//   return(
//     <div>

//     </div>
//   )
// }

// const AbreClassicos = (event: React.MouseEvent<HTMLButtonElement>) => {
//   const classico = document.getElementById("Classicos")
//   const ativado = classico?.contains()
// };
