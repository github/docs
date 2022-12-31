---
title: Überlegungen zum Benutzernamen für die externe Authentifizierung
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}Wenn du {% ifversion ghes %}CAS, LDAP oder SAML für die Authentifizierung verwendest{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}, befolgt {% endif %}{% data variables.product.product_name %} bestimmte Regeln, um den Benutzernamen für jedes Benutzerkonto {% ifversion ghec or ghae %}in deinem Unternehmen{% elsif ghes %}auf deiner Instanz zu bestimmten{% endif %}.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 8a330fe790665ef360bc5a5841e20ec8df002eb0
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120751'
---
{% ifversion ghec %} {% note %}

**Hinweis:** Dieser Artikel gilt nur für {% data variables.product.prodname_emus %}. Wenn du {% data variables.product.prodname_ghe_cloud %} ohne {% data variables.product.prodname_emus %} verwendest, werden Benutzernamen von Benutzer*innen erstellt und nicht von {% data variables.product.prodname_dotcom %}.

{% endnote %} {% endif %}

## Informationen zu Benutzernamen mit externer Authentifizierung

{% ifversion ghes %}

Du kannst die externe Authentifizierung für {% data variables.product.product_name %} mit CAS, LDAP oder SAML konfigurieren. Weitere Informationen findest du unter [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server).

Wenn du die externe Authentifizierung verwendest, erstellt {% data variables.location.product_location %} automatisch einen Benutzernamen für jede Person, wenn sich diese Person über dein externes Authentifizierungssystem zum ersten Mal bei {% data variables.location.product_location %} anmeldet.

{% elsif ghec %}

Wenn du ein Unternehmen mit {% data variables.product.prodname_emus %} verwendest, müssen sich Mitglieder deines Unternehmens authentifizieren, um auf {% data variables.product.prodname_dotcom %} über deinen SAML-Identitätsanbieter (IdP) zuzugreifen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users) und [Informationen zur Authentifizierung für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server).

{% data variables.product.prodname_dotcom %} erstellt automatisch einen Benutzernamen für jede Person, wenn ihr Benutzerkonto über SCIM bereitgestellt wird, indem ein Bezeichner normalisiert wird, der von deinem IdP bereitgestellt wird. Anschließend werden ein Unterstrich und Kurzcode hinzugefügt. Wenn mehrere Bezeichner im selben Benutzernamen normalisiert werden, tritt ein Benutzernamenskonflikt auf, und nur das erste Benutzerkonto wird erstellt. Du können Benutzernamenskonflikte lösen, indem du eine Änderung in deinem Identitätsanbieter vornimmst, sodass die normalisierten Benutzernamen eindeutig sind und den Grenzwert von 39 Zeichen einhalten.

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

{% elsif ghae %}

{% data variables.product.product_name %} verwendet SAML-SSO für die Authentifizierung und erstellt automatisch einen Benutzernamen für jede Person, wenn sich die Person zum ersten Mal über deinen Identitätsanbieter (IdP) anmeldet.

{% endif %}

{% ifversion ghec %}
## Informationen zu Benutzernamen für {% data variables.enterprise.prodname_managed_users %}

Wenn deine {% data variables.enterprise.prodname_emu_enterprise %} erstellt wird, wählst du einen Kurzcode aus, der als Suffix für die Benutzernamen der Mitglieder deines Unternehmens verwendet wird. {% data reusables.enterprise-accounts.emu-shortcode %} Der Setupbenutzer, der SAML-SSO konfiguriert, hat einen Benutzernamen im Format von **@<em>SHORT-CODE</em>_admin**. 

Wenn du einen neuen Benutzer aus deinem Identitätsanbieter bereitstellst, verfügt der neue {% data variables.enterprise.prodname_managed_user %} über einen {% data variables.product.prodname_dotcom %}-Benutzernamen im Format von **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>** . Die <em>IDP-USERNAME</em>-Komponente wird durch Normalisierung des SCIM-Attributwerts `userName` gebildet, der aus dem IdP gesendet wird. 

| Identitätsanbieter                 | {% data variables.product.prodname_dotcom %}-Benutzername  |
|-----------------------------------|----------------------|
| Azure Active Directory (Azure AD) | Der _IDP-USERNAME_ wird durch Normalisieren der Zeichen erzeugt, die dem Zeichen `@` im UPN (Benutzerprinzipalname) vorausgehen, das nicht die `#EXT#` für Gastkonten enthält. |
| Okta                              | _IDP-USERNAME_ ist das normalisierte Benutzernamensattribut, das vom IdP bereitgestellt wird.               |

Diese Regeln können dazu führen, dass dein IdP denselben _IDP-USERNAME_ für mehrere Benutzer bereitstellt. Für Azure AD führen beispielsweise die folgenden UPNs zu demselben Benutzernamen:

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

Dies führt zu einem Benutzernamenskonflikt, und nur der erste Benutzer wird bereitgestellt. Weitere Informationen findest du unter [Beheben von Problemen mit Benutzernamen](#resolving-username-problems).
{% endif %}

Benutzernamen{% ifversion ghec %}, einschließlich Unterstrich und Kurzcode,{% endif %} dürfen 39 Zeichen nicht überschreiten.

## Informationen zur Normalisierung von Benutzernamen

Benutzernamen für Benutzerkonten auf {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} dürfen nur alphanumerische Zeichen und Bindestriche (`-`) enthalten.

{% ifversion ghec %} Wenn du die SAML-Authentifizierung konfigurierst, verwendet {% data variables.product.product_name %} den Attributwert `userName` von SCIM, der vom Identitätsanbieter gesendet wurde, um den Benutzernamen für das entsprechende Benutzerkonto auf {% data variables.product.prodname_dotcom_the_website %} zu bestimmen. Wenn dieser Wert nicht unterstützte Zeichen enthält, normalisiert {% data variables.product.product_name %} den Benutzernamen gemäß der folgenden Regeln.
{% elsif ghes %} Wenn du CAS, LDAP oder die SAML-Authentifizierung konfigurierst, verwendet {% data variables.product.product_name %} einen Bezeichner aus dem Benutzerkonto auf deinem externen Authentifizierungsanbieter, um den Benutzernamen für das entsprechende Benutzerkonto für {% data variables.product.product_name %} zu bestimmen. Wenn der Bezeichner nicht unterstützte Zeichen enthält, normalisiert {% data variables.product.product_name %} den Benutzernamen gemäß der folgenden Regeln.
{% elsif ghae %} Wenn du die SAML-Authentifizierung konfigurierst, verwendet {% data variables.product.product_name %} einen Bezeichner aus dem Benutzerkonto auf deinem Identitätsanbieter, um den Benutzernamen für das entsprechende Benutzerkonto für {% data variables.product.product_name %} zu bestimmen. Wenn der Bezeichner nicht unterstützte Zeichen enthält, normalisiert {% data variables.product.product_name %} den Benutzernamen gemäß der folgenden Regeln.
{% endif %}

1. {% data variables.product.product_name %} normalisieren alle nicht-alphanumerischen Zeichen im Benutzernamen deines Kontos in einen Bindestrich. So wird der Benutzername `mona.the.octocat` beispielsweise auf `mona-the-octocat` normalisiert. Beachte, dass die normalisierten Benutzernamen weder mit einem Bindestrich beginnen noch darauf enden können. Darüber hinaus können sie nicht zwei aufeinanderfolgende Bindestriche enthalten.

1. Aus E-Mail-Adressen erstellte Benutzernamen werden anhand der normalisierten Zeichen erstellt, die dem Zeichen `@` vorangestellt sind.

1. Benutzernamen, die anhand von Domänenkonten erstellt wurden, werden aus den normalisierten Zeichen nach dem Trennzeichen `\\` erstellt. 

1. Wenn mehrere Konten zum selben {% data variables.product.product_name %}-Benutzernamen normalisiert werden, wird nur das erste Benutzerkonto erstellt. Nachfolgende Benutzer mit demselben Benutzernamen können sich nicht anmelden. {% ifversion ghec %}Weitere Informationen findest du unter [Beheben von Problemen mit Benutzernamen](#resolving-username-problems)."{% endif %}

### Beispiele für die Normalisierung von Benutzernamen

| Bezeichner des Anbieters | Normalisierter Benutzername für {% data variables.product.prodname_dotcom %} | Ergebnis |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Dieser Benutzername wird erfolgreich erstellt. |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Dieser Benutzername wird nicht erstellt, da er mit einem Bindestrich beginnt. |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | Dieser Benutzername wird nicht erstellt, da er mit einem Bindestrich endet. |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Dieser Benutzername wird nicht erstellt, da er zwei aufeinanderfolgende Bindestriche enthält. |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Dieser Benutzername wird nicht erstellt. Obwohl der normalisierte Benutzername gültig ist, ist er bereits vorhanden. |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Dieser Benutzername wird nicht erstellt. Obwohl der normalisierte Benutzername gültig ist, ist er bereits vorhanden. |
| `internal\\The.Octocat` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Dieser Benutzername wird nicht erstellt. Obwohl der normalisierte Benutzername gültig ist, ist er bereits vorhanden. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | Dieser Benutzername wird nicht erstellt, da er den Grenzwert von 39 Zeichen überschreitet. |

{% ifversion not ghec %}
### Informationen zur Normalisierung des Benutzernamens mit SAML

{% ifversion ghes %}Wenn du die SAML-Authentifizierung für {% data variables.location.product_location %}, konfigurierst, bestimmt {% endif %}{% data variables.product.product_name %} den Benutzernamen jeder Person durch eine der folgenden Behauptungen in der SAML-Antwort, sortiert durch absteigende Priorität.

1. das benutzerdefinierte `username`-Attribut, sofern definiert und vorhanden
1. Eine `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`-Assertion, wenn vorhanden
1. Eine `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`-Assertion, wenn vorhanden
1. Das `NameID`-Element

{% data variables.product.product_name %} erfordert das `NameID`-Element auch dann, wenn andere Attribute vorhanden sind. Weitere Informationen findest du in der [SAML-Konfigurationsreferenz](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes).

{% data variables.product.product_name %} erstellt eine Zuordnung zwischen `NameID` aus dem IdP und dem Benutzernamen {% ifversion ghae %}in{% else %}auf{% endif %} {% data variables.location.product_location %}, sodass `NameID` beständig, eindeutig und nicht dem Lebenszyklus des Benutzers unterliegen soll.

{% ifversion ghes %} {% note %}

**Hinweis**: Wenn sich die `NameID` für eine Person für den IdP ändert, wird dem Benutzer beim Versuch, sich bei {% data variables.location.product_location %} anzumelden, eine Fehlermeldung angezeigt. Damit der Zugriff der Person wiederhergestellt werden kann, musst du die `NameID`-Zuordnung des Benutzerkontos entsprechend aktualisieren. Weitere Informationen findest du unter [Aktualisieren der SAML-`NameID` eines Benutzers](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid).

{% endnote %} {% endif %} {% endif %}

{% ifversion ghec %}
## Beheben von Problemen mit Benutzernamen

Wenn bei der Bereitstellung eines neuen Benutzers der Benutzername länger als 39 Zeichen ist (einschließlich Unterstrich und Kurzcode) oder mit einem bereits vorhandenen Benutzer im Unternehmen in Konflikt steht, schlägt der Bereitstellungsversuch mit dem Fehler `409` fehl. 

Um dieses Problem zu lösen, musst du eine der folgenden Änderungen in deinem Identitätsanbieter vornehmen, damit alle normalisierten Benutzernamen innerhalb der Zeichenobergrenze liegen und eindeutig sind.
- Ändere den Wert des Attributs `userName` für einzelne Benutzer, die Probleme verursachen.
- Ändere die Zuordnung des Attributs `userName` für alle Benutzer.
- Konfiguriere für alle Benutzer ein benutzerdefiniertes Attribut `userName`.

Wenn du die Attributzuordnung änderst, werden Benutzernamen vorhandener {% data variables.enterprise.prodname_managed_users %} aktualisiert, jedoch ändert sich nichts weiter an den Konten, auch nicht am Aktivitätsverlauf.

{% note %}

**Hinweis:** {% data variables.contact.github_support %} kann keine Unterstützung beim Anpassen von Attributzuordnungen oder zum Konfigurieren von benutzerdefinierten Ausdrücken bieten. Wenn du diesbezüglich Fragen hast, wende dich an deinen Identitätsanbieter.

{% endnote %}

### Beheben von Problemen mit Benutzernamen mit Azure AD

Um Probleme mit Benutzernamen in Azure AD zu beheben, ändere entweder den Wert des Benutzerprinzipalnamens für den in Konflikt stehenden Benutzer oder die Attributzuordnung für das Attribut `userName`. Wenn du die Attributzuordnung ändert, kannst du ein vorhandenes Attribut auswählen oder einen Ausdruck verwenden, um sicherzustellen, dass alle bereitgestellten Benutzer einen eindeutigen normalisierten Alias haben.

1. Öffne in Azure AD die {% data variables.product.prodname_emu_idp_application %}-Anwendung.
1. Klicke auf der linken Randleiste auf **Bereitstellung**.
1. Klicke auf **Bereitstellung bearbeiten**.
1. Erweitere **Zuordnungen**, und klicke dann auf **Azure Active Directory-Benutzer bereitstellen**.
1. Klicke auf die `userName`-Attributzuordnung von {% data variables.product.prodname_dotcom %}. 
1. Ändere die Attributzuordnung.
   - Wenn du ein vorhandenes Attribut in Azure AD dem `userName`-Attribut in {% data variables.product.prodname_dotcom %} zuordnen möchtest, klicke auf das gewünschte Attributfeld. Speichere und warte dann, bis der Bereitstellungszyklus beginnt. Dies sollte innerhalb von ca. 40 Minuten passieren.
   - Um einen Ausdruck anstelle eines vorhandenen Attributs zu verwenden, ändere den Zuordnungstyp in „Ausdruck“, und füge dann einen benutzerdefinierten Ausdruck hinzu, der diesen Wert für alle Benutzer eindeutig macht. Du kannst beispielsweise `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]` verwenden. Weitere Informationen findest du in der [Referenz zum Schreiben von Ausdrücken für Attributzuordnungen in Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data).

### Beheben von Problemen mit Benutzernamen mit Okta

Um Probleme mit Benutzernamen in Okta zu beheben, aktualisiere die Attributzuordnungseinstellungen für die {% data variables.product.prodname_emu_idp_application %}-Anwendung.

1. Öffne in Okta die {% data variables.product.prodname_emu_idp_application %}-Anwendung.
1. Klicke auf **Anmelden**.
1. Klicke im Abschnitt „Einstellungen“ auf **Bearbeiten**.
1. Aktualisiere das „Format für den Anwendungsbenutzernamen“.
{% endif %}
