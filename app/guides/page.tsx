export default function Guides() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Guides</h1>

      <div className="content-section">
        <h2>Getting Started</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Setting Up Xperience xCloud for the First Time</h3>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Choose the right client for your device from our installation page</li>
            <li className="mb-2">Install the extension or app following the platform-specific instructions</li>
            <li className="mb-2">Go to xbox.com/play and sign in with your Microsoft account</li>
            <li className="mb-2">Verify that Xperience xCloud is active (look for the icon in the corner)</li>
            <li className="mb-2">Configure your preferences in the Xperience xCloud settings menu</li>
          </ol>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Optimizing Your Stream Quality</h3>
          <p className="mb-3">To get the best possible streaming experience with Xperience xCloud:</p>
          <ol className="list-decimal pl-5">
            <li className="mb-2">
              <strong>Adjust Video Settings:</strong> Open the Xperience xCloud overlay and go to Video settings
            </li>
            <li className="mb-2">
              <strong>Set Bitrate:</strong> Start with Auto, or manually set based on your connection (10-15 Mbps for
              1080p)
            </li>
            <li className="mb-2">
              <strong>Video Filters:</strong> Try different clarity and sharpness filters to improve image quality
            </li>
            <li className="mb-2">
              <strong>Monitor Performance:</strong> Enable the performance overlay to monitor stream statistics
            </li>
            <li className="mb-2">
              <strong>Network Optimization:</strong> Use a wired connection when possible, or stay close to your Wi-Fi
              router
            </li>
          </ol>
        </div>
      </div>

      <div className="content-section">
        <h2>Advanced Features</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Setting Up Mouse and Keyboard Controls</h3>
          <p className="mb-3">Xperience xCloud allows you to play Xbox games with mouse and keyboard:</p>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Open the Xperience xCloud overlay while in a game</li>
            <li className="mb-2">Go to Controls &gt; Mouse and Keyboard</li>
            <li className="mb-2">Enable "Mouse and Keyboard Mode"</li>
            <li className="mb-2">Customize key bindings for your preferred layout</li>
            <li className="mb-2">Adjust mouse sensitivity and acceleration settings</li>
            <li className="mb-2">Save your profile for future use</li>
          </ol>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Creating Custom Touch Controls (Mobile)</h3>
          <p className="mb-3">For mobile users, you can create custom touch control layouts:</p>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Open a game with touch controls enabled</li>
            <li className="mb-2">Tap the "Edit Layout" button in the overlay</li>
            <li className="mb-2">Drag, resize, and customize button positions</li>
            <li className="mb-2">Add additional buttons or macros as needed</li>
            <li className="mb-2">Save your custom layout with a name</li>
            <li className="mb-2">Create different layouts for different game genres</li>
          </ol>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Using Remote Play via Browser</h3>
          <p className="mb-3">Xperience xCloud enables Remote Play through your browser:</p>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Ensure your Xbox console is set up for remote play in the console settings</li>
            <li className="mb-2">Go to xbox.com/play with Xperience xCloud installed</li>
            <li className="mb-2">Look for the "Remote Play" option in the Xperience xCloud menu</li>
            <li className="mb-2">Sign in with the same Microsoft account used on your Xbox</li>
            <li className="mb-2">Select your console from the list</li>
            <li className="mb-2">Wait for the connection to establish</li>
          </ol>
        </div>
      </div>

      <div className="content-section">
        <h2>Game-Specific Guides</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Optimizing for First-Person Shooters</h3>
          <p className="mb-3">For the best experience with FPS games like Halo or Call of Duty:</p>
          <ul className="list-disc pl-5">
            <li className="mb-2">Enable "Reduce Input Lag" in the Performance settings</li>
            <li className="mb-2">Use the "FPS Optimized" video filter preset</li>
            <li className="mb-2">If using mouse and keyboard, adjust sensitivity and acceleration</li>
            <li className="mb-2">Consider using a wired controller or connection for minimal latency</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Settings for Racing Games</h3>
          <p className="mb-3">For racing games like Forza Horizon:</p>
          <ul className="list-disc pl-5">
            <li className="mb-2">Prioritize frame rate over resolution in video settings</li>
            <li className="mb-2">Enable vibration feedback if your controller supports it</li>
            <li className="mb-2">Use the "Vivid" color profile for more vibrant visuals</li>
            <li className="mb-2">If using touch controls, try the racing-specific layout template</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
