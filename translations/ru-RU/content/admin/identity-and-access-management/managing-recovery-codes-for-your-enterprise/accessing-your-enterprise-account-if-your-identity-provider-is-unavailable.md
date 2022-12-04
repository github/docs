---
title: Доступ к учетной записи предприятия при недоступном поставщике удостоверений
shortTitle: Access your enterprise account
intro: 'Вы можете войти в {% data variables.product.product_name %}, даже если поставщик удостоверений недоступен, обходя единый вход с помощью кода восстановления.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
ms.openlocfilehash: d13a4cd336e67ab62087530b00cad8fd6939d64b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578807'
---
Вы можете использовать код восстановления для доступа к корпоративной учетной записи, если ошибка конфигурации проверки подлинности или проблема с поставщиком удостоверений (IdP) не позволяет использовать единый вход. 

Чтобы получить доступ к учетной записи предприятия этим способом, необходимо заранее скачать и сохранить коды восстановления для вашего предприятия. Дополнительные сведения см. в статье [Скачивание кодов восстановления единого входа для корпоративной учетной записи](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Примечание**. Если на вашем предприятии используется функция {% data variables.product.prodname_emus %}, то для использования кода восстановления необходимо войти в систему в качестве пользователя, выполняющего установку.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
