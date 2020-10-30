---
title: 创建标签
intro: 在有写入权限的仓库中，您可以创建标签来组织议题和提取请求。
redirect_from:
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests/
  - /articles/creating-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**提示：**您也可以从议题或拉取请求的 Labels（标签）下拉菜单创建标签。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. 在搜索字段的右侧，单击 **New label（新建标签）**。
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### 延伸阅读

- "[关于标签](/articles/about-labels)"
- “[应用标签到议题和拉取请求](/articles/applying-labels-to-issues-and-pull-requests)”
- “[编辑标签](/articles/editing-a-label)”
- "[按标签过滤议题和拉取请求](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
- "[管理组织中仓库的默认标签](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}
