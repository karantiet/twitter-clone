import React from 'react'
import Image from 'next/image'
import { BiMessage, BiUpload } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

const FeedCard: React.FC = () =>{
    return <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 cursor-pointer transition-all'>
        <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-1'>
               <Image src="https://avatars.githubusercontent.com/u/92259336?v=4" alt='userimaage' height={50} width={50} />
            </div>
            <div className='col-span-11'>
                <h5>Karan Chhabra</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores eveniet sint doloremque neque eaque necessitatibus sed nam.</p>
                <div className='flex justify-between mt-5 text-xl items-center p-2 w-[90%] '>
                    <div>
                        <BiMessage />
                    </div>
                    <div>
                        <FaRetweet />
                    </div>
                    <div>
                        <AiOutlineHeart />
                    </div>
                    <div>
                        <BiUpload/>
                    </div>
                </div>
            </div>

        </div>
    </div>

}


export default FeedCard