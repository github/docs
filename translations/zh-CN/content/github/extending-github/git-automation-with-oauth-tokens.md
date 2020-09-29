---
title: 使用 OAuth 令牌实施 Git 自动化
redirect_from:
  - /articles/git-over-https-using-oauth-token/
  - /articles/git-over-http-using-oauth-token/
  - /articles/git-automation-with-oauth-tokens
intro: '你可以使用 OAuth 令牌通过自动化脚本与 {% data variables.product.product_name %} 交互。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 第 1 步：获取 OAuth 令牌

在应用程序设置页面上创建个人访问令牌。 更多信息请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

{% tip %}

{% if currentVersion == "free-pro-team@latest" %}
**提示：**
- You must verify your email address before you can create a personal access token. 更多信息请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”。
- {% data reusables.user_settings.review_oauth_tokens_tip %}
{% else %}
**提示：**{% data reusables.user_settings.review_oauth_tokens_tip %}
{% endif %}

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### 第 2 步：克隆仓库

{% data reusables.command_line.providing-token-as-password %}

To avoid these prompts, you can use Git password caching. 有关信息请参阅“[在 Git 中缓存 GitHub 凭据](/github/using-git/caching-your-github-credentials-in-git)”。

{% warning %}

**警告**：令牌具有读取/写入权限，应该被视为密码。 如果您在克隆或添加远程仓库时将令牌输入克隆 URL，Git 会以纯文本格式将其写入 _.git/config_ 文件，这存在安全风险。

{% endwarning %}

### 延伸阅读

- "[授权 OAuth 应用程序](/v3/oauth/)"
