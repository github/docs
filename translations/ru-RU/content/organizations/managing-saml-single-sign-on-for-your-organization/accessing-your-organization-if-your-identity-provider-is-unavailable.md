---
title: 'Доступ к организации, если поставщик удостоверений недоступен'
intro: 'Администраторы организации могут войти в {% data variables.product.product_name %}, даже если их поставщик удостоверений недоступен, путем обхода единого входа и использования кодов восстановления.'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
  - /github/setting-up-and-managing-organizations-and-teams/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Unavailable identity provider
ms.openlocfilehash: fd965c2c847378936e10ff5cc5560397a09ca372
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119171'
---
Администраторы организации могут использовать [один из загруженных или сохраненных кодов восстановления](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes) для обхода системы единого входа. Возможно, вы сохранили их в диспетчере паролей, например [LastPass](https://lastpass.com/) или [1Password](https://1password.com/).

{% data reusables.saml.recovery-code-caveats %}

{% data reusables.saml.recovery-code-access %}

## Дополнительные материалы

- [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)
