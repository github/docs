import React from 'react'
import styled from 'styled-components'
import { Box, themeGet } from '@primer/components'

type Props = {
  intro?: React.ReactNode
  topperSidebar?: React.ReactNode
  topper?: React.ReactNode
  toc?: React.ReactNode
  children?: React.ReactNode
  className?: string
}
export const ArticleGridLayout = ({
  intro,
  topperSidebar,
  topper,
  toc,
  children,
  className,
}: Props) => {
  return (
    <Container className={className}>
      {topper && <Box gridArea="topper">{topper}</Box>}
      {topperSidebar && <Box gridArea="topper-sidebar">{topperSidebar}</Box>}
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
  grid-template-areas:
    'topper'
    'topper-sidebar'
    'intro'
    'sidebar'
    'content';

  row-gap: ${themeGet('space.2')};

  @media (min-width: ${themeGet('breakpoints.3')}) {
    max-width: none;
    grid-template-rows: auto 1fr;
    grid-template-columns: minmax(500px, 720px) minmax(220px, 1fr);
    grid-template-areas:
      'topper topper-sidebar'
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
    top: 0;
    max-height: calc(100vh - ${themeGet('space.4')});
    overflow-y: auto;
    padding-bottom: ${themeGet('space.4')};
  }
`
