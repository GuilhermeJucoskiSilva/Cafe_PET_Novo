
'use client'

import { Lexend } from "next/font/google";
import { InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import Image from 'next/image';
import java from '../../public/java.png'

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export default function Header(){

    return(
    <div className={`${lexend.variable}`} >
        <div className = "bg-white flex sm:h-24 h-16 items-center px-4 fixed w-screen justify-between shadow-md shadow-main z-1000 ">
            <Image src={java} alt='Logo Java' className="w-8 h-7 sm:w-12 sm:h-10 mr-10" />
            <Titulo/>
            <Icones/>
        </div>
    </div>    
    );
}

function Titulo(){
    return(
        <div className="flex flex-col sm:gap-2 gap-0.5  text-center w-40 sm:w-lg h-14 sm:h-20 items-center">
            <h1 className="font-lexend text-main text-xl sm:text-4xl font-bold">Java Beans</h1>
            <ul className="list-image-none flex sm:gap-16 gap-4 font-lexend text-main h-3 sm:h-4 sm:text-xs text-[8px] scroll-smooth">
                <a href="#SobreNos">
                    <li>sobre nós</li>
                </a>
                <a href="#NossoCafe">
                    <li>nosso café</li>
                </a>
                <a href="#NossoAmbiente">
                    <li>nosso ambiente</li>
                </a>
                <a>
                    <li>brewmaster</li>    
                </a>
                

            </ul>
        </div>
    )
}

function Icones(){
    return(
        <div className="flex justify-around w-18">
            <a href='https://www.linkedin.com/company/pet-inform%C3%A1tica-uem/?viewAsMember=true'>
                <LinkedinLogoIcon size={18} color="#A08963"/>
            </a>
            <a href='https://www.instagram.com/petinfouem/#'>
                <InstagramLogoIcon size = {18}  color="#A08963"/>
            </a>
            
            <WhatsappLogoIcon size = {18} color="#A08963"/>
        </div>
        

    )

}