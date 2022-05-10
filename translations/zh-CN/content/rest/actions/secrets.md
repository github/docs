---
title: GitHub Actions Secrets
allowTitleToDifferFromFilename: true
shortTitle: 密码
intro: 'The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the Secrets API

The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows. {% data reusables.actions.about-secrets %}更多信息请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} 必须具有`密码`权限才可使用此 API。 经过身份验证的用户必须对仓库具有协作者权限才可创建、更新或读取密码。
