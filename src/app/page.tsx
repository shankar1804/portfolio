// pages/index.js
'use client'
import Profile from '@/components/profile'
import DetailsCard from '@/components/details_card'
import Topbar from '@/components/topbar'

export default function Home() {
  return (
    <main>
      <Topbar />
      <div className="container">
        <Profile />
        <DetailsCard />
      </div>
    </main>
  )
}
