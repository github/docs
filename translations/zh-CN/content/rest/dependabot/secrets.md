---
title: Dependabot secrets
shortTitle: 密码
intro: 'With the {% data variables.product.prodname_dependabot %} secrets API, you can manage and control {% data variables.product.prodname_dependabot %} secrets for an organization or repository.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

## About the {% data variables.product.prodname_dependabot %} secrets API

The {% data variables.product.prodname_dependabot %} secrets API lets you create, update, delete, and retrieve information about encrypted secrets. {% data reusables.actions.about-secrets %} For more information, see "[Managing encrypted secrets for Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `dependabot_secrets` permission to use this API. 经过身份验证的用户必须对仓库具有协作者权限才可创建、更新或读取密码。
