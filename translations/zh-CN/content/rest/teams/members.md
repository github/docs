---
title: 团队成员
allowTitleToDifferFromFilename: true
shortTitle: 成员
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## 关于团队成员 API

{% data reusables.organizations.team-api %}

{% ifversion fpt or ghes or ghec %}
{% note %}

**注：**当您为具有组织身份提供程序 (IdP) 的团队设置了团队同步时，如果尝试使用 API 更改团队的成员身份，则会看到错误。 如果您有权访问 IdP 中的组成员身份，可以通过身份提供程序管理 GitHub 团队成员身份，该提供程序会自动添加和删除组织的成员。 更多信息请参阅“[在身份提供程序与 GitHub 之间同步团队](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”。

{% endnote %}

{% endif %}
