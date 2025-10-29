'use client'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SimpleBar 
      style={{ maxHeight: '100vh' }}
      className="scroll-area"
    >
      {children}
    </SimpleBar>
  )
}
