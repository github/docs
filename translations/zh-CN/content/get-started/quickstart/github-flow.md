---
title: GitHub 流
intro: '按照 {% data variables.product.prodname_dotcom %} 流程开展项目协作。'
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
ms.openlocfilehash: 5458d7b14ff59bf7059f093ee47ee92034b9319f
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876067'
---
## 简介

{% data variables.product.prodname_dotcom %} 流程是一个基于分支的轻量级工作流程。 {% data variables.product.prodname_dotcom %} 流程对每个人都有用，而不仅仅是开发者。 例如，在 {% data variables.product.prodname_dotcom %} 中，我们使用 {% data variables.product.prodname_dotcom %} 流来表示[站点策略](https://github.com/github/site-policy)、[文档](https://github.com/github/docs)和[路线图](https://github.com/github/roadmap)。

## 先决条件

要遵循 {% data variables.product.prodname_dotcom %} 流程，您将需要 {% data variables.product.prodname_dotcom %} 帐户和仓库。 有关如何创建帐户的信息，请参阅“[注册 {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)”。 有关如何创建存储库的信息，请参阅”[创建存储库](/github/getting-started-with-github/create-a-repo)”。{% ifversion fpt or ghec %}有关如何查找要参与的现有存储库的信息，请参阅“[查找参与 {% data variables.product.prodname_dotcom %} 上开源项目的方式](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”。{% endif %}

## 遵循 {% data variables.product.prodname_dotcom %} 流程

{% tip %}

{% ifversion fpt or ghec %} 提示：可以通过 {% data variables.product.prodname_dotcom %} Web 界面、命令行和 [{% data variables.product.prodname_cli %}](https://cli.github.com) 或 [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop) 完成 {% data variables.product.prodname_dotcom %} 流的所有步骤。
{% else %} 提示：可以通过 {% data variables.product.prodname_dotcom %} Web 界面、命令行和 [{% data variables.product.prodname_cli %}](https://cli.github.com) 完成 {% data variables.product.prodname_dotcom %} 流的所有步骤。
{% endif %}

{% endtip %}

### 创建分支

  在仓库中创建分支。 简短的描述性分支名称使您的合作者能够一目了然地看到正在进行的工作。 例如，`increase-test-timeout` 或 `add-code-of-conduct`。 有关详细信息，请参阅“[创建和删除存储库中的分支](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository)”。

  通过创建分支，您可以创建一个工作空间，而不会影响默认分支。 此外，您还让协作者有机会审查您的工作。

### 进行更改

在分支上，对仓库进行任何所需的更改。 有关详细信息，请参阅“[创建新文件](/articles/creating-new-files)”“[编辑文件](/articles/editing-files)”“[重命名文件](/articles/renaming-a-file)”“[将文件移动到新位置](/articles/moving-a-file-to-a-new-location)”或“[删除存储库中的文件](/github/managing-files-in-a-repository/deleting-files-in-a-repository)”。

您的分支是进行更改的安全位置。 如果您犯了错误，您可以恢复更改或推送其他更改以修复错误。 在合并分支之前，您的更改不会最终出现在默认分支上。

提交并将您的更改推送到您的分支。 给每个提交一个描述性的信息来帮助您和未来的贡献者理解提交的内容包含哪些更改。 例如，`fix typo` 或 `increase rate limit`。

理想情况下，每个提交都包含一个孤立的、完整的更改。 这样，如果您决定采取不同的方法，就很容易恢复您的更改。 例如，如果您要重命名变量并添加一些测试，则将变量重命名放在一个提交中，将测试放在另一个提交中。 以后，如果您想保留测试但恢复变量重命名，则可以恢复包含变量重命名的特定提交。 如果您将变量重命名和测试放在相同的提交中，或将变量重命名扩展到多个提交中，您将花费更多精力恢复更改。

通过提交和推送您的更改，您可以将您的工作备份到远程存储。 这意味着您可以从任何设备访问您的工作。 也意味着您的协作者可以看到您的工作、回答问题并提出建议或做出贡献。

继续对分支进行更改、提交和推送更改，直到您准备好征求反馈。

{% tip %}

提示：为每个不相关的更改集创建单独的分支。 这使得评论者更容易提供反馈。 这也使你和未来的协作者更容易理解这些改变，以及恢复这些改变或在其基础上构建。 此外，如果一组更改出现延迟，您的其他更改不会延迟。

{% endtip %}

### 创建拉取请求

创建拉取请求，要求协作者对您的更改进行反馈。 拉取请求审查非常重要，以至于某些仓库需要批准审查才能合并拉取请求。 如果您在完成更改之前需要早期反馈或建议，您可以将您的拉取请求标记为草稿。 有关详细信息，请参阅“[创建拉取请求](/articles/creating-a-pull-request)”。

创建拉取请求时，包括更改的摘要以及它们解决的问题。 您可以包含图片、链接和表格来帮助传达此信息。 如果您的拉取请求说明了某个议题，请链接该议题，以便议题利益相关者了解拉取请求，反之亦然。 如果您链接关键字，当拉取请求合并时，议题将自动关闭。 有关详细信息，请参阅“[基本撰写和格式设置语法](/github/writing-on-github/basic-writing-and-formatting-syntax)”和“[将拉取请求链接到问题](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”。

![拉取请求正文](/assets/images/help/pull_requests/pull-request-body.png)

除了填写拉取请求的正文， 您可以在拉取请求的特定行中添加评论，向审核者明确指出一些内容。

![拉取请求评论](/assets/images/help/pull_requests/pull-request-comment.png)

创建拉取请求时，您的仓库可能会被配置为自动请求特定团队或用户的审查。 你也可以手动 @mention 或要求特定的人或团队进行审查。

如果您的仓库有配置为在拉取请求上运行的检查，则您将看到任何在拉取请求上失败的检查。 这有助于您在合并您的分支之前发现错误。 有关详细信息，请参阅“[关于状态检查](/github/collaborating-with-issues-and-pull-requests/about-status-checks)”。

### 解决审查评论

评论者应留下问题、评论和建议。 评论者可以评论整个拉取请求或将评论添加到特定行。 您和评论者可以插入图像或代码建议来澄清评论。 有关详细信息，请参阅“[查看拉取请求中的更改](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests)”。

您可以继续提交并推送更改以响应评论。 您的拉取请求将自动更新。

### 合并拉取请求

拉取请求获得批准后，合并您的拉取请求。 这将自动合并您的分支，以便您的更改显示在默认分支上。 {% data variables.product.prodname_dotcom %} 会保留拉取请求中的评论和提交历史记录，以帮助未来的贡献者了解您的更改。 有关详细信息，请参阅“[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”。

{% data variables.product.prodname_dotcom %} 会告知您的拉取请求是否有必须在合并前解决的冲突。 有关详细信息，请参阅“[解决合并冲突](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts)”。

如果您的拉取请求不符合某些要求，分支保护设置可能会阻止合并。 例如，您需要一定数量的批准审查或特定团队的批准审查。 有关详细信息，请参阅“[关于受保护的分支](/github/administering-a-repository/about-protected-branches)”。

### 删除分支

合并拉取请求后，删除您的分支。 这表明分支的工作已经完成，可防止您或其他人意外使用旧分支。 有关详细信息，请参阅“[删除和还原拉取请求中的分支](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)”。

不要担心丢失信息。 您的拉取请求和提交历史记录不会被删除。 如有必要，您可以随时恢复已删除的分支或恢复拉取请求。
