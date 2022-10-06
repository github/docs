---
title: 防止未授权的访问
intro: '在登录 {% data variables.product.product_location %} 时，你可能会收到媒体中安全事件的警报，如发现 [Heartbleed bug](http://heartbleed.com/) 或计算机被盗。 在这种情况下，更改密码可防止后面对您的帐户和项目的任何非预期访问。'
redirect_from:
  - /articles/preventing-unauthorized-access
  - /github/authenticating-to-github/preventing-unauthorized-access
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/preventing-unauthorized-access
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Unauthorized access
ms.openlocfilehash: 2b7a29ad3df05ef758c82330f24fe7568e137130
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084651'
---
{% data variables.product.product_name %} 需要密码来执行敏感的操作，如新增 SSH 密钥、授权应用程序或修改团队成员。

在更改密码后，应执行以下操作，以确保您的帐户安全：

- 在帐户上[启用双因素身份验证](/articles/about-two-factor-authentication)，以便访问时不止需要提供密码。
- [查看 SSH 密钥](/articles/reviewing-your-ssh-keys)、[部署密钥](/articles/reviewing-your-deploy-keys)和[授权集成](/articles/reviewing-your-authorized-integrations)，并在 SSH 和应用程序设置中撤销未经授权的或不熟悉的访问权限。
{% ifversion fpt or ghec %}
- [验证所有电子邮件地址](/articles/verifying-your-email-address)。 如果攻击者在您的帐户中添加了他们的电子邮件地址，他们可能实施非预期的密码重置。
{% endif %}
- [查看帐户的安全日志](/github/authenticating-to-github/reviewing-your-security-log)。 其中概述了您的仓库的各种配置。 例如，您可以确保没有私有仓库改为公共，或没有仓库被转让。
- 查看存储库上的 [Webhook](/articles/creating-webhooks)。 Web 挂钩可能允许攻击者拦截到仓库的推送。
- [确保未创建新的部署密钥](/guides/managing-deploy-keys/#deploy-keys)。 这可能允许外部服务器访问您的项目。
- 检查最近对仓库的提交。
- 检查每个仓库的协作者列表。
