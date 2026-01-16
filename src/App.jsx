import React, { useState } from "react";

function App() {
  const [SelectedEmail, setSelectedEmail] = useState(false)
  return (
    <div
      className="h-screen bg-no-repeat flex items-center justify-center bg-center bg-cover bg-[url('/images/bg.png')] "
    >
      <div className=" flex flex-col items-center gap-6 ">
        {/* logo section */}
        <div className=" flex gap-2  ">
          <img src="./images/Vector.png" className="w-8.5 h-8.5" alt="" />
          <p className="font-bold font-hanken text-[26px] text-white -tracking-[0.25]">Fathom</p>
        </div>
        {/* Form section */}
        <div className="bg-white  p-11.25 rounded-lg flex flex-col gap-6  shadow-lg">
          <div>
            <p className="font-hanken font-bold text-7 -tracking-[0.04] text-[#202020]">Se connecter</p>
            <p className="font-hanken font-normal leading-[1.4] text-[#505050]">Keep your business account and your finance needs </p>
          </div>
          <div className="">
            <div className="border-b border-[#DDD]  ">
              <button
                className={`font-hanken p-3 cursor-pointer text-sm ${SelectedEmail ? 'bg-[#153F2A] font-bold text-white rounded-t-lg ' : 'font-normal'}   `}
                onClick={() => setSelectedEmail(true)} >
                Avec email
              </button>
              <button className={`font-hanken text-sm p-3 cursor-pointer ${SelectedEmail ? 'font-normal' : 'bg-[#153F2A] font-bold text-white rounded-t-lg '} `} onClick={() => setSelectedEmail(false)}> Avec n° de téléphone</button>
            </div>
          </div>
          <form action="#" method="post" className="flex flex-col gap-4">
            <div className="gap-1 flex flex-col" >
              <label htmlFor="email" className="leading-none font-hanken text-base font-bold">Email</label>
              <input type="email" name="email" placeholder="Entrez votre adresse email" className="border border-[#DDD] h-13.5 rounded-xl px-3 placeholder-[#505050] text-[#202020]" />
            </div>
            <div className="gap-1 flex flex-col" >
              <label htmlFor="password" className="leading-none font-hanken text-base font-bold">Mot de passe</label>
              <input type="password" name="password" placeholder="Entrez votre mot de passe" className="border border-[#DDD] h-13.5 rounded-xl px-3 placeholder-[#505050] text-[#202020]" />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="border-[#DDD] font-hanken font-normal text-[14px]" />
                <p>Se rappeler de moi </p>
              </div>
              <p className="font-hanken font-bold text-sm hover:border-b hover:border-[#202020] text-[#202020]">Mot de passe oublié </p>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
