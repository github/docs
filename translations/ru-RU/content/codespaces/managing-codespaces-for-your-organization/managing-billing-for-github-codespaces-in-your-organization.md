---
title: Управление выставлением счетов для GitHub Codespaces в организации
shortTitle: Manage billing
intro: Вы можете проверить потребление {% data variables.product.prodname_github_codespaces %} и задать ограничения использования.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
ms.openlocfilehash: 6cd1396cd0933999a99c334f00416b43f31ae249
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865188"
---
## Обзор

Сведения о расценках на {% data variables.product.prodname_github_codespaces %} см. в разделе [Расценки на {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing).

{% data reusables.codespaces.codespaces-billing %}

- Как владелец организации или менеджер по выставлению счетов вы можете управлять выставлением счетов за {% data variables.product.prodname_codespaces %} для вашей организации: [Сведения о выставлении счетов за Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces).
- Как владелец организации, вы можете перечислить активные на текущий момент и остановленные среды codespace для своей организации. Кроме этих сред codespace затраты за текущий месяц могут включать среды codespace, которые существовали ранее в текущем месяце, но затем были удалены.
- Для пользователей существует руководство, в котором объясняется, как работает выставление счетов: [Общие сведения о выставлении счетов на Codespaces](/codespaces/codespaces-reference/understanding-billing-for-codespaces).

## Ограничения использования

Вы можете установить ограничение на использование кодовых пространств в организации или репозитории. Это ограничение применяется к использованию вычислительных ресурсов и хранилищ для {% data variables.product.prodname_github_codespaces %}:
 
- **Минуты вычислений:** использование вычислений рассчитывается по фактическому количеству минут, используемых всеми экземплярами {% data variables.product.prodname_codespaces %} во время их активности. Результаты передаются в службу выставления счетов ежедневно, а счета выставляются ежемесячно. Вы можете установить предельную сумму расходов на использование {% data variables.product.prodname_codespaces %} в вашей организации. Дополнительные сведения см. в разделе [Управление предельными суммами расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces).

- **Использование хранилища:** в контексте выставления счетов за {% data variables.product.prodname_codespaces %} сюда входят все хранилища, используемые всеми средами codespace в вашей учетной записи. К ним относятся ресурсы, такие как клонированные репозитории, файлы конфигурации, расширения и т. д. Результаты передаются в службу выставления счетов ежедневно, а счета выставляются ежемесячно. В конце месяца {% data variables.product.prodname_dotcom %} округляет размер хранилища до ближайшего целого мегабайта. Чтобы проверить, сколько минут вычислений и гигабайт хранилища было использовано {% data variables.product.prodname_codespaces %}, см. раздел [Просмотр потребления {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

## Отключение или ограничение {% data variables.product.prodname_codespaces %}

Вы можете отключить любое использование {% data variables.product.prodname_github_codespaces %}, за которое вашей организации будут выставляться счета. Кроме того, можно указать, какие участники организации или участники совместной работы могут использовать {% data variables.product.prodname_codespaces %} за счет вашей организации. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_github_codespaces %} для организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization).

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Вы можете настроить, к каким репозиториям можно получить доступ из codespace, созданных для определенного репозитория. Дополнительные сведения см. в разделе [Управление доступом к другим репозиториям в кодовом пространстве](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

Вы можете ограничить выбор типов компьютеров, доступных для codespace, созданных из репозиториев, принадлежащих вашей организации. Это позволяет запретить пользователям использовать для codespace компьютеры, потребляющие слишком много ресурсов и вызывающие ненужные расходы. Дополнительные сведения см. в разделе [Ограничение доступа по типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

Вы также можете ограничить, какое время codespace может оставаться неиспользуемым до его автоматического удаления. Это поможет снизить затраты на хранение для {% data variables.product.prodname_codespaces %}. Дополнительные сведения см. в разделе [Ограничение периода хранения для codespace](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

## Удаление неиспользуемых кодовых пространств

Пользователи могут удалить собственные среды codespace в https://github.com/codespaces, а также в {% data variables.product.prodname_vscode %}. Чтобы уменьшить размер codespace, пользователи могут вручную удалить файлы с помощью терминала или в {% data variables.product.prodname_vscode_shortname %}. 

Как владелец организации вы можете удалить любую среду codespace в организации. Дополнительные сведения см. в разделе [Удаление codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization).

{% note %}

**Примечание.** Сodespace автоматически удаляются, после того, как они были остановлены и остаются неактивными в течение определенного количества дней. Дополнительные сведения см. в разделе [Ограничение периода хранения для codespace](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces). Сodespace может удалить вручную только пользователь, создавший его.

{% endnote %}

## Дополнительные материалы

- [Перечисление сред codespace в организации](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
