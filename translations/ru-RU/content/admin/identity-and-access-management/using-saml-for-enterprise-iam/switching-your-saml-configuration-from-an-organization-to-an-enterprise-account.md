---
title: Переключение конфигурации SAML из организации на корпоративную учетную запись
intro: Ознакомьтесь с особыми рекомендациями по замене конфигурации SAML уровня организации конфигурацией SAML корпоративного уровня.
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: From organization to enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
ms.openlocfilehash: 8e1df23616d6cd5de90a45be336bf62981185256
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097849'
---
## Сведения о едином входе SAML для корпоративных учетных записей

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %} 

Во время настройки единого входа SAML на уровне организации каждая организация должна быть настроена с уникальным арендатором единого входа в IdP. Это означает, что участники будут связаны с уникальной записью удостоверения SAML для каждой организации, в которой они успешно прошли проверку подлинности. При настройке единого входа SAML для корпоративной учетной записи каждый участник предприятия будет иметь одно удостоверение SAML, используемое для всех организаций, принадлежащих корпоративной учетной записи.

После настройки единого входа SAML для корпоративной учетной записи новая конфигурация переопределит все существующие конфигурации единого входа SAML для организаций, которые принадлежат корпоративной учетной записи.

Участники предприятия не будут получать уведомления о включении владельцем предприятия SAML для корпоративной учетной записи. Если единый вход SAML был применен ранее на уровне организации, участники не должны заметить существенных различий при переходе непосредственно к ресурсам организации. Участники будут по-прежнему получать запросы на проверку подлинности с помощью SAML. Если участники переходят к ресурсам организации с помощью панели мониторинга IdP, им потребуется щелкнуть новую плитку для приложения уровня предприятия, а не старую плитку для приложения уровня организации. После этого участники смогут выбрать организацию для перехода. 

Все данные {% variables.product.pat_generic %}s, ключи SSH, {% данных variables.product.prodname_oauth_apps %}, а также {% данных variables.product.prodname_github_apps %}, которые ранее авторизованы для организации, будут по-прежнему авторизованы для организации. Тем не менее участникам потребуется авторизовать все PAT, ключи SSH, {% data variables.product.prodname_oauth_apps %} и {% data variables.product.prodname_github_apps %}, которые не были авторизованы для использования с единым входом SAML для организации.

В настоящее время подготовка SCIM не поддерживается, если единый вход SAML настроен для корпоративной учетной записи. Если вы сейчас используете SCIM для организации, принадлежащей вашей корпоративной учетной записи, вы потеряете эту функциональность при переключении на конфигурацию уровня предприятия.

Перед настройкой единого входа SAML для корпоративной учетной записи не требуется удалять конфигурации SAML уровня предприятия, но вы можете сделать это. В случае отключения SAML для корпоративной учетной записи в будущем вступают в силу все остальные конфигурации SAML уровня организации. Удаление конфигураций уровня организации может предотвратить непредвиденные проблемы в будущем.

## Переключение конфигурации SAML из организации на корпоративную учетную запись

1. Примените единый вход SAML для своей корпоративной учетной записи, убедившись, что всем участникам организации назначен или предоставлен доступ к приложению IdP, используемому для корпоративной учетной записи. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).
1. При необходимости удалите любую существующую конфигурацию SAML для организаций, принадлежащих корпоративной учетной записи. Чтобы решить, следует ли удалять конфигурации, ознакомьтесь с разделом [Сведения о едином входе SAML для корпоративных учетных записей](#about-saml-single-sign-on-for-enterprise-accounts).
1. Если вы сохранили конфигурации SAML уровня организации, рассмотрите возможность скрытия плитки для приложений уровня организации в IdP, чтобы избежать путаницы.
1. Сообщите участникам предприятия об изменении.
   -  Участники больше не смогут получить доступ к своим организациям, щелкнув приложение SAML для организации на панели мониторинга IdP. Им нужно будет использовать новое приложение, настроенное для корпоративной учетной записи.
   - Участникам потребуется авторизовать все ключи PAT или SSH, которые ранее не были авторизованы для использования с единым входом SAML для своей организации. Дополнительные сведения см. в разделе "[Авторизация {% данных variables.product.pat_generic %} для использования с единым входом SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" и "[Авторизация ключа SSH для использования с единым вошем SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".
   - Участникам может потребоваться выполнить повторную авторизацию {% data variables.product.prodname_oauth_apps %}, которые ранее были авторизованы для организации. Дополнительные сведения см. в разделе [Сведения о проверке подлинности с помощью единого входа SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).
