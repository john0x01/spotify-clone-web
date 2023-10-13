'use client'
import { House, MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'

export function HomeSearch() {
  const [selectedOption, setSelectedOption] = useState('home')

  function handleClick(option: string) {
    setSelectedOption(option)
  }

  return (
    <div className="flex flex-col bg-bg-dark rounded-lg p-6 gap-6">
      <div
        onClick={() => handleClick('home')}
        className={`flex gap-4 items-center cursor-pointer ${
          selectedOption === 'home' ? 'text-white' : 'text-text-grey'
        }`}
      >
        <House weight="fill" size={32} />
        <h3>Home</h3>
      </div>
      <div
        onClick={() => handleClick('search')}
        className={`flex gap-4 items-center cursor-pointer ${
          selectedOption === 'search' ? 'text-white' : 'text-text-grey'
        }`}
      >
        <MagnifyingGlass size={32} />
        <h3>Search</h3>
      </div>
    </div>
  )
}
