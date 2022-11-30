---
title: Проверка или утверждение домена для вашего предприятия
shortTitle: Verify or approve a domain
intro: 'Вы можете проверить владение доменами с помощью {% data variables.product.company_short %}, чтобы подтвердить удостоверения организаций, принадлежащих вашей корпоративной учетной записи. Вы также можете утверждать домены, в которых участники организации могут получать уведомления по электронной почте.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can verify or approve a domain for an enterprise account.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
redirect_from:
  - /admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/configuration/verifying-or-approving-a-domain-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
  - /github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/policies/verifying-or-approving-a-domain-for-your-enterprise
ms.openlocfilehash: dd4b832eebac9b709f5ee03d91b74df2dc778dfa
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008823'
---
## Сведения о проверке доменов

Проверив домены, вы можете убедиться, что веб-сайты и адреса электронной почты, указанные в профилях любой организации, принадлежащей вашей корпоративной учетной записи, контролируются вашим предприятием. Проверенные домены для корпоративной учетной записи применяются ко всем организациям, принадлежащим корпоративной учетной записи.

После проверки владения доменами учетной записи предприятия индикатор событий "Проверено" отображается в профиле каждой организации, у которой есть домен, указанный в ее профиле. {% data reusables.organizations.verified-domains-details %}

Для доменов, настроенных на уровне предприятия, владельцы предприятия могут проверить удостоверение участников организации, просмотрев адрес электронной почты каждого участника в пределах проверенного домена. Владельцы предприятия могут также проверить список участников предприятия, у которых нет адреса электронной почты из проверенного домена, связанного с учетной записью пользователя на сайте {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в статье [Просмотр сведений о членах без адреса электронной почты из проверенного домена](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain).

После проверки доменов для вашей корпоративной учетной записи можно ограничить уведомления по электронной почте проверенными доменами для всех организаций, принадлежащих вашей корпоративной учетной записи. Дополнительные сведения см. в статье [Ограничение уведомлений по электронной почте для предприятия](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).

Даже если вы не ограничили уведомления по электронной почте для корпоративной учетной записи, то если владелец организации ограничит уведомления по электронной почте для организации, члены организации смогут получать уведомления в любых доменах, проверенных или утвержденных для корпоративной учетной записи, помимо любых доменов, проверенных или утвержденных для организации. Дополнительные сведения об ограничении уведомлений для организации см. в разделе [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization).

Владельцы организации также могут проверять дополнительные домены для своих организаций. Дополнительные сведения см. в разделе [Проверка или утверждение домена для вашей организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

## Сведения об утверждении доменов

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

После утверждения доменов для вашей корпоративной учетной записи можно ограничить уведомления по электронной почте для действий в вашей корпоративной учетной записи только пользователями с проверенными адресами электронной почты в проверенных или утвержденных доменах. Дополнительные сведения см. в статье [Ограничение уведомлений по электронной почте для предприятия](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).

{% ifversion ghec %} Чтобы получать уведомления по электронной почте, владелец учетной записи пользователя должен проверить адрес электронной почты на {% data variables.product.product_name %}. Дополнительные сведения см. в статье [Проверка адреса электронной почты](/github/getting-started-with-github/verifying-your-email-address).{% endif %}

Владельцы организации не могут видеть адрес электронной почты или учетную запись пользователя, связанную с адресом электронной почты из утвержденного домена.

Владельцы организации также могут утвердить дополнительные домены для своих организаций. Дополнительные сведения см. в разделе [Проверка или утверждение домена для вашей организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

## Проверка домена для корпоративной учетной записи

Чтобы проверить домен вашей корпоративной учетной записи, необходимо иметь доступ для изменения записей домена с помощью службы размещения доменов.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. Дождитесь изменения конфигурации DNS (это может занять до 72 часов). Вы можете подтвердить изменение конфигурации DNS, выполнив команду `dig` в командной строке, заменив `ENTERPRISE-ACCOUNT` на имя вашей корпоративной учетной записи и `example.com` на домен, который вы хотите проверить. В выходных данных команды должна появиться новая запись в текстовом формате.
   ```shell
   dig _github-challenge-ENTERPRISE-ACCOUNT.DOMAIN-NAME +nostats +nocomments +nocmd TXT
   ```
1. После подтверждения добавления записи TXT в DNS выполните шаги, описанные выше, чтобы перейти к утвержденным и проверенным доменам вашей корпоративной учетной записи.
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. При необходимости после того, как индикатор событий "Проверено" отображается в профилях вашей организации, удалите текстовую запись из записи DNS в службе размещения домена.
![Индикатор событий "Проверено"](/assets/images/help/organizations/verified-badge.png)

## Утверждение домена для корпоративной учетной записи

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## Удаление утвержденного или проверенного домена

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. Справа от удаляемого домена щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем нажмите кнопку **Удалить**.
    ![Команда "Удалить" для домена](/assets/images/help/organizations/domains-delete.png)
