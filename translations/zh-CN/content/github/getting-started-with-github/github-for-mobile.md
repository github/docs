---
title: 手机版 GitHub
intro: '从移动设备对 {% data variables.product.product_name %} 上的工作进行分类、协作和管理。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - Mobile
---

{% data reusables.mobile.ghes-release-phase %}

### 关于 {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} 为您提供随时随地快速高效使用 {% data variables.product.product_name %} 的方式。 {% data variables.product.prodname_mobile %} 是通过可信的第一方客户端应用程序访问 {% data variables.product.product_name %} 数据的安全可靠方式。

通过 {% data variables.product.prodname_mobile %}，您可以：
- 管理、分类和清除通知
- 阅读、审查及协作处理问题和拉取请求
- 搜索、浏览用户、仓库和组织以及与之交互
- 当有人提及您的用户名时收到推送通知

有关 {% data variables.product.prodname_mobile %} 通知的更多信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-for-mobile)”。

### 安装 {% data variables.product.prodname_mobile %}

要安装 Android 或 iOS 版 {% data variables.product.prodname_mobile %}，请参阅 [{% data variables.product.prodname_mobile %}](https://github.com/mobile)。

### 管理帐户

您可以使用 {% data variables.product.prodname_dotcom_the_website %} 上的一个用户帐户和 {% data variables.product.prodname_ghe_server %} 上的一个用户帐户同时登录移动版。

{% data reusables.mobile.push-notifications-on-ghes %}

如果您需要通过 VPN 访问企业，{% data variables.product.prodname_mobile %} 可能不适用于您的企业。

#### 基本要求

您必须在设备上安装 {% data variables.product.prodname_mobile %} 1.4 或更高版本，才能使用 {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}。

要使用 {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}，{% data variables.product.product_location %} 必须为 3.0 或更高版本，并且企业所有者必须为企业启用移动版支持。 For more information, see {% if enterpriseServerVersions contains currentVersion %}"[Release notes](/enterprise-server/admin/release-notes)" and {% endif %}"[Managing {% data variables.product.prodname_mobile %} for your enterprise](/admin/configuration/managing-github-for-mobile-for-your-enterprise)."

在 {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %} 测试期间，您必须使用 {% data variables.product.prodname_dotcom_the_website %} 上的用户帐户登录。

#### 添加、切换或登出账户

您可以使用 {% data variables.product.product_location %} 上的帐户登录移动版。 在应用程序的底部，长按 {% octicon "person" aria-label="The person icon" %} **Profile（个人资料）**，然后点击 {% octicon "plus" aria-label="The plus icon" %} **Add Enterprise Account（添加企业帐户）**。 按照提示登录。

使用 {% data variables.product.product_location %} 上的帐户登录移动版后，您可以在该帐户与 {% data variables.product.prodname_dotcom_the_website %} 帐户之间切换。  在应用程序的底部，长按 {% octicon "person" aria-label="The person icon" %} **Profile（个人资料）**，然后点击要切换到的帐户。

如果您不再需要从 {% data variables.product.prodname_mobile %} 访问 {% data variables.product.product_location %} 帐户的数据，您可以登出帐户。 在应用程序的底部，长按 {% octicon "person" aria-label="The person icon" %} **Profile（个人资料）**，向左滑动要登出的帐户，然后点击 **Sign out（登出）**。

### {% data variables.product.prodname_mobile %} 支持的语言

{% data variables.product.prodname_mobile %} 支持以下语言。

- 英语
- 日语
- 巴西葡萄牙语
- 简体中文
- 西班牙语

如果将设备上的语言配置为受支持的语言，则 {% data variables.product.prodname_mobile %} 默认为该语言。 您可以在 {% data variables.product.prodname_mobile %} 的 **Settings（设置）**菜单中更改 {% data variables.product.prodname_mobile %} 的语言。

### 管理 iOS 上 {% data variables.product.prodname_mobile %} 的通用链接

{% data variables.product.prodname_mobile %} 自动启用 iOS 的通用链接。 当您点击任何 {% data variables.product.product_name %} 链接时，目标 URL 都会在 {% data variables.product.prodname_mobile %} 中打开，而不是在 Safari 中打开。 更多信息请参阅 Apple Developer 网站上的[通用链接](https://developer.apple.com/ios/universal-links/)。

要禁用通用链接，长按任意 {% data variables.product.product_name %} 链接，然后点击 **Open（打开）**。 以后每次点击 {% data variables.product.product_name %} 链接时，目标地址将在 Safari 中打开，而不是在 {% data variables.product.prodname_mobile %} 中打开。

要重新启用通用链接，长按任意 {% data variables.product.product_name %} 链接，然后点击 **Open in {% data variables.product.prodname_dotcom %}（在 GitHub 中打开）**。

### 分享反馈

如果您发现 {% data variables.product.prodname_mobile %} 中的漏洞，可以发送电子邮件到 <a href="mailto:mobilefeedback@github.com">mobilefeedback@github.com</a> 联系我们。

您可以在 [GitHub Discussions](https://github.com/github/feedback/discussions?discussions_q=category%3A%22Mobile+Feedback%22) 上提交对 {% data variables.product.prodname_mobile %} 的功能要求或其他反馈。

### 选择退出 iOS 的测试版

如果您正在使用 TestFlight 参加 iOS 版 {% data variables.product.prodname_mobile %} 的测试，可以随时退出。

1. 在 iOS 设备上，打开 TestFlight app。
2. 在 "Apps" 下，点击 **{% data variables.product.prodname_dotcom %}**。
3. 在页面底部，点击 **Stop Testing（停止测试）**。
