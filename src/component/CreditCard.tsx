import { WifiHighIcon } from '@phosphor-icons/react';
import React from 'react';

const CreditCard = () => {
  return (
    <div className="font-hanken relative h-100 w-full flex items-center justify-center">
      {/* Carte 3 - La plus au fond (Vert clair) */}
      <div className="absolute z-10 rounded-2xl p-[1.5px] 
                bg-linear-to-br from-[#2E6A4E] to-[#0E2E1E] 
                shadow-lg box-border -rotate-25 -translate-y-20 mr-10">

        <div className="w-108 h-66 rounded-2xl bg-[#4A724D] p-4 shadow-xl box-border">
          <div className="flex items-center justify-end gap-2">
            <img src="./images/Vector.png" className="w-5 h-5" />
            <p className="font-bold text-[16px] text-white -tracking-[0.25] ">Fathom</p>
          </div>
        </div>
      </div>

      {/* Carte 2 - Milieu (Vert moyen) */}
      <div className="absolute z-20 rounded-2xl p-[1.5px] 
                bg-linear-to-br from-[#2E6A4E] to-[#27774e] 
                shadow-2xl box-border -rotate-10 translate-y-5 ml-12">

        <div className="w-108 h-66 rounded-2xl bg-[#2D5A42] -translate-y-8 p-4 shadow-2xl box-border">
          <div className="flex items-center justify-end gap-2">
            <img src="./images/Vector.png" className="w-5 h-5" />
            <p className="font-bold text-[16px] text-white -tracking-[0.25] ">Fathom</p>
          </div>
        </div>
      </div>

      {/* Carte 1 - La plus au premier plan (Vert foncé) */}
      <div className="absolute z-30 rounded-2xl p-[1.5px] 
                bg-linear-to-br from-[#2E6A4E] to-[#0E2E1E] 
                shadow-2xl box-border translate-y-10 ml-25 mt-20 rotate-4">

        <div className="w-108 h-66 rounded-2xl bg-[#153F2A] p-4 flex flex-col justify-between text-white box-border">
          <div className="flex items-center justify-end gap-2">
            <img src="./images/Vector.png" className="w-5 h-5" />
            <p className="font-bold text-[16px]">Fathom</p>
          </div>

          <div className="flex flex-col gap-2 -mt-4">
            <div className="flex gap-2 items-center">
              <img src="./images/sim.png" className="w-15 h-12 object-contain -rotate-2" />
              <WifiHighIcon className="w-10 h-10 rotate-90" />
            </div>

            <p className="tracking-[0.2em] text-base">
              1234 5678 9012 3456
            </p>

            <p className="text-xs font-light">
              EXP 09/31 · CVC 433
            </p>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-[#E9F1FC]">
              LIMITLESS CARD
            </span>
            <img src="./images/mastercard.png" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreditCard;
