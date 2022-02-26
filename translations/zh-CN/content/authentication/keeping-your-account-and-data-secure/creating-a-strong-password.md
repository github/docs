---
title: 创建强密码
intro: 'Secure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} with a strong and unique password using a password manager.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: 创建强密码
---

You must choose or generate a password for your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} that is at least:
- {% ifversion ghes %}七{% else %}八{% endif %}个字符且包含数字和小写字母，或
- 至少 15 个字符，任意字符组合

为确保您的帐户安全，我们建议您遵循以下最佳实践：
- 使用 [LastPass](https://lastpass.com/) 或 [1Password](https://1password.com/) 等密码管理器生成至少 15 个字符的密码。
- 为 {% data variables.product.product_name %} 生成唯一的密码。 If you use your {% data variables.product.product_name %} password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

- 为您的帐户配置双重身份验证。 更多信息请参阅“[关于双重身份验证](/articles/about-two-factor-authentication)”。
- 不与任何人分享您的密码，即使是潜在协作者。 在 {% data variables.product.product_name %} 上每个人都应使用自己的个人帐户。 有关协作方式的更多信息，请参阅：“[邀请协作者参与个人仓库](/articles/inviting-collaborators-to-a-personal-repository)”、“[关于协作开发模式](/articles/about-collaborative-development-models/)”或“[与组织中的团体协作](/organizations/collaborating-with-groups-in-organizations/)”。

{% data reusables.repositories.blocked-passwords %}

您只能使用密码通过浏览器登录 {% data variables.product.product_name %}。 使用其他方式（例如命令行或 API）向 {% data variables.product.product_name %} 验证时，应使用其他凭据。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 向验证身份](/github/authenticating-to-github/about-authentication-to-github)”。

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## 延伸阅读

- “[在 Git 中缓存您的 {% data variables.product.product_name %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git/)”
- “[保护帐户和数据安全](/articles/keeping-your-account-and-data-secure/)”
