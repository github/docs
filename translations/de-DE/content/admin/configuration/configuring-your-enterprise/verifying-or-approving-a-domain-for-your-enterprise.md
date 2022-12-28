---
title: Überprüfen oder Genehmigen einer Domäne für dein Unternehmen
shortTitle: Verify or approve a domain
intro: 'Du kannst deine Domäneninhaberschaft mit {% data variables.product.company_short %} überprüfen, um die Identität von Organisationen zu bestätigen, die deinem Unternehmenskonto gehören. Du kannst auch Domänen genehmigen, in denen Organisationsmitglieder E-Mail-Benachrichtigungen erhalten können.'
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
ms.openlocfilehash: 6cadd805d10095bb7a7443a86333312fce507617
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147060914'
---
## Informationen zur Überprüfung von Domänen

Indem du Domänen überprüfst, kannst du bestätigen, dass die Websites und E-Mail-Adressen in den Profilen von Organisationen im Besitz deines Unternehmenskontos von deinem Unternehmen überwacht werden. Überprüfte Domänen für ein Unternehmenskonto gelten für alle Organisationen im Besitz dieses Unternehmenskontos.

Nachdem du den Besitz der Domänen deines Unternehmenskontos überprüft hast, wird ein Badge mit dem Wort „Verifiziert“ auf dem Profil jeder Organisation angezeigt, die die Domäne auf ihrem Profil aufführt. {% data reusables.organizations.verified-domains-details %}

Für Domänen, die auf Unternehmensebene konfiguriert sind, können Unternehmensinhaber*innen die Identität der Organisationsmitglieder überprüfen, indem sie die E-Mail-Adresse jedes Mitglieds innerhalb der überprüften Domäne anzeigen. Unternehmensinhaber*innen können auch eine Liste von Unternehmensmitgliedern anzeigen, deren Benutzerkonto auf {% data variables.product.prodname_dotcom %} keine E-Mail-Adresse einer überprüften Domäne zugeordnet ist. Weitere Informationen findest du unter [Anzeigen von Mitgliedern ohne E-Mail-Adresse aus einer überprüften Domäne](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain).

Nachdem du Domänen für dein Unternehmenskonto überprüft hast, kannst du E-Mail-Benachrichtigungen für alle Organisationen im Besitz deines Unternehmenskontos auf überprüfte Domänen beschränken. Weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für dein Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).

Wenn du E-Mail-Benachrichtigungen für das Unternehmenskonto nicht einschränkst, können Organisationsmitglieder Benachrichtigungen zu allen für das Unternehmenskonto überprüften oder genehmigten Domänen zusätzlich zu allen für die Organisation überprüften oder genehmigten Domänen empfangen, auch wenn ein*e Organisationsbesitzer*in E-Mail-Benachrichtigungen für die Organisation eingeschränkt hat. Weitere Informationen zum Einschränken der Benachrichtigungen für eine Organisation findest du unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization).

Organisationsbesitzer*innen können für ihre Organisationen auch zusätzliche Domänen überprüfen. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

## Informationen zur Genehmigung von Domänen

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Nachdem du Domänen für dein Unternehmenskonto genehmigt hast, kannst du E-Mail-Benachrichtigungen für Aktivitäten innerhalb des Unternehmenskontos auf Benutzer*innen mit überprüften E-Mail-Adressen innerhalb von überprüften oder genehmigten Domänen beschränken. Weitere Informationen findest du unter [Einschränken von E-Mail-Benachrichtigungen für dein Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).

{% ifversion ghec %}Um E-Mail-Benachrichtigungen erhalten zu können, muss der oder die Besitzer*in des Benutzerkontos die E-Mail-Adresse auf {% data variables.product.product_name %} verifizieren. Weitere Informationen findest du unter [Verifizieren deiner E-Mail-Adresse](/github/getting-started-with-github/verifying-your-email-address).{% endif %}

Organisationsbesitzer*innen können weder die E-Mail-Adresse sehen noch welches Benutzerkonto einer E-Mail-Adresse aus einer genehmigten Domäne zugeordnet ist.

Organisationsbesitzer*innen können für ihre Organisationen auch zusätzliche Domänen genehmigen. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

## Überprüfen einer Domäne für dein Unternehmenskonto

Um die Domäne deines Unternehmenskontos zu überprüfen, musst du Zugriff haben, um Domäneneinträge mit deinem Domänenhostingdienst zu ändern.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. Es kam bis zu 72 Stunden dauern, bis die DNS-Konfiguration geändert wird. Du kannst überprüfen, ob deine DNS-Konfiguration geändert wurde, indem du den `dig`-Befehl in der Befehlszeile ausführst und dabei `ENTERPRISE-ACCOUNT` mit dem Namen deines Unternehmenskontos und `example.com` mit der Domäne ersetzen, die du überprüfen möchtest. In der Befehlsausgabe sollte dein neuer TXT-Eintrag aufgelistet werden.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Nachdem du bestätigt hast, dass dein TXT-Eintrag deinem DNS hinzugefügt wurde, führe die Schritte 1 bis 4 oben aus, um zu den genehmigten und überprüften Domänen deines Unternehmenskontos zu navigieren.
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. Wenn der Badge „Verifiziert“ auf den Profilen deiner Organisationen sichtbar ist, kannst du den TXT-Eintrag im Domänenhostingdienst auch aus dem DNS-Eintrag löschen.
![Badge „Verifiziert“](/assets/images/help/organizations/verified-badge.png)

## Genehmigen einer Domäne für dein Unternehmenskonto

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## Entfernen einer genehmigten oder überprüften Domäne

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. Klicke rechts neben der zu entfernenden Domäne auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, und klicke dann auf **Löschen**.
    ![Schaltfläche „Löschen“ für eine Domäne](/assets/images/help/organizations/domains-delete.png)
