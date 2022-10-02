---
ms.openlocfilehash: b20ef3a51f3bf2b4bfbb89ad078bf221ce838904
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145115570"
---
1. Rellene las bases de datos de {% data variables.product.prodname_codeql %}, analícelas y cargue los resultados a {% data variables.product.product_name %}. Los resultados aparecerán en la pestaña **Security** del repositorio.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. Para cargar los resultados de {% data variables.product.prodname_code_scanning %} como comprobaciones de solicitudes de incorporación de cambios, especifique la solicitud de incorporación de cambios mediante la marca <nobr>`--ref`</nobr>. Se recomienda configurar {% data variables.product.prodname_codeql_runner %} para que se ejecute en el evento de webhook [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request).

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

Para más información sobre cómo ver las alertas de {% data variables.product.prodname_code_scanning %}, vea "[Evaluación de prioridades de alertas de examen de código en solicitudes de incorporación de cambios](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)" y "[Administración de alertas de análisis de código para el repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)".
