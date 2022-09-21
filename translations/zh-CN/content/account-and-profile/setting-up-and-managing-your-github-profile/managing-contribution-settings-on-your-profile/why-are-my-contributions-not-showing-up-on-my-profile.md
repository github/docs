---
title: 为什么我的贡献没有在我的个人资料中显示？
intro: 了解贡献图表中可能缺少贡献的常见原因。
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Missing contributions
ms.openlocfilehash: c1f4c9481a5e3ac9328b353ced826c982e1160e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079520'
---
## 关于您的贡献图

您的个人资料贡献图是您参与{% data variables.product.product_location %}{% ifversion ghae %}拥有{% else %}上{% endif %} 的存储库的记录。 贡献按照协调世界时 (UTC) 而不是您当地的时区加时间戳。 只有在满足特定标准时才会计算贡献。 在某些情况下，我们可能需要重建您的图表才能显示贡献。

如果您是使用 SAML 单点登录 (SSO) 的组织的成员，则在没有活动的 SSO 会话时，您将无法在配置文件上看到来自该组织的贡献活动。 从组织外部查看您个人资料的用户将看到您组织的贡献活动的匿名贡献活动。

## 计算的贡献

### 议题、拉取请求和讨论

如果议题、拉取请求和讨论在独立的仓库而不是复刻中打开，它们将在您的贡献图中显示。

### 提交
如果提交符合以下所有条件，则会在贡献图中显示：
- 用于提交的电子邮件地址与您在 {% data variables.product.product_location %} 上的帐户关联。
- 提交在独立的仓库而不是复刻中进行。
- 提交在以下位置进行：
  - 在仓库的默认分支中
  - 在 `gh-pages` 分支（对于具有项目网站的存储库）中

有关项目网站的详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

此外，以下至少一项必须为 true：
- 您是仓库中的协作者，或者是拥有该仓库的组织的成员。
- 您已复刻该仓库。
- 您已打开仓库中的拉取请求或议题。
- 您已为仓库加星标。

## 贡献未计算的常见原因

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### 24 小时内进行的提交

进行满足计为贡献要求的提交后，您可能需要等待最长 24 小时才能看到在贡献图中显示的贡献。

### 您的本地 Git 提交电子邮件地址未连接到您的帐户

提交必须使用与你在 {% data variables.product.product_location %}{% ifversion fpt or ghec %} 上的帐户连接的电子邮件地址进行，或者使用在电子邮件设置中提供给你的 {% data variables.product.prodname_dotcom %} 提供的 `noreply` 电子邮件地址进行，{% endif %}才能显示在你的贡献图上。{% ifversion fpt or ghec %} 有关 `noreply` 电子邮件地址的详细信息，请参阅“[设置提交电子邮件地址](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)”。{% endif %}

可以通过将 `.patch` 添加到提交 URL 的末尾（例如 <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>）来检查用于提交的电子邮件地址：

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

`From:` 字段中的电子邮件地址是在[本地 git 配置设置](/articles/set-up-git)中设置的地址。 在此示例中，用于提交的电子邮件地址为 `octocat@nowhere.com`。

如果用于提交的电子邮件地址未连接到您的 {% data variables.product.product_location %} 帐户，{% ifversion ghae %}请更改用于在 Git 中创作提交的电子邮件地址。 有关详细信息，请参阅“[设置提交电子邮件地址](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)”。{% else %}必须[将电子邮件地址添加](/articles/adding-an-email-address-to-your-github-account)到 {% data variables.product.product_location %} 上的帐户。 您的贡献图将在添加新地址后自动重建。{% endif %}

{% warning %}

警告：通用电子邮件地址（如 `jane@computer.local`）无法添加到 {% data variables.product.prodname_dotcom %} 帐户。 如果为您的提交使用这类电子邮件，则提交不会链接到您的 {% data variables.product.prodname_dotcom %} 个人资料，并且不会在您的贡献图中显示。

{% endwarning %}

### 未在默认分支或 `gh-pages` 分支中执行提交

仅发生在默认分支或 `gh-pages` 分支（对于包含项目网站的存储库）中的提交才会计入。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

如果提交位于非默认或非 `gh-pages` 分支中，并且你希望将其计入你的贡献，则需要执行以下操作之一：
- [打开拉取请求](/articles/creating-a-pull-request)，将更改合并到默认分支或 `gh-pages` 分支中。
- [更改存储库的默认分支](/github/administering-a-repository/changing-the-default-branch)。

{% warning %}

警告：更改存储库的默认分支将会更改所有存储库协作者的默认分支。 仅当您希望新分支成为进行所有未来拉取请求和提交的基础时才执行此操作。

{% endwarning %}

### 提交在复刻中进行

在复刻中进行的提交不会计入您的贡献。 要将其计入，您必须执行以下操作之一：
- [打开拉取请求](/articles/creating-a-pull-request)，将更改合并到父存储库中。
- 要分离复刻并将其变为 {% data variables.product.product_location %} 上独立的仓库，请联系 {% data variables.contact.contact_support %}。 如果该复刻有自己的复刻，让 {% data variables.contact.contact_support %} 了解这些复刻是随您的仓库移入新网络还是留在当前网络中。 有关详细信息，请参阅“[关于分支](/articles/about-forks/)”。

## 延伸阅读

- [在个人资料中公开或隐藏你的私人贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [在个人资料页中查看贡献](/articles/viewing-contributions-on-your-profile-page)
