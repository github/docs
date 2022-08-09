---
title: 第 5 阶段：推出和扩展代码扫描
intro: '您可以使用之前收集的存储库数据，利用可用的 API 按团队和语言在整个企业中以编程方式推出 {% data variables.product.prodname_code_scanning %}。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 5. 推出代码扫描
miniTocMaxHeadingLevel: 3
---

{% note %}

本文是关于大规模采用 {% data variables.product.prodname_GH_advanced_security %} 系列文章的一部分。 有关本系列的上一篇文章，请参阅“[第 4 阶段：创建内部文档](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)”。

{% endnote %}

### 启用代码扫描

使用您在[第 2 阶段](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)整理的数据，可以开始启用 GHAS，然后在存储库中的 {% data variables.product.prodname_code_scanning %} 上启用，一次一种语言。 启用 GHAS 的分步过程应如下所示：

1. 在存储库上启用 GHAS。 更多信息请参阅“[管理仓库的安全和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”。
1. 使用 `codeql-analysis.yml` 文件创建针对存储库的默认分支的拉取请求，该文件包含如何为该语言运行 CodeQL 的示例。 更多信息请参阅“[创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)”。
1. 在存储库中创建议题以解释引发拉取请求的原因。 您创建的议题可以包含指向发送给所有用户的上一次通信的链接，但还可以解释拉取请求引入了哪些更改，团队必须采取的后续步骤，团队的职责是什么，以及团队应如何使用 {% data variables.product.prodname_code_scanning %}。 更多信息请参阅“[创建议题](/issues/tracking-your-work-with-issues/creating-an-issue)”。

有一个公开可用的工具可以完成前两个步骤，称为 [ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement)。 您可以在有意义的语言中批量重新运行 ghas-enablement 工具。 例如，JavaScript、TypeScript、Python 和 Go 可能具有类似的构建过程，因此可以使用类似的 CodeQL 分析文件。 ghas-enablement 工具还可用于 Java、C 和 C++等语言，但由于这些语言构建和编译方式的不同，您可能需要创建更有针对性的 CodeQL 分析文件。

{% note %}

**注意：** 如果您打算使用 {% data variables.product.prodname_actions %} 来控制 {% data variables.product.prodname_code_scanning %} ，并且不使用 [ghas-enablement 工具](https://github.com/NickLiffen/ghas-enablement)，请记住，`.github/workflow` 目录没有 API 访问权限。 这意味着如果没有自动化基础的 git 客户端，则无法创建脚本。 解决方法是在具有 git 客户端的计算机或容器上利用 bash 脚本。 git 客户端可以将文件推送和拉取到 `.github/workflows` `codeql-analysis.yml` 文件所在的目录中。

{% endnote %}

重要的是，不要只是将 `codeql-analysis.yml` 文件推送到存储库的默认分支。 使用拉取请求将所有权交给开发团队进行审查和合并，从而使开发团队能够了解 {% data variables.product.prodname_code_scanning %} 并让团队参与该过程。

您应该捕获由自动化创建的拉取请求 URL，每周检查是否有任何活动，并查看哪些活动已关闭。 几周后，如果拉取请求仍未合并，则可能值得创建另一个问题或发送内部电子邮件。

### 创建主题专家

然后，您可以进入启用的下一阶段，即创建内部主题专家（或 SME）并安排公司会议。 在存储库中打开拉取请求和议题可能要处理很大比例的采用，但这并不能解决特定构建过程，框架或库需要启用特定功能标志的一次性用例。 需要一种更加个性化和动手实践的方法来推动高采用率，特别是对于Java、C 和 C++。

定期就特定主题召开公司会议是个好主意，以便与更大的团队进行教育和讨论。 对于拥有数千个存储库的企业来说，与一次与一个团队合作相比，这要省时得多。 团队可以参加与他们相关的会议。 以前运行的一些示例会话包括：

- 容器中的 {% data variables.product.prodname_code_scanning_capc %}
- {% data variables.product.prodname_code_scanning_capc %} & Java Struts
- {% data variables.product.prodname_code_scanning_capc %} & JSP

您可以使用收集的有关存储库中不同语言分布的数据来创建目标会议。

{% note %}

有关本系列的下一篇文章，请参阅“[第 6 阶段：推出和扩展机密扫描](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning)”。

{% endnote %}
