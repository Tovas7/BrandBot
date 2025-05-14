"use client"

import { useState } from "react"
import "./index.css"
import BrandForm from "./components/BrandForm"
import BrandResults from "./components/BrandResults"
import Header from "./components/Header"
import { generateBrandNames as generateNames } from "./utils/nameGenerator"

function App() {
  const [brandNames, setBrandNames] = useState([])
  const [loading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState([])

  const handleGenerateNames = async (formData) => {
    setLoading(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate double the requested amount to increase chances of finding available domains
    const doubledCount = Number.parseInt(formData.nameCount) * 2

    // Generate names with the imported function
    const names = generateNames({
      ...formData,
      nameCount: doubledCount,
    })

    setBrandNames(names)
    setLoading(false)
  }

  const toggleFavorite = (name) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((item) => item !== name))
    } else {
      setFavorites([...favorites, name])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-purple-800 mb-2">BrandBot - AI Brand Name Generator</h2>
          <p className="text-gray-600 mb-0">
            Generate unique brand names and check domain availability - all in one place.
          </p>
        </div>

        <BrandForm onSubmit={handleGenerateNames} isLoading={loading} />

        {brandNames.length > 0 && (
          <BrandResults brandNames={brandNames} favorites={favorites} onToggleFavorite={toggleFavorite} />
        )}

        {favorites.length > 0 && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-purple-800 mb-4">Your Favorites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {favorites.map((name) => (
                <div key={name} className="p-3 bg-purple-50 rounded-md flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                      <span className="text-purple-800 font-bold">{name.charAt(0)}</span>
                    </div>
                    <span className="ml-3 text-purple-800">{name}</span>
                  </div>
                  <button onClick={() => toggleFavorite(name)} className="text-purple-500 hover:text-purple-700">
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 rounded-lg text-sm text-blue-700 border border-blue-100">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">Note:</span>
          </div>
          <p className="mt-1 ml-7">
            This app checks domain availability across multiple extensions. In a production environment, you would use
            your own API keys and implement server-side processing for better security and performance.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
