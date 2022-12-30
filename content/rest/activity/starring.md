---
title: Starring
intro: The Starring API lets you bookmark a repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Starring API

The Starring API lets you bookmark a repository. Stars are shown next to repositories to show an approximate level of interest. Stars have no effect on notifications or the activity feed. For more information, see "[Saving repositories with stars](/get-started/exploring-projects-on-github/saving-repositories-with-stars)."

### Starring vs. Watching

In August 2012, we [changed the way watching
works](https://github.com/blog/1204-notifications-stars) on {% data variables.product.prodname_dotcom %}. Many API
client applications may be using the original "watcher" endpoints for accessing
this data. You can now start using the "star" endpoints instead (described
below). For more information, see the [Watcher API Change post](https://developer.github.com/changes/2012-09-05-watcher-api/) and the "[Repository Watching API](/rest/reference/activity#watching)."

### Custom media types for starring

There is one supported custom media type for the Starring REST API. When you use this custom media type, you will receive a response with the `starred_at` timestamp property that indicates the time the star was created. The response also has a second property that includes the resource that is returned when the custom media type is not included. The property that contains the resource will be either `user` or `repo`.

    application/vnd.github.star+json

For more information about media types, see "[Custom media types](/rest/overview/media-types)."
