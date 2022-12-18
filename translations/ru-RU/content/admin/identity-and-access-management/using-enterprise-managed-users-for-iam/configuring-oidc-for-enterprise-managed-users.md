---
title: Настройка OIDC для Управляемых пользователей Enterprise
shortTitle: OIDC for managed users
intro: "Вы можете автоматически управлять доступом к корпоративной учетной записи в {% data variables.product.prodname_dotcom %}, настроив единый вход OpenID\_Connect (OIDC) и включения поддержки политики условного доступа (CAP) поставщика удостоверений."
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: caa557cb976fb60a59572e1623db6be87efeee54
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179992'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Сведения об OIDC для Управляемых пользователей Enterprise

Используя {% data variables.product.prodname_emus %}, ваше предприятие сможет применять поставщик удостоверений (IdP) для проверки подлинности всех участников. Вы можете использовать OpenID Connect (OIDC) для управления проверкой подлинности {% data variables.enterprise.prodname_emu_enterprise %}. Включение единого входа OIDC — это процесс настройки одним щелчком мыши, при котором сертификатами управляет {% data variables.product.prodname_dotcom %} и ваш IdP.

{% data reusables.enterprise-accounts.emu-cap-validates %} Дополнительную информацию см. в статье [Сведения о поддержке политики условного доступа поставщика удостоверений](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy).

Вы можете настроить время существования сеанса и частоту повторной проверки подлинности {% data variables.enterprise.prodname_managed_user %}, изменив свойство политики времени существования маркеров идентификаторов, выданных для {% data variables.product.prodname_dotcom %} из поставщика удостоверений. Время существования по умолчанию составляет один час. Дополнительные сведения см. в статье [Настройка времени жизни маркеров на платформе удостоверений Майкрософт](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes) документации Azure AD.

{% data reusables.enterprise_user_management. SAML to-OIDC-migration-for-EMU %}

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## Поддержка поставщиков удостоверений

Поддержка OIDC доступна для клиентов, использующих Azure Active Directory (Azure AD). 

Каждый арендатор Azure AD может поддерживать только одну интеграцию OIDC с {% data variables.product.prodname_emus %}. Если вы хотите подключить Azure AD к нескольким предприятиям в {% data variables.product.prodname_dotcom %}, используйте SAML. Дополнительные сведения см. в статье [Настройка единого входа SAML для {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users).

## Настройка OIDC для Управляемых пользователей Enterprise

1. Войдите в {% data variables.product.prodname_dotcom_the_website %} в качестве пользователя установки для нового предприятия с именем пользователя **@<em>SHORT-CODE</em>_admin**.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Выберите **Require OIDC single sign-on** (Требовать единый вход OIDC).  
   ![Снимок экрана: флажок Require OIDC single sign-on (Требовать единый вход OIDC)](/assets/images/help/enterprises/require-oidc.png)
1. Чтобы продолжить настройку и перенаправиться в Azure AD, нажмите кнопку **Сохранить**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %} {% data reusables.enterprise-accounts.download-recovery-codes %}

## включение подготовки;

После включения единого входа OIDC включите подготовку. Дополнительные сведения см. в статье [Настройка подготовки SCIM для управляемых пользователей GitHub Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users).
