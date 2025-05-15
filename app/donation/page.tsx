import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Donation() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-2xl mx-auto text-center">
        <Heart className="w-16 h-16 mx-auto mb-4 text-red-500" />
        <h1 className="text-3xl font-bold mb-6">Support Xperience xCloud</h1>

        <div className="content-section">
          <p className="mb-4">
            Xperience xCloud is a free and open-source project developed in our spare time. If you enjoy using it and
            want to support its continued development, please consider making a donation.
          </p>

          <p className="mb-8">
            Your contributions help us cover server costs, development tools, and allow us to dedicate more time to
            improving Xperience xCloud with new features and platforms.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 max-w-md mx-auto mb-8">
            <Button className="bg-[#0070ba] hover:bg-[#005ea6]">Donate with PayPal</Button>
            <Button className="bg-[#f7931a] hover:bg-[#e27b16]">Donate with Bitcoin</Button>
          </div>

          <div className="bg-[#252a33] p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Other Ways to Support</h3>
            <ul className="list-disc pl-5 text-left">
              <li className="mb-2">Star our repository on GitHub</li>
              <li className="mb-2">Report bugs and contribute to the code</li>
              <li className="mb-2">Help translate Xperience xCloud to other languages</li>
              <li className="mb-2">Spread the word about Xperience xCloud</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-4">Supporters</h3>
          <p className="mb-2">Thank you to all our supporters who have contributed to the project!</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-w-md mx-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-[#252a33] p-2 rounded-md text-center">
                Supporter {i + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
