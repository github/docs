---
title: Настройка единого входа SAML для предприятия с помощью Okta
intro: 'Можно автоматически управлять доступом к корпоративной учетной записи на {% data variables.product.product_name %}, настроив единый вход (SSO) на языке разметки заявлений системы безопасности (SAML) с Okta.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
ms.openlocfilehash: e9cbf6e70fb5e07f9cd2c5e27d9b952921e18fdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109664'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Сведения об использовании SAML с Okta

Можно управлять доступом к корпоративной учетной записи в {% data variables.product.product_name %} и других веб-приложениях из одного центрального интерфейса, настроив учетную запись предприятия для использования единого входа SAML с поставщиком удостоверений (IdP) Okta.

Единый вход SAML контролирует и защищает доступ к ресурсам корпоративной учетной записи, таким как организации, репозитории, проблемы и запросы на вытягивание. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

{% data reusables.saml.switching-from-org-to-enterprise %} Дополнительные сведения см. в разделе [Переключение конфигурации SAML с организации на корпоративную учетную запись](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).

Кроме того, можно настроить единый вход SAML с помощью Okta для организации, которая использует {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в разделе [Настройка единого входа SAML и SCIM с помощью Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta).

## Добавление приложения {% data variables.product.prodname_ghe_cloud %} в Okta

{% data reusables.saml.okta-sign-into-your-account %}
1. Перейдите к приложению [{% data variables.product.prodname_ghe_cloud %} — Enterprise Учетные записи](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts) в сети интеграции Okta и нажмите кнопку **"Добавить интеграцию**".
{% data reusables.saml.okta-dashboard-click-applications %}
1. При необходимости справа от пункта "Application label" (Метка приложения) введите описательное имя приложения.
1. Справа от "{% data variables.product.prodname_dotcom %} Предприятия" введите имя учетной записи предприятия. Например, если URL-адрес вашей корпоративной учетной записи имеет вид `https://github.com/enterprises/octo-corp`, введите `octo-corp`.
1. Нажмите кнопку **Done**(Готово).

## Включение и тестирование единого входа SAML

{% data reusables.saml.okta-sign-into-your-account %} {% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.click-enterprise-account-application %} {% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %}
1. Справа от пункт "Settings" (Параметры) нажмите кнопку **Edit** (Изменить).
1. В разделе "Configured SAML Attributes" (Настроенные атрибуты SAML) справа от "groups" (группы) в раскрывающемся меню выберите " **Matches regex** (Соответствует регулярному выражению).
1. Справа от раскрывающегося меню введите `.*.*`.
1. Выберите команду **Сохранить**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Включите SAML для учетной записи предприятия, используя сведения, приведенные в инструкциях по настройке. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).
