'use client'
import Image from 'next/image';
import java from '../../public/java.png'

export default function Footer(){
    return(
        <div className="bg-white h-20 flex justify-between sm:px-10 w-full font-lexend text-main font-bold items-center">
            <div className='flex gap-4  items-center'>
                <Image src={java} alt="Logo do java" className='w-8 h-8 sm:h-12 sm:w-12'/>
                <h2 className='sm:text-2xl'>Java Beans</h2>
            </div>
            <p className='text-xs sm:text-xl text-center'>
                Feito com amor por PET-Informática
            </p>
        </div>
    )
}