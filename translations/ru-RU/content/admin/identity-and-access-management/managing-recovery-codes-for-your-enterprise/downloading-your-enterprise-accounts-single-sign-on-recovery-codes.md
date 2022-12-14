---
title: Скачивание кодов восстановления единого входа для учетной записи предприятия
shortTitle: Download recovery codes
intro: 'Чтобы обеспечить доступ к {% data variables.product.product_name %}, если поставщик удостоверений (IdP) недоступен, необходимо скачать коды восстановления единого входа вашей учетной записи предприятия.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
ms.openlocfilehash: 9513cb174c8fd0575672cd9535e5a32b77a9aecf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098404'
---
В случае недоступности поставщика удостоверений можно использовать код восстановления для входа в систему и доступа к вашей организации на {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Доступ к учетной записи предприятия при недоступном поставщике удостоверений](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).

Если вы не сохранили коды восстановления при настройке единого входа, вы по-прежнему можете получить доступ к кодам из параметров предприятия.



{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. В разделе {% ifversion oidc-for-emu %} выберите либо{% endif %} "Требовать проверку подлинности SAML"{% ifversion oidc-for-emu %}, либо "Требовать проверку подлинности OIDC"{% endif %}, а затем нажмите кнопку **Сохранить коды восстановления**. {% ifversion oidc-for-emu %} {% note %}
  
  **Примечание.** Единый вход OIDC доступен только для {% data variables.product.prodname_emus %}. Дополнительные сведения см. в разделе [Сведения о пользователях, управляемых предприятием](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users).
  
  {% endnote %}{% endif %}
  
  ![Снимок экрана: кнопка для проверки конфигурации SAML перед применением](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. Чтобы сохранить коды восстановления, нажмите кнопку **Скачать**, **Печать** или **Копировать**.
  ![Снимок экрана: кнопки для скачивания, печати или копирования кодов восстановления](/assets/images/help/saml/saml_recovery_code_options.png)
