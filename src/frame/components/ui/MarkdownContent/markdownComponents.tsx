import type { ComponentProps } from 'react'
import type { Components } from 'hast-util-to-jsx-runtime'
import { Image } from '@primer/react-brand'

import { CopyButton } from '@/frame/components/CopyButton'
import { CodeTabsGroup } from '@/frame/components/CodeTabsGroup'
import { ToggleableContent } from '@/tools/components/ToggleableContent'
import { isToggleClass } from '@/tools/components/SelectionContext'

const EMOJI_SRC = 'https://github.githubassets.com/images/icons/emoji'

// Shared HTML AST paths map picker and copy-button markup to React components
// instead of post-hydration DOM mutation. Article bodies and RenderedHTML
// fragments use this map, so SSR and hydration stay in sync.
// Class checks run first; unrecognized classes fall through to plain elements,
// so GraphQL and REST descriptions without pickers stay plain.
export const markdownComponents = {
  button(props: ComponentProps<'button'>) {
    const classes = String(props.className || '').split(/\s+/)
    if (classes.includes('js-btn-copy')) {
      return <CopyButton {...props} />
    }
    return <button {...props} />
  },
  div(props: ComponentProps<'div'>) {
    const classes = String(props.className || '').split(/\s+/)
    if (classes.includes('ghd-codetabs')) {
      return <CodeTabsGroup {...props} />
    }
    if (isToggleClass(props.className)) {
      return <ToggleableContent tag="div" {...props} />
    }
    return <div {...props} />
  },
  // Emoji stay plain so the fixed inline size in images.scss applies.
  // Omit aspectRatio, borderRadius, and animate, so Image renders one bare img
  // and leaves the picture and source markup from the content pipeline intact.
  // Missing alt becomes empty, which marks the image decorative.
  img(props: ComponentProps<'img'>) {
    const { src, alt = '', srcSet, ...rest } = props
    if (typeof src !== 'string' || src.startsWith(EMOJI_SRC)) {
      return <img {...props} alt={alt} />
    }
    return (
      <Image
        src={src}
        alt={alt}
        // Brand mistypes srcSet as an object, but forwards it to img unchanged.
        srcSet={srcSet as ComponentProps<typeof Image>['srcSet']}
        {...rest}
      />
    )
  },
  span(props: ComponentProps<'span'>) {
    if (isToggleClass(props.className)) {
      return <ToggleableContent tag="span" {...props} />
    }
    return <span {...props} />
  },
} as unknown as Partial<Components>
