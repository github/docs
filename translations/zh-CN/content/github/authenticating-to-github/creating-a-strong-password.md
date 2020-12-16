---
title: 创建强密码
intro: '使用密码管理器创建强大而独特的密码，保护您的 {% data variables.product.product_name %} 帐户。'
redirect_from:
  - /articles/what-is-a-strong-password/
  - /articles/creating-a-strong-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您必须为 {% data variables.product.product_name %} 帐户选择或生成密码，密码至少应满足以下条件：
- 至少 8 个字符，包含数字和小写字母；或者
- 至少 16 个字符，任意字符组合

为确保您的帐户安全，我们建议您遵循以下最佳实践：
- 使用 [LastPass](https://lastpass.com/) 或 [1Password](https://1password.com/) 等密码管理器生成超过 16 个字符的密码。
- 为 {% data variables.product.product_name %} 生成唯一的密码。 如果您在别处使用 {% data variables.product.product_name %} 密码，并且该服务遭到入侵，则攻击者或其他恶意行为者可能使用该信息访问您的 {% data variables.product.product_name %} 帐户。
- 为您的帐户配置双重身份验证。 更多信息请参阅“[关于双重身份验证](/articles/about-two-factor-authentication)”。
- 不与任何人分享您的密码，即使是潜在协作者。 在 {% data variables.product.product_name %} 上每个人都应使用自己的个人帐户。 有关协作方式的更多信息，请参阅：“[邀请协作者参与个人仓库](/articles/inviting-collaborators-to-a-personal-repository)”、“[关于协作开发模式](/articles/about-collaborative-development-models/)”或“[与组织中的团体协作](/articles/collaborating-with-groups-in-organizations/)”。

{% data reusables.repositories.blocked-passwords %}

您只能使用密码通过浏览器登录 {% data variables.product.product_name %}。 使用其他方式（例如命令行或 API）向 {% data variables.product.product_name %} 验证时，应使用其他凭据。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 向验证身份](/github/authenticating-to-github/about-authentication-to-github)”。

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.password-authentication-deprecation %}{% endif %}

### 延伸阅读

- “[在 Git 中缓存您的 {% data variables.product.product_name %} 凭据](/github/using-git/caching-your-github-credentials-in-git/)”
- “[保护帐户和数据安全](/articles/keeping-your-account-and-data-secure/)”
