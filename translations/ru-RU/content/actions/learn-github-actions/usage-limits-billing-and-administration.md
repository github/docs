---
title: 'Ограничения использования, выставление счетов и администрирование'
intro: 'Существуют ограничения на использование рабочих процессов {% data variables.product.prodname_actions %}. Плата за использование применяется к репозиториям, для которых превышено ограничение на объем бесплатных минут и хранилища.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
ms.openlocfilehash: 5abd041d41ab2227aa87c383f39c94876544718c
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191857'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о выставлении счетов за {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} Дополнительные сведения см. в статьях "[Общие сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}."{% elsif ghes or ghec %}" и "[Сведения о {% data variables.product.prodname_actions %} для предприятий](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)."{% endif %}

{% ifversion fpt or ghec %} {% data reusables.actions.actions-billing %} Дополнительные сведения см. в статье "[Сведения о выставлении счетов за {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".
{% else %} Использование GitHub Actions бесплатно для экземпляров {% data variables.product.prodname_ghe_server %}, использующих локально размещенные средства выполнения. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners)."
{% endif %}


{% ifversion fpt or ghec %}

## Доступность

{% data variables.product.prodname_actions %} доступен во всех продуктах {% data variables.product.prodname_dotcom %}, но {% data variables.product.prodname_actions %} недоступен для частных репозиториев, принадлежащих учетным записям, использующим устаревшие планы для каждого репозитория. {% data reusables.gated-features.more-info %}

{% endif %}

## Ограничения использования

{% data variables.product.prodname_actions %} Существуют некоторые ограничения на использование {% data variables.product.prodname_actions %}при использовании средств выполнения, размещенных в {% data variables.product.prodname_dotcom %}. Эти ограничения могут меняться.

{% note %}

**Примечание.** Для локально размещенных средств выполнения действуют различные ограничения использования. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."

{% endnote %}

- **Время выполнения задания.** Каждое задание в рабочем процессе может выполняться до 6 часов. При достижении этого передела выполнение задания прекращается и завершается сбоем.
{% data reusables.actions.usage-workflow-run-time %} {% data reusables.actions.usage-api-requests %}
- **Параллельные задания** . Количество одновременных заданий, которые можно выполнять в учетной записи, зависит от плана GitHub, а также от типа используемого средства выполнения. При превышении значения все дополнительные задания помещаются в очередь.

  **Стандартные средства выполнения тестов, размещенные в {% data variables.product.prodname_dotcom %}**

  | План GitHub | Общее количество одновременных заданий | Максимальное количество одновременных заданий macOS |
  |---|---|---|
  | Бесплатный | 20 | 5 |
  | Профессиональная | 40 | 5 |
  | Группа | 60 | 5 |
  | Предприятие | 180 | 50 |

  **{% data variables.product.prodname_dotcom %}, размещенные в {% data variables.actions.hosted_runner %}s**

  | План GitHub | Общее количество одновременных заданий | Максимальное количество одновременных заданий macOS |
  |---|---|---|
  | Все | 500 | Недоступно |

  {% note %}

  **Примечание.** При необходимости клиенты корпоративных планов могут запрашивать более высокие ограничения для параллельных заданий. Для получения дополнительной информации обратитесь к {% data variables.contact.contact_ent_support %} или своему представителю по продажам.

  {% endnote %}
  
- **Матрица заданий.** {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

{% else %} Ограничения использования применяются к локально размещенным средствам выполнения. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)."
{% endif %}

{% ifversion fpt or ghec %}
## Политика использования

Помимо ограничений использования, необходимо убедиться, что вы используете {% data variables.product.prodname_actions %} согласно [Условиям предоставления услуг GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/). Дополнительные сведения об условиях для {% data variables.product.prodname_actions %} см. в документе о [дополнительных условиях для продукта GitHub](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Выставление счетов за многократно используемые рабочие процессы

{% data reusables.actions.reusable-workflows-enterprise-beta %}

При повторном использовании рабочего процесса выставление счетов всегда связано с рабочим процессом вызывающей стороны. Назначение размещенных в {% data variables.product.prodname_dotcom %} средств выполнения всегда оценивается только с использованием контекста вызывающей стороны. Вызывающая сторона не может использовать размещенные в {% data variables.product.prodname_dotcom %} средства выполнения из вызываемого репозитория. 

Дополнительные сведения см. в статье "[Многократное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows)."
{% endif %}

## Политика хранения артефактов и журналов

Вы можете настроить значение артефакта по умолчанию и срок хранения журнала для учетной записи репозитория, организации или предприятия.

{% data reusables.actions.about-artifact-log-retention %}

Дополнительные сведения можно найти в разделе

- "[Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)"
- "[Настройка периода хранения для {% data variables.product.prodname_actions %} для артефактов и журналов в организации](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)"
- "[Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Отключение или ограничение использования {% data variables.product.prodname_actions %} для репозитория или организации

{% data reusables.actions.disabling-github-actions %}

Дополнительные сведения см. в разделе:
- "[Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)"
- "[Отключение или ограничение использования {% data variables.product.prodname_actions %} для репозитория или организации](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)"
- "[Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)"

## Отключение и включение рабочих процессов

Вы можете включать и отключать отдельные рабочие процессы в репозитории в {% data variables.product.prodname_dotcom %}.

{% data reusables.actions.scheduled-workflows-disabled %}

Дополнительные сведения см. в статье "[Отключение и включение рабочего процесса](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)".
