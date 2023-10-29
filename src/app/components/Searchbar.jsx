'use client'
import React, { useState } from 'react'



const Searchbar = ({search, setSearch}) => {

  return (
    <div className='flex justify-center mt-6 space-x-3 '>
      <input 
        type="text"
        className='w-[600px] p-1 border-none outline-none'
        placeholder='Search for a pokemon...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default Searchbar