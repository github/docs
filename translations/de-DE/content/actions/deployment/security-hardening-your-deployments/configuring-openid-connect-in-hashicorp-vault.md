---
title: Konfigurieren von OpenID Connect in HashiCorp Vault
shortTitle: OpenID Connect in HashiCorp Vault
intro: Verwende OpenID Connect in deinen Workflows zum Authentifizieren bei HashiCorp Vault.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 174243818443709ee6ffe3b22aa668cff254266f
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106629'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

Mit OpenID Connect (OIDC) kannst du deine {% data variables.product.prodname_actions %}-Workflows gegenüber HashiCorp Vault authentifizieren, um Geheimnisse abzurufen.

In diesem Leitfaden erfährst du, wie du HashiCorp Vault so konfigurierst, dass OIDC auf {% data variables.product.prodname_dotcom %} als vertrauenswürdige Verbundidentität eingestuft wird. Außerdem wird gezeigt, wie diese Konfiguration in der Aktion [hashicorp/vault-action](https://github.com/hashicorp/vault-action) verwendet wird, um Geheimnisse aus HashiCorp Vault abzurufen.

## Voraussetzungen

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Hinzufügen des Identitätsanbieters zu HashiCorp Vault

Für die Verwendung von OIDC mit HashiCorp Vault musst du eine Vertrauenskonfiguration für den OIDC-Anbieter auf {% data variables.product.prodname_dotcom %} hinzufügen. Weitere Informationen findest du in der [Dokumentation zu HashiCorp Vault](https://www.vaultproject.io/docs/auth/jwt).

So konfigurierst du deinen Vault-Server so, dass er JWTs (JSON Web Token) für die Authentifizierung akzeptiert:

1. Aktiviere die JWT-`auth`-Methode, und verwende `write`, um die Konfiguration auf deinen Tresor anzuwenden. 
  Verwende für die Parameter `oidc_discovery_url` und `bound_issuer` den Wert {% ifversion ghes %}`https://HOSTNAME/_services/token`{% else %}`https://token.actions.githubusercontent.com`{% endif %}. Diese Parameter ermöglichen es dem Vault-Server, die empfangenen JWTs während des Authentifizierungsprozesses zu überprüfen.

    ```sh{:copy}
    vault auth enable jwt
    ```
    
    ```sh{:copy}
    vault write auth/jwt/config \
      bound_issuer="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}" \
      oidc_discovery_url="{% ifversion ghes %}https://HOSTNAME/_services/token{% else %}https://token.actions.githubusercontent.com{% endif %}"
    ```
2. Konfiguriere eine Richtlinie, die nur Zugriff auf die spezifischen Pfade gewährt, die deine Workflows zum Abrufen von Geheimnissen verwenden. Weiterführende Richtlinien findest du in der [Richtliniendokumentation](https://www.vaultproject.io/docs/concepts/policies) zu HashiCorp Vault.

    ```sh{:copy}
    vault policy write myproject-production - <<EOF
    # Read-only permission on 'secret/data/production/*' path

    path "secret/data/production/*" {
      capabilities = [ "read" ]
    }
    EOF
    ```
3. Konfiguriere Rollen, um verschiedene Richtlinien in Gruppen zusammenzufassen. Wenn die Authentifizierung erfolgreich ist, werden diese Richtlinien an das resultierende Vault-Zugriffstoken angefügt.

    ```sh{:copy}
    vault write auth/jwt/role/myproject-production -<<EOF
    {
      "role_type": "jwt",
      "user_claim": "actor",
      "bound_claims": {
        "repository": "user-or-org-name/repo-name"
      },
      "policies": ["myproject-production"],
      "ttl": "10m"
    }
    EOF
    ```

- `ttl` definiert die Gültigkeit des resultierenden Zugriffstokens.
- Stelle sicher, dass der Parameter `bound_claims` für deine Sicherheitsanforderungen definiert ist und mindestens eine Bedingung enthält. Optional kannst du außerdem den Parameter `bound_subject` sowie den Parameter `bound_audiences` festlegen.
- Um beliebige Ansprüche in den empfangenen JWT-Nutzdaten zu überprüfen, enthält der Parameter `bound_claims` eine Reihe von Ansprüchen und ihre erforderlichen Werte. Im obigen Beispiel akzeptiert die Rolle alle eingehenden Authentifizierungsanforderungen aus dem Repository `repo-name`, das dem Konto `user-or-org-name` angehört.
- Eine Liste aller verfügbaren Ansprüche, die vom OIDC-Anbieter {% data variables.product.prodname_dotcom %} unterstützt werden, findest du unter [Konfigurieren der OIDC-Vertrauensstellung mit der Cloud](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect#configuring-the-oidc-trust-with-the-cloud).

Weitere Informationen findest du in der [Dokumentation zu HashiCorp Vault](https://www.vaultproject.io/docs/auth/jwt).

## Aktualisieren deines {% data variables.product.prodname_actions %}-Workflows

Um deine Workflows für OIDC zu aktualisieren, musst du zwei Änderungen an deinen YAML-Daten vornehmen:
1. Füge Berechtigungseinstellungen für das Token hinzu.
2. Tausche das OIDC-Token (JWT) mithilfe der Aktion [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action) gegen ein Cloudzugriffstoken aus.


Um die OIDC-Integration zu deinen Workflows hinzuzufügen, damit diese auf Geheimnisse in Vault zugreifen können, sind die folgenden Codeänderungen erforderlich:

- Erteile die Berechtigung zum Abrufen von Token vom OIDC-Anbieter auf {% data variables.product.prodname_dotcom %}:
  - Der Workflow benötigt `permissions:`-Einstellungen, bei denen der Wert `id-token` auf `write` festgelegt ist. Dadurch können OIDC-Token aus jedem Auftrag im Workflow abgerufen werden.
- Fordere das JWT vom {% data variables.product.prodname_dotcom %}-OIDC-Anbieter an, und übergebe dieses Token an HashiCorp Vault, um ein Zugriffstoken zu empfangen:
  - Du kannst die [`hashicorp/vault-action`](https://github.com/hashicorp/vault-action)-Aktion verwenden, um das JWT abzurufen und das Zugriffstoken aus Vault zu erhalten, oder du kannst die Token für deinen Auftrag mit dem [Toolkit für Aktionen](https://github.com/actions/toolkit/) abrufen.

In diesem Beispiel wird veranschaulicht, wie OIDC mit der offiziellen Aktion verwendet wird, um ein Geheimnis aus HashiCorp Vault anzufordern.

### Hinzufügen von Berechtigungseinstellungen

 {% data reusables.actions.oidc-permissions-token %}

{% note %}

**Hinweis**:

Bei Verwendung des Schlüssels `permissions` werden alle nicht angegebenen Berechtigungen auf _Kein Zugriff_ festgelegt, mit Ausnahme des Metadatenbereichs, der immer _Lesezugriff_ erhält. Infolgedessen musst du möglicherweise andere Berechtigungen hinzufügen, zum Beispiel `contents: read`. Weitere Informationen findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication).

{% endnote %}

### Anfordern des Zugriffstokens

Die Aktion `hashicorp/vault-action` empfängt ein JWT vom {% data variables.product.prodname_dotcom %}-OIDC-Anbieter und fordert anschließend ein Zugriffstoken von deiner HashiCorp Vault-Instanz an, um Geheimnisse abzurufen. Weitere Informationen findest du in der [Dokumentation zu HashiCorp Vault GitHub Action](https://github.com/hashicorp/vault-action).

In diesem Beispiel wird veranschaulicht, wie ein Auftrag erstellt wird, der ein Geheimnis aus HashiCorp Vault anfordert.

- `<Vault URL>`: Ersetze diesen Wert durch die URL deiner HashiCorp Vault-Instanz.
- `<Vault Namespace>`: Ersetze diesen Wert durch den Namespace, den du in HashiCorp Vault festgelegt hast. Beispiel: `admin`.
- `<Role name>`: Ersetze diesen Wert durch die Rolle, die du in der HashiCorp Vault-Vertrauensstellung festgelegt hast.
- `<Secret-Path>`: Ersetze diesen Wert durch den Pfad zum Geheimnis, das du aus HashiCorp Vault abrufst. Beispiel: `secret/data/production/ci npmToken`.

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            method: jwt
            url: <Vault URL>
            namespace: <Vault Namespace - HCP Vault and Vault Enterprise only>
            role: <Role name>
            secrets: <Secret-Path>
                
      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.
```

{% note %}

**Hinweis**:

- Wenn dein Vault-Server nicht über das öffentliche Netzwerk erreichbar ist, solltest du einen selbstgehosteten Runner mit anderen verfügbaren Vault-[Authentifizierungsmethoden](https://www.vaultproject.io/docs/auth) verwenden. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners)“.
- Für eine Vault Enterprise-Bereitstellung (einschließlich HCP Vault) muss `<Vault Namespace>` festgelegt werden. Weitere Informationen findest du unter [Vault-Namespace](https://www.vaultproject.io/docs/enterprise/namespaces).

{% endnote %}

### Widerrufen des Zugriffstokens

Standardmäßig widerruft der Vault-Server Zugriffstoken nach dem jeweiligen TTL-Ablauf automatisch, sodass du die Zugriffstoken nicht manuell widerrufen musst. Wenn du die Zugriffstoken jedoch sofort nach Abschluss oder Scheitern deines Auftrags widerrufen möchtest, kannst du die ausgegebenen Token mithilfe der [Vault-API](https://www.vaultproject.io/api/auth/token#revoke-a-token-self) manuell widerrufen.

1. Setze die Option `exportToken` auf `true` (Standardwert: `false`) fest. Dadurch wird das ausgegebene Vault-Zugriffstoken als Umgebungsvariable exportiert: `VAULT_TOKEN`.
2. Füge einen Schritt hinzu, um die Vault-API zum Wiederrufen des Zugriffstokens aufzurufen: [Revoke a Token (Self)](https://www.vaultproject.io/api/auth/token#revoke-a-token-self).

```yaml{:copy}
jobs:
  retrieve-secret:
    runs-on: ubuntu-latest
    permissions:
      id-token: write
      contents: read
    steps:
      - name: Retrieve secret from Vault
        uses: hashicorp/vault-action@v2.4.0
          with:
            exportToken: true
            method: jwt
            url: <Vault URL>
            role: <Role name>
            secrets: <Secret-Path>

      - name: Use secret from Vault
        run: |
          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.

      - name: Revoke token
        # This step always runs at the end regardless of the previous steps result
        if: always()
        run: |
          curl -X POST -sv -H "X-Vault-Token: {% raw %}${{ env.VAULT_TOKEN }}{% endraw %}" \
            <Vault URL>/v1/auth/token/revoke-self
```
