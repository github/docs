---
title: Identificar eventos de log de auditoria executados por um token de acesso
shortTitle: Identify events by token
intro: 'Você pode identificar as ações executadas por um {% data variables.product.pat_generic %} ou um token OAuth na empresa.'
versions:
  feature: token-audit-log
ms.openlocfilehash: 4452e740e611ea3f903c5d122222b3cb575ba37d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159370'
---
## Sobre os dados de token no log de auditoria

No log de auditoria da empresa, para todas as ações que foram executadas usando um {% data variables.product.pat_generic %} ou um aplicativo OAuth para autenticação, os dados do evento mostrarão o método de autenticação usado e o hash SHA-256 do token.

Se você souber que um token foi comprometido, poderá entender as ações executadas por ele pesquisando no log de auditoria da empresa todos os eventos associados a esse token.

Os valores de token de hash não são incluídos quando você exporta o log de auditoria.

## Como procurar eventos associados a um token

Ao procurar eventos associados a um token específico, você pode usar a interface do usuário ou a API REST. Nos dois casos, primeiro você precisará saber o hash SHA-256 do token.

### Como gerar um valor de hash SHA-256 para um token

Se você tiver apenas um valor de token bruto, precisará gerar um hash SHA-256 para procurar o token.

No MacOS e no Linux, você pode usar `echo -n TOKEN | openssl dgst -sha256 -binary | base64`, substituindo TOKEN pelo valor do token.

No PowerShell, você pode usar o script a seguir para retornar um hash SHA-256 de uma determinada cadeia de caracteres.

```shell{:copy}
Param (
    [Parameter(Mandatory=$true)]
    [string]
    $ClearString
)

$hasher = [System.Security.Cryptography.HashAlgorithm]::Create('sha256')
$hash = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($ClearString))

$hashString = [System.BitConverter]::ToString($hash)
$hashString.Replace('-', '')
```

### Como pesquisar no {% data variables.product.prodname_dotcom %}"

Ao pesquisar o log de auditoria no {% data variables.product.prodname_dotcom %}, inclua `hashed_token:"VALUE"` na consulta de pesquisa, substituindo `VALUE` pelo hash SHA-256 do token. 

{% note %}

**Observação:** encapsule o valor do token hash entre aspas.

{% endnote %}

### Como pesquisar com a API REST

Para procurar um token usando a API REST, depois de gerar um hash SHA-256, você também precisa usar um escape para o hash no URI. A maioria das principais linguagens de programação oferece um utilitário para escape de URI. Por exemplo, [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) codifica uma cadeia de caracteres para JavaScript.

Depois, inclua `hashed_token:"VALUE"` na frase de pesquisa, substituindo VALUE pelo hash com escape de URI. 

Por exemplo, se o nome da conta corporativa for `octo-corp`, o comando curl a seguir pesquisá o log de auditoria de @octo-corp de todos os eventos associados ao token cujo hash SHA-256 codificado em URI é `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8`.

```
curl --location --request GET 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"' \
--header 'Authorization: Basic TOKEN' \ 
```

## Leitura adicional

- "[Como usar a API do log de auditoria na empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)"
