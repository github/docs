---
ms.openlocfilehash: e6d7a33506174bf50d70ae9b5d4ac9857cd880ae
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161232"
---
1. Remplissez les base de données {% data variables.product.prodname_codeql %}, analysez-les, puis chargez les résultats vers {% data variables.product.product_name %}. Les résultats s’affichent sous l’onglet **Sécurité** de votre dépôt.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. Pour charger les résultats de l’{% data variables.product.prodname_code_scanning %} sous forme de vérifications des demandes de tirage, spécifiez la demande de tirage à l’aide de l’indicateur <nobr>`--ref`</nobr>. Nous vous recommandons de configurer l’{% data variables.code-scanning.codeql_runner %} pour qu’il s’exécute sur l’événement de webhook [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request).

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

Pour plus d’informations sur la visualisation des alertes d’{% data variables.product.prodname_code_scanning %}, consultez « [Triage des alertes d’analyse du code dans les demandes de tirage](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests) » et « [Gestion des alertes d’analyse de code pour votre dépôt](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository) ».
