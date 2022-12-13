---
title: Просмотр сведений о SAML-доступе пользователей к предприятию и управление ими
intro: 'Вы можете просматривать и отзывать связанные удостоверения участников предприятия, активные сеансы и авторизованные учетные данные.'
permissions: Enterprise owners can view and manage a member's SAML access to an organization.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-and-managing-a-users-saml-access-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise
versions:
  ghec: '*'
topics:
  - Enterprise
shortTitle: View & manage SAML access
ms.openlocfilehash: 48ff1f60e4ab18086fca597d8128736846ffe8fd
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098281'
---
## Сведения о доступе SAML к вашей корпоративной учетной записи

При включении единого входа SAML для учетной записи предприятия каждый участник предприятия может связать свое внешнее удостоверение с поставщиком удостоверений (IdP) с существующей учетной записью на {% данных variables.location.product_location %}. {% data reusables.saml.about-saml-access-enterprise-account %}

Если ваше предприятие использует {% data variables.product.prodname_emus %}, ваши участники будут использовать учетные записи, подготовленные с помощью поставщика удостоверений. {% данных variables.enterprise.prodname_managed_users_caps %} не будет использовать существующую учетную запись пользователя для {% данных variables.product.product_name %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

## Просмотр и отзыв связанного удостоверения

{% data reusables.saml.about-linked-identities %}

Если ваша организация использует {% data variables.product.prodname_emus %}, вы не сможете отозвать или отменить подготовку учетных записей пользователей из предприятия в {% data variables.product.product_name %}. Все изменения, которые необходимо внести в {% данных вашего предприятия variables.enterprise.prodname_managed_users %}, необходимо внести через поставщика удостоверений.

{% data reusables.identity-and-permissions.revoking-identity-team-sync %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-identity %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-sso-identity %} {% data reusables.saml.revoke-sso-identity %} {% data reusables.saml.confirm-revoke-identity %}

## Просмотр и отзыв активного сеанса SAML

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-session %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-saml-sessions %} {% data reusables.saml.revoke-saml-session %}

## Просмотр и отзыв авторизованных учетных данных

{% data reusables.saml.about-authorized-credentials %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.saml.click-person-revoke-credentials %} {% data reusables.saml.saml-identity-linked %} {% data reusables.saml.view-authorized-credentials %} {% data reusables.saml.revoke-authorized-credentials %} {% data reusables.saml.confirm-revoke-credentials %}

## Дополнительные материалы

- [Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
