---
title: Автоматизация форм выпуска с параметрами запроса
intro: 'Чтобы быстро создавать выпуски путем автоматического заполнения новой формы выпуска настраиваемыми сведениями, можно добавить параметры запроса в URL-адрес страницы формы выпуска.'
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/releasing-projects-on-github/automation-for-release-forms-with-query-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automate release forms
ms.openlocfilehash: 75c7fe4b79a6103060151742f1277861f23785c4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145193566'
---
Параметры запроса — это необязательные части URL-адреса, которые можно настроить для совместного использования определенного представления веб-страницы, например результатов поиска с фильтрами, шаблона проблемы или страница формы выпуска на {% data variables.product.prodname_dotcom %}. Чтобы создать собственные параметры запроса, необходимо сопоставить пару ключа и значения.

Чтобы использовать эквивалентный параметр запроса, необходимо иметь соответствующие разрешения для любого действия. Например, для предварительного заполнения формы выпусков необходимо разрешение на создание выпусков. Дополнительные сведения см. в разделе [Управление выпусками в репозитории](/github/administering-a-repository/managing-releases-in-a-repository).

Если вы создаете недопустимый URL-адрес с параметрами запроса или у вас нет соответствующих разрешений, URL-адрес вернет страницу ошибки 404.  

## Поддерживаемые параметры запроса

Параметр запроса | Пример
---  | ---
`tag` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` создает выпуск на основе тега "v1.0.1".
`target` | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` создает выпуск на основе последней фиксации в ветви "release-1.0.1".
`title` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` создает выпуск с именем "octo-1.0.1" на основе тега "v1.0.1".
`body` | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` создает выпуск с описанием "Adds widget support" (Добавление поддержки мини-приложений) в тексте выпуска.
`prerelease` | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` создает выпуск, который будет определен как готовый к использованию в непроизводственной среде.

## Дополнительные материалы

- [Создание проблемы из запроса URL-адреса](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query)
- [Использование параметров запроса для создания запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request/)
