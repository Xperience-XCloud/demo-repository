export default function HowToInstall() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">How to Install</h1>

      <div className="grid gap-8">
        <div className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
          <h2 id="chrome-edge" className="text-2xl font-bold mb-4">
            Install on Chrome/Edge
          </h2>
          <ol className="list-decimal pl-5 mb-6">
            <li className="mb-2">
              Install the Xperience xCloud extension from the{" "}
              <a href="#" className="text-[#4CAF50] hover:underline">
                Chrome Web Store
              </a>
            </li>
            <li className="mb-2">
              Go to{" "}
              <a href="https://xbox.com/play" className="text-[#4CAF50] hover:underline">
                xbox.com/play
              </a>
            </li>
            <li className="mb-2">Sign in with your Microsoft account</li>
            <li className="mb-2">Enjoy enhanced Xbox Cloud Gaming!</li>
          </ol>

          <h3 className="text-xl font-bold mb-3">Features available on Chrome/Edge</h3>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">Enhanced video quality</li>
            <li className="mb-2">Custom controller layouts</li>
            <li className="mb-2">Stream settings customization</li>
            <li className="mb-2">Reduced input lag</li>
          </ul>
        </div>

        <div className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
          <h2 id="android" className="text-2xl font-bold mb-4">
            Install Android App (Beta)
          </h2>
          <ol className="list-decimal pl-5 mb-6">
            <li className="mb-2">
              Download the APK from our{" "}
              <a href="#" className="text-[#4CAF50] hover:underline">
                GitHub releases page
              </a>
            </li>
            <li className="mb-2">Allow installation from unknown sources in your device settings</li>
            <li className="mb-2">Install the APK and open the app</li>
            <li className="mb-2">Sign in with your Microsoft account</li>
            <li className="mb-2">Enjoy Xbox Cloud Gaming on your Android device!</li>
          </ol>
        </div>

        <div className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
          <h2 id="edge-browser" className="text-2xl font-bold mb-4">
            Install on Edge Browser (Android)
          </h2>
          <ol className="list-decimal pl-5 mb-6">
            <li className="mb-2">Install Microsoft Edge from the Play Store</li>
            <li className="mb-2">Install the Xperience xCloud extension</li>
            <li className="mb-2">
              Go to{" "}
              <a href="https://xbox.com/play" className="text-[#4CAF50] hover:underline">
                xbox.com/play
              </a>
            </li>
            <li className="mb-2">Sign in and enjoy!</li>
          </ol>
        </div>

        <div className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
          <h2 id="safari" className="text-2xl font-bold mb-4">
            Install on Safari
          </h2>
          <ol className="list-decimal pl-5 mb-6">
            <li className="mb-2">Download the Xperience xCloud Safari extension</li>
            <li className="mb-2">Enable the extension in Safari settings</li>
            <li className="mb-2">
              Go to{" "}
              <a href="https://xbox.com/play" className="text-[#4CAF50] hover:underline">
                xbox.com/play
              </a>
            </li>
            <li className="mb-2">Sign in with your Microsoft account</li>
          </ol>
        </div>

        <div className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
          <h2 id="webos" className="text-2xl font-bold mb-4">
            Install on webOS 22+
          </h2>
          <ol className="list-decimal pl-5 mb-6">
            <li className="mb-2">Open the web browser on your LG TV</li>
            <li className="mb-2">
              Go to our installation page at{" "}
              <span className="font-mono bg-[#333] px-1 rounded">xperience-xcloud.netlify.app/lg-tv</span>
            </li>
            <li className="mb-2">Follow the on-screen instructions to install</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
