'use client'
import { ArrowRight, Book, Plus } from '@phosphor-icons/react'
import { FilterItemButton } from '../FilterItemButton'

export function SidePlaylists() {
  return (
    <div className="bg-bg-dark rounded-lg h-full p-6 gap-6">
      <div className="flex justify-between text-text-grey">
        <div className="flex items-center gap-2.5">
          <Book size={32} />
          <h3>Your Library</h3>
        </div>
        <div className="flex items-center gap-2.5">
          <Plus size={32} />
          <ArrowRight size={32} />
        </div>
      </div>
      <div className="flex my-6 gap-1.5 overflow-x-auto">
        <FilterItemButton>Playlists</FilterItemButton>
        <FilterItemButton>Artists</FilterItemButton>
        <FilterItemButton>Albums</FilterItemButton>
        <FilterItemButton>Podcasts & Shows</FilterItemButton>
      </div>
    </div>
  )
}
