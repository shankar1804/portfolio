// pages/index.js
'use client'
import { MainProfile } from '@/components/main_profile'
import { AboutMe } from '@/components/about_me'
import Header from '@/components/header/index'

export default function Home() {
  return (
    <main>
      <div className="container">
        <MainProfile />
        <AboutMe />
      </div>
    </main>
  )
}
