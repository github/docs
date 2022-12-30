---
title: Управление параметрами GitHub Actions для репозитория
intro: 'Вы можете отключить или настроить {% data variables.product.prodname_actions %} для определенного репозитория.'
redirect_from:
  - /github/administering-a-repository/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository
  - /github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Actions
  - Permissions
  - Pull requests
shortTitle: Manage GitHub Actions settings
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b6e782788c35409a66110dd48496e639a8bbe373
ms.sourcegitcommit: 56bb42b36f77ece7c9845a350d3764807de00eac
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148101242'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о разрешениях {% data variables.product.prodname_actions %} для вашего репозитория

{% data reusables.actions.disabling-github-actions %} Дополнительные сведения о {% data variables.product.prodname_actions %} см. в разделе [Сведения о {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/about-github-actions).

Вы можете включить {% data variables.product.prodname_actions %} для своего репозитория. {% data reusables.actions.enabled-actions-description %} Вы можете полностью отключить {% data variables.product.prodname_actions %} для своего репозитория. {% data reusables.actions.disabled-actions-description %}

Кроме того, можно включить {% data variables.product.prodname_actions %} в своем репозитории, но при этом ограничить действия{% ifversion actions-workflow-policy %} и многократно используемые рабочие процессы{% endif %}, которые могут выполняться рабочим процессом.

## Управление разрешениями {% data variables.product.prodname_actions %} для вашего репозитория

Вы можете отключить {% data variables.product.prodname_actions %} для репозитория или задать политику, определяющую, какие действия{% ifversion actions-workflow-policy %} и многократно используемые рабочие процессы{% endif %} можно будет использовать в репозитории.

{% note %}

**Примечание.** Вы не сможете управлять этими параметрами, если ваша организация использует политику переопределения или управляется предприятием, которое использует такую политику. Дополнительные сведения см. в разделах [Отключение или ограничение использования {% data variables.product.prodname_actions %} для организации](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization) или [Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise).

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. Выберите желаемый параметр в разделе "Разрешения действий".

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {% ifversion actions-workflow-policy %} ![Настройка политики действий для этого репозитория](/assets/images/help/repository/actions-policy-with-workflows.png) {%- else %} ![Установка политики действий для этого репозитория](/assets/images/help/repository/actions-policy.png) {%- endif %}
1. Выберите команду **Сохранить**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. В разделе "Разрешения действий" выберите {% data reusables.actions.policy-label-for-select-actions-workflows %} и добавьте необходимые действия в список.

   {% ifversion actions-workflow-policy%} ![Добавить действия и многократно используемые рабочие процессы в список разрешенных](/assets/images/help/repository/actions-policy-allow-list-with-workflows.png) {%- elsif ghes %} ![Добавить действия в список разрешенных](/assets/images/help/repository/actions-policy-allow-list.png) {%- else %} ![Добавить действия в список разрешенных](/assets/images/enterprise/github-ae/repository/actions-policy-allow-list.png) {%- endif %}
1. Выберите команду **Сохранить**.

{% ifversion fpt or ghec %}
## Управление изменениями из вилок в рабочие процессы в общедоступных репозиториях

{% data reusables.actions.workflow-run-approve-public-fork %}

Можно настроить это поведение для репозитория, выполнив указанную ниже процедуру. Изменение этого параметра переопределяет набор конфигураций на уровне организации или предприятия.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %} {% endif %}

## Включение рабочих процессов для вилок частных репозиториев

{% data reusables.actions.private-repository-forks-overview %}

Если политика отключена для {% ifversion ghec or ghae or ghes %}предприятия или{% endif %} организации, включить ее для репозитория невозможно.

{% data reusables.actions.private-repository-forks-options %}

### Настройка политики вилок для частного репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.private-repository-forks-configure %}

## Настройка разрешений `GITHUB_TOKEN` для репозитория

{% data reusables.actions.workflow-permissions-intro %}

Разрешения по умолчанию можно также настроить в параметрах организации. Если репозиторий принадлежит организации и в параметрах организации выбраны более строгие настройки по умолчанию, в параметрах организации выбирается тот же параметр, что и в параметрах репозитория, а разрешающий параметр отключается.

{% data reusables.actions.workflow-permissions-modifying %}

### Настройка разрешений `GITHUB_TOKEN` по умолчанию

{% ifversion allow-actions-to-approve-pr-with-ent-repo %} По умолчанию при создании нового репозитория в личной учетной записи `GITHUB_TOKEN` получает только доступ к на чтение к области `contents`. Если вы создаете новый репозиторий в организации, этот параметр наследуется из настроек организации.
{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. В разделе "Разрешения рабочего процесса" укажите, должен ли `GITHUB_TOKEN` иметь доступ на чтение и запись ко всем областей или только доступ на чтение к области `contents`.

   {% ifversion allow-actions-to-approve-pr-with-ent-repo %} ![ Задайте разрешения GITHUB_TOKEN для этого репозитория {% else %} ![Задайте разрешения GITHUB_TOKEN для этого репозитория](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)](/assets/images/help/settings/actions-workflow-permissions-repository.png) {% endif %}

1. Нажмите **Сохранить**, чтобы применить настроенные параметры.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Запрет {% data variables.product.prodname_actions %} создавать или утверждать запросы на вытягивание

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

По умолчанию при создании репозитория в личной учетной записи рабочим процессам не разрешается создавать или утверждать запросы на вытягивание. Если вы создаете новый репозиторий в организации, этот параметр наследуется из настроек организации.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %}
1. В разделе "Разрешения рабочего процесса" используйте параметр **Разрешить GitHub Actions создавать и утверждать запросы на вытягивание**, чтобы настроить для `GITHUB_TOKEN` возможность создания и утверждения запросов на вытягивание.

   ![Настройка разрешений GITHUB_TOKEN для этого репозитория](/assets/images/help/settings/actions-workflow-permissions-repository-with-pr-approval.png)
1. Нажмите **Сохранить**, чтобы применить настроенные параметры.
{% endif %}

{% ifversion ghes > 3,3 или ghae > 3,3 или ghec %}
## Разрешение доступа к компонентам во внутреннем репозитории

Участники предприятия могут использовать внутренние репозитории для работы с проектами без предоставления общего доступа к информации. Дополнительные сведения см. в разделе [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories).

Описанные ниже действия позволяют настроить возможность доступа к {% ifversion internal-actions%}действиям и {% endif %}рабочим процессам во внутреннем репозитории извне.{% ifversion internal-actions %} Дополнительные сведения см. в разделе [Общий доступ к действиям и рабочим процессам в организации](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise). Кроме того, настройки и выяснения уровня доступа можно использовать REST API. Дополнительные сведения см. в разделах [Получение уровня доступа для рабочих процессов за пределами репозитория](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#get-the-level-of-access-for-workflows-outside-of-the-repository) и [Установка уровня доступа для рабочих процессов за пределами репозитория](/rest/reference/actions#get-the-level-of-access-for-workflows-outside-of-the-repository#set-the-level-of-access-for-workflows-outside-of-the-repository).{% endif %}

1. В {% data variables.product.prodname_dotcom %} перейдите на главную страницу внутреннего репозитория.
1. Нажмите **Параметры** {% octicon "gear" aria-label="The gear icon" %} под именем репозитория.
{% data reusables.repositories.settings-sidebar-actions-general %}
1. В разделе **Доступ** выберите один из параметров доступа:

   {% ifversion ghes > 3.4 или ghae > 3,4 или ghec %}![Настройка доступа к компонентам Actions](/assets/images/help/settings/actions-access-settings.png){% else %}![Настройка доступа к компонентам Actions](/assets/images/enterprise/3.4/actions-access-settings.png){% endif %}

   * **Недоступно** — рабочие процессы в других репозиториях не могут получить доступ к этому репозиторию.
   * **Доступ к репозиториям в организации "НАЗВАНИЕ ОРГАНИЗАЦИИ"** — {% ifversion ghes > 3.4 или ghae > 3.4 или ghec %}Рабочие процессы в других репозиториях, входящих в организацию "НАЗВАНИЕ ОРГАНИЗАЦИИ", могут получить доступ к действиям и рабочим процессам в этом репозитории. Доступ разрешен только из частных или внутренних репозиториев.{% else %}Рабочие процессы в других репозиториях могут использовать рабочие процессы в этом репозитории, если они относятся к той же организации и являются частными или внутренними.{% endif %}
   * **Доступ к репозиториям в организации ENTERPRISE NAME** : {% ifversion ghes > 3.4 или ghae > 3.4 или ghec %}Рабочие процессы в других репозиториях, которые входят в состав предприятия enterprise NAME, могут получить доступ к действиям и рабочим процессам в этом репозитории. Доступ разрешен только из частных или внутренних репозиториев.{% else %}Рабочие процессы в других репозиториях могут использовать рабочие процессы в этом репозитории, если они относятся к тому же предприятию и являются частными или внутренними.{% endif %}
1. Нажмите **Сохранить**, чтобы применить настроенные параметры.
{% endif %}

## Настройка периода хранения для артефактов и журналов {% data variables.product.prodname_actions %} в репозитории

Период хранения для артефактов и журналов {% data variables.product.prodname_actions %} в репозитории можно настраивать.

{% data reusables.actions.about-artifact-log-retention %}

Кроме того, можно настраивать желаемый период хранения для конкретного артефакта, созданного рабочим процессом. Дополнительные сведения см. в разделе [Настройка периода хранения артефакта](/actions/managing-workflow-runs/removing-workflow-artifacts#setting-the-retention-period-for-an-artifact).

## Настройка периода хранения для репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-general %} {% data reusables.actions.change-retention-period-for-artifacts-logs  %}

{% ifversion actions-cache-policy-apis %}

## Настройка хранилища кэша для репозитория

{% data reusables.actions.cache-default-size %} Однако размеры по умолчанию могут отличаться, если владелец организации их изменил. {% data reusables.actions.cache-eviction-process %}

Общий размер хранилища кэша для репозитория можно задать до максимального размера, разрешенного {% ifversion actions-cache-admin-ui %}organization или {% endif %} корпоративной политики{% ifversion actions-cache-admin-ui %}s{% endif %}.

{% ifversion actions-cache-admin-ui %}

{% данных reusables.repositories.navigate-to-repo %} {% данных reusables.repositories.sidebar-settings %} {% данных reusables.repositories.settings-sidebar-actions-general %} {% данных reusables.actions.change-cache-size-limit %}

{% else %}

Настройки репозитория для хранилища кэша {% data variables.product.prodname_actions %} в настоящее время можно изменить только с помощью REST API:

* Сведения о текущем ограничении хранилища кэша для репозитория см. в разделе [Получение политики использования кэша GitHub Actions для репозитория](/rest/actions/cache#get-github-actions-cache-usage-policy-for-a-repository).
* Сведения об изменении ограничения хранилища кэша для репозитория см. в разделе [Настройка политики использования кэша GitHub Actions для репозитория](/rest/actions/cache#set-github-actions-cache-usage-policy-for-a-repository).

{% data reusables.actions.cache-no-org-policy %}

{% endif %}

{% endif %}
