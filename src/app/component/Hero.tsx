import React from 'react'
import Image from 'next/image'

function Hero() {
  return ( 
    <div> 
        <section className="w-[100%] flex">
        <div>
            <div className="w-[100%]  h-[189px]  mt-[300px] pl-[170px] flex flex-col justify-center items-start">
             <h1 className=" text-[50px] text-[#000000]  font-[Libre Bodoni]">
            <Image
            src={"/images/IMPECCABLE CRAFTSMANSHIP AND FINESSE.png"} 
            alt="Heading name"
            width={700}
            height={189} />



             
          </h1>   
           </div>

           <div className="w-[100%] h-[151px] pt-[60px]">
              <p className="  xl:text-[40px] pl-[171px] text-[#A29875]">
                   An example of intricate workmanship and detail, elegant
                   necklaces and long and short chains form a part of our
                   desirable collection.
              </p>
           </div>
           <div className="w-[20%]  h-[58px] mt-[160px] ml-[170px]
            font-[Rye] text-[28px] text-[white] rounded-[10px] gap-[10px] p-[10px] bg-[#A29875]">
           <div className=" justift-between items-center pl-[40px]"> Explore Now </div>

            </div>
        </div>

        <div className="flex justify-center  pt-[150px] sm:w-[100%] xl:w-[100%] ">
        <div className="w-[490px] h-[667px] rounded-tl-[150px] rounded-br-[150px]">
            <Image
            src={"/images/pic-11.svg"} 
            alt="hero image"
            width={490}
            height={667} />

        </div>
        </div>
        </section>
      
    </div>
  )
}

export default Hero
