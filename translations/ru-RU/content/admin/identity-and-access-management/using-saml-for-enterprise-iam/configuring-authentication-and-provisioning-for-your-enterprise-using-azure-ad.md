---
title: "Настройка проверки подлинности и подготовка вашей организации с помощью Azure\_AD"
shortTitle: Configure with Azure AD
intro: 'Клиент в Azure Active Directory (Azure AD) можно использовать в качестве поставщика удостоверений (IdP) для централизованного управления проверкой подлинности и подготовкой пользователей для {% data variables.location.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
ms.openlocfilehash: c0291aab00df0139b0b54eda8ec34b6e20deb19f
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192684'
---
## Сведения о проверке подлинности и подготовке пользователей с помощью Azure AD

Azure Active Directory (Azure AD) — это служба корпорации Майкрософт, которая позволяет централизованно управлять учетными записями пользователей и доступом к веб-приложениям. Дополнительные сведения см. в статье [Что такое Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) в Документации Майкрософт.

{% data reusables.saml.idp-saml-and-scim-explanation %}

{% data reusables.scim.ghes-beta-note %}

После включения единого входа SAML и SCIM для {% data variables.product.product_name %} с помощью Azure AD вы можете выполнить следующие действия в клиенте Azure AD.

* Назначьте приложение {% data variables.product.product_name %} на Azure AD учетной записи пользователя, чтобы автоматически создать и предоставить доступ к соответствующей учетной записи пользователя в {% data variables.product.product_name %}.
* Отмена назначения приложения {% data variables.product.product_name %} учетной записи пользователя на Azure AD, чтобы отключить соответствующую учетную запись пользователя в {% data variables.product.product_name %}.
* Назначьте приложение {% data variables.product.product_name %} группе поставщика удостоверений на Azure AD, чтобы автоматически создавать и предоставлять доступ учетным записям пользователей в {% data variables.product.product_name %} для всех участников группы поставщика удостоверений. Кроме того, группа поставщика удостоверений доступна в {% data variables.product.product_name %} для подключения к команде и ее родительской организации.
* Отмените назначение приложения {% data variables.product.product_name %} из группы поставщика удостоверений, чтобы отключить учетные записи пользователей {% data variables.product.product_name %} всех пользователей поставщика удостоверений, имеющих доступ только через эту группу удостоверений, и удалить пользователей из родительской организации. Группа поставщика удостоверений будет отключена от всех команд на {% data variables.product.product_name %}.

Дополнительные сведения об управлении удостоверениями и доступом для предприятия в {% data variables.location.product_location %} см. в разделе [Управление удостоверениями и доступом для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise).

## Предварительные требования

- Чтобы настроить проверку подлинности и подготовку пользователей для {% data variables.product.product_name %} с использованием Azure AD, необходимо иметь учетную запись и клиент Azure AD. Дополнительные сведения см. на [веб-сайте Azure AD](https://azure.microsoft.com/free/active-directory) и в [кратком руководстве по созданию клиента Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) в Документации Майкрософт.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Настройка проверки подлинности и подготовка пользователей с помощью Azure AD

{% ifversion ghae %}

В клиенте Azure AD добавьте приложение для {% data variables.product.product_name %}, а затем настройте подготовку.

1. В Azure AD добавьте {% data variables.enterprise.ae_azure_ad_app_link %} в клиент и настройте единый вход. Дополнительные сведения см. в статье [Руководство по интеграции единого входа Azure Active Directory с {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) в Документация Майкрософт.

1. В {% data variables.product.product_name %} введите сведения о клиенте Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Если вы уже настроили единый вход SAML для {% data variables.location.product_location %} с помощью другого поставщика удостоверений и хотите использовать Azure AD, вы можете изменить конфигурацию. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration).

1. Включите подготовку пользователей в {% data variables.product.product_name %} и настройте подготовку пользователей в Azure AD. Дополнительные сведения см. в разделе [Настройка подготовки пользователей в организации](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise).

{% elsif scim-for-ghes %}

1. Настройка единого входа SAML для {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso).
1. Настройте подготовку пользователей с помощью SCIM для своего экземпляра. Дополнительные сведения см. в разделе [Настройка подготовки пользователей с помощью SCIM для вашего предприятия](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise).

{% endif %}

## Управление владельцами предприятия 

Действия, чтобы сделать человека владельцем предприятия, зависят от того, используете ли вы только SAML или SCIM. Дополнительные сведения о владельцах организаций см. в разделе [Роли в организации](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

Если вы настроили подготовку, чтобы предоставить пользователю права владения предприятием в {% data variables.product.product_name %}, назначьте роль владельца предприятия пользователю в Azure AD.

Если вы не настроили подготовку, чтобы предоставить пользователю права владения предприятием в {% data variables.product.product_name %}, включите `administrator` атрибут в утверждение SAML для учетной записи пользователя в поставщике удостоверений со значением `true`. Дополнительные сведения о включении атрибута `administrator` в утверждение SAML из Azure AD см. [в статье Практическое руководство. Настройка утверждений, выданных в токене SAML для корпоративных приложений](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) в Документация Майкрософт.
