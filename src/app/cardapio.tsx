
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


  return(
    <div>
      <CardapioFixo/>
    </div>
  )
}

function CardapioFixo(){
  const [visivel, setVisivel] = useState(false);

  const abreClassicos = () => {
    setVisivel(!visivel)
  }
  return(
    <div className = "flex flex-col mt-8 pb-8 mb-4 gap-7 items-center shadow-2xs">
      <p className = "font-bold font-inter text-main text-2xl">nosso cardápio</p>
      <ul className="flex justify-around text-black w-full">
        <button onClick={abreClassicos} className='cursor-pointer'>
        <li id = "Classicos" className="flex flex-col items-center gap-3 max-w-20 text-center">
          <Image src={Copo} alt="Copo" height={57}/>
          <p className="font-inter ">Clássicos</p>
        </li>
        </button>
        <li className="flex flex-col items-center gap-3 max-w-20 text-center">
          <Image src={Grao} alt="Copo" height={57}/>
          <p className="font-inter">Da Casa</p>
        </li>
        <li className="flex flex-col items-center gap-3 max-w-20 text-center">
          <Image src={Bebida} alt="Copo" height={57}/>
          <p className="font-inter">Outras Bebidas</p>
        </li>
        <li className="flex flex-col items-center gap-3 max-w-20 text-center">
          <Image src={Capsula} alt="Capsula" height={57}/>
          <p className="font-inter">Capsulas</p>
          <Image src={New} alt= "New" height={53} className="absolute ml-17 mt-3"/>
        </li >
        <li className="flex flex-col items-center gap-3 max-w-20 text-center">
          <Image src={Pao} alt="Comidas" height={57}/>
          <p className="font-inter">Comidas</p>
        </li>
        <li className="flex flex-col items-center gap-3 max-w-20 text-center">
          <Image src={Shop} alt="Shop" height={57}/>
          <p className="font-inter">Shop</p>
        </li>
      </ul>
      {visivel && <CardapioClassico/>}
    </div>
  )
}

function CardapioClassico(){
  
  return(
    
    <ul className="flex gap-28 text-black font-inter text-center justify-center">
      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
        <p>Plain old Java Espresso</p>
      </li>
      
      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
        <p>Plain old Java Espresso</p>
      </li>

      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
        <p>Plain old Java Espresso</p>
      </li>   
      
      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
        <p>Plain old Java Espresso</p>
      </li>

      <li className="flex flex-col gap-3 items-center">
        <Image src={Generico} alt="Plain Old Java Espresso" width={80}/>
        <p>Plain old Java Espresso</p>
      </li>
    </ul>
    
  )
}

function CardapioBebidas(){
  return(
    <div>

    </div>
  )
}

const AbreClassicos = (event: React.MouseEvent<HTMLButtonElement>) => {
  
};