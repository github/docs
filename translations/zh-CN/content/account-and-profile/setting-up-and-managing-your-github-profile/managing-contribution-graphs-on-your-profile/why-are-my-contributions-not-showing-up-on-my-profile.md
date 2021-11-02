---
title: 为什么我的贡献没有在我的个人资料中显示？
intro: Learn common reasons that contributions may be missing from your contributions graph.
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Missing contributions
---

## About your contribution graph

Your profile contributions graph is a record of contributions you've made to repositories {% ifversion ghae %}owned by{% else %}on{% endif %} {% data variables.product.product_location %}. 贡献按照协调世界时 (UTC) 而不是您当地的时区加时间戳。 只有在满足特定标准时才会计算贡献。 在某些情况下，我们可能需要重建您的图表才能显示贡献。

## 计算的贡献

### 议题、拉取请求和讨论

如果议题、拉取请求和讨论在独立的仓库而不是复刻中打开，它们将在您的贡献图中显示。

### 提交
如果提交符合以下**所有**条件，则会在您的贡献图中显示：
- The email address used for the commits is associated with your account on {% data variables.product.product_location %}.
- 提交在独立的仓库而不是复刻中进行。
- 提交在以下位置进行：
  - 在仓库的默认分支中
  - 在 `gh-pages` 分支中（对于包含项目站点的仓库）

有关项目网站的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

此外，必须**至少**满足以下条件之一：
- 您是仓库中的协作者，或者是拥有该仓库的组织的成员。
- 您已复刻该仓库。
- 您已打开仓库中的拉取请求或议题。
- 您已为仓库加星标。

## 贡献未计算的常见原因

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### 24 小时内进行的提交

进行满足计为贡献要求的提交后，您可能需要等待最长 24 小时才能看到在贡献图中显示的贡献。

### 您的本地 Git 提交电子邮件地址未连接到您的帐户

Commits must be made with an email address that is connected to your account on {% data variables.product.product_location %}{% ifversion fpt or ghec %}, or the {% data variables.product.prodname_dotcom %}-provided `noreply` email address provided to you in your email settings,{% endif %} in order to appear on your contributions graph.{% ifversion fpt or ghec %} For more information about `noreply` email addresses, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)."{% endif %}

您可以通过将 `.patch` 添加到提交 URL 结尾来检查用于提交的电子邮件地址，例如 <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>：

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

`From:` 字段中的电子邮件地址是在[本地 git 配置设置](/articles/set-up-git)中设置的地址。 在本例中，用于提交的电子邮件地址是 `octocat@nowhere.com`。

If the email address used for the commit is not connected to your account on {% data variables.product.product_location %}, {% ifversion ghae %}change the email address used to author commits in Git. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %}you must [add the email address](/articles/adding-an-email-address-to-your-github-account) to your account on {% data variables.product.product_location %}. 您的贡献图将在添加新地址后自动重建。{% endif %}

{% warning %}

**Warning**: Generic email addresses, such as `jane@computer.local`, cannot be added to {% data variables.product.prodname_dotcom %} accounts. If you use such an email for your commits, the commits will not be linked to your {% data variables.product.prodname_dotcom %} profile and will not show up in your contribution graph.

{% endwarning %}

### 提交没有在默认或 `gh-pages` 分支中进行

仅发生在默认分支或 `gh-pages` 分支（对于包含项目站点的仓库）中的提交才会计入。 更多信息请参阅“[关于 {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

如果您的提交位于非默认或非 `gh-pages` 分支中，并且您希望将其计入您的贡献，则需要执行以下操作之一：
- [打开拉取请求](/articles/creating-a-pull-request)以将您的更改合并到默认分支或 `gh-pages` 分支。
- [更改仓库的默认分支](/github/administering-a-repository/changing-the-default-branch)。

{% warning %}

**Warning**: Changing the default branch of the repository will change it for all repository collaborators. 仅当您希望新分支成为进行所有未来拉取请求和提交的基础时才执行此操作。

{% endwarning %}

### 提交在复刻中进行

在复刻中进行的提交不会计入您的贡献。 要将其计入，您必须执行以下操作之一：
- [打开拉取请求](/articles/creating-a-pull-request)以将您的更改合并到父仓库。
- To detach the fork and turn it into a standalone repository on {% data variables.product.product_location %}, contact {% data variables.contact.contact_support %}. If the fork has forks of its own, let {% data variables.contact.contact_support %} know if the forks should move with your repository into a new network or remain in the current network. 更多信息请参阅“[关于复刻](/articles/about-forks/)”。

## 延伸阅读

- "[在个人资料中公开或隐藏私有贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[在个人资料页面中查看贡献](/articles/viewing-contributions-on-your-profile-page)"
