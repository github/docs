---
title: Управление затратами на GitHub Codespaces в организации
shortTitle: Manage Codespaces costs
intro: 'Вы можете проверить потребление {% data variables.product.prodname_github_codespaces %} и задать ограничения использования.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Billing
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
  - /codespaces/managing-codespaces-for-your-organization/managing-billing-for-github-codespaces-in-your-organization
ms.openlocfilehash: f11c6e22fa8a233fd4429b91390d25471ad17e6d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158712'
---
## Обзор

Плата за использование вычислительных ресурсов и хранилища организации взимается за {% data variables.product.prodname_github_codespaces %}. В этой статье объясняется, как вы, как владелец организации, можете управлять этими затратами.

Сведения о ценах на {% data variables.product.prodname_github_codespaces %} см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing).

## Предельная сумма расходов

Вы можете установить предельную сумму расходов для {% data variables.product.prodname_github_codespaces %} для вашей организации. Это ограничение применяется к общим затратам на вычислительные ресурсы и хранение для {% data variables.product.prodname_github_codespaces %}. Дополнительные сведения см. в разделе [Управление предельными суммами расходов для {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).
 
- **Использование вычислительных ресурсов:** Это общее время, в течение которого все экземпляры {% data variables.product.prodname_github_codespaces %} ("codespaces") были активны в течение месяца выставления счетов. 

- **Использование хранилища.** В целях выставления счетов за {% data variables.product.prodname_github_codespaces %} сюда входят все файлы, используемые всеми пространствами кода и предварительными сборками в вашей учетной записи. К ним относятся ресурсы, такие как клонированные репозитории, файлы конфигурации, расширения и т. д. 

Вы можете проверить использование вычислительных ресурсов и хранилища для {% data variables.product.prodname_github_codespaces %} за текущий месяц выставления счетов. Дополнительные сведения см. в разделе [Просмотр использования {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)".

{% note %}

**Примечание**. Предварительные сборки для {% data variables.product.prodname_github_codespaces %} создаются и обновляются с помощью {% data variables.product.prodname_actions %}. Это может повлечь за собой оплачиваемые расходы за {% data variables.product.prodname_actions %}. Вы можете задать предельную сумму расходов для {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделах [Сведения о выставлении счетов за {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds)и [Управление предельной суммой расходов для {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions). Плата за хранение созданных предварительных сборок взимается по той же ставке, что и для codespace, и включается в предельную сумму расходов {% data variables.product.prodname_github_codespaces %}.

{% endnote %}

## Отключение или ограничение {% data variables.product.prodname_codespaces %}

Вы можете отключить любое использование {% data variables.product.prodname_github_codespaces %}, за которое вашей организации будут выставляться счета. Кроме того, можно указать, какие участники организации или участники совместной работы могут использовать {% data variables.product.prodname_codespaces %} за счет вашей организации. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_github_codespaces %} для организации](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization).

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Вы можете настроить, к каким репозиториям можно получить доступ из codespace, созданных для определенного репозитория. Дополнительные сведения см. в разделе [Управление доступом к другим репозиториям в кодовом пространстве](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces).

Вы можете ограничить выбор типов компьютеров, доступных для codespace, созданных из репозиториев, принадлежащих вашей организации. Это позволяет запретить пользователям использовать для codespace компьютеры, потребляющие слишком много ресурсов и вызывающие ненужные расходы. Дополнительные сведения см. в разделе [Ограничение доступа по типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

Вы можете задать ограничение максимального времени ожидания простоя, чтобы ограничить максимальное время ожидания, которое пользователи могут установить для codespace, оплачиваемых для вашей организации. Это может снизить затраты на использование вычислительных ресурсов, создаваемые codespace, которые остаются запущенными в состоянии простоя, за счет остановки активного codespace по истечении более короткого времени ожидания. Дополнительные сведения см. в разделе [Ограничение тайм-аута простоя](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period).

Вы также можете ограничить, как долго остановленные пространства кода могут оставаться неиспользуемые, прежде чем они будут автоматически удалены. Это поможет снизить затраты на хранение для {% data variables.product.prodname_codespaces %}. Дополнительные сведения см. в разделе [Ограничение периода хранения для codespace](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

Владельцы репозитория, которые настраивают предварительные сборки для своего репозитория, могут снизить затраты на хранение предварительных сборок, настроив их для создания только в выбранных регионах. Дополнительные сведения см. в разделе [Настройка предварительных сборок](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).

## Удаление неиспользуемых кодовых пространств

Пользователи могут удалить собственные среды codespace в https://github.com/codespaces, а также в {% data variables.product.prodname_vscode %}. Чтобы уменьшить размер codespace, пользователи могут вручную удалить файлы с помощью терминала или в {% data variables.product.prodname_vscode_shortname %}. 

Как владелец организации вы можете удалить любую среду codespace в организации. Дополнительные сведения см. в разделе [Удаление codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization).

{% note %}

**Примечание:** Codespace автоматически удаляются после остановки и остаются неактивными в течение определяемого пользователем количества дней. Дополнительные сведения см. в статье [Настройка автоматического удаления сред codespace](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces). Как владелец организации вы можете задать максимальный срок хранения для codespace, принадлежащих вашей организации. Это переопределит личный параметр хранения пользователя. Дополнительные сведения см. в разделе [Ограничение периода хранения для codespace](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces).

{% endnote %}

## Дополнительные материалы

- [Перечисление сред codespace в организации](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
