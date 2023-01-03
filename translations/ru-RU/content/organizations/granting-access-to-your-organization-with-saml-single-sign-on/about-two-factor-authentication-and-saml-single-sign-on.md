---
title: Сведения о двухфакторной проверке подлинности и едином входе SAML
intro: 'Администраторы организаций могут включить единый вход SAML и двухфакторную проверку подлинности, чтобы добавить дополнительные способы проверки подлинности для участников своей организации.'
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 2FA & SAML single sign-on
ms.openlocfilehash: f435097c61c12387d1d4f40bbdc924a8c56a3de4
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099156'
---
Двухфакторная проверка подлинности (2FA) обеспечивает базовую проверку подлинности для членов организации. Включив 2FA, администраторы организации ограничивают вероятность компрометации учетной записи участника на {% данных variables.location.product_location %}. Дополнительные сведения о двухфакторной проверке подлинности см. в разделе [Сведения о двухфакторной проверке подлинности](/articles/about-two-factor-authentication).

Чтобы добавить дополнительные способы проверки подлинности, администраторы организации также могут [включить единый вход SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), чтобы члены организации должны были использовать единый вход для доступа к организации. Дополнительные сведения о едином входе SAML см. в разделе [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on).

Если включены и двухфакторная проверка подлинности, и единый вход SAML, члены организации должны выполнить следующие действия:
- Используйте 2FA для входа в свою учетную запись на {% данных variables.location.product_location %}
- Использовать единый вход для доступа к организации
- Использовать авторизованный маркер для доступа к API или Git и единый вход для авторизации маркера

## Дополнительные материалы

- [Применение единого входа SAML для вашей организации](/articles/enforcing-saml-single-sign-on-for-your-organization)
