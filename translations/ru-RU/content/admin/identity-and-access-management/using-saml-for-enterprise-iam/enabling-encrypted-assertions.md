---
title: Включение зашифрованных утверждений
shortTitle: Enable encrypted assertions
intro: 'Вы можете улучшить безопасность {% данных variables.location.product_location %}с помощью единого входа SAML, зашифровав сообщения, отправляемые поставщиком удостоверений SAML (IdP).'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
ms.openlocfilehash: 0b7261a03eff52a6ee9fc612c5958919512527b8
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098290'
---
## Сведения о зашифрованных утверждениях

Если ваш поставщик удостоверений поддерживает шифрование утверждений, можно настроить зашифрованные утверждения в {% data variables.product.product_name %} для повышения безопасности при проверке подлинности.

## Предварительные требования

Чтобы включить зашифрованные утверждения для проверки подлинности в {% data variables.product.product_name %}, необходимо настроить проверку подлинности SAML, а поставщик удостоверений должен поддерживать зашифрованные утверждения.

## Включение зашифрованных утверждений

Чтобы включить зашифрованные утверждения, необходимо предоставить общедоступный сертификат %% данных variables.location.product_location %}для поставщика удостоверений и настроить параметры шифрования, соответствующие вашему idP.

{% note %}

**Примечание**. {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. При необходимости включите отладку SAML. Отладка SAML записывает подробные записи в журнале проверки подлинности {% data variables.product.product_name %}. Это полезно при устранении неполадок неудачных попыток проверки подлинности. Дополнительные сведения см. в разделе [Устранение неполадок с проверкой подлинности SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging).
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
1. Выберите **Требовать зашифрованные утверждения**.

   ![Снимок экрана: флажок "Включить зашифрованные утверждения" в разделе "Проверка подлинности" консоли управления](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. Справа от параметра "Сертификат шифрования" нажмите кнопку **"Скачать** ", чтобы сохранить копию общедоступного сертификата {% данных variables.location.product_location %}на локальном компьютере.

   ![Снимок экрана: кнопка "Скачать" для открытого сертификата для зашифрованных утверждений](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Выполните вход у поставщика удостоверений SAML от имени администратора.
1. В приложении для {% данных variables.location.product_location %}включите зашифрованные утверждения.
   - Запомните метод шифрования и метод транспортировки ключа.
   - Укажите открытый сертификат, скачанный на шаге 7.
1. Вернитесь в консоль управления на {% данных variables.location.product_location %}.
1. Справа от пункта "Метод шифрования" выберите метод шифрования поставщика удостоверений с шага 9.

   ![Снимок экрана: "Метод шифрования" для зашифрованных утверждений](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. Справа от пункта "Метод транспортировки ключа" выберите метод транспортировки ключа поставщика удостоверений с шага 9.

   ![Снимок экрана: "Метод транспортировки ключей" для зашифрованных утверждений](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Нажмите кнопку **Сохранить параметры**.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

Если вы включили отладку SAML для проверки подлинности с помощью зашифрованных утверждений, отключите ее после завершения тестирования. Дополнительные сведения см. в разделе [Устранение неполадок с проверкой подлинности SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging).
