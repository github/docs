---
title: Применение политик управления репозиториями в организации
intro: Вы можете применять политики для управления репозиториями в организациях предприятия или разрешить настройку политик в каждой организации.
permissions: Enterprise owners can enforce policies for repository management in an enterprise.
redirect_from:
  - /enterprise/admin/installation/configuring-the-default-visibility-of-new-repositories-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
  - /enterprise/admin/user-management/restricting-repository-creation-in-your-instance
  - /enterprise/admin/user-management/preventing-users-from-deleting-organization-repositories
  - /enterprise/admin/installation/setting-git-push-limits
  - /enterprise/admin/guides/installation/git-server-settings
  - /enterprise/admin/articles/setting-git-push-limits
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
  - /enterprise/admin/installation/disabling-the-merge-conflict-editor-for-pull-requests-between-repositories
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository
  - /enterprise/admin/articles/block-force-pushes
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
  - /enterprise/admin/developer-workflow/blocking-force-pushes
  - /enterprise/admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /admin/policies/enforcing-repository-management-policies-in-your-enterprise
  - /articles/enforcing-repository-management-settings-for-organizations-in-your-business-account
  - /articles/enforcing-repository-management-policies-for-organizations-in-your-enterprise-account
  - /articles/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-repository-management-policies-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
  - Security
shortTitle: Repository management policies
ms.openlocfilehash: 10b34ef1d0049ca68e1b0ec655f9d6351c06d396
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192644'
---
## Сведения о политиках управления репозиториями в организации

Вы можете применять политики для управления тем, как члены организации в {% data variables.product.product_name %} управляют репозиториями. Вы также можете разрешить владельцам организации управлять политиками для управления репозиториями. Дополнительные сведения см. в разделах [Создание репозиториев и управление ими](/repositories/creating-and-managing-repositories) и [Отделы и команды](/organizations).

{% ifversion ghes or ghae %}

## Настройка видимости по умолчанию для новых репозиториев

Каждый раз, когда кто-то создает репозиторий в вашей организации, он должен выбрать видимость для репозитория. Вы можете настроить вариант видимости, выбираемый в организации по умолчанию. Дополнительные сведения о видимости репозитория см. в разделе [О репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

Если владелец организации запретил ее сотрудникам создавать определенные типы репозиториев, сотрудники не смогут создавать репозитории этих типов, даже если параметр видимости по умолчанию соответствует такому типу. Дополнительные сведения см. в разделе [Применение политики создания репозиториев](#enforcing-a-policy-for-repository-creation).

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. В разделе "Видимость репозитория по умолчанию" в раскрывающемся меню выберите видимость по умолчанию.
  ![Раскрывающееся меню для выбора видимости репозитория по умолчанию для организации](/assets/images/enterprise/site-admin-settings/default-repository-visibility-settings.png)

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

{% endif %}

## Применение политики для разрешений базового репозитория

Во всех организациях, принадлежащих вашему предприятию, можно задать базовый уровень разрешений репозитория (нет, чтение, запись или администратор) для участников организации или разрешить владельцам администрировать этот параметр на уровне организации.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
4. В разделе "Базовые разрешения" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. В разделе "Базовые разрешения" используйте раскрывающееся меню и выберите политику.
  ![Раскрывающееся меню с параметрами политики разрешений репозитория](/assets/images/help/business-accounts/repository-permissions-policy-drop-down.png)


## Применение политики в отношении создания репозиториев

Во всех отделах, принадлежащих организации, можно разрешить всем сотрудникам создавать репозитории, разрешить создавать репозитории только владельцам отделов или разрешить владельцам управлять этим параметром на уровне отделов. 

Если разрешить участникам создавать репозитории в организациях, можно выбрать типы репозиториев (общедоступные, частные и внутренние), которые могут создавать участники.

{% ifversion enterprise-namespace-repo-setting %} {% ifversion ghec %} Если ваше предприятие использует {% data variables.product.prodname_emus %}, вы{% else %}Вы{% endif %} также можете запретить пользователям создавать репозитории, принадлежащие их учетным записям пользователей.
{% endif %}

{% data reusables.repositories.internal-repo-default %} Дополнительные сведения о внутренних репозиториях см. в разделе [Создание внутреннего репозитория](/articles/creating-an-internal-repository).

{% data reusables.organizations.repo-creation-constants %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. В разделе "Создание репозиториев" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %} {% data reusables.enterprise-accounts.repo-creation-policy %} {% data reusables.enterprise-accounts.repo-creation-types %} {% ifversion enterprise-namespace-repo-setting %}
1. При необходимости {% ifversion ghec %}, если ваше предприятие использует {% data variables.product.prodname_emus %} и вы хотите, чтобы {% endif %} не позволяло участникам предприятия создавать репозитории, принадлежащие учетным записям пользователей, выберите **Блокировать создание репозиториев пространства имен пользователей**.
  ![Снимок экрана: список отключенных параметров политики](/assets/images/help/business-accounts/restrict-personal-namespace-enabled-setting.png) вилки{% endif %}

## Применение политики в отношении создания вилок частных или внутренних репозиториев
Во всех отделах, принадлежащих организации, можно разрешить пользователям доступ к частному или внутреннему репозиторию с целью создания его вилки, запретить создание вилок частных или внутренних репозиториев или разрешить владельцам настраивать этот параметр на уровне отделов.

{% ifversion org-owners-limit-forks-creation %} Люди с разрешениями администратора может задать более детализированную политику вилки. Дополнительные сведения см. в разделе [Управление политикой ветвления для организации](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization).
{% endif %}

{% ifversion enterprise-namespace-repo-setting %} {% note %}

**Примечание:** Если {% ifversion ghec %}ваше предприятие использует {% data variables.product.prodname_emus %}, а {% endif %}ваша политика создания репозитория запрещает участникам предприятия создавать репозитории, принадлежащие их учетным записям пользователей, участникам не будет разрешено создавать вилку репозитория в учетных записях пользователей, независимо от политики вилки репозитория.

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. В разделе "Создание вилок репозиториев" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
2. В разделе "Вилка репозитория" используйте раскрывающееся меню и выберите политику.

  ![Раскрывающееся меню для выбора политики в отношении создания вилок репозиториев](/assets/images/help/business-accounts/repository-forking-policy-drop-down.png){% ifversion innersource-fork-policies %}
5. Если поддерживается создание вилок, можно указать, где пользователи могут разветвлять репозитории. Просмотрите сведения об изменении параметра и выберите политику.

    ![Снимок экрана: список параметров политики вилки репозитория](/assets/images/help/business-accounts/repository-forking-policy-settings.png){% endif %}
  
## Применение политики в отношении приглашения{% ifversion ghec %} внешних{% endif %} участников совместной работы в репозитории

Во всех организациях вашего предприятия можно разрешить сотрудникам приглашать{% ifversion ghec %} внешних{% endif %} участников совместной работы в репозитории, разрешить только владельцам организации приглашать участников{% ifversion ghec %} совместной работы{% endif %}{% ifversion prevent-org-admin-add-outside-collaborator %}, разрешить только владельцам предприятия приглашать участников{% ifversion ghec %} совместной работы{% endif %}{% endif %} или разрешить владельцам организации управлять этим параметром на уровне организации.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
3. В разделе "{% ifversion ghec %}Внешние участники совместной работы над репозиторием{% elsif ghes or ghae %}Приглашения в репозиторий{% endif %}" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. В разделе "{% ifversion ghec %}Внешние участники совместной работы над репозиторием{% elsif ghes or ghae %}Приглашения в репозиторий{% endif %}" в раскрывающемся меню выберите политику.

  {% ifversion ghec %} ![Раскрывающееся меню для выбора политики в отношении приглашения внешних участников совместной работы](/assets/images/help/business-accounts/repository-invitation-policy-drop-down.png) {% elsif ghes or ghae %} ![Раскрывающееся меню для выбора политики в отношении приглашения](/assets/images/enterprise/business-accounts/repository-invitation-policy-drop-down.png)  
  {% endif %}

## Применение политики в отношении имени ветви по умолчанию

Во всех отделах, принадлежащих организации, можно задать имя ветви по умолчанию для всех новых репозиториев, создаваемых сотрудниками. Вы можете применить это имя ветви по умолчанию во всех отделах или разрешить отделам задавать другое имя.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. На вкладке **Политики репозиториев** в поле "Имя ветви по умолчанию" введите имя ветви по умолчанию, которое будет использоваться для новых репозиториев.
    ![Текстовое поле для ввода имени ветви по умолчанию](/assets/images/help/business-accounts/default-branch-name-text.png)
4. Если необходимо применить имя ветви по умолчанию ко всем отделам организации, установите флажок **Применить в этой организации**.
    ![Флажок принудительного применения](/assets/images/help/business-accounts/default-branch-name-enforce.png)
5. Нажмите кнопку **Обновить**.
    ![Кнопка "Обновить"](/assets/images/help/business-accounts/default-branch-name-update.png)

## Применение политики в отношении изменения видимости репозиториев

Во всех отделах, принадлежащих организации, можно разрешить сотрудникам с правами администратора изменять видимость репозитория, разрешить изменение видимости репозитория только владельцам отделов или разрешить владельцам настраивать этот параметр на уровне отделов. Если сотрудникам запрещено изменять видимость репозитория, изменять его видимость смогут только владельцы организации.

Если владелец организации разрешил создавать репозитории только владельцам отделов, сотрудники не могут изменять видимость репозитория. Если владелец организации разрешил сотрудникам создавать только частные репозитории, сотрудники смогут изменять видимость репозитория только на вариант "частный". Дополнительные сведения см. в разделе [Применение политики создания репозиториев](#enforcing-a-policy-for-repository-creation).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
1. В разделе "Изменение видимости репозиториев" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. В разделе "Изменение видимости репозитория" выберите политику в раскрывающемся меню.
   ![Раскрывающееся меню с параметрами политики видимости репозиториев](/assets/images/help/business-accounts/repository-visibility-policy-drop-down.png)

## Применение политики в отношении удаления и передачи репозиториев

Во всех отделах, принадлежащих организации, можно разрешить сотрудникам с правами администратора удалять или передавать репозитории, разрешить удаление и передачу репозиториев только владельцам отделов или разрешить владельцам настраивать этот параметр на уровне отделов.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.repositories-tab %}
5. В разделе "Удаление и передача репозиториев" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-deletion-policy %}

## Применение политики в отношении удаления проблем

Во всех отделах, принадлежащих организации, можно разрешить сотрудникам с правами администратора удалять проблемы в репозитория, разрешить удаление проблем только владельцам отделов или разрешить владельцам настраивать этот параметр на уровне отделов.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %}
3. На вкладке **Политики репозиториев** в разделе "Удаление проблем в репозитории" просмотрите сведения об изменении параметра. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
4. В разделе "Удаление проблем в репозитории" в раскрывающемся меню выберите политику.

  ![Раскрывающееся меню для выбора политики в отношении удаления проблем](/assets/images/help/business-accounts/repository-issue-deletion-policy-drop-down.png)

{% ifversion ghes or ghae %}

## Применение политики в отношении ограничений отправки в GIT

Чтобы держать размер репозиториев под контролем и предотвратить проблемы с производительностью, можно настроить ограничение на размер файлов для репозиториев в организации.

По умолчанию при применении ограничений на отправку в репозитории пользователи не могут добавлять или обновлять файлы размером более 100 МБ.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. В разделе "Ограничение на отправку в репозитории" в раскрывающемся меню выберите максимальный размер объекта.
![Раскрывающееся меню для выбора максимального размера объекта](/assets/images/enterprise/site-admin-settings/repo-upload-limit-dropdown.png)
5. Если необходимо применить ограничение на отправку ко всем репозиториям в организации, выберите **Применить ко всем репозиториям**
![Параметр для применения максимального размера объекта ко всем репозиториям](/assets/images/enterprise/site-admin-settings/all-repo-upload-limit-option.png).

{% ifversion profile-name-enterprise-setting %}

## Принудительное применение политики для отображения имен элементов в репозиториях

Во всех организациях, принадлежащих вашей организации, можно разрешить участникам просматривать помимо имени пользователя имя профиля автора комментариев в проблемах и запросах на вытягивание для общедоступных и внутренних репозиториев.

![Имя профиля комментатора, отображаемое в примечании](/assets/images/help/issues/commenter-full-name.png)

{% note %}

**Примечание.** Если эта политика применяется для всех репозиториев в организации, она переопределяет параметр организации для частных репозиториев. Дополнительные сведения см. в разделе [Управление отображением имен участников в организации](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization).

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. В разделе "Разрешить участникам просматривать имя профиля автора комментария в общедоступных и внутренних репозиториях", выберите раскрывающееся меню и щелкните политику.
![Снимок экрана: страница "Параметры" с выделенным раскрывающимся списком "Политика"](/assets/images/enterprise/site-admin-settings/comment-authors-profile-name-drop-down.png)
5. При необходимости, чтобы принудительно отобразить имена профилей для всех репозиториев в организации, выберите **Принудительно применить для всех репозиториев в экземпляре**.
![Снимок экрана: выделенный параметр "Принудительно применить для всех репозиториев"](/assets/images/enterprise/site-admin-settings/enforce-for-all-repositories-option.png)

{% endif %}

## Настройка редактора конфликтов слияния для запросов на вытягивание между репозиториями

Обязательное устранение конфликтов слияния на локальных компьютерах пользователей может предотвратить случайную запись данных из вилки в вышестоящий репозиторий.

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
1. В разделе "Редактор конфликтов для запросов на вытягивание между репозиториями" в раскрывающемся меню выберите пункт **Отключено**.
 ![Раскрывающееся меню с пунктом для отключения редактора конфликтов слияния](/assets/images/enterprise/settings/conflict-editor-settings.png)

## Настройка принудительной отправки

Каждый репозиторий наследует параметр принудительной отправки по умолчанию от учетной записи пользователя или отдела, которому принадлежит репозиторий. Каждый отдел и каждая учетная запись пользователя наследуют параметр принудительной отправки по умолчанию от организации. При изменении параметра принудительной отправки для организации эта политика применяется ко всем репозиториям, принадлежащим любым пользователям или отделам.

### Блокирование принудительной отправки во все репозитории

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
4. В разделе "Принудительная отправка" в раскрывающемся меню выберите пункт **Разрешить**, **Блокировать** или **Блокировать в ветвь по умолчанию**.
![Раскрывающееся меню в разделе "Принудительная отправка"](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. При необходимости выберите параметр **Применить ко всем репозиториям**, чтобы переопределить параметры принудительной отправки на уровне отделов и репозиториев.

### Блокирование принудительной отправки в определенный репозиторий

{% data reusables.enterprise_site_admin_settings.override-policy %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
4. В разделе **Отправка и вытягивание** выберите **Блокировать** или **Блокировать в ветвь по умолчанию**.
   ![Блокирование принудительной отправки](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

### Блокирование принудительной отправки в репозитории, принадлежащие учетной записи пользователя или отделу

Репозитории наследуют параметр принудительной отправки от учетной записи пользователя или отдела, которым они принадлежат. В свою очередь учетные записи пользователей и отделы наследуют параметры принудительной отправки от организации.

Вы можете переопределить унаследованные параметры по умолчанию, настроив параметры для учетной записи пользователя или отдела.

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
5. В разделе "Параметры по умолчанию для репозитория" в разделе "Принудительная отправка" выберите один из следующих вариантов:
    - **Блокировать**, чтобы блокировать принудительную отправку во все ветви;
    - **Блокировать в ветвь по умолчанию**, чтобы блокировать принудительную отправку в ветвь по умолчанию.
  ![Блокирование принудительной отправки](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. При необходимости выберите параметр **Применить ко всем репозиториям**, чтобы переопределить параметры на уровне репозитория. Обратите внимание, что это **не** приводит к переопределению политики на уровне организации.
   ![Блокирование принудительной отправки](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png)

{% endif %}

{% ifversion ghes %}

## Настройка анонимного доступа на чтение в GIT

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

Если вы [включили частный режим](/enterprise/admin/configuration/enabling-private-mode) для {% data variables.location.product_location %}, вы можете разрешить администраторам репозитория разрешить анонимный доступ на чтение Git к общедоступным репозиториям.

Включение анонимного доступа на чтение GIT позволяет пользователям обходить проверку подлинности при применении пользовательских средств в организации. Если вы или администратор репозитория включите этот параметр доступа для репозитория, не прошедшие проверку подлинности операции GIT (и любые пользователи с доступом по сети к {% data variables.product.product_name %}) будут иметь доступ на чтение к репозиторию без проверки подлинности.

Анонимный доступ на чтение Git отключен по умолчанию. {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 or ghes = 3.7 %} При обновлении до версии {% data variables.product.product_name %} 3.6 или более поздней версии анонимный доступ на чтение Git автоматически отключается на уровне приложения, а подключения `git://` по порту 9418 возвращают следующую ошибку.

```
The unauthenticated git protocol on port 9418 is no longer supported.
```

{% ifversion ghes > 3.5 %}

Чтобы обеспечить поддержку протокола Git, не прошедшего проверку подлинности в вашей среде, необходимо вручную повторно включить эту функцию. После обновления выполните следующие команды:

```ShellSession
$ sudo ghe-config app.gitauth.git-protocol true
$ sudo ghe-config-apply
```

{% endif %}

Анонимный доступ на чтение Git будет полностью удален в будущем выпуске {% data variables.product.prodname_ghe_server %}. {% data variables.product.company_short %} рекомендует использовать SSH вместо протокола Git. Дополнительные сведения об этом изменении см. в разделе [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server).

{% endif %}



При необходимости вы можете запретить администраторам репозиториев изменять параметры анонимного доступа GIT для репозиториев в организации, заблокировав параметры доступа к репозиториям. После блокировки параметра доступа на чтение репозитория в GIT только администратор сайта может изменить этот параметр.

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

### Настройка анонимного доступа на чтение в GIT для всех репозиториев

{% data reusables.enterprise-accounts.access-enterprise %} {% ifversion ghes or ghae %} {% data reusables.enterprise-accounts.policies-tab %} {% else %} {% data reusables.enterprise-accounts.settings-tab %} {% endif %} {% data reusables.enterprise-accounts.options-tab %}
4. В разделе "Анонимный доступ на чтение GIT" в раскрывающемся меню выберите пункт **Включен**.
![Раскрывающееся меню анонимного доступа на чтение в GIT с пунктами "Включен" и "Отключен"](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. Если необходимо запретить администраторам репозиториев изменять параметры анонимного доступа на чтение GIT для всех репозиториев в организации, выберите параметр **Запретить администраторам репозиториев изменять анонимный доступ на чтение GIT**.
![Установите флажок, чтобы администраторы репозиториев не могли изменять параметры анонимного доступа на чтение GIT для всех репозиториев в организации](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### Настройка анонимного доступа на чтение в GIT для определенного репозитория

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.repository-search %} {% data reusables.enterprise_site_admin_settings.click-repo %} {% data reusables.enterprise_site_admin_settings.admin-top-tab %} {% data reusables.enterprise_site_admin_settings.admin-tab %}
6. В разделе "Опасная зона" рядом с пунктом "Включить анонимный доступ на чтение GIT" нажмите кнопку **Включить**.
![Кнопка "Включено" рядом с пунктом "Включить анонимный доступ на чтение GIT" в разделе "Опасная зона" параметров администрирования сайта](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. Просмотрите изменения. Чтобы подтвердить действие, щелкните **Да, включить анонимный доступ на чтение GIT.** 
![Подтверждение параметра анонимного доступа на чтение GIT во всплывающем окне](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. Если необходимо запретить администраторам репозиториев изменять этот параметр для репозитория, выберите параметр **Запретить администраторам репозитория изменять анонимный доступ на чтение GIT**.
![Установите флажок, чтобы запретить администраторам репозиториев изменять анонимный доступ на чтение GIT для этого репозитория](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)

{% endif %}
