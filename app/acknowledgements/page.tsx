export default function Acknowledgements() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Acknowledgements</h1>

      <div className="content-section">
        <p className="mb-6">
          Xperience xCloud wouldn't be possible without the contributions and support from many individuals and
          projects. We'd like to express our gratitude to everyone who has helped make this project a reality.
        </p>

        <h2 className="text-2xl font-bold mb-4">Contributors</h2>
        <p className="mb-4">
          Thanks to all the developers who have contributed code, reported bugs, and suggested features:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-[#252a33] p-4 rounded-lg">
              <div className="font-semibold">Contributor {i + 1}</div>
              <div className="text-sm text-gray-400">10+ contributions</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Open Source Projects</h2>
        <p className="mb-4">Xperience xCloud builds upon these amazing open-source projects:</p>

        <ul className="list-disc pl-5 mb-8">
          <li className="mb-2">
            <strong>React</strong> - A JavaScript library for building user interfaces
          </li>
          <li className="mb-2">
            <strong>Next.js</strong> - The React framework for production
          </li>
          <li className="mb-2">
            <strong>Tailwind CSS</strong> - A utility-first CSS framework
          </li>
          <li className="mb-2">
            <strong>WebRTC</strong> - Real-time communication for the web
          </li>
          <li className="mb-2">
            <strong>Gamepad API</strong> - For controller support in browsers
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Special Thanks</h2>
        <p className="mb-4">We'd also like to extend our gratitude to:</p>

        <ul className="list-disc pl-5">
          <li className="mb-2">The Xbox Cloud Gaming team for creating an amazing platform</li>
          <li className="mb-2">Our community members who provide feedback and testing</li>
          <li className="mb-2">All our supporters who have donated to the project</li>
          <li className="mb-2">The developers of tools and libraries that make our work possible</li>
        </ul>
      </div>
    </div>
  )
}
