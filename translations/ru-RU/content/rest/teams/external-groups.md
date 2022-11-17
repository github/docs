---
title: Внешние группы
intro: 'API внешних групп позволяет просматривать группы внешних поставщиков удостоверений, доступные для вашей организации, и управлять подключением между внешними группами и командами в организации.'
versions:
  ghae: '*'
  ghec: '*'
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0958aad779e6ec1044b74d3f6d67b2d7fff8aef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710374'
---
## Сведения об API внешних групп

Чтобы использовать этот API, прошедший проверку подлинности пользователь должен быть ответственным за команду или владельцем организации, связанной с командой.

{% ifversion ghec %} {% note %}

**Примечания.** 

- API внешних групп доступен только для организаций, которые являются частью предприятия, использующего {% data variables.product.prodname_emus %}. Дополнительные сведения см. в разделе [Сведения о пользователях, управляемых предприятием](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).
- Если в организации используется синхронизация команд, можно применять API синхронизации команд. Дополнительные сведения см. в разделе [API синхронизации команд](#team-synchronization).

{% endnote %} {% endif %}
