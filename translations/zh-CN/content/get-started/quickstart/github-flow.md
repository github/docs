---
title: GitHub flow
intro: '按照 {% data variables.product.prodname_dotcom %} flow 进行项目协作。'
redirect_from:
- /articles/creating-and-editing-files-in-your-repository
- /articles/github-flow-in-the-browser
- /articles/github-flow
- /github/collaborating-with-issues-and-pull-requests/github-flow
- /github/getting-started-with-github/github-flow
- /github/getting-started-with-github/quickstart/github-flow
  versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
  topics:
- Pull requests
- Fundamentals
  miniTocMaxHeadingLevel: 3
---
## 简介

{% data variables.product.prodname_dotcom %} flow 是一个轻量级的、基于分支的工作流。github flow 对每个人都有用，而不仅仅是开发人员。例如在 {% data variables.product.prodname_dotcom %} 中，我们使用 {% data variables.product.prodname_dotcom %} flow 应用到我们的 [站点策略](https://github.com/github/site-policy) ， [文档](https://github.com/github/docs) 和 [路线图](https://github.com/github/roadmap) 之中。

## 先决条件

要遵循 {% data variables.product.prodname_dotcom %} flow，您需要一个 {% data variables.product.prodname_dotcom %} 账户和一个仓库。有关如何创建账户的信息，请参考 "[注册 {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)"。 有关如何创建仓库的信息，请参考 "[创建仓库](/github/getting-started-with-github/create-a-repo)"，{% ifversion fpt or ghec %} 有关如何查找要贡献的已经存在的仓库，请参考 "[在 {% data variables.product.prodname_dotcom %} 上寻找贡献开源的方法](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)"。{% endif %}

## 遵循 {% data variables.product.prodname_dotcom %} flow

{% tip %}

{% ifversion fpt or ghec %}
**提示：** 您可以通过 {% data variables.product.prodname_dotcom %} web接口，命令行和[{% data variables.product.prodname_cli %}](https://cli.github.com) ，以及 [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop) 来完成所有 {% data variables.product.prodname_dotcom %} flow 步骤。
{% else %}
**提示：** 您可以通过 {% data variables.product.prodname_dotcom %} web接口，或者命令行和[{% data variables.product.prodname_cli %}](https://cli.github.com) 来完成所有 {% data variables.product.prodname_dotcom %} flow 步骤。
{% endif %}

{% endtip %}

### 创建分支

在您的仓库中创建一个分支。简短的描述性的分支名称能够让您的协作者能够一目了然地查看正在进行的工作。例如，`increase-test-timeout` 或者 `add-code-of-conduct`。更多信息请参考 "[在您的仓库中创建和删除分支](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)"。

通过创建分支，您创建了一个不会影响默认分支的工作空间。此外，您还让协作者有机会评审您的内容。

### 变更

在您的分支上，对仓库进行任何所需的更改。更多信息请参考 "[创建新文件](/articles/creating-new-files)"，"[编辑文件](/articles/editing-files)"，"[重命名文件](/articles/renaming-a-file)"，"[移动文件到新位置](/articles/moving-a-file-to-a-new-location)"，或者 "[在仓库中删除文件](/github/managing-files-in-a-repository/deleting-files-in-a-repository)"。

您的分支是进行更改的安全场所。如果您犯了一个错误，您可以还原更改或推送其他更改以修复错误。在合并分支之前，您的更改不会在默认分支上生效。

提交您的更改并将其推送到您的分支。为每个提交提供描述性信息，以帮助您和未来的贡献者了解提交所包含的更改. 例如， `fix typo` 或者 `increase rate limit`。

理想情况下，每个提交都包含一个独立的、完整的更改。如果您决定采用不同的方法，这样可以很容易地恢复您的更改。例如 如果您想要重命名一个变量并且添加一些测试，请将变量重命名放在一个提交中，测试放在另一个提交中。以后如果您想保留测试但恢复变量重命名，您可以还原包含变量重命名的特定提交。如果您将变量重命名和测试放在同一个提交中，或者将变量重命名分布在多个提交中，您会花费更多的精力来恢复您的更改。

通过提交和推送您的更改，您的内容会备份到远程存储。这意味着您可以从任何设备访问您的内容。这也意味着您的协作者可以查看您的内容、回答问题并提出建议或贡献。

继续创建、提交和推送变更到您的分支，直到您准备好接受反馈。

{% tip %}

**提示:** 为每组不相关的更改创建一个单独的分支。这样会使评审的人更容易的提供反馈。它还能够让您以及未来的协作者更容易理解变更并且可以恢复或构建它们。此外，如果一组更改出现延迟，您的其他更改不会延迟。

{% endtip %}

### 创建拉取请求

创建一个拉取请求，要求协作者对您的更改提供反馈。拉取请求的评审非常有价值，以至于某些仓库需要在合并拉取请求之前进行评审并通过。如果您在完成更改之前需要早期反馈或建议，您可以将您的拉取请求标记为草稿。更多信息请参考 "[创建拉取请求](/articles/creating-a-pull-request)"。

创建拉取请求时，请包含更改摘要及其解决的问题。您可以包含图像、链接和表格来更好的表达。如果您的拉取请求解决了一个问题，请链接到这个问题，以至于这个问题的相关者了解拉取请求，反之亦然。如果您使用关键字进行链接, 当拉取请求合并的时候，这个问题会自动关闭。更多信息请参考 "[基本书写和格式化语法](/github/writing-on-github/basic-writing-and-formatting-syntax)" 和 "[链接拉取请求到问题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)"。

![pull request body](/assets/images/help/pull_requests/pull-request-body.png)

除了填写拉取请求的正文之外，您可以将评论添加到拉取请求的特定行，以向评审的人明确指出某些内容。

![pull request comment](/assets/images/help/pull_requests/pull-request-comment.png)

您的仓库可以配置为在创建拉取请求时自动请求特定团队或用户的评审。 您还可以手动 @提及 或请求特定人员、团队进行评审。

如果您的仓库已配置为在拉取请求上运行检查，您会看到您的拉取请求里的失败检查。这有助于您在合并分支之前捕获错误。更多信息请参考 "[关于状态检查](/github/collaborating-with-issues-and-pull-requests/about-status-checks)"。

### 评审意见

进行评审的人需要留下问题、意见和建议。评审人可以对整个拉取请求发表评论，也可以对特定行添加评论。您和评审人可以插入图像或代码建议以澄清评论。更多信息请参考 "[评审拉取请求中的变更](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests)"。

您可以继续提交和推送更改以响应评审。您的拉取请求将会自动更新这些提交内容。

### 合并拉取请求

一旦您的拉取请求被批准，将会合并您的拉取请求，这将自动合并您的分支，以便您的更改出现在默认分支上。 {% data variables.product.prodname_dotcom %} 在拉取请求中保留了评论和提交的历史记录，以帮助未来的贡献者了解您的变更。更多信息请参考 "[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"。

如果您的拉取请求存在冲突 {% data variables.product.prodname_dotcom %} 会通知您必须在合并之前解决这些冲突。更多信息请参考 "[解决合并冲突](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts)"。

如果您的拉取请求不满足某些要求，分支保护设置可能会阻止合并。例如，您需要一定数量的通过评审或来自特定团队的通过评审。更多信息请参考 "[关于分支保护](/github/administering-a-repository/about-protected-branches)"。

### 删除分支

在您合并了拉取请求之后，可以删除您的分支。这表明分支上的工作已经完成，并防止您或其他人意外使用旧分支。更多信息请参考 "[在拉取请求中删除和恢复分支](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"。

不用担心丢失信息。您的拉取请求和提交历史不会被删除。如果需要，您可以随时恢复已删除的分支或恢复您的拉取请求。
