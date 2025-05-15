export default function FAQ() {
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className="content-section">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">What is Xperience xCloud?</h3>
          <p>
            Xperience xCloud is a browser extension and app that enhances the Xbox Cloud Gaming (xCloud) experience with
            additional features, improved video quality, and more customization options.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Is Xperience xCloud free?</h3>
          <p>
            Yes, Xperience xCloud is completely free and open-source. However, you still need an Xbox Game Pass Ultimate
            subscription to access Xbox Cloud Gaming.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Will I get banned for using Xperience xCloud?</h3>
          <p>
            No, it's safe to use. Xbox Cloud Gaming developers have confirmed they "don't ban people for using a
            third-party client or extension." However, as with any third-party tool, use it at your own risk.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Which platforms are supported?</h3>
          <p>
            Xperience xCloud supports Windows, macOS, Linux, Android, iOS, iPadOS, Android TV, Meta Quest VR headsets,
            and LG TVs with webOS 22+.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Do I need an Xbox controller?</h3>
          <p>
            While an Xbox controller provides the best experience, Xperience xCloud supports various controllers, touch
            controls on mobile devices, and even mouse and keyboard on desktop platforms.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Can I use Xperience xCloud for Remote Play?</h3>
          <p>
            Yes, Xperience xCloud allows you to use Xbox Remote Play through your web browser, which is not available in
            the standard Xbox Cloud Gaming web app.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">How do I update Xperience xCloud?</h3>
          <p>
            Browser extensions typically update automatically. For the Android app, you'll need to download the latest
            version from our GitHub releases page. We announce updates on our GitHub page and Discord community.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Does Xperience xCloud collect my data?</h3>
          <p>
            No, Xperience xCloud does not collect any personal data or telemetry. It's completely privacy-focused and
            doesn't communicate with any servers except Microsoft's Xbox services.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Can I contribute to the project?</h3>
          <p>
            Yes! Xperience xCloud is open-source, and we welcome contributions. Check out our GitHub repository for more
            information on how to contribute.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">How can I report bugs or request features?</h3>
          <p>
            You can report bugs or request features through our GitHub issues page. Please check existing issues before
            creating a new one to avoid duplicates.
          </p>
        </div>
      </div>
    </div>
  )
}
