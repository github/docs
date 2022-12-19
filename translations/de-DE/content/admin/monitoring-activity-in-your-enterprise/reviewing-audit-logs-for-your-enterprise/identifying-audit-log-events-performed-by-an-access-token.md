---
title: 'Identifizieren von Überwachungsprotokollereignissen, die von einem Zugriffstoken ausgeführt werden'
shortTitle: Identify events by token
intro: 'Du kannst die Aktionen identifizieren, die von einem bestimmten {% data variables.product.pat_generic %} oder OAuth-Token in deinem Unternehmen ausgeführt werden.'
versions:
  feature: token-audit-log
ms.openlocfilehash: 4452e740e611ea3f903c5d122222b3cb575ba37d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159713'
---
## Informationen zu Tokendaten im Überwachungsprotokoll

Im Überwachungsprotokoll deines Unternehmens zeigen die Ereignisdaten für alle Aktionen, die mit einem {% data variables.product.pat_generic %} oder einer OAuth-Anwendung für die Authentifizierung ausgeführt wurden, die verwendete Authentifizierungsmethode und den SHA-256-Hash des Tokens an.

Wenn du erfährst, dass ein Token kompromittiert wurde, kannst du die Aktionen des kompromittierten Tokens nachvollziehen, indem du das Überwachungsprotokoll deines Unternehmens nach allen Ereignissen durchsuchst, die diesem Token zugeordnet sind.

Hashtokenwerte sind beim Exportieren des Überwachungsprotokolls nicht enthalten.

## Suchen nach Ereignissen, die einem Token zugeordnet sind

Wenn du nach Ereignissen suchst, die einem bestimmten Token zugeordnet sind, kannst du die Benutzeroberfläche oder die REST-API verwenden. In beiden Fällen musst du den SHA-256-Hash des Tokens kennen.

### Generieren eines SHA-256-Hashwerts für ein Token

Wenn du nur über einen unformatierten Tokenwert verfügst, musst du einen SHA-256-Hash generieren, bevor du nach dem Token suchen kannst.

Für MacOS und Linux kannst du `echo -n TOKEN | openssl dgst -sha256 -binary | base64` verwenden. Ersetze dabei TOKEN durch den Tokenwert.

Für PowerShell kannst du das folgende Skript verwenden, um einen SHA-256-Hash für eine bestimmte Zeichenfolge zurückzugeben.

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

### Suchen auf {% data variables.product.prodname_dotcom %}

Schließe beim Durchsuchen des Überwachungsprotokolls auf {% data variables.product.prodname_dotcom %} `hashed_token:"VALUE"` in deine Suchabfrage ein, und ersetze `VALUE` durch den SHA-256-Hash des Tokens. 

{% note %}

**Hinweis:** Setze den Hashtokenwert unbedingt in Anführungszeichen.

{% endnote %}

### Suchen mit der REST-API

Damit du mithilfe der REST-API nach einem Token suchen kannst, musst du nach dem Generieren eines SHA-256-Hashs den Hash ebenfalls mit dem URI als Escapezeichen versehen. Die meisten gängigen Programmiersprachen bieten ein Hilfsprogramm für die Verwendung des URI als Escapezeichen. Beispielsweise wird mit [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) eine Zeichenfolge für JavaScript codiert.

Füge dann `hashed_token:"VALUE"` in deinen Suchbegriff ein, und ersetze VALUE durch den Hash, den du mit dem URI als Escapezeichen versehen hast. 

Wenn der Name des Unternehmenskontos beispielsweise `octo-corp` lautet, durchsucht der folgende cURL-Befehl das Überwachungsprotokoll von @octo-corp nach allen Ereignissen, die dem Token zugeordnet sind, dessen URI-codierter SHA-256-Hash `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8` lautet.

```
curl --location --request GET 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"' \
--header 'Authorization: Basic TOKEN' \ 
```

## Weitere nützliche Informationen

- [Verwenden der Überwachungsprotokoll-API für dein Unternehmen](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)
