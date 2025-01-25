"use client"



import { IoMdMenu } from "react-icons/io";
import { PiStarFourFill } from "react-icons/pi";
import Carousel from "./components/slider";

export default function Home() {
  return (
    <div className="lg:py-5 py-2 lg:px-5 px-2">
      <div className="lg:hidden flex mb-3 items-center ">
        <div className="flex-1">
          <img src="/images/logo.png" className="h-14 w-25 object-cover" alt="" />
        </div>
        <div className="flex items-center">
          <button className="py-2 px-3 h-fit rounded-3xl mr-2 px-3 text-white bg-[#D87023]">Join WaitList</button>
          <IoMdMenu size={26}/>
        </div>
      </div>

      <div className="bg-black rounded-lg min-h-48 pt-20 pb-10">
        <div className="flex flex-col items-center text-white">

            <div className=" flex items-center mb-5">
               <PiStarFourFill />
               <span className="mx-5 lg:text-base text-sm">JOIN THE CHOW ARICA WAITLIST</span>
               <PiStarFourFill />
            </div>

            <div className="lg:text-[4.5rem] text-[2.5rem] font-semibold mb-5 flex font-[Montserrat]">
                Find Chow, <img src="/images/asap.png" className="object-cover lg:h-[6rem] h-[3rem]"  alt="asap text" />
            </div>

            <div className="text-center text-xl lg:text-base text-sm max-w-[500px] mb-14 px-4">
              The patient dog eats left overs. Be the first to know when we launch. Join our Waitlist 😎
            </div>

            <div className="text-center">
                <input type="text" placeholder="Enter your email" className="border-none mb-2 text-[black] px-2 rounded-lg lg:w-64 w-full h-12 focus:outline-none mr-2" />
                <button className="bg-[#009F79] border border-[white] rounded-2xl py-3 px-7 lg:mx-0 mx-auto text-sm text-[white]">JOIN WAITLIST</button>
            </div>

            <div className="overflow-x-scroll w-full hide-scrollbar mt-10 ">
              <Carousel/>
            </div>
        </div>
      {/* <PiStarFourFill /> */}
      </div>


      <div className="max-w-[560px] mx-auto text-center mt-20">
            <div className=" flex items-center mb-5 justify-center">
               <PiStarFourFill />
               <span className="mx-5">JOIN THE CHOW ARICA WAITLIST</span>
               <PiStarFourFill />
            </div>

            <div className="lg:block hidden">
              <div className="text-[3rem]  font-semibold">tired of eating the</div>
              <div className="px-2 py-2 w-fit mx-auto text-white text-[2.2rem]  bg-[#D87023] border-4 border-[black] rounded-3xl mb-7">🍛 same dishes everyday? 🍝</div>
              <div className="text-xl font-medium">Do you crave new and exciting dishes? Look no further! Chow is the perfect solution for discovering your next dish.</div>
            </div>

            <div className="lg:hidden block font-semibold text-3xl ">
                Are you tired of eating the same dishes <span className="bg-[#D87023] rounded-3xl px-3 py-1 text-white">Everyday?</span>
            </div>
      </div>

      <div className="px-20 h-[450px] mt-14 md:block hidden">
        <img src="/images/ads.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="md:hidden block mt-14">
        <img src="/images/ads2.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="mt-10 mx-10 text-xl font-semibold shadow-lg rounded-xl border lg:flex items-center lg:px-10 px-5 py-10 mb-20">
          <div className="flex-1 mb-5">
            <div className="flex mb-2">
              Sign up to 
              <div className="border px-2 broder-[black] rounded-3xl bg-[#5F63E1] text-white">chowafrica</div>
            </div>
           <div className="">
              today and say <span className="bg-black px-2 py-1  rounded-2xl text-white">goodbye 👋🏽</span> to mealtime stress
           </div>
          </div>


          <div>
            <button className="bg-[#009F79] border border-[white] rounded-2xl py-3 px-7 text-sm text-[white]">JOIN WAITLIST</button>
          </div>
      </div>

    </div>
  );
}
