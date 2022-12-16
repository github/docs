---
title: Verwalten der Teamsynchronisierung für deine Organisation
intro: 'Du kannst die Teamsynchronisierung zwischen deinem Identitätsanbieter (IdP) und deiner Organisation auf {% data variables.product.product_name %} aktivieren oder deaktivieren.'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team synchronization
ms.openlocfilehash: 027669f75f3671394503e5036b8f6c86351697cf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093150'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Informationen zur Teamsynchronisierung

Du kannst die Teamsynchronisierung zwischen deinem IdP und {% data variables.product.product_name %} aktivieren, um es den Organisationsinhabern und Team-Betreuern zu ermöglichen, Teams in deiner Organisation mit IdP-Gruppen zu verbinden.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

Du kannst die Teamsynchronisierung auch für Organisationen im Besitz eines Enterprise-Kontos aktivieren. Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für Organisationen in deinem Unternehmen](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Teamsynchronisierung aktivieren

Die Schritte zum Aktivieren von Teamsynchronisierung hängen vom IdP ab, den du verwenden möchtest. Es gibt Voraussetzungen zur Aktivierung der Teamsynchronisierung, die auf jeden IdP zutreffen. Jeder einzelne IdP hat zusätzliche Voraussetzungen.

### Voraussetzungen

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

Du musst SAML Single Sign-On für deine Organisation und deinen unterstützten IdP aktivieren. Weitere Informationen findest du unter [Erzwingen des einmaligen Anmeldens von SAML für deine Organisation](/articles/enforcing-saml-single-sign-on-for-your-organization).

Du benötigst eine verknüpfte SAML-Identität. Um eine verknüpfte Identität zu erstellen, musst du dich mit SAML SSO und dem unterstützten IdP mindestens einmal authentifizieren. Weitere Informationen findest du unter [Authentifizieren mit einmaligem Anmelden mit SAML](/articles/authenticating-with-saml-single-sign-on).

Deine SAML-Einstellungen **müssen** eine gültige IdP-URL für das Feld **Aussteller** enthalten. 

![SAML-Ausstellerfeld](/assets/images/help/saml/saml_issuer.png)



### Teamsynchronisierung für Azure AD aktivieren

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
6. Prüfe die Mandanteninformationen des Identitätsanbieters, dessen Verbindung mit deiner Organisation du herstellen möchtest, und klicke auf **Genehmigen**.
  ![Ausstehende Anforderung zum Aktivieren der Teamsynchronisierung für einen IdP-Mandanten mit der Option zur Genehmigung oder Ablehnung](/assets/images/help/teams/approve-team-synchronization.png)

### Teamsynchronisierung für Okta aktivieren

Okta-Teamsynchronisierung erfordert, dass SAML und SCIM mit Okta bereits für deine Organisation eingerichtet wurden.

Um potenzielle Teamsynchronisierungsfehler mit Okta zu vermeiden, solltest du sicherstellen, dass SCIM-verknüpfte Identitäten ordnungsgemäß für alle Organisationsmitglieder eingerichtet sind, die Mitglieder deiner ausgewählten Okta-Gruppen sind, bevor du die Teamsynchronisierung für {% data variables.product.prodname_dotcom %} aktivierst. 

Wenn ein Organisationsmitglied nicht über eine verknüpfte SCIM-Identität verfügt, funktioniert die Teamsynchronisierung nicht wie erwartet, und der Benutzer wird möglicherweise nicht wie erwartet zu Teams hinzugefügt oder aus Teams entfernt. Wenn einem dieser Benutzer eine verknüpfte SCIM-Identität fehlt, musst du sie erneut bereitstellen.

Hilfe zum Bereitstellen für Benutzer*innen, denen eine verknüpfte SCIM-Identität fehlt, findest du unter [Problembehandlung bei der Identitäts- und Zugriffsverwaltung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization).

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. Erwäge, SAML in deiner Organisation zu erzwingen, um sicherzustellen, dass Organisationsmitglieder ihre SAML- und SCIM-Identitäten verknüpfen. Weitere Informationen findest du unter [Erzwingen des einmaligen Anmeldens von SAML für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. Gib unterhalb dem Namen deiner Organisation einen gültigen SSWS-Token und die URL zu deiner Okta-Instanz ein.
  ![Okta-Organisationsformular für das Aktivieren der Teamsynchronisierung](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Prüfe die Mandanteninformationen des Identitätsanbieters, dessen Verbindung mit deiner Organisation du herstellen möchtest, und klicke auf **Erstellen**.
  ![Schaltfläche „Teamsynchronisierung aktivieren“](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## Teamsynchronisierung deaktivieren

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. Klicke unter „Teamsynchronisierung“ auf **Teamsynchronisierung deaktivieren**.
  ![Deaktivieren von Teamsynchronisierung](/assets/images/help/teams/disable-team-synchronization.png)
