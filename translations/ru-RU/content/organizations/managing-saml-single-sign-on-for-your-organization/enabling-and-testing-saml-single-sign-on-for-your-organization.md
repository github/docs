---
title: Включение и тестирование единого входа SAML для вашей организации
intro: Владельцы и администраторы организации могут включить единый вход SAML для добавления дополнительного уровня безопасности в свою организацию.
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable & test SAML SSO
ms.openlocfilehash: cbdf8c92ca61f9836876c34ae9dd3b9be0cd7ee4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184084'
---
## Сведения о едином входе SAML

Можно включить единый вход SAML в организации, не требуя, чтобы все участники использовали его. Включение, но не принудительное применение единого входа SAML в организации, помогает упростить процесс внедрения единого входа SAML. Как только большинство участников вашей организации будут использовать единый вход SAML, вы можете настроить его принудительное применение.

{% data reusables.saml.ghec-only %}

Если включить, но не применять принудительно единый вход SAML, участники организации, которые решили не использовать единый вход SAML, по-прежнему могут быть участниками организации. Дополнительные сведения см. в разделе [Принудительное применение единого входа SAML для организации](/articles/enforcing-saml-single-sign-on-for-your-organization).

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

## Включение и тестирование единого входа SAML для вашей организации

Перед применением единого входа SAML в организации убедитесь, что вы подготовили организацию. Дополнительные сведения см. в разделе [Подготовка к принудительному применению единого входа SAML в организации](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization).

Дополнительные сведения о поставщиках удостоверений (IdP), для которых {% data variables.product.company_short %} поддерживает единый вход SAML, см. в разделе [Подключение поставщика удостоверений к организации](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. В разделе "Единый вход SAML" выберите **Включить проверку подлинности SAML**.
![Флажок для включения единого входа SAML](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **Примечание.** После включения единого входа SAML можно скачать коды восстановления единого входа, чтобы иметь доступ к организации, даже если поставщик удостоверений недоступен. Дополнительные сведения см. в разделе [Скачивание кодов восстановления единого входа SAML для организации](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes).

  {% endnote %}

6. В поле "URL-адрес входа" введите конечную точку HTTPS поставщика удостоверений для запросов единого входа. Это значение доступно в конфигурации поставщика удостоверений.
![Поле для URL-адреса, на который участники будут переадресованы при входе](/assets/images/help/saml/saml_sign_on_url.png)
7. При необходимости в поле "Издатель" введите имя издателя SAML. Это позволяет проверить подлинность отправленных сообщений.
![Поле для имени издателя SAML](/assets/images/help/saml/saml_issuer.png)
8. В поле "Открытый сертификат" вставьте сертификат для проверки ответов SAML.
![Поле для открытого сертификата поставщика удостоверений](/assets/images/help/saml/saml_public_certificate.png)
9. Щелкните {% octicon "pencil" aria-label="The edit icon" %}, а затем в раскрывающихся списках "Метод подписи" и "Метод дайджеста" выберите алгоритм хэширования, используемый издателем SAML для проверки целостности запросов.
![Раскрывающиеся списки алгоритмов хэширования для метода подписи и метода дайджеста, используемых издателем SAML](/assets/images/help/saml/saml_hashing_method.png)
10. Перед включением единого входа SAML для вашей организации щелкните **Проверить конфигурацию SAML**, чтобы убедиться, что введены правильные сведения. ![Кнопка для проверки конфигурации SAML перед применением](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **Совет.** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. Чтобы включить принудительное применение единого входа SAML и удалить всех участников организации, которые не прошли проверку подлинности с помощью поставщика удостоверений, установите флажок **Требовать проверку подлинности единого входа SAML для всех участников организации _имя_организации_**. Дополнительные сведения см. в разделе [Принудительное применение единого входа SAML для организации](/articles/enforcing-saml-single-sign-on-for-your-organization).
![Флажок для обязательного единого входа SAML для организации ](/assets/images/help/saml/saml_require_saml_sso.png)
12. Выберите команду **Сохранить**.
![Кнопка для сохранения параметров единого входа SAML](/assets/images/help/saml/saml_save.png)

## Дополнительные материалы

- [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)
- [Справочник по конфигурации SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)
