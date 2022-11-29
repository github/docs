---
title: Просмотр активных сеансов SAML и управление ими
intro: Вы можете просматривать и отменять активные сеансы SAML в параметрах.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/viewing-and-managing-your-active-saml-sessions
versions:
  ghec: '*'
topics:
  - SSO
type: how_to
shortTitle: Active SAML sessions
ms.openlocfilehash: e69ad366de7cdfb14b6a2a13ae3bdc134111616a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165594'
---
Вы можете просмотреть список устройств, которые вошли в вашу учетную запись, и отозвать все сеансы SAML, которые вы не распознаете.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. В разделе "Веб-сеансы" отображаются активные сеансы SAML.

   ![Снимок экрана: список активных сеансов SAML](/assets/images/help/settings/saml-active-sessions.png)

1. Чтобы просмотреть сведения о сеансе, нажмите кнопку **Дополнительные сведения**.
   ![Снимок экрана: активные сеансы SAML с кнопкой для открытия сведений о сеансе SAML](/assets/images/help/settings/saml-expand-session-details.png)

1. Чтобы отменить сеанс, нажмите кнопку **Отозвать SAML**.

   ![Снимок экрана: страница сведений о сеансе с кнопкой отмены сеанса SAML](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Примечание.** При отзыве сеанса вы удалите проверку подлинности SAML в этой организации. Чтобы снова получить доступ к организации, вам потребуется выполнить единый вход с помощью поставщика удостоверений. Дополнительные сведения см. в разделе [Сведения о проверке подлинности с помощью единого входа SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on).

  {% endnote %}

## Дополнительные материалы

- [Сведения о проверке подлинности с помощью единого входа SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)
