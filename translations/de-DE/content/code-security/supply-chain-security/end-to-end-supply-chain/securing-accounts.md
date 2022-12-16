---
title: Bewährte Methoden zum Schützen von Konten
shortTitle: Securing accounts
allowTitleToDifferFromFilename: true
intro: Anleitungen zum Schutz von Konten mit Zugriff auf deine Softwarelieferkette
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Organizations
  - Teams
  - SSH
  - Security
  - Accounts
ms.openlocfilehash: 4225b80d139462fd64e440947c1eba9adb817294
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883409'
---
## Über diesen Leitfaden

In diesem Leitfaden werden die Änderungen mit den größten Auswirkungen beschrieben, die du zum Erhöhen der Kontosicherheit vornehmen kannst. In den einzelnen Abschnitten wird jeweils eine Änderung beschrieben, die du zur Verbesserung der Sicherheit an deinen Prozessen vornehmen kannst. Die Änderungen mit den größten Auswirkungen sind zuerst aufgeführt.

## Welches Risiko besteht?

Kontosicherheit ist grundlegend für die Sicherheit deiner Lieferkette. Wenn es Angreifer*innen gelingt, dein Konto auf {% data variables.product.product_name %} zu übernehmen, können sie böswillige Änderungen an deinem Code oder Buildprozess vornehmen. Dein oberstes Ziel muss daher sein, die Übernahme deines Kontos und der Konten anderer {% ifversion ghes %}Benutzer*innen{% else %}Mitglieder{% endif %} in {% ifversion fpt %}deiner Organisation{% elsif ghec or ghae %}deiner Organisation oder deinem Unternehmen{% elsif ghes %}{% data variables.product.product_location %}{% endif %} zu erschweren.

{% ifversion ghec or ghes %}
## Authentifizierung zentralisieren
{% endif %}

{% ifversion ghec %} Wenn du Unternehmens- oder Organisationsbesitzer bist, kannst du die zentralisierte Authentifizierung mit SAML konfigurieren. Mitglieder können zwar manuell hinzugefügt oder entfernt werden. Es ist jedoch einfacher und sicherer, einmaliges Anmelden (SSO) und SCIM zwischen {% data variables.product.product_name %} und dem SAML-Identitätsanbieter (IdP) einzurichten. Dadurch wird auch der Authentifizierungsprozess für alle Mitglieder deines Unternehmens vereinfacht.

Du kannst die SAML-Authentifizierung für ein Unternehmens- oder Organisationskonto konfigurieren. Mit SAML kannst du den Zugriff auf die persönlichen Konten von Mitgliedern deines Unternehmens oder deiner Organisation auf {% data variables.product.product_location %} über deinen IdP gewähren, oder du kannst die Konten, die zu deinem Unternehmen gehören, mithilfe von {% data variables.product.prodname_emus %} erstellen und steuern. Weitere Informationen findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).

Wenn Mitglieder nach dem Konfigurieren der SAML-Authentifizierung Zugriff auf deine Ressourcen anfordern, werden sie an deinen SSO-Flow weitergeleitet. Damit wird sichergestellt, dass sie weiterhin von deinem IdP erkannt werden. Wenn sie nicht erkannt werden, wird ihre Anforderung abgelehnt.

Einige IdPs unterstützen ein Protokoll namens SCIM, das den Zugriff auf {% data variables.product.product_name %} automatisch bereitstellen und aufheben kann, wenn du Änderungen an deinem IdP vornimmst. Mit SCIM kannst du die Verwaltung vereinfachen, während dein Team wächst, und du kannst den Zugriff auf Konten schnell widerrufen. SCIM ist für einzelne Organisationen auf {% data variables.product.product_name %} oder für Unternehmen, die {% data variables.product.prodname_emus %} verwenden, verfügbar. Weitere Informationen findest du unter [Informationen zu SCIM für Organisationen](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).
{% endif %}

{% ifversion ghes %} Wenn du der Siteadministrator für {% data variables.product.product_location %} bist, kannst du den Anmeldevorgang für Benutzer*innen vereinfachen, indem du eine Authentifizierungsmethode wählst, bei der eine Verbindung mit einem bestehenden Identitätsanbieter (IdP) wie CAS, SAML oder LDAP hergestellt wird. Das bedeutet, dass sich Benutzer*innen kein zusätzliches Kennwort für {% data variables.product.prodname_dotcom %} merken müssen.

Bei einigen Authentifizierungsmethoden wird auch die Übermittlung zusätzlicher Informationen an {% data variables.product.product_name %}, z. B. bei welchen Gruppen der Benutzer Mitglied ist, oder die Synchronisierung von kryptografischen Schlüsseln für den Benutzer unterstützt. Das ist eine gute Möglichkeit, die Verwaltung bei wachsenden Organisationen zu vereinfachen.

Weitere Informationen zu den für {% data variables.product.product_name %} verfügbaren Authentifizierungsmethoden findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise).
{% endif %}

## Konfigurieren der zweistufigen Authentifizierung

Die beste Möglichkeit, die Sicherheit {% ifversion fpt %}deines persönlichen Kontos{% elsif ghes %}deines persönlichen Kontos oder {% data variables.product.product_location %}{% elsif ghec %}deiner Konten{% elsif ghae %}deines Unternehmens auf {% data variables.product.product_name %}{% endif %} zu verbessern, ist die Konfiguration der zweistufigen Authentifizierung{% ifversion ghae %} mit deinem SAML-Identitätsanbieter (Identity Provider, IdP){% endif %}. Kennwörter selbst können kompromittiert werden, wenn sie erraten werden können, auf einer kompromittierten Website wiederverwendet oder durch Social Engineering wie Phishing kompromittiert werden. Mit der zweistufigen Authentifizierung wird die Kompromittierung eines Kontos deutlich erschwert, selbst wenn der Angreifer über das entsprechende Kennwort verfügt.

{% ifversion not ghae %}

{% ifversion ghec %} Wenn du Unternehmensbesitzer bist, kannst du eine Richtlinie konfigurieren, die für alle Organisationen im Besitz deines Unternehmens eine zweistufige Authentifizierung erfordert.
{% endif %}

{% ifversion ghes %} Wenn du der Siteadministrator für {% data variables.product.product_location %} bist, kannst du möglicherweise die zweistufige Authentifizierung für alle Benutzer*innen deiner Instanz konfigurieren. Ob die zweistufige Authentifizierung für {% data variables.product.product_name %} verfügbar ist, hängt von der verwendeten Authentifizierungsmethode ab. Weitere Informationen findest du unter [Zentralisieren der Benutzerauthentifizierung](#centralize-user-authentication).
{% endif %}

Wenn du Organisationsbesitzer bist, {% ifversion fpt %}kannst du{% else %}kannst du möglicherweise{% endif %} festlegen, dass alle Mitglieder der Organisation die zweistufige Authentifizierung aktivieren.

{% ifversion ghec or ghes %}

### Konfigurieren deines Unternehmenskontos

Unternehmensbesitzer können möglicherweise festlegen, dass alle {% ifversion ghes %}Benutzer*innen{% elsif ghec %}Mitglieder{% endif %} der {% ifversion ghes %}Instanz{% elsif ghec %}enterprise{% endif %} die zweistufige Authentifizierung verwenden. Ob Richtlinien für die zweistufige Authentifizierung für {% data variables.product.product_name %} verfügbar sind, hängt davon ab, wie sich {% ifversion ghes %}Benutzer*innen{% else %}Mitglieder{% endif %} für den Zugriff auf deine {% ifversion ghes %}Instanz{% elsif ghec %}Unternehmensressourcen{% endif %} authentifizieren.

{% ifversion ghes %}
- Wenn du dich bei {% data variables.product.product_location %} über einen externen Identitätsanbieter mithilfe von CAS oder SAML SSO anmeldest, kannst du {% elsif ghec %} Wenn in deinem Unternehmen {% data variables.product.prodname_emus %} verwendet oder die SAML-Authentifizierung für dein Unternehmen erzwungen wird, kannst du {%- endif %} die zweistufige Authentifizierung für {% data variables.product.product_name %} nicht konfigurieren. Die zweistufige Authentifizierung für den Identitätsanbieter muss von einem Benutzer mit Administratorzugriff konfiguriert werden.

{% ifversion ghes %}

- Wenn du dich bei {% data variables.product.product_location %} über ein externes LDAP-Verzeichnis anmeldest, kannst du für dein Unternehmen festlegen, dass die zweistufige Authentifizierung für {% data variables.product.product_name %} verwendet werden muss. Wenn du die integrierte Authentifizierung für Benutzer*innen außerhalb deines Verzeichnisses zulässt, können einzelne Benutzer*innen die zweistufige Authentifizierung aktivieren. Es ist jedoch nicht möglich, festzulegen, dass für dein Unternehmen die zweistufige Authentifizierung verwendet werden muss.

{% endif %}

Weitere Informationen findest du unter {% ifversion ghec %}[Informationen zur Identitäts- und Zugriffsverwaltung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise) und unter {% endif %}[Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#requiring-two-factor-authentication-for-organizations-in-your-enterprise).

{% endif %}

### Konfigurieren eines persönlichen Kontos

{% ifversion ghec or ghes %} {% note %}

**Hinweis**: Je nachdem, welche Authentifizierungsmethode der {% ifversion ghec %}Unternehmensbesitzer{% elsif ghes %}Siteadministrator{% endif %} für {% ifversion ghec %}Dein Unternehmen auf {% endif %}{% data variables.product.product_location %} konfiguriert hat, kannst du die zweistufige Authentifizierung für dein persönliches Konto möglicherweise nicht aktivieren.

{% endnote %} {% endif %}

{% data variables.product.product_name %} unterstützt mehrere Optionen für die zweistufige Authentifizierung, und obwohl jede davon besser ist als nichts, ist WebAuthn doch die sicherste Option. Für WebAuthn wird entweder ein Hardwaresicherheitsschlüssel oder ein Gerät benötigt, das über Windows Hello oder Mac TouchID entsprechende Unterstützung bietet. Phishing ist bei anderen Formen der zweistufigen Authentifizierung zwar schwierig, aber möglich (wenn du beispielsweise gebeten wirst, dein sechsstelliges Einmalkennwort vorzulesen). Bei WebAuthn ist Phishing dagegen nicht möglich, da im Protokoll eine Domänendefinition integriert ist, mit der verhindert wird, dass Anmeldeinformationen von einer Website, die eine Anmeldeseite imitiert, für {% data variables.product.product_name %} verwendet werden.

Beim Einrichten der zweistufigen Authentifizierung solltest du die Wiederherstellungscodes immer herunterladen und mehr als eine Stufe einrichten. Dadurch wird sichergestellt, dass der Zugriff auf dein Konto nicht von einem einzelnen Gerät abhängt. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication), [Konfigurieren von Wiederherstellungsmethoden bei der zweistufigen Authentifizierung](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods) und unter [GitHub-Hardwaresicherheitsschlüssel](https://thegithubshop.com/products/github-branded-yubikey) im GitHub-Shop.

### Konfigurieren eines Organisationskontos

{% ifversion ghec or ghes %} {% note %}

**Hinweis**: Je nachdem, welche Authentifizierungsmethode der {% ifversion ghec %}Unternehmensbesitzer{% elsif ghes %}Siteadministrator{% endif %} für {% ifversion ghec %}Dein Unternehmen auf {% endif %}{% data variables.product.product_location %} konfiguriert hat, kannst du möglicherweise nicht festlegen, dass für deine Organisation die zweistufige Authentifizierung verwendet werden muss.

{% endnote %} {% endif %}

Als Organisationsinhaber*in kannst du erkennen, für welche Benutzer*innen die zweistufige Authentifizierung nicht aktiviert ist. Du kannst ihnen beim Einrichten der zweistufigen Authentifizierung behilflich sein und anschließend festlegen, dass für deine Organisation die zweistufige Authentifizierung verwendet werden muss. Informationen zu dieser Vorgehensweise findest du unter:

1. [Überprüfen, ob Benutzer*innen in deiner Organisation die zweistufige Authentifizierung aktiviert haben](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)
2. [Vorbereitung darauf, dass in deiner Organisation die zweistufige Authentifizierung verwendet werden muss](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/preparing-to-require-two-factor-authentication-in-your-organization)
3. [Festlegen, dass in deiner Organisation die zweistufige Authentifizierung verwendet werden muss](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)

{% endif %}

## Herstellen einer Verbindung mit {% data variables.product.product_name %} mithilfe von SSH-Schlüsseln

Außer der Anmeldung bei der Website{% ifversion ghae %} über deinen IdP{% endif %} gibt es auch andere Möglichkeiten, mit {% data variables.product.product_name %} zu interagieren. Viele autorisieren den Code, den sie an {% data variables.product.prodname_dotcom %} pushen, mit einem privaten SSH-Schlüssel. Weitere Informationen findest du unter [Informationen zu SSH](/authentication/connecting-to-github-with-ssh/about-ssh).

Ebenso wie bei {% ifversion ghae %}dem Kennwort deines IdP-Kontos{% else %}deinem Kontokennwort{% endif %} können Angreifer*innen deine Identität annehmen und böswilligen Code an alle Repositorys pushen, für die du Schreibzugriff hast, falls sie an deinen privaten SSH-Schlüssel gelangen. Wenn du deinen privaten SSH-Schlüssel in einem Datenträgerlaufwerk speicherst, solltest du ihn mit einer Passphrase zu schützen. Weitere Informationen findest du unter [Verwenden von Passphrasen für SSH-Schlüssel](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases).

Eine weitere Option besteht darin, SSH-Schlüssel mit einem Hardwaresicherheitsschlüssel zu generieren. Dabei kann derselbe Schlüssel wie für die zweistufige Authentifizierung verwendet werden. Die Kompromittierung von Hardwaresicherheitsschlüsseln per Fernzugriff ist schwierig, da der private SSH-Schlüssel auf der Hardware verbleibt und über die Software nicht direkt zugänglich ist Weitere Informationen findest du unter [Generieren eines neuen SSH-Schlüssels für einen Hardwaresicherheitsschlüssel](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key).

{% ifversion ghec or ghes or ghae %} Hardwaregestützte SSH-Schlüssel sind recht sicher, aber die Hardwareanforderung ist für einige Organisationen möglicherweise nicht geeignet. Ein alternativer Ansatz besteht darin, SSH-Schlüssel zu verwenden, die nur für einen kurzen Zeitraum gültig sind. Auch wenn der private Schlüssel kompromittiert wird, kann er nicht lange genutzt werden. Auf diesem Konzept beruht die Unterhaltung einer eigenen SSH-Zertifizierungsstelle. Bei diesem Ansatz kannst du weitgehend festlegen, wie sich Benutzer*innen authentifizieren, jedoch bist du dafür verantwortlich, selbst eine SSH-Zertifizierungsstelle zu unterhalten. Weitere Informationen findest du unter [Informationen zu SSH-Zertifizierungsstellen](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).
{% endif %}

## Nächste Schritte

- [Sichern einer End-to-End-Lieferkette](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)

- [Bewährte Methoden zum Sichern von Code in einer Lieferkette](/code-security/supply-chain-security/end-to-end-supply-chain/securing-code)

- [Bewährte Methoden zum Sichern deines Buildsystems](/code-security/supply-chain-security/end-to-end-supply-chain/securing-builds)
