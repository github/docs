---
title: 为什么我的贡献没有在我的个人资料中显示？
intro: '您的个人资料贡献图是您对 {% data variables.product.product_name %} 仓库所做贡献的记录。 贡献按照协调世界时 (UTC) 而不是您当地的时区加时间戳。 只有在满足特定标准时才会计算贡献。 在某些情况下，我们可能需要重建您的图表才能显示贡献。'
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 计算的贡献

#### 议题和拉取请求

如果议题和拉取请求在独立的仓库而不是复刻中打开，它们将在您的贡献图中显示。

#### 提交
如果提交符合以下**所有**条件，则会在您的贡献图中显示：
- 用于提交的电子邮件地址与您的 {% data variables.product.product_name %} 帐户关联。
- 提交在独立的仓库而不是复刻中进行。
- 提交在以下位置进行：
  - In the repository's default branch
  - 在 `gh-pages` 分支中（对于包含项目站点的仓库）

有关项目网站的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)”。

此外，必须**至少**满足以下条件之一：
- 您是仓库中的协作者，或者是拥有该仓库的组织的成员。
- 您已复刻该仓库。
- 您已打开仓库中的拉取请求或议题。
- 您已为仓库加星标。
{% if currentVersion != "free-pro-team@latest" %}
### 贡献未计算的常见原因

{% data reusables.pull_requests.pull_request_merges_and_contributions %}{% endif %}

#### 24 小时内进行的提交

进行满足计为贡献要求的提交后，您可能需要等待最长 24 小时才能看到在贡献图中显示的贡献。

#### 您尚未将本地 Git 提交电子邮件添加到个人资料

Commits must be made with an email address that has been added to your {% data variables.product.product_name %} account{% if currentVersion == "free-pro-team@latest" %}, or the {% data variables.product.product_name %}-provided `noreply` email address provided to you in your email settings,{% endif %} in order to appear on your contributions graph.{% if currentVersion == "free-pro-team@latest" %} For more information about `noreply` email addresses, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)."{% endif %}

You can check the email address used for a commit by adding `.patch` to the end of a commit URL, e.g. <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] updated index for better welcome message
```

`From:` 字段中的电子邮件地址是在[本地 git 配置设置](/articles/set-up-git)中设置的地址。 在本例中，用于提交的电子邮件地址是 `octocat@nowhere.com`。

如果用于提交的电子邮件地址尚未添加到 {% data variables.product.product_name %} 个人资料，您必须[添加电子邮件地址](/articles/adding-an-email-address-to-your-github-account)到 {% data variables.product.product_name %} 帐户。 您的贡献图将在添加新地址后自动重建。

{% warning %}

通用电子邮件地址（例如 `jane@computer.local`）无法添加到 {% data variables.product.product_name %} 帐户。 如果为您的提交使用这类电子邮件，则提交不会链接到您的 {% data variables.product.product_name %} 个人资料，并且不会在您的贡献图中显示。

{% endwarning %}

#### 提交没有在默认或 `gh-pages` 分支中进行

Commits are only counted if they are made in the default branch or the `gh-pages` branch (for repositories with project sites). For more information, see "[About {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)."

如果您的提交位于非默认或非 `gh-pages` 分支中，并且您希望将其计入您的贡献，则需要执行以下操作之一：
- [打开拉取请求](/articles/creating-a-pull-request)以将您的更改合并到默认分支或 `gh-pages` 分支。
- [更改仓库的默认分支](/articles/setting-the-default-branch)。

{% warning %}

更改仓库的默认分支将为所有仓库协作者进行更改。 仅当您希望新分支成为进行所有未来拉取请求和提交的基础时才执行此操作。

{% endwarning %}

#### 提交在复刻中进行

在复刻中进行的提交不会计入您的贡献。 要将其计入，您必须执行以下操作之一：
- [打开拉取请求](/articles/creating-a-pull-request)以将您的更改合并到父仓库。
- 要分离复刻并将其变为 {% data variables.product.product_name %} 上独立的仓库，请联系 {% data variables.contact.contact_support %}。 如果该复刻有自己的复刻，让 {% data variables.contact.github_support %} 了解这些复刻是随您的仓库移入新网络还是留在当前网络中。 更多信息请参阅“[关于复刻](/articles/about-forks/)”。

### 延伸阅读

- "[在个人资料中公开或隐藏私有贡献](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[在个人资料页面中查看贡献](/articles/viewing-contributions-on-your-profile-page)"
