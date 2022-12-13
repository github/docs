---
title: Schnellstart für die GitHub-REST-API
intro: 'Erfahre mehr über die ersten Schritte mit der {% data variables.product.prodname_dotcom %}-REST-API.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
topics:
  - API
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 73b92aa20c38377f878bf9b6fffb7c1c6e2639b9
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718197'
---
Dieser Artikel enthält Informationen zum schnellen Einstieg in die {% data variables.product.prodname_dotcom %}-REST-API mithilfe von {% data variables.product.prodname_cli %}, JavaScript oder cURL. Einen ausführlicheren Leitfaden findest du unter [Erste Schritte mit der REST-API](/rest/guides/getting-started-with-the-rest-api).

{% cli %}

## Erste Schritte mit der {% data variables.product.prodname_cli %}

### Verwenden der {% data variables.product.prodname_cli %} in der Befehlszeile

Die {% data variables.product.prodname_cli %} ist der einfachste Weg, um die {% data variables.product.prodname_dotcom %}-REST-API über die Befehlszeile zu nutzen.

1. Installiere die {% data variables.product.prodname_cli %}, sofern nicht bereits geschehen. Anweisungen zur Installation findest du im [{% data variables.product.prodname_cli %}-Repository](https://github.com/cli/cli#installation).
1. Verwende den Unterbefehl `auth login`, um dich bei der {% data variables.product.prodname_cli %} zu authentifizieren. Weitere Informationen findest du in der Dokumentation zu [{% data variables.product.prodname_cli %} `auth login`](https://cli.github.com/manual/gh_auth_login).

   ```shell
   gh auth login
   ```

1. Verwende den Unterbefehl `api`, um deine API-Anforderung auszuführen. Weitere Informationen findest du in der Dokumentation zu [{% data variables.product.prodname_cli %} `api`](https://cli.github.com/manual/gh_api).

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### Verwenden der {% data variables.product.prodname_cli %} in {% data variables.product.prodname_actions %}

Du kannst die {% data variables.product.prodname_cli %} auch in deinen {% data variables.product.prodname_actions %}-Workflows verwenden. Weitere Informationen findest du unter [Verwenden der GitHub CLI in Workflows](/actions/using-workflows/using-github-cli-in-workflows).

Anstatt den Befehl `gh auth login` zu verwenden, übergibst du ein Zugriffstoken als Umgebungsvariable namens `GH_TOKEN`. {% data variables.product.prodname_dotcom %} empfiehlt, dass du das integrierte `GITHUB_TOKEN` verwendest, anstatt ein Token zu erstellen. Wenn das nicht möglich ist, speichere dein Token als Geheimnis, und ersetze `GITHUB_TOKEN` im folgenden Beispiel durch den Namen deines Geheimnisses. Weitere Informationen zu `GITHUB_TOKEN` findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

Wenn du dich mit einer {% data variables.product.prodname_github_app %} authentifizierst, kannst du innerhalb deines Workflows ein Zugriffstoken für die Installation erstellen:

1. Speichere die ID deiner {% data variables.product.prodname_github_app %} als Geheimnis. Ersetze im folgenden Beispiel `APP_ID` durch den Namen des Geheimnisses. Du kannst die App-ID auf der Einstellungsseite deiner App oder durch die App-API finden. Weitere Informationen findest du unter [Apps](/rest/apps/apps#get-an-app). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).
1. Generiere einen privaten Schlüssel für deine App. Speichere den Inhalt der resultierenden Datei als Geheimnis. (Speichere den gesamten Inhalt der Datei, einschließlich `-----BEGIN RSA PRIVATE KEY-----` und `-----END RSA PRIVATE KEY-----`.) Ersetze im folgenden Beispiel `APP_PEM` durch den Namen des Geheimnisses. Weitere Informationen findest du unter [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key).
1. Füge einen Schritt zum Generieren eines Tokens hinzu, und verwende diesen Token anstelle von `GITHUB_TOKEN`. Beachte, dass dieses Token nach 60 Minuten abläuft. Beispiel:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

## Erste Schritte mit JavaScript

Du kannst „Octokit.js“ verwenden, um in deinen JavaScript-Skripts mit der {% data variables.product.prodname_dotcom %}-REST-API zu interagieren. Weitere Informationen findest du in der [Octokit.js-Infodatei](https://github.com/octokit/octokit.js/#readme).

### Verwenden von „Octokit.js“

1. Erstelle ein Zugriffstoken. Erstelle zum Beispiel ein persönliches Zugriffstoken (PAT) oder ein {% data variables.product.prodname_github_app %}-Benutzer-zu-Server-Zugriffstoken. Weitere Informationen findest du unter [Erstellen eines persönlichen Zugriffstokens](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) oder [Identifizieren und Autorisieren von Benutzern für GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps).

   {% warning %}

   **Warnung**: Behandle dein Zugriffstoken wie ein Kennwort.

   Um dein Token zu schützen, kannst du es als Geheimnis speichern und dein Skript über {% data variables.product.prodname_actions %} ausführen. Weitere Informationen findest du im Abschnitt [Verwenden von „Octokit.js“ in {% data variables.product.prodname_actions %}](#using-octokitjs-in-github-actions).

   {%- ifversion fpt or ghec %}

   Du kannst dein Token auch als {% data variables.product.prodname_codespaces %}-Geheimnis speichern und dein Skript in {% data variables.product.prodname_codespaces %} ausführen. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

   Wenn diese Optionen nicht verfügbar sind, solltest du einen anderen Dienst wie zum Beispiel die [1Password CLI](https://developer.1password.com/docs/cli/secret-references/) nutzen, um dein Token sicher zu speichern.

   {% endwarning %}

1. Installieren von `octokit`. Beispiel: `npm install octokit`. Informationen über andere Möglichkeiten zum Installieren oder Laden von `octokit` findest du in der [Octokit.js-Infodatei](https://github.com/octokit/octokit.js/#readme).
1. Importiere `octokit` in dein Skript. Beispiel: `import { Octokit } from "octokit";`. Informationen über andere Möglichkeiten zum Importieren von `octokit` findest du in der [Octokit.js-Infodatei](https://github.com/octokit/octokit.js/#readme).
1. Erstelle eine Instanz von `Octokit` mit deinem Token. Ersetzen Sie `YOUR-TOKEN` durch Ihr Token.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. Verwende `octokit.request`, um deine Anforderung auszuführen. Übergib die HTTP-Methode und den Pfad als erstes Argument. Gib alle Pfad-, Abfrage- und Textparameter als zweites Argument in einem Objekt an. In der folgenden Anforderung lautet die HTTP-Methode zum Beispiel `GET`, der Pfad `/repos/{owner}/{repo}/issues` und die Parameter `owner: "octocat"` und `repo: "Spoon-Knife"`.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### Verwenden von „Octokit.js“ in {% data variables.product.prodname_actions %}

Du kannst auch deine JavaScript-Skripts in deinen {% data variables.product.prodname_actions %}-Workflows ausführen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

{% data variables.product.prodname_dotcom %} empfiehlt, dass du das integrierte `GITHUB_TOKEN` verwendest, anstatt ein Token zu erstellen. Wenn das nicht möglich ist, speichere dein Token als Geheimnis, und ersetze `GITHUB_TOKEN` im folgenden Beispiel durch den Namen deines Geheimnisses. Weitere Informationen zu `GITHUB_TOKEN` findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

Der nachstehende Beispielworkflow übernimmt folgende Aufgaben:

1. Überprüfen des Repositoryinhalts
1. Einrichten von Node.js
1. Installieren von `octokit`
1. Speichern des Werts von `GITHUB_TOKEN` als Umgebungsvariable namens `TOKEN` und Ausführen des Skripts `.github/actions-scripts/use-the-api.mjs`, das auf diese Umgebungsvariable als `process.env.TOKEN` zugreifen kann

Beispielworkflow:

```yaml
on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.15.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

JavaScript-Beispielskript mit dem Dateipfad `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.TOKEN
});

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "octocat",
      repo: "Spoon-Knife",
    });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

Wenn du dich mit einer {% data variables.product.prodname_github_app %} authentifizierst, kannst du innerhalb deines Workflows ein Zugriffstoken für die Installation erstellen:

1. Speichere die ID deiner {% data variables.product.prodname_github_app %} als Geheimnis. Ersetze im folgenden Beispiel `APP_ID` durch den Namen des Geheimnisses. Du kannst die App-ID auf der Einstellungsseite deiner App oder durch die App-API finden. Weitere Informationen findest du unter [Apps](/rest/apps/apps#get-an-app). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).
1. Generiere einen privaten Schlüssel für deine App. Speichere den Inhalt der resultierenden Datei als Geheimnis. (Speichere den gesamten Inhalt der Datei, einschließlich `-----BEGIN RSA PRIVATE KEY-----` und `-----END RSA PRIVATE KEY-----`.) Ersetze im folgenden Beispiel `APP_PEM` durch den Namen des Geheimnisses. Weitere Informationen findest du unter [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key).
1. Füge einen Schritt zum Generieren eines Tokens hinzu, und verwende diesen Token anstelle von `GITHUB_TOKEN`. Beachte, dass dieses Token nach 60 Minuten abläuft. Beispiel:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.15.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

{% endjavascript %}

{% curl %}

## Erste Schritte mit cURL

### Verwenden von cURL in der Befehlszeile

{% note %}

**Hinweis:** Wenn du API-Anforderungen über die Befehlszeile ausführen möchtest, empfiehlt {% data variables.product.prodname_dotcom %} die Verwendung der {% data variables.product.prodname_cli %}, da dies die Authentifizierung und das Ausführen von Anforderungen vereinfacht. Weitere Informationen zu den ersten Schritten mit der REST-API unter Verwendung der {% data variables.product.prodname_cli %} findest du in der {% data variables.product.prodname_cli %}-Version dieses Artikels.

{% endnote %}

1. Installiere cURL auf deinem Computer, sofern nicht bereits geschehen. Um festzustellen, ob cURL bereits installiert ist, führe `curl --version` an der Befehlszeile aus. Wenn die Ausgabe Informationen über die cURL-Version enthält, ist cURL bereits installiert. Wenn du eine Meldung der Art `command not found: curl` erhältst, musst du cURL herunterladen und installieren. Weitere Informationen findest du auf der [Downloadseite für das cURL-Projekt](https://curl.se/download.html).
1. Erstelle ein Zugriffstoken. Erstelle zum Beispiel ein persönliches Zugriffstoken (PAT) oder ein {% data variables.product.prodname_github_app %}-Benutzer-zu-Server-Zugriffstoken. Weitere Informationen findest du unter [Erstellen eines persönlichen Zugriffstokens](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) oder [Identifizieren und Autorisieren von Benutzern für GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps).

   {% warning %}

   **Warnung**: Behandle dein Zugriffstoken wie ein Kennwort.

   {%- ifversion fpt or ghec %}

   Um dein Token zu schützen, kannst du es als {% data variables.product.prodname_codespaces %}-Geheimnis speichern und die Befehlszeile über {% data variables.product.prodname_codespaces %} verwenden. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

   Du kannst anstelle von cURL auch die {% data variables.product.prodname_cli %} verwenden. Die {% data variables.product.prodname_cli %} übernimmt die Authentifizierung für dich. Weitere Informationen findest du in der {% data variables.product.prodname_cli %}-Version dieser Seite.

   Wenn diese Optionen nicht verfügbar sind, solltest du einen anderen Dienst wie zum Beispiel die [1Password CLI](https://developer.1password.com/docs/cli/secret-references/) nutzen, um dein Token sicher zu speichern.

   {% endwarning %}

1. Verwende den Befehl `cURL`, um deine Anforderung auszuführen. Übergib dein Token in einem `Authorization`-Header. Ersetzen Sie `YOUR-TOKEN` durch Ihr Token.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github.v3+json" \
   --header "Authorization: Bearer <em>YOUR-TOKEN</em>"
   ```

   {% note %}

   **Hinweis:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### Verwenden von cURL in {% data variables.product.prodname_actions %}

Du kannst auch cURL in deinen {% data variables.product.prodname_actions %}-Workflows verwenden.

{% data variables.product.prodname_dotcom %} empfiehlt, dass du das integrierte `GITHUB_TOKEN` verwendest, anstatt ein Token zu erstellen. Wenn das nicht möglich ist, speichere dein Token als Geheimnis, und ersetze `GITHUB_TOKEN` im folgenden Beispiel durch den Namen deines Geheimnisses. Weitere Informationen zu `GITHUB_TOKEN` findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github.v3+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

Wenn du dich mit einer {% data variables.product.prodname_github_app %} authentifizierst, kannst du innerhalb deines Workflows ein Zugriffstoken für die Installation erstellen:

1. Speichere die ID deiner {% data variables.product.prodname_github_app %} als Geheimnis. Ersetze im folgenden Beispiel `APP_ID` durch den Namen des Geheimnisses. Du kannst die App-ID auf der Einstellungsseite deiner App oder durch die App-API finden. Weitere Informationen findest du unter [Apps](/rest/apps/apps#get-an-app). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).
1. Generiere einen privaten Schlüssel für deine App. Speichere den Inhalt der resultierenden Datei als Geheimnis. (Speichere den gesamten Inhalt der Datei, einschließlich `-----BEGIN RSA PRIVATE KEY-----` und `-----END RSA PRIVATE KEY-----`.) Ersetze im folgenden Beispiel `APP_PEM` durch den Namen des Geheimnisses. Weitere Informationen findest du unter [Authentifizieren mit {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key).
1. Füge einen Schritt zum Generieren eines Tokens hinzu, und verwende diesen Token anstelle von `GITHUB_TOKEN`. Beachte, dass dieses Token nach 60 Minuten abläuft. Beispiel:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github.v3+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Nächste Schritte

Einen ausführlicheren Leitfaden findest du unter [Erste Schritte mit der REST-API](/rest/guides/getting-started-with-the-rest-api).
