"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, GitlabIcon as GitHub } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "active" : ""
  }

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#4CAF50] text-white py-4">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center">
            <Mail className="h-6 w-6 mr-2" />
            <Link href="/" className="text-xl font-bold">
              Xperience xCloud
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="https://github.com" className="flex items-center text-sm">
              <GitHub className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Xperience xCloud</span>
            </Link>
            <div className="ml-3 text-sm">
              <span>v0.5.0</span>
              <span className="mx-1">•</span>
              <span>1.2k ⭐</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-[#3e8e41] text-white py-2 shadow-md overflow-x-auto">
        <div className="container-custom flex flex-nowrap min-w-max">
          <Link href="/" className={`nav-link ${isActive("/")}`}>
            Introduction
          </Link>
          <Link href="/how-to-install" className={`nav-link ${isActive("/how-to-install")}`}>
            How to install
          </Link>
          <Link href="/features" className={`nav-link ${isActive("/features")}`}>
            Features
          </Link>
          <Link href="/troubleshooting" className={`nav-link ${isActive("/troubleshooting")}`}>
            Troubleshooting
          </Link>
          <Link href="/faq" className={`nav-link ${isActive("/faq")}`}>
            FAQ
          </Link>
          <Link href="/guides" className={`nav-link ${isActive("/guides")}`}>
            Guides
          </Link>
          <Link href="/donation" className={`nav-link ${isActive("/donation")}`}>
            ❤️ Donation
          </Link>
          <Link href="/acknowledgements" className={`nav-link ${isActive("/acknowledgements")}`}>
            Acknowledgements
          </Link>
        </div>
      </nav>
    </header>
  )
}
