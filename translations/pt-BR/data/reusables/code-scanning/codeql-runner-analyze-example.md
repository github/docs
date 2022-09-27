---
ms.openlocfilehash: b20ef3a51f3bf2b4bfbb89ad078bf221ce838904
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145094691"
---
1. Preencha os bancos de dados do {% data variables.product.prodname_codeql %}, analise-os e carregue os resultados no {% data variables.product.product_name %}. Os resultados serão exibidos na guia **Segurança** do repositório.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. Para carregar os resultados da {% data variables.product.prodname_code_scanning %} como verificações de solicitação de pull, especifique a solicitação de pull usando o sinalizador <nobr>`--ref`</nobr>. Recomendamos configurar o {% data variables.product.prodname_codeql_runner %} para que ele seja executado no evento de webhook [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request).

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

Para obter mais informações sobre como ver alertas da {% data variables.product.prodname_code_scanning %}, confira "[Como fazer a triagem de alertas da verificação de código em solicitações de pull](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)" e "[Como gerenciar alertas da verificação de código para seu repositório](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)".
