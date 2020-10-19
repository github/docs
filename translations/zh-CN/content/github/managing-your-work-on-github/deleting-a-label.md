---
title: 删除标签
intro: '在拥有写入权限的仓库中，如果您不再需要某一标签来分类 issue 或拉取请求，可将其删除。'
redirect_from:
  - /articles/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

删除标签将从其应用的任何 issue 或拉取请求中删除该标签。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### 延伸阅读

- “[应用标签到议题和拉取请求](/articles/applying-labels-to-issues-and-pull-requests)”
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
- "[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}
