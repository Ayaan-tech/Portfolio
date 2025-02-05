'use client'

import { useState } from "react" 
import HomePage from "./components/HomePage"
import SkillsPage from "./components/SkillsPage"

export default function Home(){
  const[currentPage, setCurrentPage] = useState("home")

  return(
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {currentPage == 'home' ? (
      <HomePage onNavigate={() =>setCurrentPage('skills')}/>):(
        <SkillsPage onNavigate={() => setCurrentPage('home')}/>
      )}
    </main>
  )
}