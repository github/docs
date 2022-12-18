---
title: Управление синхронизацией команд для организаций на предприятии
intro: "Вы можете включить синхронизацию команд между Azure\_AD и {% data variables.product.product_name %}, чтобы позволить организациям, принадлежащим вашей корпоративной учетной записи, управлять членством в команде через группы поставщика удостоверений."
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: Manage team synchronization
ms.openlocfilehash: 1e29d70b0b8fcf78a8b03834e9436112634c636f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076938'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Сведения о синхронизации команд для учетных записей предприятия

Если вы используете SAML на уровне предприятия вместе с Azure AD в качестве поставщика удостоверений, можно включить синхронизацию команд для корпоративной учетной записи, чтобы позволить владельцам организации и координаторам команд синхронизировать команды в организациях, принадлежащих вашим корпоративным учетным записям, с группами поставщика удостоверений.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Вы также можете настроить синхронизацию команд и управлять ей для отдельной организации. Дополнительные сведения см. в разделе [Управление синхронизацией команд в организации](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Предварительные требования

Вы или администратор Azure AD должны быть глобальным администратором или Администратором привилегированных ролей в Azure AD.
 
Вам необходимо применить единый вход SAML для организаций в своей учетной записи предприятия с помощью поддерживаемого поставщика удостоверений. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

Вам необходимо пройти проверку подлинности в своей учетной записи предприятия с помощью единого входа SAML и поддерживаемого поставщика удостоверений. Дополнительные сведения см. в разделе [Проверка подлинности с помощью единого входа SAML](/articles/authenticating-with-saml-single-sign-on).

## Управление синхронизацией команд для Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
7. Просмотрите сведения о клиенте поставщика удостоверений, который вы хотите подключить к своей учетной записи предприятия, а затем нажмите кнопку **Утвердить**.
  ![Ожидающий обработки запрос для включения синхронизации команды с конкретным клиентом поставщика удостоверений с возможностью утверждения или отмены запроса](/assets/images/help/teams/approve-team-synchronization.png)
8. Чтобы отключить синхронизацию команд, нажмите кнопку **Disable team synchronization** (Отключить синхронизацию команд).
  ![Отключение синхронизации команд](/assets/images/help/teams/disable-team-synchronization.png)
