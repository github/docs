---
title: 查看代码扫描日志
intro: '您可以在 {% data variables.product.product_location %} 中查看 {% data variables.product.prodname_code_scanning %} 分析期间生成的输出。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can view the {% data variables.product.prodname_code_scanning %} logs for that repository.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Security
shortTitle: View code scanning logs
ms.openlocfilehash: e4f4c3e601540e02c01bbe3761a11528a746a519
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147444627'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## 关于第三方 {% data variables.product.prodname_code_scanning %} 设置 

您可以使用各种工具在仓库中设置 {% data variables.product.prodname_code_scanning %} 。 有关详细信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#options-for-setting-up-code-scanning)”。

您可用的日志和诊断信息取决于您在 {% data variables.product.prodname_code_scanning %} 中使用的方法。 你可以使用警报列表中的“工具”下拉菜单，检查存储库的“安全性”选项卡中使用的 {% data variables.product.prodname_code_scanning %} 类型。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

## 关于分析和诊断信息

您可以使用 {% data variables.product.prodname_dotcom %} 上的 {% data variables.product.prodname_codeql %} 分析查看 {% data variables.product.prodname_code_scanning %} 运行的分析和诊断信息。 

在警报列表顶部的标题中显示最近分析的“分析”信息。 有关详细信息，请参阅“[管理存储库的代码扫描警报](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

“诊断”信息显示在行动工作流日志中，包含摘要指标和提取器诊断。 有关访问 {% data variables.product.prodname_dotcom %} 上的 {% data variables.product.prodname_code_scanning %} 日志的信息，请参阅下面的“[查看 {% data variables.product.prodname_code_scanning %} 的日志记录输出](#viewing-the-logging-output-from-code-scanning)”。

如果您在 {% data variables.product.prodname_dotcom %} 外部使用 {% data variables.product.prodname_codeql_cli %} ，您将在数据库分析期间生成的输出中看到诊断信息。 此信息也包含在您随 {% data variables.product.prodname_code_scanning %} 结果上传到 {% data variables.product.prodname_dotcom %} 的 SARIF 结果文件中。

有关 {% data variables.product.prodname_codeql_cli %} 的信息，请参阅“[在 CI 系统中配置 {% data variables.product.prodname_codeql_cli %}](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system#viewing-log-and-diagnostic-information)”。

### 关于摘要指标

{% data reusables.code-scanning.summary-metrics %}

### 关于 {% data variables.product.prodname_codeql %} 源代码提取诊断信息

{% data reusables.code-scanning.extractor-diagnostics %}

{% ifversion codeql-action-debug-logging %}

通过启用调试日志记录，可以查看有关在创建数据库期间发生的 {% data variables.product.prodname_codeql %} 提取器错误和警告的更多详细信息。 有关详细信息，请参阅“[对 CodeQL 工作流进行故障排除](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow#creating-codeql-debugging-artifacts-by-re-running-jobs-with-debug-logging-enabled)”。

{% endif %}

## 查看来自 {% data variables.product.prodname_code_scanning %} 的日志记录输出

本节适用于使用 {% data variables.product.prodname_code_scanning %} 的 {% data variables.product.prodname_actions %} 运行（{% data variables.product.prodname_codeql %} 或第三方）。

为仓库设置 {% data variables.product.prodname_code_scanning %} 后，您可以关注操作运行时的输出。

{% data reusables.repositories.actions-tab %}

  You can view the run status of {% data variables.product.prodname_code_scanning %} and get notifications for completed runs. For more information, see "<a href="/actions/configuring-and-managing-workflows/managing-a-workflow-run">Managing a workflow run</a>" and "<a href="/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options">Configuring notifications</a>." 条目的文本是提交消息的标题。

  ![显示 {% data variables.product.prodname_code_scanning %} 工作流的操作列表](/assets/images/help/repository/code-scanning-actions-list.png)

1. 单击 {% data variables.product.prodname_code_scanning %} 工作流程的项目。

2. 单击左侧的作业名称。 例如，“分析(语言)”。

  ![{% data variables.product.prodname_code_scanning %} 工作流程的日志输出](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. 查看此工作流运行时操作的日志记录输出。

1. 在所有作业完成后，您可以查看已识别的任何 {% data variables.product.prodname_code_scanning %} 警报的详细信息。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_code_scanning %} 警报](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)”。

{% note %}

注意：如果发起将 {% data variables.product.prodname_code_scanning %} 工作流添加到存储库的拉取请求，则在合并拉取请求之前，来自该拉取请求的警报不会直接显示在 {% data variables.product.prodname_code_scanning_capc %} 页面上。 如果发现任何警报，你可以在合并拉取请求之前查看这些警报，方法是在 {% data variables.product.prodname_code_scanning_capc %} 页面的横幅中单击“发现 n 条警报”的链接。

![单击“发现的 n 条警报”链接](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}
