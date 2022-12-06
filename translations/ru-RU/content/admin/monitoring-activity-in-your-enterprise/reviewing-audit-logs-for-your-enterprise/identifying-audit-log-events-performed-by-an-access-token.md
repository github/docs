---
title: 'Идентификация событий журнала аудита, выполняемых маркером доступа'
shortTitle: Identify events by token
intro: 'Вы можете определить действия, выполняемые определенным {% data variables.product.pat_generic %} или маркером OAuth в вашем предприятии.'
versions:
  feature: token-audit-log
ms.openlocfilehash: 4452e740e611ea3f903c5d122222b3cb575ba37d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160135'
---
## Сведения о данных маркера в журнале аудита

В журнале аудита предприятия для любых действий, выполненных с помощью {% data variables.product.pat_generic %} или приложения OAuth для проверки подлинности, данные события будут отображать используемый метод проверки подлинности и хэш SHA-256 маркера.

Если вы узнали, что маркер был скомпрометирован, вы можете понять действия, предпринятые скомпрометированный маркер, выполнив поиск в журнале аудита предприятия на наличие всех событий, связанных с этим маркером.

Хэшированные значения маркеров не включаются при экспорте журнала аудита.

## Поиск событий, связанных с маркером

При поиске событий, связанных с определенным маркером, можно использовать пользовательский интерфейс или REST API. В любом случае сначала необходимо знать хэш SHA-256 маркера.

### Создание хэш-значения SHA-256 для токена

Если у вас есть только необработанное значение маркера, необходимо создать хэш SHA-256, прежде чем выполнять поиск маркера.

Для MacOS и Linux можно использовать `echo -n TOKEN | openssl dgst -sha256 -binary | base64`, заменив TOKEN значением токена.

Для PowerShell можно использовать следующий скрипт, чтобы вернуть хэш SHA-256 для заданной строки.

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

### Поиск по {% data variables.product.prodname_dotcom %}

При поиске в журнале аудита {% data variables.product.prodname_dotcom %} включите `hashed_token:"VALUE"` в поисковый запрос, заменив `VALUE` хэшом SHA-256 маркера. 

{% note %}

**Примечание:** Обязательно заключите хэшированные значения маркера в кавычки.

{% endnote %}

### Поиск с помощью REST API

Перед поиском маркера с помощью REST API после создания хэша SHA-256 необходимо также экранировать хэш с помощью URI. Большинство основных языков программирования предоставляют служебную программу для экранирования URI. Например, [encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) кодирует строку для JavaScript.

Затем включите `hashed_token:"VALUE"` в поисковую фразу, заменив VALUE хэшом, экранируемым URI. 

Например, если имя корпоративной учетной записи — , следующая `octo-corp`команда curl будет искать @octo-corpв журнале аудита все события, связанные с токеном, хэш SHA-256 в кодировке URI которого имеет значение `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8`.

```
curl --location --request GET 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"' \
--header 'Authorization: Basic TOKEN' \ 
```

## Дополнительные материалы

- [Использование API журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)
