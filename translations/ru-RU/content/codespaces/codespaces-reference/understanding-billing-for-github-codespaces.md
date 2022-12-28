---
title: Понимание выставления счетов за GitHub Codespaces
intro: Узнайте, как выставляется счет за использование {% data variables.product.prodname_github_codespaces %}.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
- /codespaces/codespaces-reference/understanding-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: 2dfec9e452360db117bdee7954fbe4fad2ad1c56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147111685"
---
В этой статье объясняется, как выполняется выставление счетов для пространств кода и как менеджер по выставлению счетов вашей организации может помочь вам в этом.

## Получение доступа к {% data variables.product.prodname_github_codespaces %}

Администратор вашей организации может разрешить использование {% data variables.product.prodname_github_codespaces %} только для отдельных личных учетных записей. Чтобы получить доступ, вам необходимо обратиться к менеджеру по выставлению счетов. Дополнительные сведения см. в разделе [Управление доступом и безопасностью для пространств кода](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces).

## Какова стоимость использования {% data variables.product.prodname_codespaces %}

Сведения о расценках на использование {% data variables.product.prodname_codespaces %} см. в разделе [Расценки на использование {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

## Выставление счетов за использование пространства кода

Плата за пространство кода взимается за время использования вычислений в минутах и объем используемого хранилища на диске.

Если включена предварительная сборка пространств кода, это приведет к дополнительным расходам. Дополнительные сведения см. в разделе [Сведения о предварительных сборках {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds#about-billing-for-codespaces-prebuilds).

### Общие сведения об объеме использования вычислений в минутах
Плата за пространство кода взимается за количество минут, в течение которых оно было активно. Если в окне пространств кода не выполняется никаких действий в течение 30 минут, оно будет автоматически закрыто, и выставление счетов за вычисления для пространства кода будет завершено до тех пор, пока пространство кода не будет запущено снова.

### Общие сведения о выставлении счетов за хранилище для пространства кода
Для {% data variables.product.prodname_github_codespaces %} хранилище включает все файлы, относящиеся к вашему пространству кода, например, клонированный репозиторий, файлы конфигурации и расширения. Плата за хранилище взимается во время завершения работы пространства кода. Выставление счетов за хранилище для пространства кода заканчивается при его удалении из https://github.com/codespaces вручную.

## Как работает предельная сумма расходов

Чтобы ваша организация смогла использовать {% data variables.product.prodname_codespaces %}, менеджер по выставлению счетов должен установить предельную сумму расходов. Дополнительные сведения см. в разделе [Управление предельными суммами расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces). 

## Экспорт изменений при достижении предельной суммы расходов

{% data reusables.codespaces.exporting-changes %}

## Проверка текущего использования и предельной суммы расходов
Если вам нужно проверить текущее использование или предельную сумму расходов, обратитесь к менеджеру по выставлению счетов вашей организации. Дополнительные сведения см. в разделе [Просмотр данных об использовании {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

## Пространства кода можно удалять автоматически

Пространство кода будет удалено автоматически при удалении вашего пользователя из организации или репозитория.

## Удаление неиспользуемых пространств кода

Вы можете вручную удалить пространства кода на странице https://github.com/codespaces, а также в {% data variables.product.prodname_vscode %}. Чтобы уменьшить размер пространства кода, можно вручную удалить файлы с помощью терминала или в {% data variables.product.prodname_vscode %}.

## Дополнительные материалы

- [Управление выставлением счетов для {% data variables.product.prodname_github_codespaces %} в организации](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization)
