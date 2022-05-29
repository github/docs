---
title: GitHub Actions 机密
allowTitleToDifferFromFilename: true
shortTitle: 密码
intro: '{% data variables.product.prodname_actions %} 密钥 API 允许您创建、更新、删除和检索有关可在 {% data variables.product.prodname_actions %} 工作流程中使用的加密机密的信息。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## 关于机密 API

{% data variables.product.prodname_actions %} 密钥 API 允许您创建、更新、删除和检索有关可在 {% data variables.product.prodname_actions %} 工作流程中使用的加密机密的信息。 {% data reusables.actions.about-secrets %}更多信息请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} 必须具有`密码`权限才可使用此 API。 经过身份验证的用户必须对仓库具有协作者权限才可创建、更新或读取密码。
