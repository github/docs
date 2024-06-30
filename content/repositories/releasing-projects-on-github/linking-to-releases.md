---
title: Linking to releases
intro: You can share every release you create on GitHub with a unique URL.
redirect_from:
  - /articles/linking-to-releases
  - /github/administering-a-repository/linking-to-releases
  - /github/administering-a-repository/releasing-projects-on-github/linking-to-releases
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
---

## Linking to the latest release

You can share a link to the latest release for a repository by adding `releases/latest` to the end of a repository's URL. For example, the URL for the latest release of `octo-org/octo-repo` on {% data variables.product.prodname_dotcom_the_website %} is `https://github.com/octo-org/octo-repo/releases/latest`.

To link directly to a download of your latest release asset that was manually uploaded, the suffix is `/releases/latest/download/asset-name.zip`.

## Linking to older releases

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. To copy a unique URL to your clipboard, find the release you want to link to, right click the title, and copy the URL.
