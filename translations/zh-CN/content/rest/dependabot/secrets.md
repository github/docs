---
title: Dependabot 机密
shortTitle: 密码
intro: '使用 {% data variables.product.prodname_dependabot %} 机密 API，您可以管理和控制组织或存储库的 {% data variables.product.prodname_dependabot %} 机密。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

## 关于 {% data variables.product.prodname_dependabot %} 机密 API

{% data variables.product.prodname_dependabot %} 机密 API 允许您创建、更新、删除和检索有关加密密钥的信息。 {% data reusables.actions.about-secrets %}更多信息请参阅“[管理 Dependabot 的加密密码](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} 必须具有 `dependabot_secrets` 权限才可使用此 API。 经过身份验证的用户必须对仓库具有协作者权限才可创建、更新或读取密码。
