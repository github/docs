---
title: Deleting a label
intro: 'In repositories where you have write access, you can delete a label if you no longer need it to classify issues or pull requests.'
redirect_from:
  - /articles/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Deleting a label will remove the label from any issues or pull requests where it's been applied.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### 더 읽을거리

- "[Applying labels to issues and pull requests](/articles/applying-labels-to-issues-and-pull-requests)"
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}
