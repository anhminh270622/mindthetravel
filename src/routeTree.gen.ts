/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StartHereImport } from './routes/start-here'
import { Route as ContactImport } from './routes/contact'
import { Route as AboutMindTheTravelImport } from './routes/about-mind-the-travel'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const StartHereRoute = StartHereImport.update({
  id: '/start-here',
  path: '/start-here',
  getParentRoute: () => rootRoute,
} as any)

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const AboutMindTheTravelRoute = AboutMindTheTravelImport.update({
  id: '/about-mind-the-travel',
  path: '/about-mind-the-travel',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about-mind-the-travel': {
      id: '/about-mind-the-travel'
      path: '/about-mind-the-travel'
      fullPath: '/about-mind-the-travel'
      preLoaderRoute: typeof AboutMindTheTravelImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/start-here': {
      id: '/start-here'
      path: '/start-here'
      fullPath: '/start-here'
      preLoaderRoute: typeof StartHereImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about-mind-the-travel': typeof AboutMindTheTravelRoute
  '/contact': typeof ContactRoute
  '/start-here': typeof StartHereRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about-mind-the-travel': typeof AboutMindTheTravelRoute
  '/contact': typeof ContactRoute
  '/start-here': typeof StartHereRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about-mind-the-travel': typeof AboutMindTheTravelRoute
  '/contact': typeof ContactRoute
  '/start-here': typeof StartHereRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about-mind-the-travel' | '/contact' | '/start-here'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about-mind-the-travel' | '/contact' | '/start-here'
  id: '__root__' | '/' | '/about-mind-the-travel' | '/contact' | '/start-here'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutMindTheTravelRoute: typeof AboutMindTheTravelRoute
  ContactRoute: typeof ContactRoute
  StartHereRoute: typeof StartHereRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutMindTheTravelRoute: AboutMindTheTravelRoute,
  ContactRoute: ContactRoute,
  StartHereRoute: StartHereRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about-mind-the-travel",
        "/contact",
        "/start-here"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about-mind-the-travel": {
      "filePath": "about-mind-the-travel.tsx"
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/start-here": {
      "filePath": "start-here.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
