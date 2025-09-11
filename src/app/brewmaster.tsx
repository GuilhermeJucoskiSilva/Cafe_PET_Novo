'use client'
import Image from 'next/image'
import AreaGerente from '../../public/AreaGerente.png';
import { useState } from 'react';

export default function Brewmaster(){
    const [hovered, setHovered] = useState(false)

    return(
        <div className='flex items-center justify-center z-0 flex-col'>
            {/* <Image src = {AreaGerente} alt = "AreaGerente" className=' sm:w-full h-full relative'/> */}


            <div className="bg-[url('/AreaGerente.png')] w-full h-96 flex flex-col items-center justify-center gap-10 sm:gap-20">
                <div className='text-center flex flex-col gap-5'>
                    <h1 className='font-lexend text-xl sm:text-4xl lg:text-6xl'>Você é um gerente franqueado ?</h1>
                    <p className='font-lexend text-xl'>acesse a aba de <span className='font-bold'>brewmaster</span> pelo botão abaixo</p>
                </div>

                <div onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}} className={hovered ? 'z-10 bg-white text-main px-15 py-5 border-main border-6 rounded-4xl transition-all duration-500 cursor-pointer': 'z-10 px-15 py-5 border-white border-6 rounded-4xl transition-all duration-150'}>
                    <p className='text-4xl font-bold font-lexend'>acessar</p>
                </div>
            </div>
            
        </div>
    )

}