'use client'
import { FolderSimple, Icon, PushPin } from '@phosphor-icons/react'
import Image from 'next/image'

enum SidePlaylistCardIcon {
  a,
}

interface SidePlaylistCardProps {
  title: string
  href: string
  childrenCount: number
  type: 'playlist' | 'folder'
  fixed?: boolean
  description?: string
  color?: string
  PlaylistIcon?: Icon
  iconColor?: string
  img?: string
}

export function SidePlaylistCard({
  title,
  href,
  childrenCount,
  type,
  fixed,
  description,
  color,
  PlaylistIcon,
  iconColor,
  img,
}: SidePlaylistCardProps) {
  return (
    <div className="w-full flex gap-2.5">
      {img ? (
        <Image
          src={img}
          alt="cover"
          height={64}
          width={64}
          style={{ borderRadius: 8 }}
        />
      ) : (
        <div
          className={`flex items-center justify-center h-16 w-16 rounded-lg ${
            color || 'bg-bg-light'
          }`}
        >
          {PlaylistIcon ? (
            <PlaylistIcon
              weight="fill"
              size={28}
              color={iconColor || 'white'}
            />
          ) : (
            <FolderSimple weight="light" size={28} className="text-text-grey" />
          )}
        </div>
      )}
      <div className="flex flex-col gap-2">
        <p>{title}</p>
        <div className="flex gap-1 items-center">
          {fixed && <PushPin weight="fill" className="text-brand-green" />}
          <span className="capitalize">
            {description ||
              (type !== 'folder'
                ? `${type} - ${childrenCount} songs`
                : `${childrenCount} playlists`)}
          </span>
        </div>
      </div>
    </div>
  )
}
