import { Eye, EyeClosed } from "lucide-react";
import {useState} from "react";

function App() {
  const [SelectedEmail, setSelectedEmail] = useState(false)
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="flex h-screen bg-white ">
      <div
        className=" sm:w-1/2 sm:bg-no-repeat sm:flex hidden sm:flex-col sm:justify-between sm:bg-center sm:bg-cover sm:bg-[url('/images/bg.png')] sm:rounded-xl sm:m-3 "
      >
          <p className="font-bold font-hanken text-[28px] text-white -tracking-[0.25] ml-20 md:ml-10 my-5">Fathom</p>
          <div className=" lg:w-125 ml-20 md:ml-10 flex flex-col gap-4.5 mb-20">
          <p className="font-hanken font-bold text-white -tracking-[0.25] md:text-4xl lg:text-5xl " >Your card helps you stay in control of everyday spending</p>
          <p className="font-hanken font-light text-lg text-[#FFFEFB] leading-[1.4] " > Your information is protected with bank-level security. Secure login powered by industry-standard encryption. </p>
          </div>
      </div>
        <div className=" sm:w-1/2 w-full flex flex-col min-h-screen bg-center bg-no-repeat bg-cover bg-[url('/images/bg.png')] sm:bg-none sm:justify-between justify-end items-center sm:mb-3 ">
        <div className="flex items-center justify-center sm:hidden gap-2 mb-10 ">
          <img src="./images/Vector.png" className="w-7.5 h-7.5 " alt="" />
          <p className="font-bold font-hanken text-[26px] text-white -tracking-[0.25] ">Fathom</p>

        </div>
          {/* Form section */}
          <div className="bg-white  p-3 sm:p-11.25 rounded-lg flex flex-col gap-6     ">
          <img src="./images/Vectorb.png" className=" hidden sm:flex w-8.5 h-8.5 self-start mb-5 " alt="" />
            <div>
              <p className="font-hanken font-bold text-[28px] -tracking-[0.04] text-[#202020]">We’ve got your back.</p>
              <p className="font-hanken font-normal leading-[1.4] text-[#505050]">Track your spending, avoid surprises, and stay in control effortlessly. </p>
            </div>
            <div className="">
              <div className="border-b border-[#DDD]  ">
                <button
                  className={`font-hanken p-3 cursor-pointer text-sm transition-all duration-300 ease-in-out ${SelectedEmail ? 'bg-[#153F2A] font-bold text-white rounded-t-lg ' : 'font-normal'}   `}
                  onClick={() => setSelectedEmail(true)} >
                  Avec email
                </button>
                <button className={`font-hanken text-sm p-3 cursor-pointer transition-all duration-300 ease-in-out ${SelectedEmail ? 'font-normal' : 'bg-[#153F2A] font-bold text-white rounded-t-lg '} `} onClick={() => setSelectedEmail(false)}> Avec n° de téléphone</button>
              </div>
            </div>
            <form method="post" className="flex flex-col gap-4">
              {SelectedEmail ? (
                <div className="gap-1 flex flex-col" >
                  <label htmlFor="email" className="leading-none font-hanken text-base font-bold">Email</label>
                  <input type="email" name="email" placeholder="Entrez votre adresse email" className="border border-[#DDD] h-13.5 rounded-xl px-3 placeholder-[#505050] text-[#202020]" />
                </div>
              ) : (
                <div className="gap-1 flex flex-col" >
                  <label htmlFor="phone" className="leading-none font-hanken text-base font-bold">Phone number</label>
                  <input type="tel" name="phone" placeholder="Enter your phone number" className="border border-[#DDD] h-13.5 rounded-xl px-3 placeholder-[#505050] text-[#202020]" />
                </div>
              )}


              <div className=" relative gap-1 flex flex-col" >
                <label htmlFor="password" className="leading-none font-hanken text-base font-bold">Mot de passe</label>

                <input type={showPassword ? "password" : 'text'} name="password" placeholder="Entrez votre mot de passe" className="border border-[#DDD] h-13.5 rounded-xl px-3 pr-7  placeholder-[#505050] text-[#202020]" />
                {showPassword ? <Eye className="w-5 h-5 absolute z-10 bottom-4 right-2" onClick={() => setShowPassword(false)} /> : <EyeClosed className="w-5 h-5 absolute z-10 bottom-4 right-2" onClick={() => setShowPassword(true)} />}

              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" className="border-[#DDD] font-hanken font-normal text-[14px]" />
                  <p>Se rappeler de moi </p>
                </div>
                <p className="font-hanken font-bold text-sm hover:border-b hover:border-[#202020] text-[#202020]">Mot de passe oublié </p>
              </div>
              <button type="submit" className="bg-[#A1E86F] mt-7 text-[#153F2A] font-bold text-lg p-3 rounded-xl cursor-pointer">Se connecter</button>
            </form>
            <div className="flex items-center ">
              <div className="grow border-t border-gray-300"></div>
              <span className="shrink mx-4 font bold text-base font-hanken text-[#202020]">Or with</span>
              <div className="grow border-t border-gray-300"></div>
            </div>
            <div className="flex gap-3  ">
              <button className="flex grow-3 gap-1 font-hanken font-normal text-base border border-[#DDD] py-3.5 rounded-xl items-center justify-center cursor-pointer">
                <img src="./images/apple.png" alt="apple logo"  className="w-5 h-5"/>
                Apple
              </button>
              <button className="flex grow-3 gap-1 font-hanken font-normal text-base border border-[#DDD] py-3.5  rounded-xl items-center justify-center cursor-pointer">
                <img src="./images/google.png" alt="google logo"  className="w-5 h-5"/>
                Google
              </button>
              <button className="flex grow-3 gap-1 font-hanken font-normal text-base border border-[#DDD] py-3.5 rounded-xl items-center  justify-center cursor-pointer">
                <img src="./images/facebook.png" alt="facebook logo"  className="w-5 h-5"/>
                facebook
              </button>
            </div>
            <div className="flex gap-0.5 ">

              <p className="font-hanken font-normal text-sm text-[#505050]">
                Don't have an account?
              </p>
              <button className="font-black text-sm font-hanken hover:border-b hover:border-[#202020]">Sign up</button>
            </div>
          </div>
          <span className="font-hanken font-normal text-sm w-1/2  sm:flex hidden text-[#505050] ">
            2026 Flexum All rights reserved
          </span>
        </div>
    </div>
  );
}

export default App;
