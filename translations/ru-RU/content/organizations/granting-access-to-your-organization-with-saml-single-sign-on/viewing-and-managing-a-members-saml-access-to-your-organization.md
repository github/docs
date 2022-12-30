---
title: Просмотр доступа SAML участника к вашей организации и управление им
intro: 'Вы можете просматривать и отзывать связанные удостоверения участников организации, активные сеансы и авторизованные учетные данные.'
permissions: Organization owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /articles/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-revoking-organization-members-authorized-access-tokens
  - /github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage SAML access
ms.openlocfilehash: f67a832170448db6ae6147345d5479db2591ce11
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099148'
---
## Сведения о доступе SAML к организации

При включении единого входа SAML для организации каждый участник организации может связать свое внешнее удостоверение с поставщиком удостоверений (IdP) с существующей учетной записью на {% данных variables.location.product_location %}. Чтобы получить доступ к ресурсам организации в {% data variables.product.product_name %}, в браузере у участника должен быть активный сеанс SAML. Чтобы получить доступ к ресурсам организации с помощью API или Git, участник должен использовать ключ {% данных variables.product.pat_generic %} или ключ SSH, авторизованный участником для использования с вашей организацией.

Вы можете просматривать и отзывать связанные удостоверения каждого участника, активные сеансы и авторизованные учетные данные на одной странице.

## Просмотр и отзыв связанного удостоверения

{% data reusables.saml.about-linked-identities %} 

Если эта запись доступна, она будет включать данные SCIM. Дополнительную информацию см. в разделе [Сведения о SCIM для организаций](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% warning %}

**Предупреждение.** Для организаций, использующих SCIM:
- Отзыв связанного удостоверения пользователя для {% data variables.product.product_name %} также приведет к удалению метаданных SAML и SCIM. В результате поставщик удостоверений не сможет синхронизировать или отозвать связанное удостоверение пользователя.
- Администратор должен отозвать связанное удостоверение через поставщика удостоверений.
- Чтобы отозвать связанное удостоверение и связать другую учетную запись с помощью поставщика удостоверений, администратор может удалить и повторно назначить пользователя приложению {% data variables.product.product_name %}. Дополнительные сведения см. в документации поставщика удостоверений.

{% endwarning %}


{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## Просмотр и отзыв активного сеанса SAML

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## Просмотр и отзыв авторизованных учетных данных

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## Дополнительные материалы

- [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on){% ifversion ghec %}
- [Просмотр сведений о SAML-доступе пользователей к предприятию и управление ими](/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise){% endif %}
