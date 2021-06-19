---
title: Viewing a wiki's history of changes
intro: 'Because wikis are Git repositories, every change you make is a commit that you can view.'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - сообщество
---

### Viewing wiki history

Wiki history includes:
- The user who made the change
- The commit message they provided
- When the change was made

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Using the wiki sidebar, navigate to the page whose history you want to view.
4. At the top of the wiki, click the revision link. ![Wiki revision link](/assets/images/help/wiki/wiki_revision_link.png)

### Viewing previous content

On the wiki history table, you can click a [SHA-1 hash](http://en.wikipedia.org/wiki/SHA-1) (the sequence of letters and numbers to the far right) to see a wiki page as it existed at a particular point in time.

![Wiki SHA number](/assets/images/help/wiki/wiki_sha_number.png)

### Comparing two revisions

1. Select two rows that you want to compare.
2. At the top of the history table, click **Compare Revisions**. ![Wiki compare revisions button](/assets/images/help/wiki/wiki_compare_revisions.png)
3. You'll see a diff of the changes showing which lines were added, removed, and modified.

### Reverting previous changes

You can only revert changes if you have permission to edit the wiki.

1. Select a row that you want to revert.
2. At the top of the history table, click **Compare Revisions**. ![Wiki compare revisions button](/assets/images/help/wiki/wiki_compare_revisions.png)
3. You'll see a diff of the changes showing which lines were added, removed, and modified. ![Wiki revision diff](/assets/images/help/wiki/wiki_revision_diff.png)
4. To revert the newer changes, click **Revert Changes**. ![Wiki revert changes button](/assets/images/help/wiki/wiki_revert_changes.png)
