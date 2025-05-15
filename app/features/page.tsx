export default function Features() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Features</h1>

      <div className="grid gap-8">
        <div className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
          <h2>Key Features</h2>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-3">
              <strong>Enhanced Video Quality</strong>
              <p>Improved video bitrate and resolution for a clearer gaming experience.</p>
            </li>
            <li className="mb-3">
              <strong>Custom Controller Layouts</strong>
              <p>Create and save custom touch controller layouts for mobile devices.</p>
            </li>
            <li className="mb-3">
              <strong>Stream Settings</strong>
              <p>Adjust video quality, audio settings, and network parameters to optimize your experience.</p>
            </li>
            <li className="mb-3">
              <strong>Reduced Input Lag</strong>
              <p>Optimizations to minimize input delay for a more responsive gaming experience.</p>
            </li>
            <li className="mb-3">
              <strong>Mouse and Keyboard Support</strong>
              <p>Play Xbox Cloud games with mouse and keyboard on supported platforms.</p>
            </li>
            <li className="mb-3">
              <strong>Quick Resume</strong>
              <p>Faster session resumption when returning to a game.</p>
            </li>
          </ul>
        </div>

        <div className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
          <h2>Platform-Specific Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Chrome/Edge (Desktop)</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Full mouse and keyboard support</li>
                <li>Custom video filters</li>
                <li>Stream statistics overlay</li>
                <li>Remote Play support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Android App</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Custom touch controls</li>
                <li>Gamepad remapping</li>
                <li>Picture-in-picture mode</li>
                <li>Background audio</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Safari (iOS/iPadOS)</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Optimized for touch controls</li>
                <li>Battery-saving mode</li>
                <li>Support for MFi controllers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">LG TV (webOS)</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Optimized for TV remote navigation</li>
                <li>Auto-connect to paired controllers</li>
                <li>Enhanced TV display settings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-section bg-[#252a33] p-6 rounded-md border border-[#333]">
          <h2>Comparison with Standard xCloud</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-6">
              <thead>
                <tr className="bg-[#333]">
                  <th className="border border-[#444] p-2 text-left">Feature</th>
                  <th className="border border-[#444] p-2 text-left">Standard xCloud</th>
                  <th className="border border-[#444] p-2 text-left">Xperience xCloud</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#444] p-2">Video Quality</td>
                  <td className="border border-[#444] p-2">Fixed bitrate</td>
                  <td className="border border-[#444] p-2">Adjustable bitrate</td>
                </tr>
                <tr>
                  <td className="border border-[#444] p-2">Controller Customization</td>
                  <td className="border border-[#444] p-2">Limited</td>
                  <td className="border border-[#444] p-2">Extensive</td>
                </tr>
                <tr>
                  <td className="border border-[#444] p-2">Mouse & Keyboard</td>
                  <td className="border border-[#444] p-2">Not supported</td>
                  <td className="border border-[#444] p-2">Fully supported</td>
                </tr>
                <tr>
                  <td className="border border-[#444] p-2">Remote Play</td>
                  <td className="border border-[#444] p-2">App only</td>
                  <td className="border border-[#444] p-2">Web browser</td>
                </tr>
                <tr>
                  <td className="border border-[#444] p-2">Stream Statistics</td>
                  <td className="border border-[#444] p-2">None</td>
                  <td className="border border-[#444] p-2">Detailed overlay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
