---
ms.openlocfilehash: 7f8e979109d851c152b9cb2b90569ea12155b2dd
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111524"
---
Если вы настроили единый вход SAML, участники вашей организации продолжат входить в свои личные учетные записи в {% data variables.product.prodname_dotcom_the_website %}. Когда участник обращается к большинству ресурсов в организации, {% data variables.product.prodname_dotcom %} перенаправляет участника к поставщику удостоверений для проверки подлинности. После успешной аутентификации поставщик удостоверений перенаправляет участника обратно на {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Сведения о проверке подлинности с помощью единого входа SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on).

{% note %}

**Примечание.** Единый вход с помощью SAML не заменяет обычный процесс входа для {% data variables.product.prodname_dotcom %}. Если вы не используете {% data variables.product.prodname_emus %}, участники продолжат выполнять вход в свои личные учетные записи в {% data variables.product.prodname_dotcom_the_website %}, и каждая личная учетная запись будет связана с внешним удостоверением в поставщике удостоверений.

{% endnote %}
