---
title: Авторизация личного токена доступа для использования с документами единого входа SAML
intro: 'Чтобы использовать {% данных variables.product.pat_v1 %} в организации, использующую единый вход SAML, необходимо сначала авторизовать маркер.'
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: '{% data variables.product.pat_generic_caps %} with SAML'
ms.openlocfilehash: 56ad08fd915869ae842ffa85dba24c123cef8c6d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093668'
---
После создания маркера необходимо авторизовать {% данных variables.product.pat_v1 %}, прежде чем маркер сможет получить доступ к организации, использующую единый вход SAML. Дополнительные сведения о создании новых данных {% variables.product.pat_v1 %}см. в разделе "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)". {% ifversion pat-v2 %} {% данных variables.product.pat_v2_caps %}s авторизованы во время создания маркера перед предоставлением доступа к организации. {% endif %}

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %}
3. Рядом с маркером, который вы хотите авторизовать, щелкните **Настроить единый вход**. {% данных reusables.saml.authentication-with-saml-at-once-once %}

   ![Снимок экрана: раскрывающееся меню для настройки единого входа для {% данных variables.product.pat_v1 %}](/assets/images/help/settings/sso-allowlist-button.png)
4. Справа от организации, для которой требуется авторизовать маркер, нажмите кнопку **Авторизовать**.
   ![Кнопка «Авторизация маркера»](/assets/images/help/settings/token-authorize-button.png)

## Дополнительные материалы

- "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)"
- [Сведения о проверке подлинности с помощью единого входа SAML](/articles/about-authentication-with-saml-single-sign-on)
