'use client'
import { BookmarkSimple, Heart } from '@phosphor-icons/react'
import { SidePlaylistCard } from './SidePlaylistCard'

export function SidePlaylists() {
  return (
    <div className="bg-bg-dark rounded-lg h-full p-6 gap-6">
      <h1>SidePlaylists</h1>
      <div className="flex flex-col gap-2.5">
        <SidePlaylistCard
          title="Liked Songs"
          href=""
          type="playlist"
          color="bg-gradient-to-tl from-[#B5E0DC] to-[#6D00F7]"
          fixed
          childrenCount={480}
          PlaylistIcon={Heart}
        />
        <SidePlaylistCard
          title="Your Episodes"
          href=""
          type="playlist"
          fixed
          color="bg-[#006B52]"
          childrenCount={24}
          description="Saved & downloaded episodes"
          PlaylistIcon={BookmarkSimple}
          iconColor="#00F165"
        />
        <SidePlaylistCard
          title="Treino"
          href=""
          type="folder"
          fixed
          childrenCount={7}
        />
      </div>
    </div>
  )
}
