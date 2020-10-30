---
title: 编辑标签
intro: 在拥有写入权限的仓库中，您可以编辑现有标签的名称、颜色和说明。
redirect_from:
  - /articles/editing-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### 延伸阅读

- "[关于标签](/articles/about-labels)"
- “[创建标签](/articles/creating-a-label)”
- “[删除标签](/articles/deleting-a-label)”
- “[应用标签到议题和拉取请求](/articles/applying-labels-to-issues-and-pull-requests)”
- "[按标签过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
- "[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}
