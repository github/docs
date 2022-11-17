---
title: Управление ботами и учетными записями служб с помощью единого входа SAML
intro: 'Организации, которые включили единый вход SAML, могут сохранять доступ к ботам и учетным записям служб.'
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage bots & service accounts
ms.openlocfilehash: 57f1150929db674a658d52a5cb7e455444cc48de
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: '145135176'
---
Чтобы сохранить доступ к ботам и учетным записям служб, администраторы организации могут [включить](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization), но **не** [применять](/articles/enforcing-saml-single-sign-on-for-your-organization) единый вход SAML для своей организации. Если требуется применить единый вход SAML для вашей организации, можно создать внешнее удостоверение для бота или учетной записи службы с помощью поставщика удостоверений (IdP).

{% warning %}

**Примечание.** Если вы применяете единый вход SAML для организации и **не** настроили внешние удостоверения для ботов и учетных записей служб с помощью поставщика удостоверений, они будут удалены из вашей организации.

{% endwarning %}

## Дополнительные материалы

- [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)
