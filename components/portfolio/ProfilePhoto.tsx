'use client'

import { UserRound } from 'lucide-react'

export function ProfilePhoto() {
  return (
    <div className="relative flex size-28 flex-col items-center justify-center rounded-full border-2 border-dashed border-primary/40 bg-background text-muted-foreground shadow-lg sm:size-32">
      <img
        src="/placeholder-user.png"
        alt="Rahul Kumar - Profile photo"
        className="w-full h-full rounded-full object-cover"
        onError={(e) => {
          const target = e.currentTarget
          target.style.display = 'none'
        }}
        loading="eager"
        decoding="sync"
      />
      {/* <div className="absolute inset-0 flex items-center justify-center bg-background/80">
        <UserRound className="size-9" aria-hidden="true" />
      </div> */}
    </div>
  )
}
