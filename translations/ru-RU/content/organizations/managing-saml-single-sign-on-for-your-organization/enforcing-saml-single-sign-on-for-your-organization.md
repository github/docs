---
title: Применение единого входа SAML для вашей организации
intro: 'Владельцы и администраторы организации могут применять единый вход SAML, чтобы все члены организации проходили проверку подлинности посредством поставщика удостоверений (IdP).'
redirect_from:
  - /articles/enforcing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enforcing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enforce SAML single sign-on
ms.openlocfilehash: 78c6ca3297705511e419a96742a8887d01d7b70d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125624'
---
## Сведения о применении единого входа SAML для вашей организации

При включении единого входа SAML {% data variables.product.prodname_dotcom %} предложит членам, которые посещают ресурсы организации в {% data variables.product.prodname_dotcom_the_website %} для проверки подлинности в поставщике удостоверений, связать личную учетную запись члена с удостоверением в поставщике удостоверений. Участники по-прежнему могут получить доступ к ресурсам организации перед проверкой подлинности с помощью поставщика удостоверений.

![Баннер с запросом на проверку подлинности с помощью единого входа SAML для доступа к организации](/assets/images/help/saml/sso-has-been-enabled.png)

Вы также можете применить единый вход SAML для организации {% data reusables.saml.when-you-enforce %} При принудительном применении удаляются все участники и администраторы, которые не прошли проверку подлинности посредством поставщика удостоверений из организации. {% data variables.product.company_short %} отправляет уведомление по электронной почте каждому удаленному пользователю. 

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} Если пользователь повторно присоединится к организации в течение трех месяцев, его права доступа и настройки будут восстановлены. Дополнительные сведения см. в разделе [Восстановление бывшего участника вашей организации](/articles/reinstating-a-former-member-of-your-organization).

Боты и учетные записи служб, у которых нет внешних удостоверений, настроенных в поставщике удостоверений вашей организации, также будут удалены при принудительном применении единого входа SAML. Дополнительные сведения о ботах и учетных записях служб см. в разделе [Управление ботами и учетными записями служб с помощью единого входа SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on).

Если ваша организация принадлежит корпоративной учетной записи, настройка требования SAML для корпоративной учетной записи переопределяет конфигурацию SAML на уровне организации и применит единый вход SAML для каждой организации на предприятии. Дополнительные сведения см. в разделе [Настройка единого входа SAML для вашего предприятия](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

{% tip %}

**Совет.** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Принудительное применение единого входа SAML для организации

1. Включите и проверьте единый вход SAML для вашей организации, а затем выполните проверку подлинности с помощью поставщика удостоверений хотя бы один раз. Дополнительные сведения см. в разделе [Включение и тестирование единого входа SAML для организации](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization).
1. Подготовка к применению единого входа SAML для организации Дополнительные сведения см. в разделе [Подготовка к принудительному применению единого входа SAML в организации](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization).
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. В разделе "Единый вход SAML" выберите **Требовать проверку подлинности единого входа SAML для участников организации _ОРГАНИЗАЦИЯ_**.
    ![Флажок "Требовать проверку подлинности единого входа SAML"](/assets/images/help/saml/require-saml-sso-authentication.png)
1. Если какие-либо члены организации не прошли проверку подлинности посредством поставщика удостоверений, {% data variables.product.company_short %} отображает участников. Если применить единый вход SAML, {% data variables.product.company_short %} удалит участников из организации. Просмотрите предупреждение и нажмите кнопку **Удалить участников и требовать единый вход SAML**.
    ![Диалоговое окно "Подтверждение принудительного применения SAML", где отображается список участников для удаления из организации](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. В разделе "Коды восстановления единого входа" просмотрите коды восстановления. Храните коды восстановления в безопасном расположении, например в диспетчере паролей.

## Дополнительные материалы

- [Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
