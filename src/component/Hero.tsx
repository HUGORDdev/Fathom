import { GlobeIcon, StarIcon } from "@phosphor-icons/react"
import Link from "./Link"
import { useState } from "react"

const Hero = () => {
    const [PlanMode, setPlanMode] = useState(true)
    return (
        <div className=" h-screen w-full bg-cover bg-no-repeat bg-center bg-[url('/images/bg.png')]  ">

            <nav className="flex py-5 justify-between px-20  border-b-[0.2px] border-white/20 ">
                <div className="flex  items-center gap-22">
                    <div className="flex items-center justify-center  gap-2  ">
                        <img src="./images/Vector.png" className="w-8.5 h-8.5" />
                        <p className="font-bold font-hanken text-[26px] text-white -tracking-[0.25] ">Fathom</p>
                    </div>
                    <ul className="flex gap-8.5 items-center">
                        <Link name="Credit card" />
                        <Link name="Bank account" />
                        <Link name="Loans" />
                        <Link name="Blog" />
                        <Link name="Support" />
                        {/*  */}
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
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
                    <GlobeIcon size={32} className="text-white" />
                </div>

            </nav>
            <div className="px-20 mt-20 ">
                {/* text  section */}
                <div className="sm:w-1/2">
                    <div className="flex gap-4">
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
                    <div className="mt-4 flex-col flex gap-4">
                        <span className="w-5/6 font hanken font-bold leading-[0.9] text-6xl -tracking-[0.25] text-[#FFFEFB]"> 
                            Money should follow 
                            your rules not the 
                            other way around. </span>
                        <p className="font-hanken text-[#FFFEFB]  font-light text-sm leading-[1.4] ">
                            A smart payment card that allows you to define, apply and view your financial rules in real time.
                        </p>
                    </div>

                    <button type="button" className="mt-11 text-[#153F2A] font-hanken font-bold text-lg w-45 h-11.5 bg-[#A1E86F] rounded-xl" >
                        Open an account
                    </button>
                    <div className="flex flex-col mt-22">
                        <span className="font-hanken font-black  text-[#FFFEFB] leading-[1.4] text-2xl">+30.000</span>
                        <span className="font-hanken font-light text-base text-[#FFFEFB] leading-[1.4] " >People use our solution daily</span>
                    </div>
                </div>

                {/* carte section */}
                <div></div>
            </div>

        </div>
    )
}

export default Hero