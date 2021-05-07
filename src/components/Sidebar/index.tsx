import React from 'react'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { GoGear } from 'react-icons/go'
import { IoPodium } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { SidebarContainer } from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <IconContext.Provider value={{ color: '#5965e0', size: '2rem' }}>
        <div>
          <Link href="/">
            <a>
              <FaUser />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/ranking">
            <a>
              <IoPodium />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/config">
            <a>
              <GoGear />
            </a>
          </Link>
        </div>
      </IconContext.Provider>
    </SidebarContainer>
  )
}
