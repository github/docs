---
ms.openlocfilehash: e6d7a33506174bf50d70ae9b5d4ac9857cd880ae
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161224"
---
1. 填充 {% data variables.product.prodname_codeql %} 数据库、进行分析并将结果上传到 {% data variables.product.product_name %}。 结果将显示在存储库的“安全”选项卡中。

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. 要将 {% data variables.product.prodname_code_scanning %} 结果作为拉取请求检查上传，请使用 <nobr>`--ref`</nobr> 标志指定拉取请求。 我们建议设置 {% data variables.code-scanning.codeql_runner %}，以便它在 [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) Webhook 事件上运行。

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

有关查看 {% data variables.product.prodname_code_scanning %} 警报的详细信息，请参阅“[在拉取请求中会审代码扫描警报](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)”和“[管理存储库的代码扫描警报](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)”。
