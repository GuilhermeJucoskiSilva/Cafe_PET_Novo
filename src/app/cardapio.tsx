
"use client"
import {useState} from 'react';
import Image from 'next/image'
import Copo from '../../public/Copo.png';
import Grao from '../../public/Grao.png';
import Bebida from '../../public/Bebida.png';
import Capsula from '../../public/Capsula.png';
import New from '../../public/New.png';
import Pao from '../../public/Pao.png';
import Shop from '../../public/Shop.png';
import Generico from '../../public/Generico.png';
import Frappe from "../../public/Frappe.png";
import Choco from '../../public/Choco.png';
import Quantum from '../../public/Quantum.png';


export default function Cardapio(){
  const [visivelClassicos, setVisivelClassicos] = useState(false);
  const [visivelBebidas, setVisivelBebidas] = useState(false);

  const abreClassicos = () => {
    setVisivelBebidas(false)
    setVisivelClassicos(!visivelClassicos)
  }

  const abreBebidas = () => {
    setVisivelClassicos(false)
    setVisivelBebidas(!visivelBebidas)
  }


  return(
    <div>
      <CardapioFixo abreClassicos = {abreClassicos} abreBebidas = {abreBebidas}/>
      <CardapioClassico visivelClassicos = {visivelClassicos}/>
      <CardapioBebidas visivelBebidas = {visivelBebidas}/>
    </div>
  )
}


interface funcoes {
  abreClassicos: () => void;
  abreBebidas: () => void;
}

function CardapioFixo({abreClassicos, abreBebidas}: funcoes){
  
  return(
    
    <div className = "flex flex-col md:mt-8 mt-4 mb-[1px] md:pb-10 gap-4 md:gap-8 pb-4 items-center shadow-2xs shadow-main z-100 bg-white">
      <p className = "font-bold font-inter text-main text-2xl bg-white z-10" >nosso cardápio</p>

      <div className='w-full h-fit flex sm:flex-row flex-col-reverse gap-10 sm:gap-0' >
        <ul className="flex justify-around text-black w-full bg-white z-100">

        <button onClick={() => abreClassicos()} className='cursor-pointer'>
        <li id = "Classicos" className="flex flex-col items-center gap-3 md:max-w-14 max-w-10 text-center">
          <Image src={Copo} className='md:h-14 h-8 md:w-14 w-8' alt="Copo"/>
          <p className="font-inter md:text-xl text-xs">Clássicos</p>
        </li>
        </button>

        <li className="flex flex-col items-center gap-3 max-w-10 md:max-w-14 text-center">
          <Image src={Grao} alt="Grão de café" className='md:h-14 h-8 md:w-14 w-8' />
          <p className="font-inter md:text-xl text-xs">Da Casa</p>
        </li>

        <button onClick={() => abreBebidas()} className='cursor-pointer'>
          <li className="flex flex-col justify-center items-center gap-3 max-w-10 md:max-w-14 text-center">
          <Image src={Bebida} alt="Copo" className='md:h-14 h-8 md:w-14 w-8'/>
          <p className="font-inter md:text-xl text-xs">Outras Bebidas</p>
        </li>
        </button>
        </ul>

        <ul className="flex justify-around text-black w-full bg-white">
          <li className="flex flex-col items-center gap-3 max-w-10 md:max-w-14 text-center">
            <Image src={Capsula} alt="Capsula" className='md:h-14 h-8 md:w-14 w-8'/>
            <p className="font-inter md:text-xl text-xs">Cápsulas</p>
            <Image src={New} alt= "New" className="md:h-12 h-8 md:w-12 w-8 absolute ml-10 mt-3 "/>
          </li >
          <li className="flex flex-col items-center gap-3 max-w-10 md:max-w-14 text-center">
            <Image src={Pao} alt="Comidas" className='md:h-14 h-8 md:w-14 w-8'/>
            <p className="font-inter md:text-xl text-xs">Comidas</p>
          </li>
          <li className="flex flex-col items-center gap-3 max-w-10 md:max-w-14 text-center">
            <Image src={Shop} alt="Shop" className='md:h-14 h-8 md:w-14 w-8'/>
            <p className="font-inter md:text-xl text-xs">Shop</p>
          </li>
        </ul>
      </div>
      
    </div>
    
    
  )
}

function CardapioClassico({visivelClassicos}: {visivelClassicos :boolean}){
  
  return(
    <div className= {`w-full flex justify-center max-h-0 transition-all ease-in-out overflow-hidden ${visivelClassicos ? 'max-h-96 pt-4 duration-500' : 'duration-150 max-h-0 pt-0 opacity-0'} `}>
    <ul className= {"text-xs font-semibold md:text-base flex gap-8 sm:gap-20 md:gap-28 text-black font-inter text-center justify-center pb-5 px-5"}>
      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" className='lg:h-20 h-14 w-14 lg:w-20'/>
        <p>Plain old Java Espresso</p>
      </li>
      
      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" className='lg:h-20 h-14 w-14 lg:w-20'/>
        <p>Plain old Java Espresso</p>
      </li>

      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" className='lg:h-20 h-14 w-14 lg:w-20'/>
        <p>Plain old Java Espresso</p>
      </li>   
      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" className='lg:h-20 h-14 w-14 lg:w-20'/>
        <p>Plain old Java Espresso</p>
      </li>

      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" className='lg:h-20 h-14 w-14 lg:w-20'/>
        <p>Plain old Java Espresso</p>
      </li>
    </ul>
    </div>
    
  )
}

function CardapioBebidas({visivelBebidas}: {visivelBebidas :boolean}){
  return(
    <div id="Bebidas" className= {`w-full flex justify-center max-h-0 transition-all ease-in-out overflow-hidden ${visivelBebidas ? 'max-h-96 py-6 duration-500' : 'max-h-0 pt-0 duration-150 opacity-0'} `}>
      
      
      <ul className="flex text-xs sm:text-base text-black font-semibold justify-around w-full">
        <li className='flex flex-col gap-3 items-center text-center'>
          <Image src = {Frappe} alt="Frappe Polimórfico" className='h-16 w-16 sm:w-20 sm:h-20'/>
          <p>Frappe Polimórfico</p>
        </li>

        <li className='flex flex-col gap-3 items-center text-center'>
          <Image src = {Choco} alt="Choco JIT Freeze" className='h-16 w-10 sm:w-16 sm:h-20' />
          <p>Choco JIT Freeze</p>
        </li>
        <li className='flex flex-col gap-3 items-center text-center'>
          <Image src = {Quantum} alt="Quantum Chill PET-Info" className='h-16 w-20 sm:w-24 sm:h-20'/>
          <p>Quantum Chill PET-Info</p>
        </li>
      </ul>

    </div>
  )
}

