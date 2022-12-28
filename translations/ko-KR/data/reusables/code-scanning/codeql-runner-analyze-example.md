---
ms.openlocfilehash: e6d7a33506174bf50d70ae9b5d4ac9857cd880ae
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161240"
---
1. {% data variables.product.prodname_codeql %} 데이터베이스를 입력하고, 분석하고, 결과를 {% data variables.product.product_name %}에 업로드합니다. 결과는 리포지토리의 **보안** 탭에 표시됩니다.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. {% data variables.product.prodname_code_scanning %} 결과를 끌어오기 요청 검사로 업로드하려면 <nobr>`--ref`</nobr> 플래그를 사용하여 끌어오기 요청을 지정합니다. 웹후크 이벤트에서 실행 [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) 되도록 {% data variables.code-scanning.codeql_runner %}를 설정하는 것이 좋습니다.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

{% data variables.product.prodname_code_scanning %} 경고를 보는 방법에 대한 자세한 내용은 “[끌어오기 요청에서 코드 스캔 심사](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)” 및 “[리포지토리에 대한 코드 스캔 경고 관리](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)”를 참조하세요.
