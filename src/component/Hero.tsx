import { GlobeIcon, StarIcon } from "@phosphor-icons/react"
import Link from "./Link"
import { useState,useEffect } from "react"
import CreditCard from "./CreditCard"

const Hero = () => {
    const [PlanMode, setPlanMode] = useState(true)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Nettoyage (très important !)
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);
    return (
        <div className={` overflow-hidden h-screen flex flex-col  w-full bg-cover bg-no-repeat bg-center  ${PlanMode ? "bg-[url('/images/bg.png')]" : "brightness-75 transition-all duration-300 bg-[url('/images/bgb.png')]"}  `}>

            <nav className="flex py-5 justify-between items-center  lg:px-20 px-5   lg:border-b-[0.2px] lg:border-white/20 ">
                <div className="flex  items-center gap-22">
                    <div className="flex items-center justify-center  gap-2  ">
                        <img src="./images/Vector.png" className="w-8.5 h-8.5" />
                        <p className="font-bold font-hanken text-[26px] text-white -tracking-[0.25] ">Fathom</p>
                    </div>
                    <ul className="lg:flex hidden gap-8.5 items-center">
                        <Link name={`${PlanMode ? "Credit card" : "Bank account"}`} />
                        <Link name={`${PlanMode ? "Bank account" : "Treasury"}`} />
                        <Link name={`${PlanMode ? "Loans" : "HR"}`} />
                        <Link name="Blog" />
                        <Link name="Support" />

                    </ul>
                </div>
                <div className=" gap-4 items-center hidden md:flex">
                    <div className="flex gap-0.5">
                        <button className={`font-hanken font-bold text-base -tracking-[0.25] cursor-pointer ${PlanMode ? 'bg-[#153F2A]' : ''}  rounded-xl py-3 px-4  text-white`}
                            onClick={() => { setPlanMode((prev => !prev)) }}
                        >
                            Personnal
                        </button>
                        <button className={`font-hanken font-bold text-base -tracking-[0.25] cursor-pointer ${PlanMode ? '' : 'bg-[#153F2A]'} rounded-xl py-3 px-4  text-white`}
                            onClick={() => { setPlanMode((prev => !prev)) }}
                        >
                            Businness
                        </button>
                    </div>
                    <GlobeIcon size={32} className="text-white " />
                </div>
                <button
                    className="md:hidden flex cursor-pointer z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="flex flex-col gap-1.5">
                        {/* Tu pourrais ici animer les barres pour faire une croix si isMenuOpen est vrai */}
                        <div className={`bg-white h-0.5 rounded-[50px] transition-all ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
                        <div className={`bg-white h-0.5 rounded-[50px] transition-all ${isMenuOpen ? '-rotate-45' : 'w-6'}`} />
                    </div>
                </button>
                <div className={`fixed top-0  right-0 h-full w-1/2  z-40 bg-[#153F2A] transition-transform duration-300 ease-in-out shadow-2xl
    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    <ul className="flex flex-col p-10 gap-8  mt-20">

                        <Link name={`${PlanMode ? "Credit card" : "Bank account"}`} />
                        <Link name={`${PlanMode ? "Bank account" : "Treasury"}`} />
                        <Link name={`${PlanMode ? "Loans" : "HR"}`} />
                        <Link name="Blog" />
                        <Link name="Support" />
                        <button className={`font-hanken font-bold text-base -tracking-[0.25] cursor-pointer ${PlanMode ? 'sm:bg-[#153F2A] bg-[#A1E86F]' : ' '}  rounded-xl py-3 px-4   text-white`}
                            onClick={() => { setPlanMode((prev => !prev)) }}
                        >
                            Personnal
                        </button>
                        <button className={`font-hanken font-bold text-base -tracking-[0.25] cursor-pointer ${PlanMode ? '' : 'sm:bg-[#153F2A] bg-[#A1E86F]'} rounded-xl py-3 px-4  text-white`}
                            onClick={() => { setPlanMode((prev => !prev)) }}
                        >
                            Businness
                        </button>
                    </ul>
                </div>

            </nav>
            <div className=" lg:px-20 px-5 lg:mt-20 mt-5   flex md:flex-row flex-col  ">
                {/* text  section */}
                <div className="md:w-1/2">
                    <div className="md:flex hidden gap-4">
                        <div className="text-white">
                            <span className="font-hanken flex items-center gap-1 font-light text-sm">
                                <span className="font-hanken font-bold text-base"> 4.7 </span>
                                <StarIcon weight="fill" className="w-4 h-4 text-white" />

                                on App Store <span className="font-bold  text-sm leading-[1.4] "> 50.4K</span></span>
                        </div>
                        <div className="text-white">
                            <span className="font-hanken flex items-center gap-1 font-light text-sm">
                                <span className="font-hanken font-bold text-base"> 4.8 </span>
                                <StarIcon weight="fill" className="w-4 h-4 text-white" />

                                on Play Store <span className="font-bold  text-sm leading-[1.4] "> 14.2k ratings</span></span>
                        </div>
                    </div>
                    <div className="lg:mt-5   flex-col flex gap-4">
                        <span className=" animate-reveal w-5/6 transition-all font hanken font-bold leading-[0.9] text-[38px] lg:text-6xl -tracking-[0.25] text-[#FFFEFB]">
                            {PlanMode ? "Money should follow your rules not the other way around." : 'The one-stop banking solution to conquer global markets.'}
                        </span>
                        <p className=" animate-reveal [animation-delay:100ms] font-hanken w-5/6 text-[#FFFEFB]  font-light lg:text-[18px] transition-all text-base  leading-[1.4] ">
                            {PlanMode ? "A smart payment card that allows you to define, apply and view your financial rules in real time." : "Money should follow your strategy and not hinder your ambitions : the only pro account capable of accompanying you everywhere."}

                        </p>
                    </div>

                    <button type="button" className="mt-11 text-[#153F2A] font-hanken font-bold text-lg lg:w-45 w-full  h-11.5 bg-[#A1E86F] rounded-xl cursor-pointer hover:scale-[1.04] " >
                        Open an account
                    </button>
                    {PlanMode ? (

                        <div className="flex flex-col mt-22">
                            <span className="font-hanken font-black  text-[#FFFEFB] leading-[1.4] text-2xl">+30.000</span>
                            <span className="font-hanken font-light text-base text-[#FFFEFB] leading-[1.4] " >People use our solution daily</span>
                        </div>
                    ) : (
                        <div className="flex flex-col mt-22">
                            <span className="font-hanken font-light text-base text-[#FFFEFB] leading-[1.4] " >These companies already trust us</span>
                            <div className="flex md:gap-6">
                                <img src="./images/forbes.png" alt="#" />
                                <img src="./images/microsoft.png" alt="#" />
                                <img src="./images/google1.png" alt="#" />
                                <img src="./images/spotify.png" alt="#" />
                                <img src="./images/uber.png" alt="#" />
                                <img src="./images/upwork.png" alt="#" />

                            </div>

                        </div>
                    )}
                </div>

                {/* carte section  mt-40*/}
                <div className="sm:w-1/2 sm:flex sm:mt-0  sm:mr-0 mt-60 mr-20 -rotate-45 sm:justify-center sm:items-center">
                    <CreditCard planMode={PlanMode} />               {/* </div> */}
                </div>
            </div>

            {/* blansection  flex-1 flex flex-col */}
            <div className=" hidden lg:flex mx-20 mt-auto relative  flex-col h-24">

                {/* Couche Arrière */}
                <div className="absolute w-full h-full rounded-t-3xl z-10 -translate-y-16 scale-[0.84] bg-white/20 backdrop-blur-sm border-t border-white/10"></div>
                {/* Couche Arrière */}
                <div className="absolute w-full h-full rounded-t-3xl z-10 -translate-y-12 scale-[0.88] bg-white/40 backdrop-blur-sm border-t border-white/20"></div>
                {/* Couche Arrière */}
                <div className="absolute w-full h-full rounded-t-3xl z-10 -translate-y-8 scale-[0.92] bg-white/60 backdrop-blur-sm border-t border-white/30"></div>

                {/* Couche Milieu */}
                <div className="absolute w-full h-full rounded-t-3xl z-20 -translate-y-4 scale-[0.96] bg-white/80 backdrop-blur-md border-t border-white/40"></div>

                {/* Couche Devant */}
                <div className="relative z-30 w-full h-full bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                </div>
            </div>
        </div>
    )
}

export default Hero