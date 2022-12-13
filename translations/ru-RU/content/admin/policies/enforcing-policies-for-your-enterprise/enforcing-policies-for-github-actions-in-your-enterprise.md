---
title: Применение политик для GitHub Actions в вашем предприятии
intro: 'Вы можете применить политики для {% data variables.product.prodname_actions %} в организациях предприятия или разрешить настройку политик в каждой организации.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
ms.openlocfilehash: 6b26b4fad3dce53aa273e3303645e68c64adfd87
ms.sourcegitcommit: 56bb42b36f77ece7c9845a350d3764807de00eac
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101250'
---
{% data reusables.actions.enterprise-beta %}

## Сведения о политиках для {% data variables.product.prodname_actions %} в вашем предприятии

{% data variables.product.prodname_actions %} помогает членам вашего предприятия автоматизировать рабочие процессы разработки программного обеспечения в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Общие сведения о {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions).

{% ifversion ghes %} Если включить {% данных variables.product.prodname_actions %}, любая {% остальных %}Любая организация {% endif %} в {% данных variables.location.product_location %} может использовать {% данных variables.product.prodname_actions %}. Вы можете применять политики для управления тем, как члены предприятия в {% data variables.product.product_name %} используют {% data variables.product.prodname_actions %}. По умолчанию владельцы организации могут управлять тем, как участники используют {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Отключение или ограничение использования {% data variables.product.prodname_actions %} для вашей организации](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization).

## Применение политики для ограничения использования {% data variables.product.prodname_actions %} в вашем предприятии

Вы можете отключить {% data variables.product.prodname_actions %} для всех организаций в вашем предприятии или разрешить только для определенных организаций. Вы также можете ограничивать использование общедоступных действий {% ifversion actions-workflow-policy %}и повторно используемых рабочих процессов{% endif %}, чтобы пользователи могли использовать только локальные действия {% ifversion actions-workflow-policy %}и повторно используемые рабочие процессы{% endif %}, существующие в вашем предприятии.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. В разделе "Политики" выберите необходимые параметры.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %} {% note %}

   **Примечание:** Чтобы включить доступ к общедоступным действиям{% ifversion actions-workflow-policy %} и повторно используемым рабочим процессам{% endif %}, необходимо сначала настроить {% данных variables.location.product_location %} для подключения к {% данных variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделе [Включение автоматического доступа к действиям GitHub.com с помощью GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect).

   {% endnote %} {%- endif %} {% ifversion actions-workflow-policy %} ![Включение, отключение или ограничение действий для этой корпоративной учетной записи](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![Включение, отключение или ограничение действий для этой корпоративной учетной записи](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}
1. Выберите команду **Сохранить**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. В разделе "Политики" выберите {% data reusables.actions.policy-label-for-select-actions-workflows %} и добавьте в список необходимые действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %}.
   {% ifversion actions-workflow-policy %} ![Добавить действия и повторно используемые рабочие процессы в список разрешенных](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png) {%- elsif ghes or ghae %} ![Добавить действия в список разрешенных](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png) {%- elsif ghae %} ![Добавить действия в список разрешенных](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png) {%- endif %}

## Применение политики для хранения артефактов и журналов в вашем предприятии

{% data variables.product.prodname_actions %} может хранить файлы артефактов и журналов. Дополнительные сведения см. в разделе [Загрузка артефактов рабочего процесса](/actions/managing-workflow-runs/downloading-workflow-artifacts).

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Применение политики для запросов на вытягивание вилок в вашем предприятии

Вы можете применить политики для управления поведением {% данных variables.product.prodname_actions %} для {% данных variables.location.product_location %} при выполнении рабочих процессов из вилок участниками предприятия{% ifversion ghec %} или внешними участниками совместной работы{% endif %} рабочих процессов.

{% ifversion ghec %}

### Применение политики для утверждения запросов на вытягивание от внешних участников совместной работы

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Применение политики для запросов на вытягивание вилок в частных репозиториях

{% data reusables.actions.private-repository-forks-overview %}

Если политика включена на уровне предприятия, ее можно выборочно отключить в отдельных организациях или репозиториях. Если политика отключена на уровне предприятия, отдельные организации или репозитории не могут включить ее.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## Применение политики для разрешений рабочего процесса в вашем предприятии

{% data reusables.actions.workflow-permissions-intro %}

Вы можете задать разрешения по умолчанию для `GITHUB_TOKEN` в параметрах предприятия, организаций или репозиториев. Если выбрать параметр с ограниченным доступом в качестве параметра по умолчанию в настройках предприятия, это предотвратит выбор более разрешающего параметра в настройках организации или репозитория.

{% data reusables.actions.workflow-permissions-modifying %}

### Настройка разрешений `GITHUB_TOKEN` по умолчанию

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} По умолчанию при создании нового предприятия `GITHUB_TOKEN` имеет доступ только для чтения для области `contents`.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. В разделе "Разрешения рабочего процесса" выберите, должен ли `GITHUB_TOKEN` иметь доступ для чтения и записи для всех областей или только доступ для чтения для области `contents`.

   {% ifversion allow-actions-to-approve-pr-with-ent-repo %} ![ Задайте разрешения GITHUB_TOKEN для этого предприятия](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png) {% else %} ![Задайте разрешения GITHUB_TOKEN для этого предприятия](/assets/images/help/settings/actions-workflow-permissions-enterprise.png) {% endif %}
1. Нажмите **Сохранить**, чтобы применить настроенные параметры.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Запрет {% data variables.product.prodname_actions %} создавать или утверждать запросы на вытягивание

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

По умолчанию при создании нового предприятия рабочие процессы не могут создавать или утверждать запросы на вытягивание.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. В разделе "Разрешения рабочего процесса" используйте параметр **Разрешить GitHub Actions создавать и утверждать запросы на вытягивание**, чтобы настроить для `GITHUB_TOKEN` возможность создания и утверждения запросов на вытягивание.

   ![Настройка разрешений GITHUB_TOKEN для этого предприятия](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. Нажмите **Сохранить**, чтобы применить настроенные параметры.

{% endif %} {% endif %}

{% ifversion actions-cache-policy-apis %}

## Применение политики для хранилища кэша на предприятии

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

Однако можно настроить корпоративную политику, чтобы настроить общий размер кэша по умолчанию для каждого репозитория, а также максимальный общий размер кэша, допустимый для репозитория. Например, может потребоваться, чтобы общий размер кэша по умолчанию для каждого репозитория составил 5 ГБ, но при необходимости разрешить {% ifversion actions-cache-admin-ui %}организации и администраторам репозитория {% endif %} для настройки общего размера кэша до 15 ГБ.

{% ifversion actions-cache-admin-ui %} Владельцы организации могут задать меньший общий размер кэша, который применяется к каждому репозиторию в своей организации. {% endif %} Люди с доступом администратора к репозиторию может задать общий размер кэша для своего репозитория до максимального размера кэша, разрешенного корпоративным параметром {% ifversion actions-cache-admin-ui %}или organization{% endif %} политики.

{% ifversion actions-cache-admin-ui %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. В разделе "Артефакты, параметры кэша и журнала" в разделе " **Максимальный размер кэша**" введите значение, а затем нажмите кнопку **"Сохранить** ", чтобы применить этот параметр.
1. В разделе "Артефакты, параметры кэша и журнала" в разделе " **Ограничение размера кэша по умолчанию**" введите значение, а затем нажмите кнопку **"Сохранить** ", чтобы применить этот параметр.

{% else %}

Параметры политики для хранилища кэша {% data variables.product.prodname_actions %} в настоящее время можно изменить только с помощью REST API:

* Чтобы просмотреть текущие параметры корпоративной политики, см. раздел [Получение политики использования кэша GitHub Actions для предприятия](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise).
* Чтобы изменить параметры корпоративной политики, см. раздел [Настройка политики использования кэша GitHub Actions для предприятия](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise).

{% data reusables.actions.cache-no-org-policy %}

{% endif %}

{% endif %}
