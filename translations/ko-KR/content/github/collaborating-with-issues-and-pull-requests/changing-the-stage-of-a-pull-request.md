---
title: Changing the stage of a pull request
intro: 'You can mark a draft pull request as ready for review{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} or convert a pull request to a draft{% endif %}.'
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /articles/changing-the-stage-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### Marking a pull request as ready for review

{% data reusables.pull_requests.mark-ready-review %}

{% data reusables.repositories.sidebar-pr %}
2. In the "Pull requests" list, click the pull request you'd like to mark as ready for review.
3. In the merge box, click **Ready for review**. ![Ready for review button](/assets/images/help/pull_requests/ready-for-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

### Converting a pull request to a draft

You can convert a pull request to a draft at any time. For example, if you accidentally opened a pull request instead of a draft, or if you've received feedback on your pull request that needs to be addressed, you can convert the pull request to a draft to indicate further changes are needed. No one can merge the pull request until you mark the pull request as ready for review again. People who are already subscribed to notifications for the pull request will not be unsubscribed when you convert the pull request to a draft.

{% data reusables.repositories.sidebar-pr %}
2. In the "Pull requests" list, click the pull request you'd like to convert to a draft.
3. In the right sidebar, under "Reviewers," click **Convert to draft**. ![Convert to draft link](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Click **Convert to draft**. ![Convert to draft confirmation](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

### 더 읽을거리

- "[About pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
