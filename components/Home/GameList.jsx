'use client'
import React, { useEffect, useState } from 'react'
import Data from '../../shared/Data'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const GameList = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
    setGames(Data.GameList)
    }, [])
    
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 mt-4  max-w-4xl mx-auto'>
        {
            games.map((item, index)=>(
                <div className="flex flex-col items-center cursor-pointer " key={index}>
                    <Image src={item.image} width={45} height={45} alt='game image' 
                        className='hover:animate-bounce transition-all duration-150' />
                    <h2 className="text-[14px] text-center">{item.name}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default GameList