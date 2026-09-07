---
title: Archive pull requests
intro: Repository administrators can archive a pull request to remove it from public view, providing a moderation option between leaving a pull request up and permanently deleting it.
versions:
  feature: archive-pull-requests
category:
  - Moderate comments and conversations
redirect_from:
  - /communities/moderating-comments-and-conversations/archiving-pull-requests
contentType: other
permissions: Repository administrators
---

## About archiving pull requests

Archiving a pull request removes it from public view while preserving its history for repository administrators. This provides a safer moderation path when they need to take a pull request out of public view without permanently deleting it.

When a pull request is archived:

* The pull request is only visible to repository administrators. Visitors without administrator access to the repository receive a 404 error.
* The pull request is automatically closed and locked.

When you unarchive a pull request, it becomes visible again, but it remains closed and locked. You can reopen and unlock it separately if needed.

## Archiving a pull request

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. Click the pull request you want to archive.
1. Scroll to the bottom of the right sidebar. Then click **{% octicon "archive" aria-hidden="true" aria-label="archive" %} Archive pull request**.
1. Read the information about archiving the pull request, then confirm that you want to archive it.

## Unarchiving a pull request

You can find the PR by using the `is:archived` qualifier. See, [AUTOTITLE](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-pull-request-is-archived).

1. Open the pull request you want to unarchive.
1. In the right sidebar, click **{% octicon "archive" aria-hidden="true" aria-label="unarchive" %} Unarchive pull request**.
1. Read the information about unarchiving the pull request, then confirm that you want to unarchive it.
