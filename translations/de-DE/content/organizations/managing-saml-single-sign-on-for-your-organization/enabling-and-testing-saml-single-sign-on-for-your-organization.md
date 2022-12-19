---
title: SAML Single Sign-On für deine Organisation aktivieren und testen
intro: 'Inhaber und Administratoren von Organisationen können SAML Single-Sign-On aktivieren, um eine zusätzliche Sicherheitsebene für die Organisation zu schaffen.'
redirect_from:
  - /articles/enabling-and-testing-saml-single-sign-on-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/enabling-and-testing-saml-single-sign-on-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Enable & test SAML SSO
ms.openlocfilehash: cbdf8c92ca61f9836876c34ae9dd3b9be0cd7ee4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184057'
---
## Informationen zu SAML SSO

Du kannst SAML SSO in Deiner Organisation aktivieren, ohne die Verwendung für alle Mitglieder vorzuschreiben. Wenn Du SAML SSO für Deine Organisation aktivierst, aber nicht erzwingst, förderst Du die Annahme dieser Funktion. Sobald die Mehrheit der Organisationsmitglieder SAML SSO verwendet, kannst Du die Nutzung in Deiner Organisation vorschreiben.

{% data reusables.saml.ghec-only %}

Wenn Du SAML SSO aktivierst, aber nicht erzwingst, können Organisationsmitglieder, die SAML SSO nicht verwenden, trotzdem Mitglieder der Organisation bleiben. Weitere Informationen zum Erzwingen von SAML SSO findest du unter [Erzwingen von SAML SSO für deine Organisation](/articles/enforcing-saml-single-sign-on-for-your-organization).

{% data reusables.saml.outside-collaborators-exemption %}

{% data reusables.saml.saml-disabled-linked-identities-removed %}

{% data reusables.apps.reauthorize-apps-saml %}

## SAML Single Sign-On für deine Organisation aktivieren und testen

Bereite vor dem Erzwingen von SAML SSO in deiner Organisation die Organisation unbedingt darauf vor. Weitere Informationen findest du unter [Vorbereiten der Erzwingung des einmaligen Anmeldens mit SAML in deiner Organisation](/articles/preparing-to-enforce-saml-single-sign-on-in-your-organization).

Weitere Informationen zu den Identitätsanbietern (IdPs), die {% data variables.product.company_short %} für SAML SSO unterstützt, findest du unter [Verbinden deines Identitätsanbieters mit deiner Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. Aktiviere unter „SAML Single Sign-On“ das Kontrollkästchen **SAML-Authentifizierung aktivieren**.
![Kontrollkästchen zum Aktivieren von SAML SSO](/assets/images/help/saml/saml_enable.png)

  {% note %}

  **Hinweis:** Nachdem du SAML SSO aktiviert hast, kannst du deine Single Sign-On-Wiederherstellungscodes herunterladen, mit denen du auch dann auf deine Organisation zugreifen kannst, wenn dein IdP nicht verfügbar ist. Weitere Informationen findest du unter [Herunterladen der SAML-SSO-Wiederherstellungscodes deiner Organisation](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes).

  {% endnote %}

6. Gib im Feld „Sign on URL“ (Sign-On-URL) den HTTPS-Endpunkt Deines IdP für Single Sign-On-Anforderungen ein. Diesen Wert findest Du in der IdP-Konfiguration.
![Feld für die URL, zu der Mitglieder bei der Anmeldung weitergeleitet werden](/assets/images/help/saml/saml_sign_on_url.png)
7. Gib optional im Feld „Issuer“ (Aussteller) den Namen Deines SAML-Ausstellers ein. Dadurch wird die Authentizität versendeter Nachrichten verifiziert.
![Feld für den Namen des SAML-Ausstellers](/assets/images/help/saml/saml_issuer.png)
8. Füge unter „Public Certificate“ (Öffentliches Zertifikat) ein Zertifikat ein, um die SAML-Antworten zu verifizieren.
![Feld für das öffentliche Zertifikat des Identitätsanbieters](/assets/images/help/saml/saml_public_certificate.png)
9. Klicke auf {% octicon "pencil" aria-label="The edit icon" %}, und wähle dann in den Dropdownmenüs „Signaturmethode“ und „Digestmethode“ den Hashalgorithmus aus, den dein SAML-Aussteller zur Überprüfung der Integrität der Anfragen verwendet.
![Dropdownlisten für die Hashalgorithmen der Signaturmethode und Digestmethode, die dein SAML-Aussteller verwendet](/assets/images/help/saml/saml_hashing_method.png)
10. Klicke auf **SAML-Konfiguration testen**, bevor du SAML SSO für deine Organisation aktivierst, um dich zu vergewissern, dass die eingegebenen Informationen korrekt sind. ![Schaltfläche zum Testen der SAML-Konfiguration vor dem Erzwingen](/assets/images/help/saml/saml_test.png)

  {% tip %}

  **Tipp:** {% data reusables.saml.testing-saml-sso %}

  {% endtip %}
11. Um SAML SSO zu erzwingen und alle Organisationsmitglieder, die sich nicht über deinen IdP authentifiziert haben, zu entfernen, wähle **SAML SSO-Authentifizierung für alle Mitglieder der Organisation _Organisationsname_ vorschreiben** aus. Weitere Informationen zum Erzwingen von SAML SSO findest du unter [Erzwingen von SAML SSO für deine Organisation](/articles/enforcing-saml-single-sign-on-for-your-organization).
![Kontrollkästchen, um SAML SSO für deine Organisation vorzuschreiben](/assets/images/help/saml/saml_require_saml_sso.png)
12. Klicke auf **Speichern**.
![Schaltfläche zum Speichern der SAML SSO-Einstellungen](/assets/images/help/saml/saml_save.png)

## Weiterführende Themen

- [Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single Sign-On](/articles/about-identity-and-access-management-with-saml-single-sign-on)
- [Referenz zur SAML-Konfiguration](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)
