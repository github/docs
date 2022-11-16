---
title: Подготовка к включению обязательной двухфакторной проверки подлинности в организации
intro: 'Перед тем как настроить требование двухфакторной проверки подлинности, можно уведомить пользователей о предстоящих изменениях и посмотреть, кто уже использует двухфакторную проверки подлинности.'
redirect_from:
  - /articles/preparing-to-require-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/preparing-to-require-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/preparing-to-require-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Prepare to require 2FA
ms.openlocfilehash: 67083113143145a6de7bba5412568609414f12a8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145135107'
---
Мы рекомендуем уведомить {% ifversion fpt or ghec %}участников организации, сторонних участников совместной работы и менеджеров выставления счетов{% else %}участников организации, сторонних участников совместной работы{% endif %} хотя бы за неделю до того, как настроить требование 2FA в своей организации.

Если для вашей организации требуется двухфакторная проверка подлинности, члены организации, внешние участники совместной работы и менеджеры выставления счетов (включая учетные записи ботов), которые не используют 2FA, будут удалены из организации и потеряют доступ к своим репозиториям. Они также потеряют доступ к своим вилкам в частных репозиториях организации.

Прежде чем требовать использования 2FA в организации, рекомендуется:
  - [Включить 2FA](/articles/securing-your-account-with-two-factor-authentication-2fa/) в личной учетной записи
  - Попросите сотрудников организации настроить 2FA для своих учетных записей.
  - Проверьте,[включена ли двухфакторная проверка подлинности для пользователей в вашей организации](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled/)
  - Предупреждайте пользователей о том, что после включения 2FA пользователи, для которых 2FA не включена, автоматически удаляются из организации.
