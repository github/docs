---
title: Перечисление сред codespace в организации
shortTitle: List organization codespaces
intro: Можно перечислить все активные на текущий момент или остановленные среды codespace для организации.
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
ms.openlocfilehash: e3d475560c76449ed20b70fbce29ef6273f788fc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158632'
---
## Обзор

Как владелец организации, вы можете перечислить все активные на текущий момент и остановленные среды codespace для своей организации. Это поможет проверить, сколько codespace создают пользователи, чтобы убедиться, что дополнительные расходы не требуются. Сведения о ценах см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

Проще всего перечислить codespace для организации с помощью {% data variables.product.prodname_cli %}. Также можно воспользоваться REST API, который предоставит дополнительные сведения о каждой среде codespace.

Сведения о том, как просмотреть общее общее использование {% data variables.product.prodname_codespaces %} для организации или предприятия и создать подробный отчет, см. в разделе [Просмотр использования {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

### Перечисление сред codespace с помощью {% data variables.product.prodname_cli %}

Чтобы перечислить все текущие среды codespace для конкретной организации, воспользуйтесь следующей командой:

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

Она возвращает список, содержащий следующие сведения для каждой codespace: 
    - Имя и отображаемое имя 
    - Имя пользователя, создавшего codespace
    - Репозиторий и ветвь
    - Текущее состояние codespace

Чтобы перечислить все текущие среды codespace для организации, созданные конкретным пользователем, воспользуйтесь следующей командой:

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**Примечание.** Замените в вышеперечисленных командах `ORGANIZATION` на название организации, к которой вы совершаете запрос. Вы должны быть владельцем организации.

{% endnote %}

### Перечисление сред codespace с помощью REST API

В качестве альтернативного метода перечисления текущих сред codespace для организации можно воспользоваться конечной точкой API `/orgs/{org}/codespaces`. С этим методом возвращается больше сведений, чем при использовании {% data variables.product.prodname_cli %}, например сведения о типе компьютера.

Дополнительные сведения об этой конечной точке см. в статье "[Организации Codespaces](/rest/codespaces/organizations#list-codespaces-for-the-organization)".
