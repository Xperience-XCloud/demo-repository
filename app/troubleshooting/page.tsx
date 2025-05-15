export default function Troubleshooting() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Troubleshooting</h1>

      <div className="content-section">
        <h2>Common Issues</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Stream Quality Issues</h3>
          <p className="mb-2">If you're experiencing poor video quality or stuttering:</p>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Check your internet connection speed (minimum 10Mbps recommended)</li>
            <li className="mb-2">Try reducing the video quality in settings</li>
            <li className="mb-2">Close other bandwidth-intensive applications</li>
            <li className="mb-2">Use a wired connection if possible</li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Controller Not Detected</h3>
          <p className="mb-2">If your controller isn't being recognized:</p>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Ensure your controller is properly connected to your device</li>
            <li className="mb-2">Try reconnecting the controller</li>
            <li className="mb-2">Check if the controller works in other applications</li>
            <li className="mb-2">Try using a different USB port or Bluetooth connection</li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Extension Not Working</h3>
          <p className="mb-2">If the Xperience xCloud extension isn't functioning:</p>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Make sure you're using a supported browser version</li>
            <li className="mb-2">Check if the extension is enabled in your browser</li>
            <li className="mb-2">Try reinstalling the extension</li>
            <li className="mb-2">Clear your browser cache and cookies</li>
          </ol>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">High Input Lag</h3>
          <p className="mb-2">If you're experiencing significant input delay:</p>
          <ol className="list-decimal pl-5">
            <li className="mb-2">Enable the "Reduce Input Lag" option in settings</li>
            <li className="mb-2">Check your network latency</li>
            <li className="mb-2">Try connecting to a different Xbox server region if available</li>
            <li className="mb-2">Disable any unnecessary browser extensions</li>
          </ol>
        </div>
      </div>

      <div className="content-section">
        <h2>Platform-Specific Issues</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Chrome/Edge</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>Black Screen:</strong> Try disabling hardware acceleration in browser settings
            </li>
            <li className="mb-2">
              <strong>Extension Conflicts:</strong> Disable other extensions that might interfere with Xperience xCloud
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Android App</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>App Crashes:</strong> Ensure your Android version is compatible (Android 8.0+)
            </li>
            <li className="mb-2">
              <strong>Touch Controls Not Working:</strong> Reset the touch control layout in settings
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Safari (iOS/iPadOS)</h3>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <strong>Audio Issues:</strong> Toggle silent mode on and off
            </li>
            <li className="mb-2">
              <strong>Controller Disconnects:</strong> Update to the latest iOS/iPadOS version
            </li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Contact Support</h2>
        <p>
          If you're still experiencing issues after trying the troubleshooting steps above, please contact us through
          our{" "}
          <a href="https://github.com" className="text-[#4CAF50] hover:underline">
            GitHub issues page
          </a>{" "}
          or join our{" "}
          <a href="#" className="text-[#4CAF50] hover:underline">
            Discord community
          </a>{" "}
          for assistance.
        </p>
      </div>
    </div>
  )
}
