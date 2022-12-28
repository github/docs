---
title: Удаление артефактов рабочего процесса
intro: 'Вы можете освободить хранилище {% data variables.product.prodname_actions %}, удалив артефакты до истечения срока действия {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove workflow artifacts
ms.openlocfilehash: e5fe2bb21f72785f55d22fffd9ba46420d791fce
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199805'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Удаление артефакта

{% warning %}

**Предупреждение.** После удаления артефакта его нельзя восстановить.

{% endwarning %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.actions.artifact-log-retention-statement %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. В разделе **Артефакты** щелкните {% octicon "trash" aria-label="The trash icon" %} рядом с артефактом, который вы хотите удалить.
    
    ![Раскрывающееся меню удаления артефакта](/assets/images/help/repository/actions-delete-artifact-updated.png)
    

## Настройка периода хранения для артефакта

Периоды хранения артефактов и журналов можно настраивать на уровне репозитория, организации и предприятия. Дополнительные сведения см. в разделе {% ifversion fpt or ghec or ghes %}[Ограничения использования, выставление счетов и администрирование](/actions/reference/usage-limits-billing-and-administration#artifact-and-log-retention-policy).{% elsif ghae %}[Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository), [Настройка периода хранения для {% data variables.product.prodname_actions %} для артефактов и журналов в вашей организации](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) или [Принудительное применение политик для {% data variables.product.prodname_actions %} в вашем предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).{% endif %}

Вы также можете определить настраиваемый период хранения для отдельных артефактов с помощью действия `actions/upload-artifact` в рабочем процессе. Дополнительные сведения см. в разделе [Хранение данных рабочего процесса в качестве артефактов](/actions/guides/storing-workflow-data-as-artifacts#configuring-a-custom-artifact-retention-period).

## Поиск даты окончания срока действия артефакта

Вы можете использовать API для подтверждения даты запланированного удаления артефакта. Дополнительные сведения см. в описании значения `expires_at`, возвращаемого параметром [Список артефактов для репозитория](/rest/reference/actions#artifacts).
