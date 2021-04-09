---
title: Opening an issue from a comment
intro: You can open a new issue from a specific comment in an issue or pull request.
permissions: People with read permissions can create an issue in a repository where issues are enabled.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

When you open an issue from a comment, the issue contains a snippet showing where the comment was originally posted.

{% data reusables.repositories.administrators-can-disable-issues %}

1. Navigate to the comment you'd like to open an issue from.

2. In that comment, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Kebab button in pull request review comment](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Click **Reference in new issue**. ![Reference in new issue menu item](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Use the "Repository" drop-down menu, and select the repository you want to open the issue in. ![Repository dropdown for new issue](/assets/images/help/pull_requests/new-issue-repository.png)
5. Type a descriptive title and body for the issue. ![Title and body for new issue](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Click **Create issue**. ![Button to create new issue](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}

### 더 읽을거리

- "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)"
