---
title: Переменные среды по умолчанию для codespace
shortTitle: Default environment variables
intro: '{% data variables.product.prodname_dotcom %} задает переменные среды по умолчанию для каждой среды codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 1a57445bbffb3e1112299414e29796b716f2d801
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158928'
---
## Сведения о переменных среды по умолчанию

{% data variables.product.prodname_dotcom %} задает переменные среды по умолчанию для каждой среды codespace. Команды, выполняемые в codespace, могут создавать, считывать и изменять переменные среды.

{% note %}

**Примечание.** В переменных среды регистр символов не учитывается.

{% endnote %}

## Список переменных среды по умолчанию

| Переменная среды | Описание |
| ---------------------|------------ |
| `CODESPACE_NAME` | Имя codespace, например `octocat-literate-space-parakeet-mld5`. |
| `CODESPACES` | Всегда `true`, когда находится в codespace. |
| `GIT_COMMITTER_EMAIL` | Адрес электронной почты для поля "Автор" будущих фиксаций `git`. |
| `GIT_COMMITTER_NAME` | Имя поля "Кем внесено" будущих фиксаций `git`. |
| `GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN`| Возвращает домен переадресованного порта {% data variables.product.prodname_github_codespaces %}. Например, `preview.app.github.dev`. |
| `GITHUB_API_URL` | Возвращает URL-адрес API. Например, `{% data variables.product.api_url_code %}`. |
| `GITHUB_GRAPHQL_URL` | Возвращает URL-адрес API GraphQL. Например, `{% data variables.product.graphql_url_code %}`. |
| `GITHUB_REPOSITORY` | Имя владельца и репозитория. Например, `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| Возвращает URL-адрес сервера {% data variables.product.product_name %}. Например, `https://{% data variables.product.product_url %}`. |
| `GITHUB_TOKEN` | Подписанный маркер проверки подлинности, представляющий пользователя в codespace. Его можно использовать для выполнения прошедших проверку подлинности вызовов API GitHub. Дополнительные сведения см. в статье "[Проверка подлинности](/codespaces/codespaces-reference/security-in-codespaces#authentication)".  |
| `GITHUB_USER` | Имя пользователя, инициировавшего codespace. Например, `octocat`. |
