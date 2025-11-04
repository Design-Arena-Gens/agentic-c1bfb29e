import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <section className="section">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs tracking-widest uppercase text-gray-400">Indore ? Madhya Pradesh ? India</span>
            <h1 className="mt-4 text-silver-gradient text-display font-extraheavy">All Problem, One Solution ? Sahukar Group</h1>
            <p className="mt-4 text-lg text-gray-300">From home to business, we solve everything under one trusted name.</p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="btn-silver">Connect Me</a>
              <a href="#services" className="inline-flex items-center text-gray-300 hover:text-white">Explore Services ?</a>
            </div>
            <div className="mt-8 hr-silver" />
            <div className="mt-6 text-sm text-gray-400">Trusted by households, entrepreneurs, and local businesses.</div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-2xl opacity-50 blur-2xl" style={{background:'conic-gradient(from 120deg at 50% 50%, rgba(255,255,255,0.25), rgba(255,255,255,0))'}} />
            <div className="relative card-silver p-8">
              <div className="flex items-center gap-4">
                <Image src="/logo.svg" alt="Sahukar Group" width={64} height={64} />
                <div>
                  <div className="text-white font-bold text-2xl">Sahukar Group</div>
                  <div className="text-gray-400">Royal ? Modern ? Desi Touch</div>
                </div>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-300">
                <li className="bg-white/5 rounded-lg p-3">Facility & Home Services</li>
                <li className="bg-white/5 rounded-lg p-3">Business Support & Compliance</li>
                <li className="bg-white/5 rounded-lg p-3">IT & Digital Solutions</li>
                <li className="bg-white/5 rounded-lg p-3">Logistics & Procurement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-headline font-extrabold text-white">Our Services</h2>
          <p className="mt-2 text-gray-400">Local-to-corporate, managed with accountability and speed.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={<span>??</span>} title="Facility & Home Care">
              Plumbing, electrical, AC, deep cleaning, painting, carpentry. Managed end-to-end with warranty.
            </ServiceCard>
            <ServiceCard icon={<span>??</span>} title="Business & Compliance">
              Company registration, licenses, GST, labor, documentation, procurement and vendor management.
            </ServiceCard>
            <ServiceCard icon={<span>??</span>} title="IT & Digital">
              Websites, branding, social media, CRM setup, automations, cloud and IT support.
            </ServiceCard>
            <ServiceCard icon={<span>??</span>} title="Logistics & Sourcing">
              Local transport, packaging, inventory, bulk sourcing with verified supply partners.
            </ServiceCard>
            <ServiceCard icon={<span>???</span>} title="Security & Staffing">
              Guards, housekeeping, reception, skilled/field staff with attendance and compliance.
            </ServiceCard>
            <ServiceCard icon={<span>??</span>} title="Custom Projects">
              Tailored solutions for unique needs. One point of contact, clear SLAs.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-headline font-extrabold text-white">Why Sahukar Group</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{t:'Accountability', d:'Clear pricing, written commitments, reliable execution.'},{t:'Single Window', d:'One name, many solutions. Less follow-ups.'},{t:'Verified Partners', d:'Trusted network with background checks.'},{t:'Fast Turnaround', d:'Local agility with corporate discipline.'}].map((f) => (
              <div key={f.t} className="card-silver p-6">
                <div className="text-white font-semibold">{f.t}</div>
                <div className="text-gray-400 mt-2 text-sm">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="section">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-headline font-extrabold text-white">Industries We Serve</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-300">
            {['Residential', 'Retail & FMCG', 'MSMEs & Startups', 'Offices & IT', 'Warehousing', 'Hospitality', 'Healthcare & Clinics', 'Events & Exhibitions'].map((i) => (
              <div key={i} className="bg-white/5 rounded-lg px-4 py-3">{i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="founder" className="section">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-headline font-extrabold text-white">Founder: Krishna Sahukar</h2>
            <p className="mt-3 text-gray-300">Local roots. Corporate standards. Building a service ecosystem that keeps life and business moving without hassle.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="card-silver p-5">
                <div className="text-white font-semibold">Vision</div>
                <div className="text-gray-400 mt-1 text-sm">A trusted single-window for essential services in Indore and beyond.</div>
              </div>
              <div className="card-silver p-5">
                <div className="text-white font-semibold">Values</div>
                <div className="text-gray-400 mt-1 text-sm">Commitment, integrity, transparency, and long-term relationships.</div>
              </div>
            </div>
          </div>
          <div className="card-silver p-6">
            <div className="text-gray-400 text-sm">Quote</div>
            <div className="text-white mt-2 text-lg">?All Problem, One Solution. Aapka kaam hamara zimma.?</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="card-silver p-8 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-headline font-extrabold text-white">Let?s Connect</h2>
              <p className="mt-2 text-gray-300">Tell us your requirement. We will respond quickly with the best solution.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn-silver" href="tel:+919999999999">Call Now</a>
                <a className="btn-silver" href="mailto:contact@sahukargroup.com">Email Us</a>
                <a className="btn-silver" target="_blank" rel="noreferrer" href="https://wa.me/919999999999?text=Hi%20Sahukar%20Group%2C%20I%20want%20to%20connect.">WhatsApp</a>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
              <div>
                <label className="text-sm text-gray-300">Name</label>
                <input className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Your full name" required />
              </div>
              <div>
                <label className="text-sm text-gray-300">Phone/Email</label>
                <input className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Best way to reach you" required />
              </div>
              <div>
                <label className="text-sm text-gray-300">Requirement</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Describe your need"></textarea>
              </div>
              <button className="btn-silver w-full">Submit Inquiry</button>
              <p className="text-xs text-gray-500">By submitting, you agree to be contacted by Sahukar Group.</p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
