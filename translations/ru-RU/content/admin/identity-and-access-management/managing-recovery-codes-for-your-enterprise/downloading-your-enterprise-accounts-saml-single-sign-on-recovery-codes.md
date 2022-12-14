---
title: Скачивание кодов восстановления единого входа SAML для учетной записи предприятия
shortTitle: Download recovery codes
intro: To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account's SAML single sign-on (SSO) recovery codes.
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
ms.openlocfilehash: cd06d34b2dbf3e0c3b0a96bc3b92b2fb2b78e080
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116619"
---
Если поставщик удостоверений недоступен, можно использовать код восстановления для входа и доступа к предприятию на {% data variables.product.product_location %}. Дополнительные сведения см. в разделе [Доступ к учетной записи предприятия при недоступном поставщике удостоверений](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).

Если вы не сохранили коды восстановления при настройке единого входа SAML, вы по-прежнему можете получить доступ к кодам из параметров предприятия.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. В разделе "Require SAML authentication" (Требовать проверку подлинности SAML) щелкните **Save your recovery codes** (Сохранить коды восстановления).
![Снимок экрана: кнопка для проверки конфигурации SAML перед применением](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. Чтобы сохранить коды восстановления, нажмите кнопку **Скачать**, **Печать** или **Копировать**.
![Снимок экрана: кнопки для скачивания, печати или копирования кодов восстановления](/assets/images/help/saml/saml_recovery_code_options.png)
