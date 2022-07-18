import React from 'react'
import styled from 'styled-components'
import { Box, themeGet } from '@primer/react'

type Props = {
  intro?: React.ReactNode
  topper?: React.ReactNode
  toc?: React.ReactNode
  children?: React.ReactNode
  className?: string
}
export const ArticleGridLayout = ({ intro, topper, toc, children, className }: Props) => {
  return (
    <Container className={className}>
      {topper && <Box gridArea="topper">{topper}</Box>}
      {toc && (
        <SidebarContent
          gridArea="sidebar"
          alignSelf="flex-start"
          className="border-bottom border-xl-0 pb-4 mb-5 pb-xl-0 mb-xl-0"
        >
          {toc}
        </SidebarContent>
      )}

      {intro && <Box gridArea="intro">{intro}</Box>}

      <Box gridArea="content" data-search="article-body">
        {children}
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  max-width: 720px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    'topper'
    'intro'
    'sidebar'
    'content';

  row-gap: ${themeGet('space.2')};

  @media (min-width: ${themeGet('breakpoints.3')}) {
    max-width: none;
    padding-top: ${themeGet('space.4')};
    grid-template-rows: auto 1fr;
    grid-template-columns: minmax(500px, 720px) minmax(220px, 1fr);
    grid-template-areas:
      'topper sidebar'
      'intro sidebar'
      'content sidebar';
    column-gap: ${themeGet('space.9')};
    row-gap: 0;
  }
`

const SidebarContent = styled(Box)`
  @media (min-width: ${themeGet('breakpoints.3')}) {
    position: sticky;
    padding-top: ${themeGet('space.4')};
    top: 5em;
    max-height: calc(100vh - 5em);
    overflow-y: auto;
    padding-bottom: ${themeGet('space.6')} !important;
  }
`
