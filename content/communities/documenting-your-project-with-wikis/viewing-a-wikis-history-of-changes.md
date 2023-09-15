---
title: Viewing a wiki's history of changes
intro: 'Because wikis are Git repositories, every change you make is a commit that you can view.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
---

## Viewing wiki history

Wiki history includes:
- The user who made the change
- The commit message they provided
- When the change was made

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
1. Using the wiki sidebar, navigate to the page whose history you want to view.
1. At the top of the wiki, click the revision link.

   ![Screenshot of the title of a wiki page. The revision link is outlined in dark orange.](/assets/images/help/wiki/wiki-revision-link.png)

## Viewing previous content

On the wiki history table, you can click a [SHA-1 hash](https://en.wikipedia.org/wiki/SHA-1)
(the sequence of letters and numbers to the far right) to see a wiki page as it
existed at a particular point in time.

![Screenshot of the revisions page. The wiki's SHA number is outlined in dark orange.](/assets/images/help/wiki/wiki-sha-number.png)

## Comparing two revisions

1. Select two rows that you want to compare.
1. At the top of the history table, on the right side, click **Compare Revisions**.
1. You'll see a diff of the changes showing which lines were added, removed, and
modified.

## Reverting previous changes

You can only revert changes if you have permission to edit the wiki.

1. Select a row that you want to revert.
1. At the top of the history table, on the right side, click **Compare Revisions**.
1. You'll see a diff of the changes showing which lines were added, removed, and modified.
1. To revert the newer changes, click **Revert Changes**.
