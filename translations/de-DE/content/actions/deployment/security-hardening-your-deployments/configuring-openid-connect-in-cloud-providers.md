---
title: Konfigurieren von OpenID Connect in Cloudanbietern
shortTitle: OpenID Connect in cloud providers
intro: Verwende OpenID Connect in deinen Workflows zum Authentifizieren bei deinen Cloudanbietern.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.5'
type: tutorial
topics:
  - Security
ms.openlocfilehash: 90dfa54e71fc602243ddb0d51b190fb8530727e4
ms.sourcegitcommit: 938ec7898dddd5da5481ad32809d68e4127e1948
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135494'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

OpenID Connect (OIDC) ermöglicht deinen {% data variables.product.prodname_actions %}-Workflows den Zugriff auf Ressourcen in deinem Cloudanbieter, ohne Anmeldeinformationen als langlebige {% data variables.product.prodname_dotcom %}-Geheimnisse speichern zu müssen.

Um OIDC zu verwenden, musst du zunächst deinen Cloudanbieter so konfigurieren, dass er OIDC von {% data variables.product.prodname_dotcom %} als Verbundidentität vertraut, und dann deine Workflows so aktualisieren, dass sie mit Token authentifiziert werden.

## Voraussetzungen

{% data reusables.actions.oidc-link-to-intro %}

{% data reusables.actions.oidc-security-notice %}

## Aktualisieren deines {% data variables.product.prodname_actions %}-Workflows

Um deine Workflows für OIDC zu aktualisieren, musst du zwei Änderungen an deinen YAML-Daten vornehmen:
1. Füge die Berechtigungseinstellungen für das Token hinzu.
2. Verwende die offizielle Aktion deines Cloudanbieters, um das OIDC-Token (JWT) gegen ein Cloudzugriffstoken auszutauschen.

Wenn dein Cloudanbieter noch keine offizielle Aktion anbietet, kannst du deine Workflows aktualisieren, um diese Schritte manuell auszuführen.

### Hinzufügen von Berechtigungseinstellungen

 {% data reusables.actions.oidc-permissions-token %}

### Verwenden von offiziellen Aktionen

Wenn dein Cloudanbieter eine offizielle Aktion für die Verwendung von OIDC mit {% data variables.product.prodname_actions %} erstellt hat, kannst du das OIDC-Token einfach gegen ein Zugriffstoken austauschen. Anschließend kannst du deine Workflows aktualisieren, um dieses Token beim Zugriff auf Cloudressourcen zu verwenden.

## Verwenden benutzerdefinierter Aktionen

Wenn dein Cloudanbieter keine offizielle Aktion anbietet oder du es vorziehst, benutzerdefinierte Skripts zu erstellen, kannst du das JSON-Webtoken (JWT) manuell vom OIDC-Anbieter von {% data variables.product.prodname_dotcom %} anfordern.

Wenn du keine offizielle Aktion verwendest, empfiehlt {% data variables.product.prodname_dotcom %}, das Actions Core Toolkit zu verwenden. Alternativ kannst du die folgenden Umgebungsvariablen verwenden, um das Token abzurufen: `ACTIONS_RUNTIME_TOKEN`, `ACTIONS_ID_TOKEN_REQUEST_URL`.

Um deine Workflows mithilfe dieses Ansatzes zu aktualisieren, musst du drei Änderungen an deinem YAML vornehmen:

1. Füge die Berechtigungseinstellungen für das Token hinzu.
2. Füge Code hinzu, der das OIDC-Token vom OIDC-Anbieter von {% data variables.product.prodname_dotcom %} anfordert.
3. Füge Code hinzu, der das OIDC-Token mit deinem Cloudanbieter gegen ein Zugriffstoken austauscht.

### Anfordern des JWT mithilfe des Actions Core Toolkits

Das folgende Beispiel zeigt, wie `actions/github-script` mit dem `core`-Toolkit verwendet wird, um das JWT vom OIDC-Anbieter von {% data variables.product.prodname_dotcom %} anzufordern. Weitere Informationen findest du unter [Hinzufügen von Actions-Toolkitpaketen](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages).

```yaml
jobs:
  job:
    environment: Production
    runs-on: ubuntu-latest
    steps:
    - name: Install OIDC Client from Core Package
      run: npm install @actions/core@1.6.0 @actions/http-client
    - name: Get Id Token
      uses: {% data reusables.actions.action-github-script %}
      id: idtoken
      with:
        script: |
          const coredemo = require('@actions/core')
          let id_token = await coredemo.getIDToken()
          coredemo.setOutput('id_token', id_token)
```

### Anfordern des JWT mithilfe von Umgebungsvariablen

Im folgenden Beispiel wird gezeigt, wie du Umgebungsvariablen verwendest, um ein JSON-Webtoken anzufordern.

Für deinen Bereitstellungsauftrag musst du die Tokeneinstellungen mithilfe von `actions/github-script` mit dem `core`-Toolkit definieren. Weitere Informationen findest du unter [Hinzufügen von Actions-Toolkitpaketen](/actions/creating-actions/creating-a-javascript-action#adding-actions-toolkit-packages).

Beispiel:

```yaml
jobs:
  job:
    runs-on: ubuntu-latest
    steps:
    - uses: {% data reusables.actions.action-github-script %}
      id: script
      timeout-minutes: 10
      with:
        debug: true
        script: |
          const token = process.env['ACTIONS_RUNTIME_TOKEN']
          const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL']
          core.setOutput('TOKEN', token.trim())
          core.setOutput('IDTOKENURL', runtimeUrl.trim())
```

Du kannst dann `curl` verwenden, um ein JWT vom {% data variables.product.prodname_dotcom %}-OIDC-Anbieter abzurufen. Beispiel:

```yaml
    - run: |
        IDTOKEN=$(curl -H "Authorization: bearer {% raw %} ${{steps.script.outputs.TOKEN}}" ${{steps.script.outputs.IDTOKENURL}} {% endraw %} -H "Accept: application/json; api-version=2.0" -H "Content-Type: application/json" -d "{}" | jq -r '.value')
        echo $IDTOKEN
        jwtd() {
            if [[ -x $(command -v jq) ]]; then
                jq -R 'split(".") | .[0],.[1] | @base64d | fromjson' <<< "${1}"
                echo "Signature: $(echo "${1}" | awk -F'.' '{print $3}')"
            fi
        }
        jwtd $IDTOKEN
{%- ifversion actions-save-state-set-output-envs %}
        echo "idToken=${IDTOKEN}" >> $GITHUB_OUTPUT
{%- else %}
        echo "::set-output name=idToken::${IDTOKEN}"
{%- endif %}
      id: tokenid
```

### Abrufen des Zugriffstokens vom Cloudanbieter

Du musst deinem Cloudanbieter das OIDC-JSON-Webtoken vorlegen, um ein Zugriffstoken abzurufen.

Für jede Bereitstellung müssen deine Workflows Cloudanmeldeaktionen (oder benutzerdefinierte Skripts) verwenden, die das OIDC-Token abrufen und dem Cloudanbieter vorlegen. Der Cloudanbieter überprüft dann die Ansprüche im Token. Wenn dies erfolgreich ist, stellt er ein Cloudzugriffstoken bereit, das nur für diese Auftragsausführung verfügbar ist. Das bereitgestellte Zugriffstoken kann dann bei nachfolgenden Aktionen im Auftrag verwendet werden, um eine Verbindung mit der Cloud herzustellen und deren Ressourcen für die Bereitstellung zu nutzen.

Die Schritte zum Austauschen des OIDC-Tokens gegen ein Zugriffstoken variieren je nach Cloudanbieter.

### Zugreifen auf Ressourcen in deinem Cloudanbieter

Nachdem du das Zugriffstoken abgerufen hast, kannst du bestimmte Cloudaktionen oder Skripts verwenden, um dich beim Cloudanbieter zu authentifizieren und seine Ressourcen für die Bereitstellung zu nutzen. Diese Schritte können für jeden Cloudanbieter unterschiedlich sein.
Darüber hinaus kann die Standardablaufzeit dieses Zugriffstokens für jede Cloud unterschiedlich und auf der Seite des Cloudanbieters konfigurierbar sein.
