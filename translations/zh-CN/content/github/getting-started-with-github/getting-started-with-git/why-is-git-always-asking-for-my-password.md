---
title: 为什么 Git 总是询问我的密码？
intro: 如果 Git 在您每次尝试与 GitHub 交互时均提示输入用户名和密码，则您可能为仓库使用的是 HTTPS 克隆 URL。
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
与使用 SSH 相比，使用 HTTPS 远程 URL 具有一些优势。 它比 SSH 更容易设置，通常通过严格的防火墙和代理进行工作。 但是，每次拉取或推送仓库时，它也会提示您输入 {% data variables.product.product_name %} 凭据。

{% data reusables.user_settings.password-authentication-deprecation %}

通过配置 Git 为您[缓存凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git)，您可以避免提示输入密码。 在配置凭据缓存后，当您使用 HTTPS 拉取或推送仓库时，Git 会自动使用缓存的个人访问令牌。

### 延伸阅读

- “[关于远程仓库](/github/getting-started-with-github/about-remote-repositories)”。
- “[关于 {% data variables.product.prodname_dotcom %} 向验证身份](/github/authenticating-to-github/about-authentication-to-github)”
- “[添加 SSH 密钥到 ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)”
