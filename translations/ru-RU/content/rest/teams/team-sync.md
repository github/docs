---
title: Синхронизация команд
intro: 'API синхронизации команд позволяет управлять подключениями между {% data variables.product.product_name %} и группами внешних поставщиков удостоверений (IdP).'
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3b445a8f3d608fa743ef9b6c0bc0bd980194be9e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099108'
---
## Сведения об API синхронизации команды

Чтобы использовать этот API, прошедший проверку подлинности пользователь должен быть владельцем команды или владельцем организации, связанной с командой. Маркер, используемый для проверки подлинности, также должен быть авторизован для использования с поставщиком удостоверений (SSO). Дополнительные сведения см. в разделе "[Авторизация {% данных variables.product.pat_generic %} для использования с организацией единого входа SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

Можно управлять участниками команды GitHub с помощью поставщика удостоверений и синхронизации команд. Для использования API синхронизации команд должна быть включена синхронизация команд. Дополнительные сведения см. в разделе [Синхронизация команд между поставщиком удостоверений и GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

{% note %}

**Примечание.** API синхронизации команд нельзя использовать с {% data variables.product.prodname_emus %}}. Дополнительные сведения об управлении {% данных variables.enterprise.prodname_emu_org %}см. в разделе "[API внешних групп](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}
