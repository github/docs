---
title: 为什么 Git 总是询问我的密码？
intro: 如果 Git 在您每次尝试与 GitHub 交互时均提示输入用户名和密码，则您可能为仓库使用的是 HTTPS 克隆 URL。
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git passwords
ms.openlocfilehash: 06a8cf617072075f39a880ec58173e7cfbc5bc8a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128975'
---
与使用 SSH 相比，使用 HTTPS 远程 URL 具有一些优势。 它比 SSH 更容易设置，通常通过严格的防火墙和代理进行工作。 但是，每次拉取或推送仓库时，它也会提示您输入 {% data variables.product.product_name %} 凭据。 

{% data reusables.user-settings.password-authentication-deprecation %}

可以通过将 Git 配置为用于[缓存凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git)来避免系统提示输入密码。 在配置凭据缓存后，当您使用 HTTPS 拉取或推送仓库时，Git 会自动使用缓存的个人访问令牌。

## 延伸阅读

- “[关于远程存储库](/github/getting-started-with-github/about-remote-repositories)”。
- “[关于向 {% data variables.product.prodname_dotcom %} 进行身份验证](/github/authenticating-to-github/about-authentication-to-github)”
- “[将 SSH 密钥添加到 ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)”
