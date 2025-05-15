import Link from "next/link"
import { Star } from "lucide-react"

export default function Home() {
  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Xperience xCloud</h1>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="bg-[#333] text-white px-2 py-1 rounded text-sm">latest: v0.5.0</span>
          <span className="bg-[#333] text-white px-2 py-1 rounded text-sm">downloads: 35.1k</span>
          <span className="flex items-center bg-[#333] text-white px-2 py-1 rounded text-sm">
            <Star className="h-4 w-4 mr-1 fill-yellow-400 stroke-yellow-400" />
            1.2k
          </span>
        </div>

        <p className="text-lg mb-2">
          Improve Xbox Cloud Gaming (xCloud) experience on{" "}
          <a href="https://xbox.com/play" className="text-[#4CAF50] hover:underline">
            xbox.com/play
          </a>
          .
        </p>
        <p className="mb-8">It also allows you to use Remote Play on the xCloud website.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="platform-card">
            <h2 className="text-lg font-semibold mb-4">💻 Windows, macOS, Linux, SteamOS (Steam Deck)</h2>
            <Link href="/how-to-install#chrome-edge" className="btn-primary inline-block">
              🌐 Install on Chrome/Edge
            </Link>
          </div>

          <div className="platform-card">
            <h2 className="text-lg font-semibold mb-4">📱 Android, Android TV, Meta Quest VR headsets</h2>
            <Link href="/how-to-install#android" className="btn-primary inline-block mb-2">
              📱 Install Android app (Beta)
            </Link>
            <div className="mt-2">
              or{" "}
              <Link href="/how-to-install#edge-browser" className="text-[#4CAF50] hover:underline">
                install on Edge Browser
              </Link>
            </div>
          </div>

          <div className="platform-card">
            <h2 className="text-lg font-semibold mb-4">🍎 macOS, iOS, iPadOS</h2>
            <Link href="/how-to-install#safari" className="btn-primary inline-block">
              🌐 Install on Safari
            </Link>
          </div>

          <div className="platform-card">
            <h2 className="text-lg font-semibold mb-4">📺 LG TV</h2>
            <Link href="/how-to-install#webos" className="btn-primary inline-block">
              🌐 Install on webOS 22+
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/how-to-install" className="text-[#4CAF50] hover:underline">
            How to pick the best client for your device
          </Link>
        </div>
      </div>

      <section className="content-section bg-[#252a33] p-6 rounded-md border border-[#333] mb-6">
        <h2 className="text-2xl font-bold mb-4">Third-party apps</h2>
        <ul className="list-disc pl-5">
          <li>
            <a href="#" className="text-[#4CAF50] hover:underline">
              Nexus+
            </a>{" "}
            for Apple Vision Pro (
            <a href="#" className="text-[#4CAF50] hover:underline">
              guide
            </a>
            , created by another dev KhaosT)
          </li>
        </ul>
      </section>

      <section className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
        <h2 className="text-2xl font-bold mb-4">Will I get banned for using this?</h2>
        <p>
          No, it's safe to use. xCloud devs endorsed Xperience xCloud before and confirmed they{" "}
          <span className="text-[#4CAF50]">
            &quot;don't ban people for using a third party client or extension&quot;
          </span>
          . As always, use it at your own risk.
        </p>
      </section>
    </div>
  )
}
