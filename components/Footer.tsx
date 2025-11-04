export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-300">
        <div>
          <div className="text-silver-gradient font-extrabold tracking-wide text-lg">SAHUKAR GROUP</div>
          <p className="mt-3 text-gray-400">Indore, Madhya Pradesh, India</p>
          <p className="mt-1 text-gray-500">All Problem, One Solution</p>
        </div>
        <div>
          <div className="text-white font-semibold">Connect</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-white" href="tel:+919999999999">+91 99999 99999</a></li>
            <li><a className="hover:text-white" href="mailto:contact@sahukargroup.com">contact@sahukargroup.com</a></li>
            <li><a className="hover:text-white" href="https://wa.me/919999999999?text=Hi%20Sahukar%20Group%2C%20I%20want%20to%20connect." target="_blank" rel="noreferrer">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Legal</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-white" href="#">Terms & Privacy</a></li>
            <li><a className="hover:text-white" href="#">Disclaimer</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 text-xs text-gray-500">
        ? {new Date().getFullYear()} Sahukar Group. All rights reserved.
      </div>
    </footer>
  )
}
