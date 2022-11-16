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
ms.openlocfilehash: bfd93814b11066d6da2d87a2e1f0a8bd5461e93f
ms.sourcegitcommit: ced661bdffebd0f96f6f76db109fbe31983448ba
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167063'
---
## Сведения о проверке подлинности и подготовке пользователей с помощью Azure AD

Azure Active Directory (Azure AD) — это служба корпорации Майкрософт, которая позволяет централизованно управлять учетными записями пользователей и доступом к веб-приложениям. Дополнительные сведения см. в статье [Что такое Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) в Документации Майкрософт.

Для управления удостоверениями и доступом к {% data variables.product.product_name %} можно использовать клиент Azure AD в качестве поставщика удостоверений SAML для проверки подлинности. Вы также можете настроить Azure AD для автоматической подготовки учетных записей и доступа к членству с помощью SCIM, что позволяет создавать пользователей {% data variables.product.product_name %} и управлять членством в командах и организациях из клиента Azure AD.

{% data reusables.scim.ghes-beta-note %}

После включения единого входа SAML и SCIM для {% data variables.product.product_name %} с помощью Azure AD вы можете выполнить следующие действия в клиенте Azure AD.

* Назначьте приложение {% data variables.product.product_name %} на Azure AD учетной записи пользователя, чтобы автоматически создать и предоставить доступ к соответствующей учетной записи пользователя в {% data variables.product.product_name %}.
* Отмена назначения приложения {% data variables.product.product_name %} учетной записи пользователя на Azure AD, чтобы отключить соответствующую учетную запись пользователя в {% data variables.product.product_name %}.
* Назначьте приложение {% data variables.product.product_name %} группе поставщика удостоверений на Azure AD, чтобы автоматически создавать и предоставлять доступ к учетным записям пользователей в {% data variables.product.product_name %} для всех участников группы поставщика удостоверений. Кроме того, группа IdP доступна в {% data variables.product.product_name %} для подключения к команде и ее родительской организации.
* Отмените назначение приложения {% data variables.product.product_name %} из группы поставщиков удостоверений, чтобы отключить учетные записи пользователей {% data variables.product.product_name %} всех пользователей поставщика удостоверений, имеющих доступ только через эту группу удостоверений, и удалить пользователей из родительской организации. Группа поставщика удостоверений будет отключена от всех команд на {% data variables.product.product_name %}.

Дополнительные сведения об управлении удостоверениями и доступом для предприятия в {% data variables.location.product_location %} см. в разделе [Управление удостоверениями и доступом для предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise). Дополнительные сведения о синхронизации команд с группами поставщика удостоверений см. в разделе [Синхронизация команды с группой поставщика удостоверений](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group).

## Предварительные требования

- Чтобы настроить проверку подлинности и подготовку пользователей для {% data variables.product.product_name %} с использованием Azure AD, необходимо иметь учетную запись и клиент Azure AD. Дополнительные сведения см. на [веб-сайте Azure AD](https://azure.microsoft.com/free/active-directory) и в [кратком руководстве по созданию клиента Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) в Документации Майкрософт.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Настройка проверки подлинности и подготовка пользователей с помощью Azure AD

В клиенте Azure AD добавьте приложение для {% data variables.product.product_name %}, а затем настройте подготовку.

{% ifversion ghae %}

1. В Azure AD добавьте {% data variables.enterprise.ae_azure_ad_app_link %} в клиент и настройте единый вход. Дополнительные сведения см. в статье [Руководство по интеграции единого входа Azure Active Directory с {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) в Документация Майкрософт.

1. В {% data variables.product.product_name %} введите сведения о клиенте Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Если вы уже настроили единый вход SAML для {% data variables.location.product_location %} с помощью другого поставщика удостоверений и хотите использовать Azure AD, вы можете изменить конфигурацию. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration).

1. Включите подготовку пользователей в {% data variables.product.product_name %} и настройте подготовку пользователей в Azure AD. Дополнительные сведения см. в разделе [Настройка подготовки пользователей в организации](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise).

{% elsif scim-for-ghes %}

1. В клиенте Azure AD на левой боковой панели щелкните **Подготовка**.

1. В разделе "URL-адрес клиента" введите полный URL-адрес конечной точки для SCIM в {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [SCIM](/rest/enterprise-admin/scim#scim-endpoint-urls) документации по REST API.

1. В разделе "Секретный токен" введите {% data variables.product.pat_v1 %}, созданный на шаге 4 раздела "[Настройка подготовки пользователей с помощью SCIM для вашего предприятия](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

1. Чтобы обеспечить успешное подключение из Azure AD к {% data variables.location.product_location %}, щелкните **Проверить подключение**.

1. После успешного подключения в верхней части страницы нажмите кнопку **Сохранить**.

{% endif %}

1. Назначьте владельца предприятия для {% data variables.product.product_name %} в Azure AD. Процесс, который необходимо выполнить, зависит от того, настроена ли подготовка. Дополнительные сведения о владельцах организаций см. в разделе [Роли в организации](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners).
   - Если вы настроили подготовку, чтобы предоставить пользователю права владения предприятием в {% data variables.product.product_name %}, назначьте роль владельца предприятия пользователю в Azure AD.
   - Если вы не настроили подготовку, чтобы предоставить пользователю права владения предприятием в {% data variables.product.product_name %}, включите `administrator` атрибут в утверждение SAML для учетной записи пользователя в поставщике удостоверений со значением `true`. Дополнительные сведения о включении атрибута `administrator` в утверждение SAML из Azure AD см. [в статье How to: customize claims issued in the SAML token for enterprise applications](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) in the Документация Майкрософт.
