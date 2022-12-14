---
title: Проверка или утверждение домена для вашей организации
intro: 'Вы можете проверить владение доменами с помощью {% data variables.product.company_short %}, чтобы подтвердить удостоверение своей организации. Вы также можете утверждать домены, на которые {% data variables.product.company_short %} может отправлять уведомления по электронной почте участникам вашей организации.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verify or approve a domain
ms.openlocfilehash: ef866608c32bbcce36292822521f941a5c37476f
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009883'
---
## Проверка домена

После проверки владения доменами вашей организации будет отображаться значок "Проверено" в профиле организации. {% ifversion ghec %}Если ваша организация согласилась с корпоративными условиями обслуживания, владельцы организации смогут проверить личность ее членов, просмотрев адрес электронной почты каждого в проверенном домене. Дополнительные сведения см. в разделе [Страница профиля вашей организации](/articles/about-your-organization-s-profile/) и <a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">Переход на корпоративные условия обслуживания</a>.{% endif %}

{% ifversion ghec %}Если ваша организация принадлежит корпоративной учетной записи, значок {% elsif ghes %}A{% endif %} "Проверено" будет отображаться в профиле вашей организации для всех доменов, проверенных для корпоративной учетной записи, в дополнение к любым доменам, проверенным для организации. Владельцы организаций могут просматривать любые домены, проверенные или утвержденные владельцем предприятия, и редактировать их, если владелец организации также является владельцем предприятия. Дополнительные сведения см. в разделе [Проверка или утверждение домена для предприятия](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

{% ifversion ghec %} {% note %}

**Примечание.** Чтобы проверять или подтверждать домены, ваша организация должна использовать {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes %} После проверки владения доменом организации можно ограничить отправку уведомлений по электронной почте для организации на такой домен. Дополнительные сведения см. в статье [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization).
{% endif %}

{% ifversion ghec %}Вы также можете проверить личные домены, используемые для {% data variables.product.prodname_pages %}, чтобы предотвратить перехват домена, когда личный домен остается настроенным, но ваш сайт {% data variables.product.prodname_pages %} либо отключен, либо больше не использует домен. Дополнительные сведения см. в разделе [Подтверждение личного домена для {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).{% endif %}

## Сведения об утверждении домена

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

После утверждения доменов для вашей организации можно ограничить уведомления по электронной почте для действий в вашей организации только пользователями с проверенными адресами электронной почты в проверенных или утвержденных доменах. Дополнительные сведения см. в статье [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization).

Владельцы предприятия не могут видеть, какие члены организации или адреса электронной почты получают уведомления в утвержденных доменах.

Владельцы предприятия также могут утверждать дополнительные домены для организаций, принадлежащих предприятию. {% ifversion ghec %}Дополнительные сведения см. в статье [Проверка или утверждение домена для предприятия](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %}{% ifversion ghes %}Дополнительные сведения см. в статье [Проверка или утверждение домена для предприятия](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %}

## Проверка домена для организации

Чтобы проверить домен, необходимо иметь доступ для изменения записей домена с помощью службы размещения доменов.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. Дождитесь изменения конфигурации DNS (это может занять до 72 часов). Можно подтвердить изменение конфигурации DNS, выполнив команду `dig` в командной строке, заменив `ORGANIZATION` именем вашей организации и `example.com` доменом, который вы хотите проверить. В выходных данных команды должна появиться новая запись в текстовом формате.
   ```shell
   $ dig _github-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
   ```
1. После подтверждения добавления записи TXT в DNS выполните шаги с первого по третий, чтобы перейти к утвержденным и проверенным доменам организации.
{% data reusables.organizations.continue-verifying-domain %}
11. При необходимости после того, как значок "Проверено" отобразится на странице профиля вашей организации, можно удалить запись TXT из записи DNS в службе размещения домена.
![Индикатор событий "Проверено"](/assets/images/help/organizations/verified-badge.png)

## Утверждение домена для организации

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## Удаление утвержденного или проверенного домена

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %}
1. Справа от удаляемого домена щелкните {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, а затем нажмите кнопку **Удалить**.
    ![Команда "Удалить" для домена](/assets/images/help/organizations/domains-delete.png)
