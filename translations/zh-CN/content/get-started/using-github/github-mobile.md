---
title: GitHub Mobile
intro: '从移动设备对 {% data variables.product.product_name %} 上的工作进行分类、协作和管理。'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Mobile
redirect_from:
  - /get-started/using-github/github-for-mobile
  - /github/getting-started-with-github/github-for-mobile
  - /github/getting-started-with-github/using-github/github-for-mobile
ms.openlocfilehash: a9af0848fdc26c5efd3dfb2d00076e3af5fb00bc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147508446'
---
## 关于 {% data variables.product.prodname_mobile %}

{% data reusables.mobile.about-mobile %}

{% data variables.product.prodname_mobile %} 让你可以随时随地快速高效地在 {% data variables.product.product_name %} 上执行重要工作。 {% data variables.product.prodname_mobile %} 通过可信的第一方客户端应用程序可以安全可靠地访问 {% data variables.product.product_name %} 数据。

通过 {% data variables.product.prodname_mobile %}，您可以：

- 管理、分类和清除通知
- 阅读、审查及协作处理问题和拉取请求
- 搜索、浏览用户、仓库和组织以及与之交互
- 当有人提到用户名时收到推送通知 {% ifversion fpt or ghec %}- 使用双因素身份验证保护 GitHub.com 帐户
- 在无法识别的设备上验证登录尝试{% endif %}

有关 {% data variables.product.prodname_mobile %} 的通知的详细信息，请参阅“[配置通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)”。

{% ifversion fpt or ghec %}- 有关使用 {% data variables.product.prodname_mobile %} 进行双因素身份验证的详细信息，请参阅“[配置 {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile) 和[使用 {% data variables.product.prodname_mobile %} 进行身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication##verifying-with-github-mobile)”。 {% endif %}

## 安装 {% data variables.product.prodname_mobile %}

若要为 Android 或 iOS 安装 {% data variables.product.prodname_mobile %}，请参阅 [{% data variables.product.prodname_mobile %}](https://github.com/mobile)。

## 管理帐户

可以使用 {% data variables.product.prodname_dotcom_the_website %} 上的一个个人帐户和 {% data variables.product.prodname_ghe_server %} 上的一个个人帐户同时登录到移动设备。 有关不同产品的详细信息，请参阅“[{% data variables.product.company_short %} 的产品](/get-started/learning-about-github/githubs-products)”。

{% data reusables.mobile.push-notifications-on-ghes %}

如果您需要通过 VPN 访问企业，{% data variables.product.prodname_mobile %} 可能不适用于您的企业。

### 先决条件

您必须在设备上安装 {% data variables.product.prodname_mobile %} 1.4 或更高版本，才能使用 {% data variables.product.prodname_mobile %} with {% data variables.product.prodname_ghe_server %}。

要同时使用 {% data variables.product.prodname_mobile %} 与 {% data variables.product.prodname_ghe_server %}，{% data variables.product.product_location %} 必须为 3.0 或更高版本，并且企业所有者必须为企业启用移动版支持。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_server %} 文档中的 {% ifversion ghes %}“[发行说明](/enterprise-server/admin/release-notes)”和{% endif %}“[为企业管理 {% data variables.product.prodname_mobile %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-your-enterprise/managing-github-mobile-for-your-enterprise){% ifversion not ghes %}”。{% else %}。{% endif %}

在具有 {% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_mobile %} beta 版本期间，必须使用 {% data variables.product.prodname_dotcom_the_website %} 上的个人帐户登录。

### 添加、切换或登出账户

可以使用 {% data variables.product.prodname_ghe_server %} 上的个人帐户登录到移动设备。 在应用的底部，长按 {% octicon "person" aria-label="The person icon" %}“个人资料”，然后点击 {% octicon "plus" aria-label="The plus icon" %}“添加企业帐户” 。 按提示登录。

在 {% data variables.product.prodname_ghe_server %} 上使用个人帐户登录移动设备后，就可以在帐户和 {% data variables.product.prodname_dotcom_the_website %} 上的帐户之间进行切换。 在应用的底部，长按 {% octicon "person" aria-label="The person icon" %}“个人资料”，然后点击要切换到的帐户。

如果不再需要从 {% data variables.product.prodname_mobile %} 访问 {% data variables.product.prodname_ghe_server %} 上的个人帐户数据，则可以退出登录该帐户。 在应用底部，长按 {% octicon "person" aria-label="The person icon" %}“个人资料”，向左滑动要退出的帐户，然后点击“退出” 。

## {% data variables.product.prodname_mobile %} 支持的语言

{% data variables.product.prodname_mobile %} 支持以下语言。

- 英语
- 日语
- 巴西葡萄牙语
- 简体中文
- 西班牙语

如果将设备上的语言配置为受支持的语言，则 {% data variables.product.prodname_mobile %} 默认为该语言。 你可以在 {% data variables.product.prodname_mobile %} 的“设置”菜单中更改 {% data variables.product.prodname_mobile %} 的语言。

## 管理 iOS 上 {% data variables.product.prodname_mobile %} 的通用链接

{% data variables.product.prodname_mobile %} 自动启用 iOS 的通用链接。 当您点击任何 {% data variables.product.product_name %} 链接时，目标 URL 都会在 {% data variables.product.prodname_mobile %} 中打开，而不是在 Safari 中打开。 有关详细信息，请参阅 Apple 开发人员网站上的[通用链接](https://developer.apple.com/ios/universal-links/)。

若要禁用通用链接，请长按任何 {% data variables.product.product_name %} 链接，然后点击“打开”。 以后每次点击 {% data variables.product.product_name %} 链接时，目标 URL 将在 Safari 中打开，而不是在 {% data variables.product.prodname_mobile %} 中打开。

若要重新启用通用链接，请长按任意 {% data variables.product.product_name %} 链接，然后点击“在 {% data variables.product.prodname_dotcom %} 中打开”。

## 分享反馈

可以在 [{% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/mobile) 上为 {% data variables.product.prodname_mobile %} 提交功能请求或其他反馈。

## 选择退出 iOS 的测试版

如果您正在使用 TestFlight 参加 iOS 版 {% data variables.product.prodname_mobile %} 的测试，可以随时退出。

1. 在 iOS 设备上，打开 TestFlight app。
2. 在“应用”下，点击 {% data variables.product.prodname_dotcom %}。
3. 在页面底部，点击“停止测试”。
