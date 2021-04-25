---
title: 防止未授权的访问
intro: '在登录 {% data variables.product.product_location %} 时，您可能会收到媒体中安全事件的警报，如发现 [Heartbleed 漏洞](http://heartbleed.com/)或计算机被盗。 在这种情况下，更改密码可防止后面对您的帐户和项目的任何非预期访问。'
redirect_from:
  - /articles/preventing-unauthorized-access
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 身份
  - 访问管理
---

{% data variables.product.product_name %} 需要密码来执行敏感的操作，如新增 SSH 密钥、授权应用程序或修改团队成员。

在更改密码后，应执行以下操作，以确保您的帐户安全：

- 对您的帐户[启用双重身份验证](/articles/about-two-factor-authentication)，访问时不只需要输入密码。
- [检查您的 SSH 密钥](/articles/reviewing-your-ssh-keys)、[部署密钥](/articles/reviewing-your-deploy-keys)和[授权的集成](/articles/reviewing-your-authorized-integrations)，并且在 SSH 和应用程序设置中撤销未授权或不熟悉的访问权限。
{% if currentVersion == "free-pro-team@latest" %}
- [验证所有电子邮件地址](/articles/verifying-your-email-address)。 如果攻击者在您的帐户中添加了他们的电子邮件地址，他们可能实施非预期的密码重置。
{% endif %}
- [检查帐户的安全日志](/github/authenticating-to-github/reviewing-your-security-log)。 其中概述了您的仓库的各种配置。 例如，您可以确保没有私有仓库改为公共，或没有仓库被转让。
- 在仓库中[检查 web 挂钩](/articles/creating-webhooks)。 Web 挂钩可能允许攻击者拦截到仓库的推送。
- [确保没有新的部署密钥](/guides/managing-deploy-keys/#deploy-keys)被创建。 这可能允许外部服务器访问您的项目。
- 检查最近对仓库的提交。
- 检查每个仓库的协作者列表。
