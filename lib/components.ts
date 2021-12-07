import { Component, ComponentGroup } from '../interface/component'
import {
  alerts,
  announcements,
  banners,
  breadcrumbs,
  buttons,
  cards,
  carts,
  content,
  ctas,
  emptyStates,
  faqs,
  footers,
  forms,
  inputs,
  navigations,
  offCanvasMenus,
  popups,
  productCollections,
  stats,
  tabs,
  tags,
  testimonials,
  titles,
} from './groups'

export const components: Array<ComponentGroup> = [
  {
    id: 'alerts',
    components: alerts,
    spacing: 'max-w-sm mx-auto p-4 space-y-4',
  },
  {
    id: 'announcements',
    components: announcements,
  },
  {
    id: 'banners',
    components: banners,
  },
  {
    id: 'buttons',
    components: buttons,
    spacing: 'flex justify-center p-4',
  },
  {
    id: 'breadcrumbs',
    components: breadcrumbs,
  },
  {
    id: 'cards',
    components: cards,
    spacing: 'max-w-md mx-auto p-4',
  },
  {
    id: 'carts',
    components: carts,
  },
  {
    id: 'content',
    components: content,
  },
  {
    id: 'ctas',
    components: ctas,
  },
  {
    id: 'empty-states',
    components: emptyStates,
    spacing: 'max-w-lg mx-auto p-4',
  },
  {
    id: 'faqs',
    components: faqs,
  },
  {
    id: 'footers',
    components: footers,
  },
  {
    id: 'forms',
    components: forms,
  },
  {
    id: 'inputs',
    components: inputs,
    spacing: 'max-w-sm mx-auto p-4',
  },
  {
    id: 'navigations',
    components: navigations,
  },
  {
    id: 'off-canvas-menus',
    components: offCanvasMenus,
  },
  {
    id: 'popups',
    components: popups,
  },
  {
    id: 'product-collections',
    components: productCollections,
  },
  {
    id: 'stats',
    components: stats,
  },
  {
    id: 'tabs',
    components: tabs,
  },
  {
    id: 'tags',
    components: tags,
    spacing: 'flex justify-center p-4',
  },
  {
    id: 'testimonials',
    components: testimonials,
  },
  {
    id: 'titles',
    components: titles,
  },
]

export function currentCollectionComponents(id: string): Array<Component> | [] {
  let group = components.find((collection) => collection.id === id)

  return group ? group.components : []
}