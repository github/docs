---
title: Рекомендации для организаций
shortTitle: Best practices
intro: 'Ознакомьтесь с рекомендациями по использованию {% data variables.product.prodname_dotcom %}для вашей организации.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 015c74d7a69a1feb5c8ff9467a4219753f2cb5eb
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163461'
---
## Назначение нескольких владельцев

{% data reusables.organizations.org-ownership-recommendation %} Дополительные сведения см. в разделе [Обеспечение непрерывности владения для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization).

## Использование команд

Мы рекомендуем использовать команды для упрощения совместной работы в организации. Дополнительные сведения см. в статье "[Сведения о командах](/organizations/organizing-members-into-teams/about-teams)".

{% ifversion ghec %} Мы настоятельно рекомендуем управлять членством в команде с помощью поставщика удостоверений (IdP). Дополнительные сведения см. в разделе [Управление синхронизацией команд в организации](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

{% data reusables.enterprise-accounts.emu-scim-note %} {% endif %}

Мы рекомендуем держать команды видимыми, когда это возможно, и резервировать секретные команды для деликатных ситуаций. Дополнительные сведения см. в разделе [Изменение видимости команды](/organizations/organizing-members-into-teams/changing-team-visibility).

{% ifversion ghec or ghes or ghae %}
## Используйте обзор безопасности

{% data reusables.security-overview.about-the-security-overview %} Дополнительные сведения см. в разделе [Общие сведения о безопасности](/code-security/security-overview/about-the-security-overview).
{% endif %}
