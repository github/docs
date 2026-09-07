---
title: Journey Landing
intro: 'Test page for journey tracks functionality'
layout: journey-landing
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
journeyTracks:
  - id: 'first_track'
    title: 'First Track'
    description: 'The first track in the journey.'
    guides:
      - href: '/get-started/start-your-journey/hello-world'
      - href: '/get-started/foo/journey-test-article'
        alternativeNextStep: 'Want to skip ahead? See [AUTOTITLE](/get-started/start-your-journey/hello-world)'
  - id: 'second_track'
    title: 'Next Track'
    description: 'The second track in the journey.'
    guides:
      - href: '/get-started/foo/autotitling'
      - href: '/get-started/start-your-journey/hello-world'
---

This is a test page for journey tracks.
