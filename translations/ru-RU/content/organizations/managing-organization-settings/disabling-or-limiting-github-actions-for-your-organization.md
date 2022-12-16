---
title: Отключение или ограничение GitHub Actions для вашей организации
intro: "Владельцы могут отключать, включать и ограничивать GitHub\_Actions для своей организации."
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Disable or limit actions
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2be7794de8f1e189641a1769a9f8f82caf984c5f
ms.sourcegitcommit: 56bb42b36f77ece7c9845a350d3764807de00eac
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101266'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о разрешениях {% data variables.product.prodname_actions %} для вашей организации

{% data reusables.actions.disabling-github-actions %} Дополнительные сведения о {% data variables.product.prodname_actions %} см. в разделе [Сведения о {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions).

Вы можете включить {% data variables.product.prodname_actions %} для всех репозиториев в организации. {% data reusables.actions.enabled-actions-description %} Вы можете отключить {% data variables.product.prodname_actions %} для всех репозиториев в организации. {% data reusables.actions.disabled-actions-description %}

Кроме того, можно включить {% data variables.product.prodname_actions %} для всех репозиториев в организации, но при этом ограничить действия {% ifversion actions-workflow-policy %}и повторно используемые рабочие процессы{% endif %}, которые могут выполняться рабочим процессом.

## Управление разрешениями {% data variables.product.prodname_actions %} для организации

Вы можете отключить {% data variables.product.prodname_actions %} для всех репозиториев в вашей организации или разрешить только для определенных репозиториев. Вы также можете ограничивать использование общедоступных действий{% ifversion actions-workflow-policy %} и повторно используемых рабочих процессов{% endif %}, чтобы пользователи могли использовать только локальные действия {% ifversion actions-workflow-policy %}и повторно используемые рабочие процессы{% endif %}, существующие в {% ifversion ghec or ghes or ghae %}предприятии{% else %}организации{% endif %}.

{% note %}

**Примечание.** Возможно, вы не сможете управлять этими параметрами, если ваша организация управляется предприятием, для которого настроена политика переопределения. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)».

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. В разделе "Политики" выберите параметр.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Настройка политики действий для этой организации](/assets/images/help/organizations/actions-policy-with-workflows.png) {%- else %} ![Настройка политики действий для этой организации](/assets/images/help/organizations/actions-policy.png) {%- endif %}
1. Выберите команду **Сохранить**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. В разделе "Политики" выберите {% data reusables.actions.policy-label-for-select-actions-workflows %} и добавьте в список необходимые действия{% ifversion actions-workflow-policy %} и повторно используемые рабочие процессы{% endif %}.

   {% ifversion actions-workflow-policy %} ![Добавление действий и повторно используемых рабочих процессов в список разрешенных](/assets/images/help/organizations/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Добавление действий в список разрешенных](/assets/images/help/organizations/actions-policy-allow-list.png) {%- else %} ![Добавление действий в список разрешенных](/assets/images/enterprise/github-ae/organizations/actions-policy-allow-list.png) {%- endif %}
1. Выберите команду **Сохранить**.

{% ifversion fpt or ghec %}
## Настройка требуемого утверждения для рабочих процессов из общедоступных вилок

{% data reusables.actions.workflow-run-approve-public-fork %}

Можно настроить это поведение для организации, выполнив указанную ниже процедуру. Изменение этого параметра переопределяет набор конфигураций на уровне предприятия.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

{% ifversion fpt or ghes or ghec %}
## Включение рабочих процессов для частных вилок репозитория

{% data reusables.actions.private-repository-forks-overview %}

{% ifversion ghec or ghae or ghes %}Если политика отключена для предприятия, ее нельзя включить для организаций.{% endif %} Если политика отключена для организации, ее нельзя включить для репозиториев. Если организация включает политику, ее можно отключить для отдельных репозиториев.

{% data reusables.actions.private-repository-forks-options %}

### Настройка политики частной вилки для организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %} {% endif %}

## Настройка разрешений `GITHUB_TOKEN` для организации

{% data reusables.actions.workflow-permissions-intro %}

Вы можете задать разрешения по умолчанию для `GITHUB_TOKEN` в параметрах организаций или репозиториев. Если выбрать параметр с ограниченным доступом в качестве значения по умолчанию в параметрах организации, этот же параметр будет выбран в параметрах репозиториев в организации, а разрешительный параметр будет отключен. Если организация принадлежит к учетной записи {% data variables.product.prodname_enterprise %}, а в параметрах предприятия выбрано значение по умолчанию с большими ограничениями, вы не сможете выбрать значение по умолчанию с меньшими ограничениями в параметрах организации.

{% data reusables.actions.workflow-permissions-modifying %}

### Настройка разрешений `GITHUB_TOKEN` по умолчанию

{% ifversion allow-actions-to-approve-pr-with-ent-repo  %} По умолчанию при создании новой организации `GITHUB_TOKEN` имеет доступ только для чтения к области `contents`.
{% endif %}

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. В разделе "Разрешения рабочего процесса" выберите, должен ли `GITHUB_TOKEN` иметь доступ для чтения и записи для всех областей или только доступ для чтения для области `contents`.

   {% ifversion allow-actions-to-approve-pr %}    {% ifversion allow-actions-to-approve-pr-with-ent-repo %} ![ Задайте GITHUB_TOKEN разрешения для этой организации](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-creation-approval.png) {% else %} ![Задайте GITHUB_TOKEN разрешения для этой организации](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-approval.png) {% endif %} {% else %} ![Задайте GITHUB_TOKEN разрешения для этой организации](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-approval.png) {% endif %}
1. Нажмите **Сохранить**, чтобы применить настроенные параметры.

{% ifversion allow-actions-to-approve-pr %}
### Запрет {% data variables.product.prodname_actions %} на {% ifversion allow-actions-to-approve-pr-with-ent-repo %}создание или {% endif %}утверждение запросов на вытягивание

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

По умолчанию при создании организации рабочим процессам не разрешено {% ifversion allow-actions-to-approve-pr-with-ent-repo %}создавать или {% endif %}утверждать запросы на вытягивание.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.settings-sidebar-actions-general %}
1. В разделе "Разрешения рабочего процесса" используйте параметр **Разрешить GitHub Actions {% ifversion allow-actions-to-approve-pr-with-ent-repo %}создавать и {% endif %}утверждать запросы на вытягивание**, чтобы настроить, может ли `GITHUB_TOKEN` {% ifversion allow-actions-to-approve-pr-with-ent-repo %}создавать и {% endif %}утверждать запросы на вытягивание.

   {% ifversion allow-actions-to-approve-pr %}    {% ifversion allow-actions-to-approve-pr-with-ent-repo %} ![ Задайте GITHUB_TOKEN разрешение на утверждение запроса на вытягивание для этой организации](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-creation-approval.png) {% else %} ![Задайте разрешение на утверждение запроса на вытягивание GITHUB_TOKEN для этой организации {% endif %} {% else %} ![Задайте GITHUB_TOKEN разрешение на утверждение запроса на вытягивание для этой организации](/assets/images/help/settings/actions-workflow-permissions-organization-with-pr-approval.png)](/assets/images/help/settings/actions-workflow-permissions-organization.png) {% endif %}
1. Нажмите **Сохранить**, чтобы применить настроенные параметры.

{% endif %}

{% ifversion actions-cache-org-ui %}

## Управление хранилищем кэша {% variables.product.prodname_actions %} для вашей организации

Администраторы организации могут просматривать {% ifversion actions-cache-admin-ui %}и управлять {% endif %}{% данных variables.product.prodname_actions %} кэша для всех репозиториев в организации. 

### Просмотр хранилища кэша {% variables.product.prodname_actions %} по репозиторию

Для каждого репозитория в организации можно узнать, сколько хранилища кэша используется, количество активных кэшей и если репозиторий приближается к общему размеру кэша. Дополнительные сведения об использовании кэша и процессе вытеснения см. в разделе "[Кэширование зависимостей для ускорения рабочих процессов](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#usage-limits-and-eviction-policy)".

{% данных reusables.profile.access_profile %} {% данных reusables.profile.access_org %} {% данных reusables.profile.org_settings %}
1. На левой боковой панели щелкните {% octicon "play" aria-label="Значок {% данных variables.product.prodname_actions %}" %} **Действия**, а затем нажмите кнопку **"Кэши**".
1. Просмотрите список репозиториев для получения сведений о кэшах {% данных variables.product.prodname_actions %}. Щелкните имя репозитория, чтобы просмотреть дополнительные сведения о кэшах репозитория.

{% ifversion actions-cache-admin-ui %}

### Настройка хранилища кэша {% variables.product.prodname_actions %} для вашей организации

{% данных reusables.actions.cache-default-size %}

Вы можете настроить предельный размер для кэшей {% данных variables.product.prodname_actions %}, которые будут применяться к каждому репозиторию в организации. Ограничение размера кэша для организации не может превышать предельный размер кэша, установленный в корпоративной политике. Администраторы репозитория смогут установить меньшее ограничение в своих репозиториях.

{% данных reusables.profile.access_profile %} {% данных reusables.profile.access_org %} {% данных reusables.profile.org_settings %} {% данных reusables.organizations.settings-sidebar-actions-general %} {% данных reusables.actions.change-cache-size-limit %}

{% endif %}

{% endif %}
