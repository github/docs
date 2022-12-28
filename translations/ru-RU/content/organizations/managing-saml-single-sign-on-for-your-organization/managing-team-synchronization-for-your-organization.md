---
title: Управление синхронизацией команд в организации
intro: 'Вы можете включить и отключить синхронизацию команд в поставщиках удостоверений (IdP) и организации на {% data variables.product.product_name %}.'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team synchronization
ms.openlocfilehash: 027669f75f3671394503e5036b8f6c86351697cf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093153'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Синхронизация команд

Можно включить синхронизацию команд между поставщиком удостоверений (IdP) и {% data variables.product.product_name %}, чтобы разрешить владельцам и ответственным за команду подключать команды в организации к группам IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

Вы также можете включить синхронизацию команд для организаций, принадлежащих корпоративной учетной записи. Дополнительные сведения см. в разделе [Управление синхронизацией групп для организаций на предприятии](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Включение синхронизации команд

Действия по включению синхронизации команд зависят от используемого IdP. Существуют предварительные требования для включения синхронизации команд, которые зависят от IdP. У каждого отдельного поставщика удостоверений есть дополнительные предварительные требования.

### Предварительные требования

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

Необходимо включить единый вход SAML для вашей организации и поддерживаемого поставщика удостоверений. Дополнительные сведения см. в разделе [Принудительное применение единого входа SAML для организации](/articles/enforcing-saml-single-sign-on-for-your-organization).

Требуется связанное удостоверение SAML. Чтобы создать связанное удостоверение, необходимо хотя бы один раз пройти проверку подлинности в организации с помощью единого входа SAML и поддерживаемого поставщика удостоверений. Дополнительные сведения см. в разделе [Проверка подлинности с помощью единого входа SAML](/articles/authenticating-with-saml-single-sign-on).

Параметры SAML **должны** содержать допустимый URL-адрес поставщика удостоверений для поля **Издатель**. 

![Поле "Издатель" SAML](/assets/images/help/saml/saml_issuer.png)



### Включение синхронизации команд для Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
6. Просмотрите сведения об арендаторе поставщика удостоверений, которого вы хотите подключить к организации, и нажмите кнопку **Утвердить**.
  ![Ожидающий обработки запрос для включения синхронизации команды с конкретным клиентом поставщика удостоверений с возможностью утверждения или отмены запроса](/assets/images/help/teams/approve-team-synchronization.png)

### Включение синхронизации команд для Okta

Для синхронизации команд Okta требуется, чтобы SAML и SCIM с Okta уже были настроены для вашей организации.

Чтобы избежать потенциальных ошибок синхронизации команд с Okta, рекомендуется убедиться, что связанные удостоверения SCIM правильно настроены для всех участников организации, которые являются членами выбранных групп Okta, перед включением синхронизации команд на {% data variables.product.prodname_dotcom %}. 

Если у члена организации нет связанного удостоверения SCIM, синхронизация команд не будет работать должным образом, и пользователя нельзя будет корректно добавить или удалить из команд. Если у какого-то из этих пользователей нет связанного удостоверения SCIM, необходимо повторно подготовить их.

Справку по подготовке пользователей, у которых нет связанного удостоверения SCIM, см. в разделе "[Устранение неполадок в управлении удостоверениями и доступом для организации](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization)".

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. Попробуйте принудительно применить SAML в организации, чтобы убедиться, что удостоверения SAML и SCIM участников связаны. Дополнительные сведения см. в разделе [Принудительное применение единого входа SAML для организации](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. В поле имени вашей организации введите допустимый маркер SSWS и URL-адрес экземпляра Okta.
  ![Включение формы организации Okta для синхронизации команд](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Просмотрите сведения о клиенте поставщика удостоверений, которые вы хотите подключить к организации, а затем нажмите кнопку **Создать**.
  ![Кнопка создания "Включить синхронизацию команды"](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## Отключение синхронизации команд

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. В разделе "Синхронизация команд" нажмите кнопку **Отключить синхронизацию команды**.
  ![Отключение синхронизации команд](/assets/images/help/teams/disable-team-synchronization.png)
