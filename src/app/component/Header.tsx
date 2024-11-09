import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <header className="h-[134px]  w-[100%] bg-[#A29875] "> 
           <div className="h-[94px] w-[100%] pt-[40px] 
           pl-[48px] text-[#FFFFFF] font-[Rye]"> 
            <Image
            src={"/images/MANZZARI (4).png"} 
            alt="Name"
            width={342}
            height={367} />
             </div>

        </header>
      
    </div>
  )
}

export default Header
