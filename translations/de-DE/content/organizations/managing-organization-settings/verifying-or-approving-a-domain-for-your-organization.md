---
title: Überprüfen oder Genehmigen einer Domäne für deine Organisation
intro: 'Du kannst deine Domäneninhaberschaft mit {% data variables.product.company_short %} überprüfen, um die Identität deiner Organisation zu bestätigen. Du kannst auch Domänen genehmigen, an die {% data variables.product.company_short %} E-Mail-Benachrichtigungen für Mitglieder deiner Organisation senden kann.'
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
ms.openlocfilehash: 3cdd2954798e8584d5803ea9254d626d9cb37ee5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061746'
---
## Informationen zur Domänenüberprüfung

Nachdem du die Inhaberschaft der Domains deiner Organisation verifiziert hast, wird im Profil der Organisation der Badge „Verified“ (Verifiziert) angezeigt. {% ifversion ghec %}Wenn deine Organisation den Unternehmensnutzungsbedingungen zugestimmt hat, können Organisationsinhaber die Identität der Organisationsmitglieder überprüfen, indem sie die E-Mail-Adresse der einzelnen Mitglieder in der überprüften Domäne anzeigen. Weitere Informationen findest du unter [Profilseite deiner Organisation](/articles/about-your-organization-s-profile/) und <a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">Upgrade auf die Geschäftsbedingungen ihrer Organisation</a>. {% endif %}

{% ifversion ghec %}Wenn deine Organisation im Besitz eines Unternehmenskontos ist, wird zusätzlich zu allen Domänen, die für die Organisation überprüft wurden, ein{% elsif ghes %}A{% endif %}„Überprüft“-Badge auf dem Profil deiner Organisation für alle Domänen angezeigt, die für das Unternehmenskonto überprüft wurden. Organisationsinhaber*innen können alle Domänen anzeigen, die ein*e Unternehmensinhaber*in überprüft oder genehmigt hat, und die Domänen bearbeiten, wenn der oder die Organisationsinhaber*in auch Unternehmensinhaber*in ist. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

{% ifversion ghec %} {% note %}

**Hinweis:** Um Domänen überprüfen oder genehmigen zu können, muss deine Organisation{% data variables.product.prodname_ghe_cloud %} verwenden. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes %} Nach Überprüfung der Domäneninhaberschaft deiner Organisation kannst du die E-Mail-Benachrichtigungen für die Organisation auf diese Domäne beschränken. Weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization).
{% endif %}

{% ifversion ghec %}Du kannst benutzerdefinierte Domänen, die für {% data variables.product.prodname_pages %} auch überprüfen, um Domänenübernahmen zu verhindern, wenn eine benutzerdefinierte Domäne zwar konfiguriert bleibt, jedoch deine {% data variables.product.prodname_pages %}-Website entweder deaktiviert ist oder diese Domäne nicht länger verwendet. Weitere Informationen findest du unter [Überprüfen deiner benutzerdefinierten Domäne für {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).{% endif %}

## Informationen zur Domänengenehmigung

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Nachdem du Domänen für deine Organisation genehmigt hast, kannst du E-Mail-Benachrichtigungen für Aktivitäten innerhalb der Organisation auf Benutzer*innen mit überprüften oder genehmigten Domänen beschränken. Weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization).

Unternehmensinhaber*innen können nicht sehen, welche Organisationsmitglieder oder E-Mail-Adressen Benachrichtigungen innerhalb genehmigter Domänen erhalten.

Unternehmensinhaber*innen können auch zusätzliche Domänen für Organisationen genehmigen, die im Besitz des Unternehmens sind. {% ifversion ghec %}Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %}{% ifversion ghes %}Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %}

## Überprüfen einer Domäne für deine Organisation

Um eine Domäne zu überprüfen, musst du Zugriff haben, um Domäneneinträge mit deinem Domänenhostingdienst zu ändern.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. Es kam bis zu 72 Stunden dauern, bis die DNS-Konfiguration geändert wird. Du kannst überprüfen, ob deine DNS-Konfiguration geändert wurde, indem du den `dig`-Befehl in der Befehlszeile ausführst und dabei `ORGANIZATION` durch den Namen deiner Organisation und `example.com` durch die Domäne ersetzt, die du überprüfen möchtest. In der Befehlsausgabe sollte dein neuer TXT-Eintrag aufgelistet werden.
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Nachdem du bestätigt hast, dass dein TXT-Eintrag deinem DNS hinzugefügt wurde, führe die Schritte 1 bis 3 oben aus, um zu den genehmigten und überprüften Domänen deiner Organisation zu navigieren.
{% data reusables.organizations.continue-verifying-domain %}
11. Sobald der Badge „Verified“ (Verifiziert) auf der Profilseite deiner Organisation sichtbar ist, kannst du den TXT-Eintrag im Domänen-Hosting-Dienst optional aus dem DNS-Eintrag löschen.
![Badge „Verified“ (Verifiziert)](/assets/images/help/organizations/verified-badge.png)

## Genehmigen einer Domäne für deine Organisation

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## Entfernen einer genehmigten oder überprüften Domäne

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %}
1. Klicke rechts neben der zu entfernenden Domäne auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, und klicke dann auf **Löschen**.
    ![Schaltfläche „Löschen“ für eine Domäne](/assets/images/help/organizations/domains-delete.png)
