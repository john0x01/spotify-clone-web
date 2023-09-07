import { HomeSearch } from '@/components/HomeSearch'
import { MusicPlayer } from '@/components/MusicPlayer'
import { SidePlaylists } from '@/components/SidePlaylists'
import { ReactNode } from 'react'

export default function LayoutApp({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="grid grid-cols-3 h-full p-4 gap-2.5">
        <div className="flex flex-col col-span-1 gap-2.5">
          <HomeSearch />
          <SidePlaylists />
        </div>
        <div className="flex h-full flex-col overflow-auto col-span-2 bg-bg-dark rounded-xl p-6 gap-8">
          {children}
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}
