import { ReactNode } from 'react'

export default function ServiceCard({ icon, title, children }: { icon: ReactNode, title: string, children: ReactNode }) {
  return (
    <div className="card-silver p-6 hover:shadow-silver transition-shadow">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-lg bg-white/10 flex items-center justify-center text-white/90">
          {icon}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-gray-400 mt-1 text-sm leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  )
}
