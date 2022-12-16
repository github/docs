---
title: Авторизация ключа SSH для использования с единым входом SAML
intro: 'Чтобы использовать ключ SSH в организации, использующую единый вход SAML, необходимо сначала авторизовать этот ключ.'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: SSH Key with SAML
ms.openlocfilehash: e70274e580c58f86b7d1983cb116e6ce90bc7a40
ms.sourcegitcommit: e4f7dad219a53ee7e430c7aabc77a1b134d23df0
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/06/2022
ms.locfileid: '148010298'
---
Вы можете авторизовать существующий ключ SSH или создать новый ключ SSH, а затем авторизовать его. Дополнительные сведения о создании ключа SSH см. в разделе [Создание нового ключа SSH и его добавление в агент SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**Примечание.** Если авторизация ключа SSH отзывается организацией, вы не сможете повторно авторизовать тот же ключ. Вам потребуется создать новый ключ SSH и авторизовать его. Дополнительные сведения о создании ключа SSH см. в разделе [Создание нового ключа SSH и его добавление в агент SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
1. Справа от ключа SSH, который вы хотите авторизовать, нажмите кнопку **Настроить единый вход**. {% данных reusables.saml.authentication-with-saml-по крайней мере один раз %}

   ![Снимок экрана: кнопка авторизации маркера единого входа](/assets/images/help/settings/ssh-sso-button.png)
1. Справа от организации, для которой требуется авторизовать ключ SSH, нажмите кнопку **Авторизовать**.

   ![Снимок экрана: кнопка авторизации маркера](/assets/images/help/settings/ssh-sso-authorize.png)

## Дополнительные материалы

- [Проверка существующих ключей SSH](/articles/checking-for-existing-ssh-keys)
- [Сведения о проверке подлинности с помощью единого входа SAML](/articles/about-authentication-with-saml-single-sign-on)
