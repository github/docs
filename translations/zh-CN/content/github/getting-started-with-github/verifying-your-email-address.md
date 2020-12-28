---
title: 验证电子邮件地址
intro: '验证主电子邮件地址可确保增强的安全性，以便 {% data variables.product.prodname_dotcom %} 员工在您忘记密码时更好地协助您，并为您提供 {% data variables.product.prodname_dotcom %} 上更多功能的访问权限。'
redirect_from:
  - /articles/troubleshooting-email-verification/
  - /articles/setting-up-email-verification/
  - /articles/verifying-your-email-address
versions:
  free-pro-team: '*'
---

### 关于电子邮件通知

您可在注册新帐户后或添加新电子邮件地址时验证您的电子邮件地址。 如果电子邮件地址无法送达或退回，它将无法进行验证。

如果没有验证电子邮件地址，您将无法：
  - 创建或复刻仓库
  - 创建议题或拉取请求
  - 对议题、拉取请求或提交发表评论
  - 授权 {% data variables.product.prodname_oauth_app %} 应用程序
  - 生成个人访问令牌
  - 接收电子邮件通知
  - 对仓库加星标
  - 创建或更新项目板，包括添加卡片
  - 创建或更新 gist
  - 创建或使用 {% data variables.product.prodname_actions %}
  - 通过 {% data variables.product.prodname_sponsors %} 赞助开发者

{% warning %}

**警告**：

- {% data reusables.user_settings.no-verification-disposable-emails %}
- {% data reusables.user_settings.verify-org-approved-email-domain %}

{% endwarning %}

### 验证电子邮件地址

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
1. 在电子邮件地址下，单击 **Resend verification email（重新发送验证电子邮件）**。 ![重新发送验证电子邮件链接](/assets/images/help/settings/email-verify-button.png)
4. {% data variables.product.prodname_dotcom %} 将向您发送一封含有链接的电子邮件。 单击该链接后，您将转到 {% data variables.product.prodname_dotcom %} 仪表板并看到确认横幅。 ![确认电子邮件已验证的横幅](/assets/images/help/settings/email-verification-confirmation-banner.png)

### 电子邮件验证故障排除

#### 无法发送验证电子邮件

{% data reusables.user_settings.no-verification-disposable-emails %}

#### 单击验证链接后的错误页面

验证链接将在 24 小时后过期。 如果您没有在 24 小时内验证电子邮件，则可以请求其他电子邮件验证链接。 更多信息请参阅“[验证电子邮件地址](/articles/verifying-your-email-address)”。

如果您在 24 小时内单击了确认电子邮件中的链接并被定向到错误页面，则应确保您已登录正确的 {% data variables.product.prodname_dotcom %} 帐户。

1. {% data variables.product.signout_link %}您的个人 {% data variables.product.prodname_dotcom %} 帐户。
2. 退出并重新启动浏览器。
3. {% data variables.product.signin_link %}您的个人 {% data variables.product.prodname_dotcom %} 帐户。
4. 单击我们发送给您的电子邮件中的验证链接。

### 延伸阅读

- “[更改主电子邮件地址](/articles/changing-your-primary-email-address)”
