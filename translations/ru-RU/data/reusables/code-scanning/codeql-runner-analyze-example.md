---
ms.openlocfilehash: e6d7a33506174bf50d70ae9b5d4ac9857cd880ae
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161241"
---
1. Заполните базы данных {% data variables.product.prodname_codeql %}, проанализируйте их и отправьте результаты в {% data variables.product.product_name %}. Результаты появятся на вкладке **Безопасность** вашего репозитория.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 5b6a3078b31dc346e5ce7b86837d6abbe7a18bbd --ref refs/heads/my-branch
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```
2. Чтобы отправить результаты {% data variables.product.prodname_code_scanning %} в качестве проверок запроса на вытягивание, укажите запрос на вытягивание с помощью флага <nobr>`--ref`</nobr>. Рекомендуется настроить {% data variables.code-scanning.codeql_runner %}, чтобы он запускал [`pull_request`](/developers/webhooks-and-events/webhook-events-and-payloads#pull_request) событие веб-перехватчика.

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux analyze --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
        --commit 1dc7a1346e5ce7b86835b68bbda3078b37d6abbe --ref refs/pull/123/merge
    > Finalizing database creation
    > ...
    > POST /repos/octo-org/example-repo/code-scanning/sarifs - 202 in 786ms
    > Successfully uploaded results
    ```

Дополнительные сведения о просмотре оповещений {% data variables.product.prodname_code_scanning %} см. в разделах "[Анализ оповещений сканирования кода в запросах на вытягивание](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests)" и "[Управление оповещениями сканирования кода для репозитория](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository)".
