
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
        <div className = "bg-white flex h-24 items-center justify-between px-2.5 fixed w-full shadow-md shadow-main ">
            <Image src={java} alt='Logo Java' width={48} height = {40}/>
            <Titulo/>
            <Icones/>
        </div>
    </div>    
    );
}

function Titulo(){
    return(
        <div className="flex flex-col gap-2 text-center w-lg h-20">
            <h1 className="font-lexend text-main text-4xl font-bold">Java Beans</h1>
            <ul className="list-image-none flex gap-16 font-lexend text-main h-4 text-xs scroll-smooth">
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