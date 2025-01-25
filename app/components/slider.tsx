import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { GoDotFill } from 'react-icons/go';


interface Recipes {
    name?: string;
    noOfPicks?: number;
    amount?: number;
    image: string;
    isImgOnly?: boolean;
}

function Carousel() {
      

    const recipes: Recipes[] = [
        {
            name: "Pasta, Green Sauce & Kpomo",
            noOfPicks: 120,
            amount:3000,
            image: "/images/food1.png",
        },
        {
            name: "Egg-Fried Rice & Peas",
            noOfPicks: 120,
            amount:3000,
            image: "/images/food2.png",
        },
        {
            name: "Shreded Roasted Chicken",
            noOfPicks: 120,
            amount:3000,
            image: "/images/food3.png",
        },
        {
            image: '/images/span.png',
            isImgOnly: true
        },
        {
            name: "Souse fries and Bacon",
            noOfPicks: 120,
            amount:3000,
            image: "/images/food1.png",
        },
        
    ];

   
    return (
        <div className='flex space-x-5 '>
           
            {recipes.map((item: Recipes, index)=>
             !item.isImgOnly ?
            <div key={index} className='bg-white text-black shrink-0 rounded-lg lg:py-7 py-4 lg:px-3 px-2 lg:w-96 w-48 '>
                <div className="img flex justify-center mb-7">
                    <img src={item.image} className='lg:h-32 h-20 w-20 lg:w-32 object-cover' alt="recipe" />
                </div>
                <div className="lg:text-2xl text-sm  font-semibold mb-2">{item.name}</div>
                <div className="rounded-3xl px-2 py-1 lg:text-base text-xs w-fit bg-[#D6D5CA] lg:mb-4 mb-2">🍲 Continental</div>
                <div className="flex lg:text-base text-xs items-center text-[#858786]">
                    <AiOutlineLike size={24} /> {item.noOfPicks}picks <GoDotFill className='mx-4' /> Approx. ₦{item.amount?.toLocaleString()}
                </div>
            </div>
            :
            <img key={index} src='/images/span.png' className='lg:h-[22rem] h-[16rem] w-84 object-cover'/>
            )}

           
        </div>
    );
}

export default Carousel;