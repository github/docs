---
ms.openlocfilehash: e6d7a33506174bf50d70ae9b5d4ac9857cd880ae
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161233"
---
1. Befülle die {% data variables.product.prodname_codeql %}-Datenbanken, analysiere sie und lade die Ergebnisse in {% data variables.product.product_name %} hoch. Die Ergebnisse werden auf der Registerkarte **Sicherheit** für dein Repository angezeigt.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. Um die Ergebnisse von {% data variables.product.prodname_code_scanning %} als Pull Request-Überprüfungen hochzuladen, gib den Pull Request mit dem <nobr>`--ref`</nobr>-Flag an. Du solltest den {% data variables.code-scanning.codeql_runner %} einrichten, damit er im [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request)-Webhookereignis ausgeführt wird.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

Weitere Informationen zum Anzeigen von {% data variables.product.prodname_code_scanning %}-Warnungen findest du unter [Filtern von Codescanwarnungen in Pull Requests](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests) und [Verwalten von Codescanwarnungen für dein Repository](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository).
