---
title: Использование параметров запроса для создания запроса на вытягивание
intro: 'Используйте параметры запроса для создания настраиваемых URL-адресов, чтобы открывать запросы на вытягивание с предварительно заполненными полями.'
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 89ca4b13ff6291f7b4449d25b3daa911734a22b9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139590'
---
Для создания запросов на вытягивание можно использовать параметры запроса. Параметры запроса — это необязательные части URL-адреса, которые можно настроить для совместного использования определенного представления веб-страницы, например результатов поиска с фильтрами или шаблона запроса на вытягивание на {% data variables.product.prodname_dotcom %}. Чтобы создать собственные параметры запроса, необходимо сопоставить пару ключа и значения.

{% tip %}

**Совет.** Можно также создавать шаблоны запросов на вытягивание, которые открываются с метками по умолчанию, уполномоченными лицами и заголовком запроса на вытягивание. Дополнительные сведения см. в разделе "[Использование шаблонов для описания важных проблем и выполнения запросов на вытягивание](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% endtip %}

Чтобы использовать эквивалентный параметр запроса, необходимо иметь соответствующие разрешения для любого действия. Например, потребуется разрешение, чтобы добавить метку в запрос на вытягивание для использования параметра запроса `labels`. Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Если вы создадите недопустимый URL-адрес, используя параметры запроса, или если у вас нет соответствующих разрешений, URL-адрес вернет страницу ошибки `404 Not Found`. Если вы создаете URL-адрес, превышающий ограничения сервера, он вернет страницу ошибки `414 URI Too Long`.

Параметр запроса | Пример
---  | ---
`quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` создает запрос на вытягивание, который сравнивает базовую ветвь `main` и главную ветвь `my-branch`. Запрос `quick_pull=1` открывает страницу "Открыть запрос на вытягивание".
`title` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report` создает запрос на вытягивание с меткой "ошибка" и заголовком "Исправление ошибок".
`body` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` создает запрос на вытягивание с заголовком "Исправление ошибок" и комментарием "Описание исправления" в тексте запроса на вытягивание.
`labels` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` создает запрос на вытягивание с метками "нужна помощь" и "ошибка".
`milestone` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` создает запрос на вытягивание с вехой "вехи проверки".
`assignees` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` создает запрос на вытягивание и назначает его @octocat.
`projects` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` создает запрос на вытягивание с названием "Исправление ошибок" и добавляет его на доску проекта организации 1.
`template` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` создает запрос на вытягивание с шаблоном в тексте запроса на вытягивание. Параметр запроса `template` поддерживает шаблоны, хранящиеся в корневом подкаталоге `PULL_REQUEST_TEMPLATE`, а также в каталогах `docs/` и `.github/` в репозитории. Дополнительные сведения см. в разделе "[Использование шаблонов для описания важных проблем и выполнения запросов на вытягивание](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".
