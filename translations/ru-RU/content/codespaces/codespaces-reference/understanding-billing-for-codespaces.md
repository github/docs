---
title: Общие сведения о выставлении счетов для Codespaces
intro: Узнайте, как выставляется счет за использование {% data variables.product.prodname_codespaces %}.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: e8a5b24808e4d1c8dbf216933c1a519c26a46ad4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145125352"
---
В этой статье объясняется, как выполняется выставление счетов для пространств кода и как менеджер по выставлению счетов вашей организации может помочь вам в этом.

## <a name="getting-access-to--data-variablesproductprodname_codespaces-"></a>Получение доступа к {% data variables.product.prodname_codespaces %}

Администратор вашей организации может разрешить использование {% data variables.product.prodname_codespaces %} только для отдельных личных учетных записей. Чтобы получить доступ, вам необходимо обратиться к менеджеру по выставлению счетов. Дополнительные сведения см. в разделе [Управление доступом и безопасностью для пространств кода](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces).

## <a name="how-much-it-costs-to-use--data-variablesproductprodname_codespaces-"></a>Какова стоимость использования {% data variables.product.prodname_codespaces %}

Сведения о расценках на использование {% data variables.product.prodname_codespaces %} см. в разделе [Расценки на использование {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

## <a name="how-your-codespace-usage-is-billed"></a>Выставление счетов за использование пространства кода

Плата за пространство кода взимается за время использования вычислений в минутах и объем используемого хранилища на диске.

Если включена предварительная сборка пространств кода, это приведет к дополнительным расходам. Дополнительные сведения см. в разделе [О предварительных сборках Codespaces](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds).

### <a name="understanding-what-compute-minutes-are"></a>Общие сведения об объеме использования вычислений в минутах
Плата за пространство кода взимается за количество минут, в течение которых оно было активно. Если в окне пространств кода не выполняется никаких действий в течение 30 минут, оно будет автоматически закрыто, и выставление счетов за вычисления для пространства кода будет завершено до тех пор, пока пространство кода не будет запущено снова.

### <a name="understanding-how-codespace-storage-is-billed"></a>Общие сведения о выставлении счетов за хранилище для пространства кода
Для {% data variables.product.prodname_codespaces %} хранилище включает все файлы, относящиеся к вашему пространству кода, например, клонированный репозиторий, файлы конфигурации и расширения. Плата за хранилище взимается во время завершения работы пространства кода. Выставление счетов за хранилище для пространства кода заканчивается при его удалении из https://github.com/codespaces вручную.

## <a name="how-spending-limits-work"></a>Как работает предельная сумма расходов

Чтобы ваша организация смогла использовать {% data variables.product.prodname_codespaces %}, менеджер по выставлению счетов должен установить предельную сумму расходов. Дополнительные сведения см. в разделе [Управление предельными суммами расходов для {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces). 

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>Экспорт изменений при достижении предельной суммы расходов

{% data reusables.codespaces.exporting-changes %}

## <a name="checking-your-current-usage-and-limits"></a>Проверка текущего использования и предельной суммы расходов
Если вам нужно проверить текущее использование или предельную сумму расходов, обратитесь к менеджеру по выставлению счетов вашей организации. Дополнительные сведения см. в разделе [Просмотр сведений об использовании для Codespaces](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage).

## <a name="codespaces-can-be-automatically-deleted"></a>Пространства кода можно удалять автоматически

Пространство кода будет удалено автоматически при удалении вашего пользователя из организации или репозитория.

## <a name="deleting-your-unused-codespaces"></a>Удаление неиспользуемых пространств кода

Вы можете вручную удалить пространства кода на странице https://github.com/codespaces, а также в {% data variables.product.prodname_vscode %}. Чтобы уменьшить размер пространства кода, можно вручную удалить файлы с помощью терминала или в {% data variables.product.prodname_vscode %}.

## <a name="further-reading"></a>Дополнительные материалы

- [Управление выставлением счетов для Codespaces в вашей организации](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
