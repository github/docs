---
title: SAML-Authentifizierung
shortTitle: Troubleshoot SAML SSO
intro: 'Wenn du SAML Single Sign-On (SSO) verwendest und sich Personen nicht authentifizieren können, um auf {% data variables.location.product_location %} zuzugreifen, kannst du das Problem behandeln.'
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: d15a3686045a4d570feb60cade2320f939cc0d86
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107253'
---
{% ifversion ghes %}
## Informationen zu Problemen bei der SAML-Authentifizierung

{% data variables.product.product_name %} protokolliert Fehlermeldungen zu fehlgeschlagenen SAML-Authentifizierungen im Authentifizierungsprotokoll unter _/var/log/github/auth.log_. Du kannst Antworten in dieser Protokolldatei anzeigen und auch eine ausführlichere Protokollierung konfigurieren.

Weitere Informationen zu SAML-Antwortanforderungen findest du auch unter [Referenz zur SAML-Konfiguration](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-response-requirements).

## Konfigurieren von SAML-Debugging

Du kannst {% data variables.product.product_name %} so konfigurieren, dass für jeden SAML-Authentifizierungsversuch ausführliche Debuggingprotokolle in _/var/log/github/auth.log_ geschrieben werden. Möglicherweise kannst du fehlgeschlagene Authentifizierungsversuche mit dieser zusätzlichen Ausgabe beheben.

{% warning %}

**Warnungen**:

- Aktiviere SAML-Debugging nur vorübergehend, und deaktiviere das Debuggen unmittelbar nach Abschluss der Problembehandlung. Wenn du das Debuggen aktiviert lässt, erhöht sich die Größe des Protokolls möglicherweise viel schneller als üblich. Dies kann sich negativ auf die Leistung von {% data variables.product.product_name %} auswirken.
- Teste neue Authentifizierungseinstellungen für {% data variables.location.product_location %} in einer Stagingumgebung, bevor du die Einstellungen in deiner Produktionsumgebung anwendest. Weitere Informationen findest du unter [Einrichten einer Staginginstanz](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

{% endwarning %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.options-tab %}
1. Wähle unter „SAML debugging“ die Dropdownliste aus, und klicke auf **Enabled** (Aktiviert).

   ![Screenshot der Dropdownliste zum Aktivieren des SAML-Debuggings](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-enabled.png)

1. Versuche, sich über den SAML-IdP bei {% data variables.location.product_location %} anzumelden.

1. Überprüfe die Debugausgabe in _/var/log/github/auth.log_ in {% data variables.location.product_location %}.

1. Wenn du mit der Problembehandlung fertig bist, wähle die Dropdownliste aus, und klicke auf **Disabled** (Deaktiviert).

   ![Screenshot der Dropdownliste zum Deaktivieren des SAML-Debuggings](/assets/images/enterprise/site-admin-settings/site-admin-saml-debugging-disabled.png)

## Decodieren von Antworten in _auth.log_

Manche Ausgaben in _auth.log_ sind möglicherweise Base64-codiert. Du kannst auf die Verwaltungsshell zugreifen und das `base64`-Hilfsprogramm in {% data variables.location.product_location %} verwenden, um diese Antworten zu decodieren. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh).

```shell
$ base64 --decode ENCODED_OUTPUT
```

## Fehler: „Another user already owns the account“ (Ein anderer Benutzer besitzt das Konto bereits)

Wenn sich ein Benutzer zum ersten Mal mit der SAML-Authentifizierung bei {% data variables.location.product_location %} anmeldet, wird von {% data variables.product.product_name %} ein Benutzerkonto in der Instanz erstellt. Außerdem wird die SAML-`NameID` dem Konto zugeordnet.

Wenn sich der Benutzer erneut anmeldet, wird von {% data variables.product.prodname_ghe_server %} die `NameID`-Zuordnung des Kontos mit der Antwort des IdP verglichen. Wenn die `NameID` in der Antwort des IdP nicht mehr mit der `NameID` übereinstimmt, die von {% data variables.product.product_name %} für den*die Benutzer*in erwartet wird, schlägt die Anmeldung fehl. Dem Benutzer wird die folgende Meldung angezeigt:

> Another user already owns the account (Ein anderer Benutzer besitzt das Konto bereits) Bitte den Administrator, das Authentifizierungsprotokoll zu überprüfen.

In der Nachricht wird in der Regel angegeben, dass sich der Benutzername oder die E-Mail-Adresse der Person beim IdP geändert hat. Vergewissere dich, dass die `NameID`-Zuordnung für das Benutzerkonto in {% data variables.product.prodname_ghe_server %} der `NameID` des Benutzers beim IdP entspricht. Weitere Informationen findest du unter [Aktualisieren der SAML-`NameID` eines Benutzers](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid).

## Wenn die SAML-Antwort nicht signiert ist oder die Signatur nicht mit dem Inhalt übereinstimmt, wird im Authentifizierungsprotokoll die folgende Fehlermeldung angezeigt:

Wenn der `Recipient` nicht mit der ACS-URL für {% data variables.location.product_location %} übereinstimmt, wird eine der folgenden beiden Fehlermeldungen im Authentifizierungsprotokoll angezeigt, wenn ein Benutzer versucht, sich zu authentifizieren.

```
Recipient in the SAML response must not be blank.
```

```
Recipient in the SAML response was not valid.
```

Vergewissere dich, dass du den Wert für `Recipient` beim IdP auf die vollständige ACS-URL für {% data variables.location.product_location %} festlegst. Beispiel: `https://ghe.corp.example.com/saml/consume`.

## Fehler: „SAML Response is not signed or has been modified“ (SAML-Antwort ist nicht signiert oder wurde geändert)

Wenn der IdP die SAML-Antwort nicht signiert oder die Signatur nicht mit dem Inhalt übereinstimmt, wird die folgende Fehlermeldung im Authentifizierungsprotokoll angezeigt.

```
SAML Response is not signed or has been modified.
```

Konfiguriere die signierten Assertionen für die {% data variables.product.product_name %}-Anwendung bei deinem IdP.

## Fehler: „Audience is invalid“ (Zielgruppe ist ungültig) oder „No assertion found“ (Keine Assertion gefunden)

Wenn die Antwort des IdP einen fehlenden oder falschen Wert für `Audience` aufweist, wird die folgende Fehlermeldung im Authentifizierungsprotokoll angezeigt.

```
Audience is invalid. Audience attribute does not match https://<em>YOUR-INSTANCE-URL</em>
```

Lege den Wert für `Audience` bei deinem IdP auf die `EntityId` für {% data variables.location.product_location %} fest. Dabei handelt es sich um die vollständige URL zu deiner Instanz. Beispiel: `https://ghe.corp.example.com`.
{% endif %}

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% ifversion ghec %} {% data reusables.saml.authentication-loop %} {% endif %}
