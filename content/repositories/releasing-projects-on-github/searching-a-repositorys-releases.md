---
title: Searching a repository's releases
intro: 'You can use keywords, tags, and other qualifiers to search for particular releases in a repository.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
  ghae: issue-4974
topics:
  - Repositories
---

## Searching for releases in a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
1. To search the repository's releases, in the search field at the top of the Releases page, type your query and press **Enter**.
![Releases search field](/assets/images/help/releases/search-releases.png)

## Search syntax for searching releases in a repository

You can provide text in your search query which will be matched against the title, body, and tag of the repository's releases. You can also combine the following qualifiers to target specific releases.

| Qualifier        | Example
| ------------- | -------------
| `draft:true` | **draft:true** will only match draft releases.
| `draft:false` | **draft:false** will only match published releases.
| `prerelease:true` | **prerelease:true** will only match pre-releases.
| `prerelease:false` | **prerelease:false** will only match releases that are not pre-releases.
| <code>tag:<em>TAG</em></code> | **tag:v1** matches a release with the v1 tag and any minor or patch versions within v1, such as v1.0, v1.2, and v1.2.5.
| <code>created:<em>DATE</em></code> | **created:2021** will match releases created during 2021. You can also provide date ranges. For more information, see "[Understanding the search syntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
