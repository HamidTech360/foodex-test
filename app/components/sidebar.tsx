"use client"
import {  usePathname } from "next/navigation";
import { NAV_LINKS } from '@/constants';
import React from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Sidebar() {
    const pathname = usePathname()
    return (
        <div>
           <img src="/images/logo.png" className="ml-2" alt="logo" />

            <div className="mt-10 mb-5">
                {NAV_LINKS.map((item, key)=>
                    <div key={key}  className={`mb-3 font-medium px-4 text-lg cursor-pointer ${item.href == pathname && 'border-l-2  border-l-[#D87023]'}`}>{item.label}</div>
                )}
            </div>

            <div className="flex space-x-3">
                <div className="bg-[#F7ECE4] rounded flex justify-center items-center px-2 py-2 cursor-pointer">
                    <FaFacebook color="#D87023" size={20} />
                </div>
                <div className="bg-[#F7ECE4] rounded flex justify-center items-center px-2 py-2 cursor-pointer">
                    <FaTwitter color="#D87023" size={20} />
                </div>
                <div className="bg-[#F7ECE4] rounded flex justify-center items-center px-2 py-2 cursor-pointer">
                    <GrInstagram color="#D87023" size={20}  />
                </div>
                         
            </div> 
        </div>
    );
}

export default Sidebar;