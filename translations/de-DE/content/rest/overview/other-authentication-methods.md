---
title: Andere Authentifizierungsmethoden
intro: Du kannst die Standardauthentifizierung zum Testen in einer Nichtproduktionsumgebung verwenden.
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
ms.openlocfilehash: a979c5e688f6f6942a56c9cff55386bb72a92e57
ms.sourcegitcommit: f392aa98511e0889d96af2e4a56e67f8adfb025f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172717'
---
{% ifversion fpt or ghes or ghec %} Während die API mehrere Methoden für die Authentifizierung bereitstellt, wird für Produktionsanwendungen dringend die Verwendung von [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) empfohlen. Die anderen bereitgestellten Methoden sollen für Skripts oder Tests verwendet werden (d. h. für Fälle, in denen eine vollständige OAuth-Authentifizierung zu viel des Guten wäre). Drittanbieteranwendungen, deren Benutzerauthentifizierung auf {% data variables.product.product_name %} basiert, dürfen {% data variables.product.product_name %}-Anmeldeinformationen weder anfordern noch erfassen.
Stattdessen müssen sie den [OAuth-Webflow](/apps/building-oauth-apps/authorizing-oauth-apps/) verwenden.

{% endif %}

{% ifversion ghae %}

Für die Authentifizierung werden [OAuth-Token](/apps/building-integrations/setting-up-and-registering-oauth-apps/) wie z. B. ein {% data variables.product.pat_generic %} über den [OAuth-Webflow](/apps/building-oauth-apps/authorizing-oauth-apps/) empfohlen.

{% endif %}

## Standardauthentifizierung

Die API unterstützt die in [RFC2617](http://www.ietf.org/rfc/rfc2617.txt) definierte Standardauthentifizierung mit einigen geringfügige Unterschieden.
Der Hauptunterschied besteht darin, dass nicht authentifizierte Anforderungen laut dem RFC mit `401 Unauthorized`-Antworten beantwortet werden müssen. An vielen Stellen würde dies die Existenz von Benutzerdaten offenlegen. Stattdessen antwortet die {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API mit `404 Not Found`.
Dies kann bei HTTP-Bibliotheken, die von einer `401 Unauthorized`-Antwort ausgehen, zu Problemen führen. Die Lösung besteht darin, den `Authorization`-Header manuell zu erstellen.

### Über ein {% data variables.product.pat_generic %}s

Es wird empfohlen, {% ifversion pat-v2%}{% data variables.product.pat_v2 %}s{% else %}{% data variables.product.pat_generic %}s{% endif %} für die Authentifizierung bei der GitHub-API zu verwenden.

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

Dieser Ansatz ist nützlich, wenn deine Tools nur die Standardauthentifizierung unterstützen, du aber die Sicherheitsfeatures von {% data variables.product.pat_generic %} nutzen möchtest.

{% ifversion not ghae %}
### Per Benutzername und Kennwort

{% ifversion fpt or ghec %} {% note %}

**Hinweis:** {% data variables.product.prodname_dotcom %} hat die Kennwortauthentifizierung für die API ab dem 13. November 2020 für alle {% data variables.product.prodname_dotcom_the_website %}-Konten eingestellt, einschließlich derjenigen mit einem {% data variables.product.prodname_free_user %}-, {% data variables.product.prodname_pro %}-, {% data variables.product.prodname_team %}- oder {% data variables.product.prodname_ghe_cloud %}-Plan,. Du musst dich jetzt mit einem API-Token wie einem OAuth-Zugriffstoken, GitHub-App-Installationszugriffstoken oder {% data variables.product.pat_generic %} bei der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API authentifizieren, je nachdem, was du mit dem Token tun musst. Weitere Informationen findest du unter [Problembehandlung](/rest/overview/troubleshooting#basic-authentication-errors).
 
{% endnote %} {% else %}

Um die Standardauthentifizierung mit der {% data variables.product.product_name %}-API zu nutzen, musst du nur den Benutzernamen und das Kennwort des Kontos senden.

Wenn du beispielsweise über [cURL][curl] auf die API zugreifst, authentifiziert dich der folgende Befehl, wenn du `<username>` durch deinen {% data variables.product.product_name %}-Benutzernamen ersetzt.
(cURL wird dich auffordern, dein Kennwort einzugeben.)

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
Wenn du die zweistufige Authentifizierung aktiviert hast, solltest gut mit dem [Umgang mit der zweistufigen Authentifizierung](/rest/overview/other-authentication-methods#working-with-two-factor-authentication) vertraut sein.
{% endif %} {% endif %}

{% ifversion fpt or ghec %}
### Authentifizierung per SAML-SSO

{% note %}

**Hinweis:** Integrationen und OAuth-Anwendungen, die Token im Auftrag anderer Benutzer*innen generieren, werden automatisch autorisiert.

{% endnote %}

{% note %}

**Hinweis:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

Wenn du über die API auf eine Organisation zugreifst, die bei der Authentifizierung [SAML-SSO][saml-sso] erzwingt, musst du ein {% data variables.product.pat_generic %} erstellen und es für diese Organisation [autorisieren][allowlist]. Besuche die in `X-GitHub-SSO` angegebene URL, um das Token für die Organisation zu autorisieren.

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

Wenn du Daten anforderst, die aus mehreren Organisationen stammen könnten (z. B. [eine Liste der von dem Benutzer erstellten Issues][user-issues]), gibt der `X-GitHub-SSO`-Header an, für welche Organisationen du dein {% data variables.product.pat_generic %} autorisieren musst:

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

Der Wert `organizations` ist eine durch Trennzeichen getrennte Liste der Organisations-IDs von Organisationen, für die du dein {% data variables.product.pat_generic %} autorisieren musst.
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Arbeiten mit der zweistufigen Authentifizierung

Wenn du die TFA aktiviert hast, musst du für die [Standardauthentifizierung](#basic-authentication) bei den _meisten_ Endpunkten der REST-API ein {% data variables.product.pat_generic %}{% ifversion ghes %} oder OAuth-Token anstelle deines Benutzernamens und Kennworts{% endif %} verwenden.

Du kannst ein neues {% data variables.product.pat_generic %} {% ifversion fpt or ghec %}über die [{% data variables.product.product_name %}-Entwicklereinstellungen](https://github.com/settings/tokens/new) {% endif %}{% ifversion ghes %} oder über den Endpunkt „[Erstellen einer neuen Autorisierung][/rest/reference/oauth-authorizations#create-a-new-authorization]“ in der OAuth-Autorisierungs-API erstellen, um ein neues OAuth-Token zu generieren{% endif %}. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %} für die Befehlszeile](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). Anschließend kannst du dich dank dieser Token mit [OAuth-Token][oauth-auth] bei der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API authentifizieren.{% ifversion ghes %} Das einzige Szenario, in dem du dich mit deinem Benutzernamen und Kennwort authentifizieren musst, ist bei der Erstellung deines OAuth-Tokens oder der Verwendung der OAuth-Autorisierungs-API.{% endif %}

{% endif %}

{% ifversion ghes %}
### Verwenden der OAuth-Autorisierungs-API mit der zweistufigen Authentifizierung

Wenn du Aufrufe an die OAuth-Autorisierungs-API sendest, musst du für die Standardauthentifizierung ein einmaliges Kennwort (One-Time Password, OTP) sowie deinen Benutzernamen und dein Kennwort anstelle von Token verwenden. Wenn du versuchst, dich mit der OAuth-Autorisierungs-API zu authentifizieren, antwortet der Server mit `401 Unauthorized` und einem der folgenden Header, um dir mitzuteilen, dass du einen Code für die zweistufige Authentifizierung benötigst:

`X-GitHub-OTP: required; SMS` oder `X-GitHub-OTP: required; app`.  

Dieser Header teilt dir mit, wie dein Konto die Codes für die zweistufige Authentifizierung empfängt. Je nachdem, wie du dein Konto einrichtest, erhältst du deine OTP-Codes entweder per SMS oder über eine Anwendung wie Google Authenticator oder 1Password. Weitere Informationen findest du unter [Konfigurieren der zweistufigen Authentifizierung](/articles/configuring-two-factor-authentication). Übergib das OTP im Header:

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
