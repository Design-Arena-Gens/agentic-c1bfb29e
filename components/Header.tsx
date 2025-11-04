import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#industries', label: 'Industries' },
  { href: '#founder', label: 'Founder' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Sahukar Group" width={36} height={36} />
          <span className="text-silver-gradient font-extrabold tracking-wide text-lg">SAHUKAR GROUP</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-silver text-sm">Connect Me</a>
        </nav>
        <div className="md:hidden">
          <a href="#contact" className="btn-silver text-sm">Connect</a>
        </div>
      </div>
    </header>
  )
}
