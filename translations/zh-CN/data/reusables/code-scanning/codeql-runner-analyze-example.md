---
ms.openlocfilehash: b20ef3a51f3bf2b4bfbb89ad078bf221ce838904
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145098785"
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
2. 要将 {% data variables.product.prodname_code_scanning %} 结果作为拉取请求检查上传，请使用 <nobr>`--ref`</nobr> 标志指定拉取请求。 我们建议设置 {% data variables.product.prodname_codeql_runner %} 以便它在 [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) Webhook 事件上运行。

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
