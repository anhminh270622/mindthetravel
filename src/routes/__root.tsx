import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import HeaderScreen from '../web/features/header/screen/HeaderScreen'
import FooterScreen from '../web/features/footer/footerScreen/FooterScreen'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div>
      <HeaderScreen />
      <Outlet />
      <FooterScreen />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  )
}
