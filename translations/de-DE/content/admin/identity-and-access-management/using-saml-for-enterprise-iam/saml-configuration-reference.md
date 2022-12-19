---
title: Referenz zur SAML-Konfiguration
shortTitle: SAML reference
intro: 'Du kannst SAML-Metadaten für {% ifversion ghec %}deine Organisation oder dein Unternehmen auf {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}dein Unternehmen auf {% data variables.product.product_name %}{% endif %} anzeigen, und du erfährst mehr zu verfügbaren SAML-Attributen und Antwortanforderungen.'
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
ms.openlocfilehash: 896d1281d28268f669957bfbf0df43d3a1d6a76e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147683719'
---
## Informationen zur SAML-Konfiguration

Wenn du das einmalige Anmelden (Single Sign-On, SSO) mit SAML zur Authentifizierung bei {% data variables.product.product_name %} verwenden möchtest, musst du sowohl deinen externen SAML-Identitätsanbieter (Identity Provider, IdP) und {% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %}dein Unternehmen oder deine Organisation auf {% data variables.product.product_location %}{% elsif ghae %}dein Unternehmen auf {% data variables.product.product_name %}{% endif %} konfigurieren. In einer SAML-Konfiguration dient {% data variables.product.product_name %} als SAML-Dienstanbieter (Service Provider, SP).

Du musst eindeutige Werte für deinen SAML-IdP eingeben, wenn du SAML-SSO für {% data variables.product.product_name %} konfigurierst, und du musst auch eindeutige Werte aus {% data variables.product.product_name %} bei deinem IdP eingeben. Weitere Informationen zur Konfiguration von SAML-SSO für {% data variables.product.product_name %} findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für dein Unternehmen](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %} oder [Aktivieren und Testen des einmaligen Anmeldens mit SAML für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}.

## SAML-Metadaten

{% ifversion ghec %}

Die Metadaten des Dienstanbieters für {% data variables.product.product_name %} sind entweder für Organisationen oder Unternehmen mit SAML-SSO verfügbar. {% data variables.product.product_name %} verwendet die Bindung `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Organisationen

Du kannst SAML-SSO auch für eine einzelne Organisation in deinem Unternehmen konfigurieren. Du kannst SAML-SSO auch für eine Organisation konfigurieren, wenn du eine einzelne Organisation auf {% data variables.product.product_name %} und kein Unternehmenskonto verwendest. Weitere Informationen findest du unter [Verwalten von SAML-SSO für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization).

Die Metadaten des Dienstanbieters für eine Organisation auf {% data variables.product.product_location %} sind unter `https://github.com/orgs/ORGANIZATION/saml/metadata` verfügbar, wobei **ORGANIZATION** der Name deiner Organisation auf {% data variables.product.product_location %} ist.

| Wert | Andere Namen | BESCHREIBUNG | Beispiel |
| :- | :- | :- | :- |
| Entitäts-ID des SP | Dienstanbieter-URL, Einschränkung der Zielgruppe | Deine URL der obersten Ebene für deine Organisation auf {% data variables.product.product_location %} | `https://github.com/orgs/ORGANIZATION` |
| Assertionsverbraucherdienst-URL (ACS) des SP | Antwort-, Empfänger- oder Ziel-URL | URL, an die der IdP SAML-Antworten sendet | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| SSO-URL (einmaliges Anmelden) des SP | | URL, an der der IdP mit dem SSO-Prozess beginnt |  `https://github.com/orgs/ORGANIZATION/saml/sso` |

### Unternehmen

Die Metadaten des Dienstanbieters für ein Unternehmen auf {% data variables.product.product_location %} sind unter `https://github.com/enterprises/ENTERPRISE/saml/metadata` verfügbar, wobei **ENTERPRISE** der Name deiner Organisation auf {% data variables.product.product_location %} ist.

| Wert | Andere Namen | BESCHREIBUNG | Beispiel |
| :- | :- | :- | :- |
| Entitäts-ID des SP | Dienstanbieter-URL, Einschränkung der Zielgruppe | Deine URL der obersten Ebene für dein Unternehmen auf {% data variables.product.product_location %} | `https://github.com/enterprises/ENTERPRISE` |
| Assertionsverbraucherdienst-URL (ACS) des SP | Antwort-, Empfänger- oder Ziel-URL | URL, an die der IdP SAML-Antworten sendet | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| SSO-URL (einmaliges Anmelden) des SP | | URL, an der der IdP mit dem SSO-Prozess beginnt |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

Die Metadaten des Dienstanbieters für {% data variables.product.product_location %} sind unter `http(s)://HOSTNAME/saml/metadata` verfügbar, wobei **HOSTNAME** der Name deiner Instanz ist. {% data variables.product.product_name %} verwendet die Bindung `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Wert | Andere Namen | BESCHREIBUNG | Beispiel |
| :- | :- | :- | :- |
| Entitäts-ID des SP | Dienstanbieter-URL, Einschränkung der Zielgruppe | Deine URL der obersten Ebene für {% data variables.product.product_name %} | `http(s)://HOSTNAME`
| Assertionsverbraucherdienst-URL (ACS) des SP | Antwort-, Empfänger- oder Ziel-URL | URL, an die der IdP SAML-Antworten sendet | `http(s)://HOSTNAME/saml/consume` |
| SSO-URL (einmaliges Anmelden) des SP | | URL, an der der IdP mit dem SSO-Prozess beginnt |  `http(s)://HOSTNAME/sso` |

{% elsif ghae %}

Die Metadaten des Dienstanbieters für dein Unternehmen auf {% data variables.product.product_name %} sind unter `https://HOSTNAME/saml/metadata` verfügbar, wobei **HOSTNAME** der Name deines Unternehmens auf {% data variables.product.product_name %} ist. {% data variables.product.product_name %} verwendet die Bindung `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Wert | Andere Namen | BESCHREIBUNG | Beispiel |
| :- | :- | :- | :- |
| Entitäts-ID des SP | Dienstanbieter-URL, Einschränkung der Zielgruppe | Deine URL der obersten Ebene für {% data variables.product.product_name %} | `https://HOSTNAME` |
| Assertionsverbraucherdienst-URL (ACS) des SP | Antwort-, Empfänger- oder Ziel-URL | URL, an die der IdP SAML-Antworten sendet | `https://HOSTNAME/saml/consume` |
| SSO-URL (einmaliges Anmelden) des SP | | URL, an der der IdP mit dem SSO-Prozess beginnt |  `https://HOSTNAME/sso` |

{% endif %}

## SAML-Attribute

Die folgenden SAML-Attribute sind für {% data variables.product.product_name %} verfügbar.{% ifversion ghes %} Du kannst die Attributnamen in der Verwaltungskonsole ändern (mit Ausnahme des `administrator`-Attributs). Weitere Informationen findest du unter [Zugriff auf die Verwaltungskonsole](/admin/configuration/configuring-your-enterprise/accessing-the-management-console).{% endif %}

| Name | Erforderlich? | BESCHREIBUNG |
| :- | :- | :- |
| `NameID` | Ja | Ein persistenter Benutzerkennzeichner. Es kann ein beliebiges Format für persistente Namenskennzeichner verwendet werden. {% ifversion ghec %}Wenn du ein Unternehmen mit {% data variables.product.prodname_emus %} verwendest, normalisiert {% endif %}{% data variables.product.product_name %} das `NameID`-Element, damit es als Benutzername verwendet wird, es sei denn, es wird eine der alternativen Assertionen angegeben. Weitere Informationen findest du unter [Überlegungen zu Benutzernamen zur externen Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).<br><br>{% note %}**Hinweis:** Es ist wichtig, einen visuell lesbaren, beständigen Bezeichner zu verwenden. Die Verwendung eines vorübergehenden Bezeichnerformats `urn:oasis:names:tc:SAML:2.0:nameid-format:transient` führt dazu, dass Konten bei jeder Anmeldung erneut verknüpft werden, was sich nachteilig auf die Autorisierungsverwaltung auswirken kann.{% endnote %}  |
| `SessionNotOnOrAfter` | Nein | Das Datum, an dem {% data variables.product.product_name %} die zugehörige Sitzung ungültig macht. Nach der Invalidierung muss die Person sich erneut authentifizieren, um auf {% ifversion ghec or ghae %}die Ressourcen deines Unternehmens{% elsif ghes %}{% data variables.product.product_location %}{% endif %} zuzugreifen. Weitere Informationen findest du unter [Sitzungsdauer und Timeout](#session-duration-and-timeout). |
{%- ifversion ghes or ghae %} | `administrator` | Nein | Wenn der Wert `true` lautet, wird der*die Benutzer*in von {% data variables.product.product_name %} automatisch zu einem*einer {% ifversion ghes %}Websiteadministrator*in{% elsif ghae %}Unternehmensbesitzer*in{% endif %} hochgestuft. Wenn das Attribut auf alles außer `true` festgelegt wird, folgt eine Herabstufung, solange der Wert nicht leer ist. Wenn das Attribut ausgelassen wird oder der Wert leer bleibt, wird die Rolle des Benutzers bzw. der Benutzerin nicht geändert. | | `username` | Nein | Dies ist der Benutzername für {% data variables.product.product_location %}. | {%- endif %} | `full_name` | Nein | {% ifversion ghec %}Wenn du SAML-SSO für ein Unternehmen konfigurierst und {% data variables.product.prodname_emus %} verwendest, wird der {% else %}Der{% endif %} vollständige Name des Benutzer bzw. der Benutzerin auf der Benutzerprofilseite angezeigt. | | `emails` | Nein | Dies ist die E-Mail-Adresse des Benutzers bzw. der Benutzerin.{% ifversion ghes or ghae %} Du kannst mehr als eine Adresse angeben.{% endif %}{% ifversion ghec or ghes %} Wenn du die Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} synchronisierst, verwendet {% data variables.product.prodname_github_connect %} `emails`, um eindeutige Benutzer*innen in verschiedenen Produkten zu identifizieren. Weitere Informationen findest du unter [Synchronisieren der Lizenznutzung von {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).{% endif %} | | `public_keys` | Nein | {% ifversion ghec %} Wenn du SAML-SSO für ein Unternehmen konfigurierst und {% data variables.product.prodname_emus %} verwendest, werden die{% else %}Die{% endif %} öffentlichen SSH-Schlüssel für den*die Benutzer*in angezeigt. Du kannst mehr als einen Schlüssel angeben. | | `gpg_keys` | Nein | {% ifversion ghec %}Wenn du SAML-SSO für ein Unternehmen konfigurierst und {% data variables.product.prodname_emus %} verwendest, werden die{% else %}Die{% endif %} GPG-Schlüssel für den*die Benutzer*in angezeigt. Du kannst mehr als einen Schlüssel angeben. |

Verwende mehrere `<saml2:AttributeValue>`-Elemente, um mehrere Werte für ein Attribut anzugeben.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## SAML-Antwortanforderungen

Bei {% data variables.product.product_name %} muss die Antwortnachricht von deinem IdP die folgenden Anforderungen erfüllen.

- Dein IdP musst das Element `<Destination>` im Stammantwortdokument bereitstellen und nur dann mit der ACS-URL übereinstimmen, wenn das Stammantwortdokument signiert ist. Wenn dein IdP die Assertion signiert, ignoriert {% data variables.product.product_name %} die Assertion.
- Dein IdP muss das `<Audience>`-Element immer als Teil des `<AudienceRestriction>`-Elements bereitstellen. Der Wert muss mit deiner `EntityId` für {% data variables.product.product_name %} übereinstimmen.{% ifversion ghes or ghae %} Dieser Wert ist die URL, über die du auf {% data variables.product.product_location %} zugreifst, z. B.{% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us` oder `https://SUBDOMAIN.ghe.com`{% endif %}.{% endif %}
  
  {%- ifversion ghec %}
  - Wenn du SAML für eine Organisation konfigurierst, lautet dieser Wert `https://github.com/orgs/ORGANIZATION`.
  - Wenn du SAML für ein Unternehmen konfigurierst, lautet diese URL `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
- Dein IdP muss jede Assertion in der Antwort mit einer digitalen Signatur schützen. Du kannst dies tun, indem du jedes einzelne `<Assertion>`-Element oder das `<Response>`-Element signierst.
- Dein IdP muss ein `<NameID>`-Element als Teil des `<Subject>`-Elements bereitstellen. Du kannst ein beliebiges Format für beständige Namensbezeichner verwenden.
- Dein IdP muss das `Recipient`-Attribut enthalten, das auf die ACS-URL festgelegt werden muss. Im folgenden Beispiel wird das Attribut veranschaulicht.

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://{% ifversion ghec %}github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME{% elsif ghae %}SUBDOMAIN.ghe.com{% endif %}/saml/consume" .../>
           </saml:SubjectConfirmation>
         </saml:Subject>
         <saml:AttributeStatement>
           <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
             <saml:AttributeValue>monalisa</saml:AttributeValue>
           </saml:Attribute>
         </saml:AttributeStatement>
       </saml:Assertion>
     </samlp:Response>
     ```

## Sitzungsdauer und Timeout

Um zu verhindern, dass eine Person sich bei deinem IdP authentifiziert und auf unbestimmte Zeit autorisiert bleibt, macht {% data variables.product.product_name %} die Sitzung für jedes Benutzerkonto mit Zugriff auf {% ifversion ghec or ghae %}die Ressourcen deines Unternehmens{% elsif ghes %}{% data variables.product.product_location %}{% endif %} in regelmäßigen Abständen ungültig. Nach der Invalidierung muss die Person sich erneut bei deinem IdP authentifizieren. Wenn dein IdP keinen Wert für das `SessionNotOnOrAfter`-Attribut angibt, macht {% data variables.product.product_name %} eine Sitzung {% ifversion ghec %}24 Stunden{% elsif ghes or ghae %}eine Woche{% endif %} nach der erfolgreichen Authentifizierung bei deinem IdP standardmäßig ungültig.

Wenn du die Sitzungsdauer anpassen möchtest, kann du den Wert des `SessionNotOnOrAfter`-Attributs möglicherweise auf deinem IdP definieren. Wenn du einen Wert von weniger als 24 Stunden angibst, könnte es sein, dass {% data variables.product.product_name %} Personen dazu auffordert, sich jedes Mal zu authentifizieren, wenn {% data variables.product.product_name %} eine Umleitung initiiert.

{% ifversion ghec %} Um Authentifizierungsfehler zu verhindern, wird eine Mindestsitzungsdauer von vier Stunden empfohlen. Weitere Informationen findest du unter [Problembehandlung bei der SAML-Authentifizierung](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate).
{% endif %}

{% note %}

**Hinweise**:

- Bei Azure AD steuert die konfigurierbare Lebensdauerrichtlinie für SAML-Token nicht die Sitzungstimeouts für {% data variables.product.product_name %}.
- Okta sendet das `SessionNotOnOrAfter`-Attribut bei der SAML-Authentifizierung bei {% data variables.product.product_name %} derzeit nicht. Wende dich an Okta, um weitere Informationen zu erhalten.

{% endnote %}
