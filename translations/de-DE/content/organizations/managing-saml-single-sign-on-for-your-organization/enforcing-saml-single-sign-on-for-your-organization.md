---
title: Erzwingen der einmaligen SAML-Anmeldung für deine Organisation
intro: 'Besitzer*innen und Administrator*innen von Organisationen können SAML-SSO erzwingen, sodass sich alle Organisationsmitglieder über einen Identitätsanbieter (IdP) authentifizieren müssen.'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145125625'
---
## Informationen zur Erzwingung von SAML-SSO für deine Organisation

Wenn du SAML-SSO aktivierst, fordert {% data variables.product.prodname_dotcom %} Mitglieder, die die Ressourcen der Organisation auf {% data variables.product.prodname_dotcom_the_website %} verwenden, dazu auf, sich bei deinem Identitätsanbieter (IdP) zu authentifizieren. Dadurch wird das persönliche Konto des Mitglieds mit einer Identität beim IdP verknüpft. Mitglieder können weiterhin auf die Ressourcen der Organisation zugreifen, auch wenn sie die Authentifizierung bei deinem IdP noch nicht durchgeführt haben.

![Ein Banner, das Benutzer*innen dazu auffordert, sich über SAML-SSO für den Zugriff auf die Organisation zu authentifizieren](/assets/images/help/saml/sso-has-been-enabled.png)

Du kannst SAML-SSO auch für deine Organisation erzwingen. {% data reusables.saml.when-you-enforce %} Durch das Erzwingen werden alle Mitglieder und Administrator*innen entfernt, die sich nicht über den IdP der Organisation authentifiziert haben. {% data variables.product.company_short %} sendet eine E-Mail-Benachrichtigung an alle entfernten Benutzer*innen. 

{% data reusables.saml.ghec-only %}

{% data reusables.saml.removed-users-can-rejoin %} Wenn ein*e Benutzer*in der Organisation innerhalb von drei Monaten wieder beitritt, werden die Berechtigungen und Einstellungen des Benutzers bzw. der Benutzerin wiederhergestellt. Weitere Informationen findest du unter [Reaktivieren eines ehemaligen Mitglieds deiner Organisation](/articles/reinstating-a-former-member-of-your-organization).

Bots und Dienstkonten, für die beim IdP der Organisation keine externen Identitäten eingerichtet wurden, werden ebenfalls entfernt, wenn du SAML-SSO erzwingst. Weitere Informationen zu Bots und Dienstkonten findest du unter [Verwalten von Bots und Dienstkonten mit dem einmaligen Anmelden mit SAML](/articles/managing-bots-and-service-accounts-with-saml-single-sign-on).

Wenn deine Organisation sich im Besitz eines Unternehmenskontos befindet, wird die SAML-Konfiguration auf Organisationsebene durch das Erzwingen von SAML für das Unternehmenskonto gelöscht, und SAML-SSO wird für jede Organisation im Unternehmen erzwungen. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

{% tip %}

**Tipp:** {% data reusables.saml.testing-saml-sso %}

{% endtip %}

## Erzwingen von SAML-SSO für deine Organisation

1. Aktiviere und teste SAML-SSO für deine Organisation, und authentifiziere dich dann mindestens einmal über deinen IdP. Weitere Informationen findest du unter [Aktivieren und Testen des einmaligen Anmeldens mit SAML für deine Organisation](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization).
1. Bereite die Erzwingung von SAML-SSO für deine Organisation vor. Weitere Informationen findest du unter [Vorbereiten der Erzwingung des einmaligen Anmeldens mit SAML in deiner Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/preparing-to-enforce-saml-single-sign-on-in-your-organization).
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Wähle unter „SAML-SSO“ die Option **Authentifizierung mit SAML-SSO für alle Mitglieder der _ORGANISATION_-Organisation erzwingen** aus.
    ![Das Kontrollkästchen „Authentifizierung mit SAML-SSO erzwingen“](/assets/images/help/saml/require-saml-sso-authentication.png)
1. Wenn sich Organisationsmitglieder nicht über deinen IdP authentifiziert haben, zeigt {% data variables.product.company_short %} diese Mitglieder an. Wenn du SAML-SSO erzwingst, entfernt {% data variables.product.company_short %} die Mitglieder aus der Organisation. Lies die Warnung, und klicke auf **Mitglieder entfernen und SAML-SSO erzwingen**.
    ![Das Dialogfeld „Erzwingung von SAML-SSO bestätigen“ mit einer Liste der Mitglieder, die aus der Organisation entfernt werden sollen](/assets/images/help/saml/confirm-saml-sso-enforcement.png)
1. Überprüfe unter „Wiederherstellungscodes für SSO“ die Wiederherstellungscodes. Speichere die Wiederherstellungscodes an einem sicheren Speicherort wie einem Kennwort-Manager.

## Weitere Informationsquellen

- [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)
