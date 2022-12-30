---
title: Устранение неполадок с управлением удостоверениями и доступом для предприятия
shortTitle: Troubleshoot IAM
intro: Ознакомьтесь с распространенными проблемами и решениями по управлению удостоверениями и доступом для предприятия.
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 7b8c42a1012e91268f4315d99934a4f38c52a529
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107536'
---
## Конфликты имен пользователей

{% ifversion ghec %}Если ваше предприятие использует {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} нормализует идентификатор, предоставленный поставщиком удостоверений (IdP), чтобы создать имя каждого пользователя на {% data variables.product.prodname_dotcom %}. Если несколько учетных записей нормализуются в одно и то же имя пользователя {% data variables.product.prodname_dotcom %}, происходит конфликт имен пользователей и создается только учетная запись первого пользователя. Дополнительные сведения см. в разделе [Рекомендации по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

{% ifversion ghec %}
## Ошибки при переключении конфигураций проверки подлинности

Если при переключении между различными конфигурациями проверки подлинности возникают проблемы, такие как изменение конфигурации единого входа SAML с учетной записи организации на корпоративную учетную запись, или переход с SAML на OIDC для {% data variables.product.prodname_emus %}, убедитесь, что вы следуете нашим рекомендациям по изменению.

- [Переключение конфигурации SAML из учетной записи организации на корпоративную учетную запись](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)
- [Переход с SAML на OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)
- ["Миграция предприятия на новый поставщик удостоверений или клиент](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)"

## Получение доступа к предприятию, если единый вход недоступен

Если ошибка конфигурации или проблема с поставщиком удостоверений (IdP) не позволяет использовать единый вход, вы можете использовать код восстановления для доступа к учетной записи предприятия. Дополнительные сведения см. в разделе [Доступ к учетной записи предприятия при недоступном поставщике удостоверений](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).
{% endif %}

## Ошибки проверки подлинности SAML

Если при попытке выполнить проверку подлинности с помощью SAML возникают ошибки, см. статью [Устранение неполадок с проверкой подлинности SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication).

{% ifversion ghec %}
## Дополнительные материалы

- [Устранение неполадок с управлением удостоверениями и доступом для организации](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization) {% endif %}
