---
title: Erste Schritte mit der REST-API
intro: 'Erfahre, wie du die {% data variables.product.prodname_dotcom %}-REST-API verwendest.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Using the API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66620b01bb488f8c74111b56255ff06702e402e8
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184261'
---
## Informationen zur {% data variables.product.prodname_dotcom %}-REST-API

Dieser Artikel beschreibt, wie du die {% data variables.product.prodname_dotcom %}-REST-API mit der {% data variables.product.prodname_cli %}, mit JavaScript oder cURL nutzen kannst. Einen Leitfaden für den schnellen Einstieg findest du unter [Schnellstart für die GitHub-REST-API](/rest/quickstart).

Wenn du eine Anforderung an die REST-API sendest, gibst du eine HTTP-Methode und einen Pfad an. Darüber hinaus kannst du auch Anforderungsheader sowie Pfad-, Abfrage- oder Textparameter angeben. Die API gibt den Antwortstatuscode, Antwortheader und potenziell einen Antworttext zurück.

Die REST-API-Referenzdokumentation beschreibt die HTTP-Methode, den Pfad und die Parameter für jeden Vorgang. Außerdem werden für jeden Vorgang Beispielanforderungen und -antworten bereitgestellt. Weitere Informationen findest du in der [REST-Referenzdokumentation](/rest).

Weitere Informationen zu den APIs von {% data variables.product.company_short %} findest du unter [Informationen zu {% data variables.product.company_short %}-APIs](/developers/overview/about-githubs-apis).

## Ausführen einer Anforderung

Um eine Anforderung auszuführen, musst du zuerst die HTTP-Methode und den Pfad für den gewünschten Vorgang ermitteln. Der Vorgang „Get Octocat“ verwendet beispielsweise die Methode `GET` und den Pfad `/octocat`. Die vollständige Referenzdokumentation für diesen Vorgang findest du unter [Get Octocat](/rest/meta#get-octocat).

{% cli %}

{% note %}

**Hinweis**: Du musst die {% data variables.product.prodname_cli %} installieren, um die Befehle in den {% data variables.product.prodname_cli %}-Beispielen verwenden zu können. Anweisungen zur Installation findest du im [{% data variables.product.prodname_cli %}-Repository](https://github.com/cli/cli#installation).

{% endnote %}

Wenn du noch nicht bei der {% data variables.product.prodname_cli %} authentifiziert bist, musst du dich mit dem Unterbefehl `gh auth login` authentifizieren, bevor du eine Anforderung ausführen kannst. Weitere Informationen findest du unter [Authentifizierung](#authenticating).

Um eine Anforderung mit der {% data variables.product.prodname_cli %} auszuführen, verwende den Unterbefehl `api` zusammen mit dem Pfad. Verwende das Flag `--method` oder `-X`, um die Methode anzugeben.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**Hinweis**: Du musst `octokit` installieren und importieren, um die in den JavaScript-Beispielen verwendete Bibliothek „Octokit.js“ nutzen zu können. Weitere Informationen findest du in der [Octokit.js-Infodatei](https://github.com/octokit/octokit.js/#readme).

{% endnote %}

Um eine Anforderung mithilfe von JavaScript auszuführen, kannst du „Octokit.js“ verwenden. Weitere Informationen findest du in der [Octokit.js-Infodatei](https://github.com/octokit/octokit.js/#readme).

Erstelle zunächst eine Instanz von `Octokit`.{% ifversion ghes or ghae %} Lege die Basis-URL auf `{% data variables.product.api_url_code %}` fest. Ersetze `[hostname]` durch den Namen von {% data variables.location.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

Verwende dann die `request`-Methode, um Anforderungen auszuführen. Übergib die HTTP-Methode und den Pfad als erstes Argument.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

Füge die Basis-URL für die {% data variables.product.prodname_dotcom %}-REST-API, `{% data variables.product.api_url_code %}`, am Anfang des Pfads ein, um die vollständige URL zu erhalten: `{% data variables.product.api_url_code %}/octocat`.{% ifversion ghes or ghae %} Ersetze `[hostname]` durch den Namen von {% data variables.location.product_location %}.{% endif %}

Verwende den Befehl `curl` in deiner Befehlszeile. Verwende das Flag `--request` oder `-X`, gefolgt von der HTTP-Methode. Verwende das Flag `--url`, gefolgt von der vollständigen URL.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**Hinweis**: Wenn du eine Meldung der Art „command not found: curl“ erhältst, musst du cURL möglicherweise herunterladen und installieren. Weitere Informationen findest du auf der [Downloadseite für das cURL-Projekt](https://curl.se/download.html).

{% endnote %}

{% endcurl %}

Lies weiter, um zu erfahren, wie du dich authentifizieren, Parameter senden und die Antwort verwenden kannst.

## Authentifizierung

Viele Vorgänge erfordern eine Authentifizierung oder geben zusätzliche Informationen zurück, wenn du authentifiziert bist. Außerdem kannst du eine größere Anzahl von Anforderungen pro Stunde ausführen, wenn du authentifiziert bist.{% cli %} Obwohl einige REST-API-Vorgänge ohne Authentifizierung zugänglich sind, musst du dich bei der {% data variables.product.prodname_cli %} authentifizieren, um den Unterbefehl `api` verwenden zu können.{% endcli %}

### Informationen zu Token

Du kannst deine Anforderung authentifizieren, indem du ein Token hinzufügst.

Wenn du die {% data variables.product.company_short %}-REST-API für den privaten Gebrauch nutzen möchtest, kannst du ein {% data variables.product.pat_generic %} erstellen. Für die in diesem Artikel verwendeten REST-API-Vorgänge wird der Bereich `repo` für persönliche Zugangstoken {% data variables.product.pat_v1_plural %}{% ifversion pat-v2 %} oder, sofern nicht anders angegeben, schreibgeschützter Zugriff auf öffentliche Repositorys für {% data variables.product.pat_v2 %}{% endif %}. Für andere Vorgänge sind möglicherweise andere Bereiche{% ifversion pat-v2%} oder Berechtigungen{% endif %} erforderlich. Weitere Informationen zum Erstellen eines {% data variables.product.pat_generic %} findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Wenn du die API im Namen einer Organisation oder eines anderen Benutzers nutzen möchtest, empfiehlt {% data variables.product.company_short %}, dass du eine {% data variables.product.prodname_github_app %} verwendest. Wenn ein Vorgang für {% data variables.product.prodname_github_apps %} verfügbar ist, findest du in der REST-Referenzdokumentation für diesen Vorgang den Hinweis „Funktioniert mit GitHub Apps“. Für die in diesem Artikel verwendeten REST-API-Vorgänge werden `issues`-Lese- und -Schreibberechtigungen für {% data variables.product.prodname_github_apps %} benötigt. Für andere Vorgänge sind möglicherweise andere Berechtigungen erforderlich. Weitere Informationen findest du unter [Erstellen einer GitHub App](/developers/apps/building-github-apps/creating-a-github-app), [Authentifizierung bei GitHub Apps](/developers/apps/building-github-apps/authenticating-with-github-apps) und [Identifizieren und Autorisieren von Benutzern für GitHub Apps](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps).

Wenn du die API in einem {% data variables.product.prodname_actions %}-Workflow verwenden möchtest, empfiehlt {% data variables.product.company_short %}, dass du dich mit dem integrierten `GITHUB_TOKEN` authentifizierst, anstatt ein Token zu erstellen. Du kannst den `GITHUB_TOKEN` mit dem Schlüssel `permissions` Berechtigungen erteilen. Weitere Informationen findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token).

### Beispiel für die Authentifizierung

{% cli %}

Bei der {% data variables.product.prodname_cli %} ist es nicht nötig, im Voraus ein Zugriffstoken zu erstellen. Verwende den Unterbefehl `auth login`, um dich bei der {% data variables.product.prodname_cli %} zu authentifizieren:

```shell
gh auth login
```

Mit dem Flag `--scopes` kannst du angeben, welche Bereiche du festlegen möchtest. Wenn du dich mit einem von dir erstellten Token authentifizieren möchtest, kannst du das Flag `--with-token` verwenden. Weitere Informationen findest du in der Dokumentation zu [{% data variables.product.prodname_cli %} `auth login`](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Warnung**: Behandle dein Zugriffstoken wie ein Kennwort.

Um dein Token zu schützen, kannst du es als Geheimnis speichern und dein Skript über {% data variables.product.prodname_actions %} ausführen. Weitere Informationen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

{% ifversion ghec or fpt %}Du kannst dein Token auch als {% data variables.product.prodname_codespaces %}-Geheimnis speichern und dein Skript in {% data variables.product.prodname_codespaces %} ausführen. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

Wenn diese Optionen nicht verfügbar sind, solltest du einen anderen Dienst wie zum Beispiel die [1Password CLI](https://developer.1password.com/docs/cli/secret-references/) nutzen, um dein Token sicher zu speichern.

{% endwarning %}

Um dich bei der Octokit.js-Bibliothek zu authentifizieren, kannst du dein Token übergeben, wenn du eine Instanz von `Octokit` erstellst. Ersetze `YOUR-TOKEN` durch dein Token.{% ifversion ghes or ghae %} Replace `[hostname]` durch den Namen von {% data variables.location.product_location %}.{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**Warnung**: Behandle dein Zugriffstoken wie ein Kennwort.

Um die Sicherheit deines Kontos zu gewährleisten, kannst du die {% data variables.product.prodname_cli %} anstelle von cURL verwenden. Die {% data variables.product.prodname_cli %} übernimmt die Authentifizierung für dich. Weitere Informationen findest du in der {% data variables.product.prodname_cli %}-Version dieser Seite.

{% ifversion ghec or fpt %}Du kannst dein Token auch als {% data variables.product.prodname_codespaces %}-Geheimnis speichern und die Befehlszeile über {% data variables.product.prodname_codespaces %} verwenden. Weitere Informationen findest du unter [Verwalten verschlüsselter Geheimnisse für deine Codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

Wenn diese Optionen nicht verfügbar sind, solltest du einen anderen Dienst wie zum Beispiel die [1Password CLI](https://developer.1password.com/docs/cli/secret-references/) nutzen, um dein Token sicher zu speichern.

{% endwarning %}

Bei cURL sendest du einen `Authorization`-Header mit deinem Token. Ersetze `YOUR-TOKEN` durch dein Token:

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% note %}

**Hinweis:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### Authentifizierungsbeispiel für {% data variables.product.prodname_actions %}

{% cli %}

Du kannst auch das Schlüsselwort `run` verwenden, um {% data variables.product.prodname_cli %}-Befehle in deinen {% data variables.product.prodname_actions %}-Workflows auszuführen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

Anstatt den Befehl `gh auth login` zu verwenden, übergibst du dein Token als Umgebungsvariable namens `GH_TOKEN`. {% data variables.product.prodname_dotcom %} empfiehlt, dass du dich mit dem integrierten `GITHUB_TOKEN` authentifizierst, anstatt ein Token zu erstellen. Wenn das nicht möglich ist, speichere dein Token als Geheimnis, und ersetze `GITHUB_TOKEN` im folgenden Beispiel durch den Namen deines Geheimnisses. Weitere Informationen zu `GITHUB_TOKEN` findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api /octocat
```

{% endcli %}

{% javascript %}

Du kannst auch das Schlüsselwort `run` verwenden, um deine JavaScript-Skripts in deinen {% data variables.product.prodname_actions %}-Workflows auszuführen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

{% data variables.product.prodname_dotcom %} empfiehlt, dass du dich mit dem integrierten `GITHUB_TOKEN` authentifizierst, anstatt ein Token zu erstellen. Wenn das nicht möglich ist, speichere dein Token als Geheimnis, und ersetze `GITHUB_TOKEN` im folgenden Beispiel durch den Namen deines Geheimnisses. Weitere Informationen zu `GITHUB_TOKEN` findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

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
    permissions: {}
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.17.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          node .github/actions-scripts/use-the-api.mjs
```

JavaScript-Beispielskript mit dem Dateipfad `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

Anstatt dein Skript in einer separaten Datei zu speichern und das Skript von deinem Workflow aus auszuführen, kannst du die `actions/github-script`-Aktion verwenden, um ein Skript auszuführen. Weitere Informationen findest du in der [actions/github-Infodatei](https://github.com/actions/github-script).

```yaml
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            await github.request('GET /octocat', {})
```

{% endjavascript %}

{% curl %}

Du kannst auch das Schlüsselwort `run` verwenden, um cURL-Befehle in deinen {% data variables.product.prodname_actions %}-Workflows auszuführen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

{% data variables.product.prodname_dotcom %} empfiehlt, dass du dich mit dem integrierten `GITHUB_TOKEN` authentifizierst, anstatt ein Token zu erstellen. Wenn das nicht möglich ist, speichere dein Token als Geheimnis, und ersetze `GITHUB_TOKEN` im folgenden Beispiel durch den Namen deines Geheimnisses. Weitere Informationen zu `GITHUB_TOKEN` findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication). Weitere Informationen zu Geheimnissen findest du unter [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/octocat" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Verwenden von Headern

Die meisten Vorgänge schreiben vor, dass du einen `Accept`-Header mit dem Wert `application/vnd.github+json` übergeben musst. Bei anderen Vorgängen musst du möglicherweise einen anderen `Accept`-Header oder zusätzliche Header senden.

{% cli %}

Um einen Header mit der {% data variables.product.prodname_cli %} zu senden, verwende das Flag `--header` oder `-H`, gefolgt von dem Header im Format `key: value`.

```shell
gh api --header 'Accept: application/vnd.github+json'{% ifversion api-date-versioning %} --header 'X-GitHub-Api-Version:{{ allVersions[currentVersion].latestApiVersion }}'{% endif %} --method GET /octocat
```

{% endcli %}

{% javascript %}

Die Octokit.js-Bibliothek übergibt automatisch den `Accept: application/vnd.github+json`-Header. Um zusätzliche Header oder einen anderen `Accept`-Header zu übergeben, füge dem Objekt eine `headers`-Eigenschaft hinzu, die als zweites Argument an die `request`-Methode übergeben wird. Der Wert der Eigenschaft `headers` ist ein Objekt mit den Headernamen als Schlüssel und den Headerwerten als Werte. Es folgt ein Beispiel zum Senden eines `content-type`-Headers mit dem Wert `text/plain`:

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",{% ifversion api-date-versioning %}
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",{% endif %}
  },
});
```

{% endjavascript %}

{% curl %}

Um einen Header mit cURL zu senden, verwende das Flag `--header` oder `-H`, gefolgt von dem Header im Format `key: value`.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"{% ifversion api-date-versioning %}\
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
```

{% endcurl %}

## Verwenden von Pfadparametern

Pfadparameter ändern den Vorgangspfad. Der Pfad zum Auflisten von Issues für ein Repository lautet beispielsweise `/repos/{owner}/{repo}/issues`. Die geschweiften Klammern `{}` bezeichnen Pfadparameter, die du angeben musst. In diesem Fall musst du den Besitzer und den Namen des Repositorys angeben. Die Referenzdokumentation für diesen Vorgang findest du unter [Auflisten von Issues für ein Repository](/rest/issues/issues#list-repository-issues).

{% cli %}

{% ifversion ghes or ghae %} {% note %}

**Hinweis:** Damit dieser Befehl für {% data variables.location.product_location %} funktioniert, musst du `octocat/Spoon-Knife` durch ein Repository im Besitz von {% data variables.location.product_location %} ersetzen. Andernfalls musst du den Befehl `gh auth login` erneut ausführen, um dich bei {% data variables.product.prodname_dotcom_the_website %} statt {% data variables.location.product_location %} zu authentifizieren.

{% endnote %} {% endif %}

Um Issues aus dem `octocat/Spoon-Knife` Repository abzurufen, ersetze `{owner}` durch `octocat` und `{repo}` durch `Spoon-Knife`.

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %} {% note %}

**Hinweis:** Damit dieses Beispiel für {% data variables.location.product_location %} funktioniert, musst du `octocat/Spoon-Knife` durch ein Repository im Besitz von {% data variables.location.product_location %} ersetzen. Andernfalls erstellst du eine neue `Octokit`-Instanz und gibst `baseURL` nicht an.

{% endnote %} {% endif %}

Wenn du eine Anforderung mit Octokit.js stellst, werden alle Parameter (einschließlich der Pfadparameter) in einem Objekt als zweites Argument an die Methode `request` übergeben. Um Issues aus dem `octocat/Spoon-Knife` Repository abzurufen, gib `owner` als `octocat` und `repo` als `Spoon-Knife` an.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

Um Issues aus dem `octocat/Spoon-Knife` Repository abzurufen, ersetze `{owner}` durch `octocat` und `{repo}` durch `Spoon-Knife`. Um den vollständigen Pfad zu erhalten, füge die Basis-URL für die {% data variables.product.prodname_dotcom %}-REST-API am Pfadanfang ein, `https://api.github.com`: `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

{% ifversion ghes or ghae %} {% note %}

**Hinweis:** Wenn du {% data variables.location.product_location %} anstelle von {% data variables.product.prodname_dotcom_the_website %} verwenden möchtest, musst du `{% data variables.product.api_url_code %}` anstelle von `https://api.github.com` verwenden und `[hostname]` durch den Namen von {% data variables.location.product_location %} ersetzen. Ersetze `octocat/Spoon-Knife` durch ein Repository im Besitz von {% data variables.location.product_location %}.

{% endnote %} {% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

Der Vorgang liefert eine Liste der Issues sowie Daten zu jedem Issue. Weitere Informationen zur Verwendung der Antwort findest du im Abschnitt [Verwenden der Antwort](#using-the-response).

## Verwenden von Abfrageparametern

Mithilfe von Abfrageparametern kannst du steuern, welche Daten für eine Anforderung zurückgegeben werden. Mit einem Abfrageparameter kannst du zum Beispiel angeben, wie viele Elemente zurückgegeben werden, wenn die Antwort paginiert wird.

Standardmäßig gibt der Vorgang zum Auflisten von Issues für das Repository dreißig Issues zurück, die in absteigender Reihenfolge nach dem Erstellungsdatum sortiert sind. Du kannst mit dem Parameter `per_page` angeben, dass anstelle von 30 Issues zwei Issues zurückgegeben werden. Mit dem Parameter `sort` kannst du die Issues nach dem Datum der letzten Aktualisierung sortieren, anstatt nach dem Erstellungsdatum. Du kannst den Parameter `direction` verwenden, um die Ergebnisse in aufsteigender statt in absteigender Reihenfolge zu sortieren.

{% cli %}

Verwende für die {% data variables.product.prodname_cli %} das Flag `-F`, um einen Parameter zu übergeben, bei dem es sich um eine Zahl, einen booleschen Wert oder NULL handelt. Verwende `-f`, um Zeichenfolgenparameter zu übergeben.

{% note %}

**Hinweis**: Die {% data variables.product.prodname_cli %} akzeptiert derzeit keine Parameter, bei denen es sich um Arrays handelt. Weitere Informationen findest du in [diesem Issue](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

Wenn du eine Anforderung mit Octokit.js stellst, werden alle Parameter (einschließlich der Abfrageparameter) in einem Objekt als zweites Argument an die Methode `request` übergeben.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
  sort: "updated",
  direction: "asc",
});
```

{% endjavascript %}

{% curl %}

Für cURL fügst du ein `?` am Pfadende ein und hängst dann den Namen und den Wert deines Abfrageparameters in der Form `parameter_name=value` an. Trenne mehrere Abfrageparameter durch `&`.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

Der Vorgang liefert eine Liste der Issues sowie Daten zu jedem Issue. Weitere Informationen zur Verwendung der Antwort findest du im Abschnitt [Verwenden der Antwort](#using-the-response).

## Verwenden von Textparametern

Textparameter ermöglichen es dir, zusätzliche Daten an die API zu übergeben. Beim Vorgang zum Erstellen eines Issues musst du zum Beispiel einen Titel für das neue Issue angeben. Hier kannst du außerdem weitere Informationen angeben, z. B. den Text, der in den Textteil des Issues aufgenommen werden soll. Die vollständige Referenzdokumentation für diesen Vorgang findest du unter [Erstellen eines Issues](/rest/issues/issues#create-an-issue).

Der Vorgang zum Erstellen eines Issues verwendet denselben Pfad wie der in den obigen Beispielen gezeigte Vorgang zum Auflisten von Issues im Repository, aber er verwendet anstelle der `GET`-Methode eine `POST`-Methode.

{% cli %}

Verwende für die {% data variables.product.prodname_cli %} das Flag `-F`, um einen Parameter zu übergeben, bei dem es sich um eine Zahl, einen booleschen Wert oder NULL handelt. Verwende `-f`, um Zeichenfolgenparameter zu übergeben.

{% note %}

**Hinweis**: Die {% data variables.product.prodname_cli %} akzeptiert derzeit keine Parameter, bei denen es sich um Arrays handelt. Weitere Informationen findest du in [diesem Issue](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

{% ifversion pat-v2 %}

{% note %}

Wenn du ein {% data variables.product.pat_v2 %}, verwendest, musst du `octocat/Spoon-Knife` durch ein Repository ersetzen, das sich in deinem Besitz oder im Besitz einer Organisation befindet, der du angehörst. Dein Token muss Zugriff auf dieses Repository haben und über Lese- und Schreibberechtigungen für Issues im Repository verfügen. Weitere Informationen zum Erstellen eines Repositorys findest du unter [Erstellen eines Repositorys](/get-started/quickstart/create-a-repo). Weitere Informationen zum Erteilen von Zugriff und Berechtigungen für ein {% data variables.product.pat_v2 %} findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% endnote %}

{% endif %}

Wenn du eine Anforderung mit „Octokit.js“ stellst, werden alle Parameter (einschließlich der Textparameter) in einem Objekt als zweites Argument an die Methode `request` übergeben.

```javascript
await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  title: "Created with the REST API",
  body: "This is a test issue created by the REST API",
});
```

{% endjavascript %}

{% curl %}

{% ifversion pat-v2 %}

{% note %}

Wenn du ein {% data variables.product.pat_v2 %}, verwendest, musst du `octocat/Spoon-Knife` durch ein Repository ersetzen, das sich in deinem Besitz oder im Besitz einer Organisation befindet, der du angehörst. Dein Token muss Zugriff auf dieses Repository haben und über Lese- und Schreibberechtigungen für Issues im Repository verfügen. Weitere Informationen zum Erstellen eines Repositorys findest du unter [Erstellen eines Repositorys](/get-started/quickstart/create-a-repo). Weitere Informationen zum Erteilen von Zugriff und Berechtigungen für ein {% data variables.product.pat_v2 %} findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% endnote %}

{% endif %}

Bei cURL verwendest du das Flag `--data`, um die Textparameter in einem JSON-Objekt zu übergeben.

```shell
curl --request POST \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

{% endcurl %}

Der Vorgang erstellt ein Issue und gibt Daten zu dem neuen Issue zurück. Suche in der Antwort nach der `html_url` deines Issues, und navigiere im Browser zu deinem Issue. Weitere Informationen zur Verwendung der Antwort findest du im Abschnitt [Verwenden der Antwort](#using-the-response).

## Verwenden der Antwort

### Informationen zu Antwortcodes und Headern

Jede Anforderung gibt einen HTTP-Statuscode zurück, der den Erfolgsstatus der Antwort anzeigt. Weitere Informationen zu Antwortcodes findest du in der [MDN-Dokumentation zu HTTP-Antwortstatuscodes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Außerdem enthält die Antwort Header, die weitere Informationen zur Antwort liefern. Header, die mit `X-` oder `x-` beginnen, gelten speziell für {% data variables.product.company_short %}. Die Header `x-ratelimit-remaining` und `x-ratelimit-reset` informieren dich zum Beispiel darüber, wie viele Anforderungen du in einem bestimmten Zeitraum ausführen kannst.

{% cli %}

Um den Statuscode und die Header anzuzeigen, verwende beim Senden deiner Anforderung das Flag `--include` oder `--i`.

Betrachte beispielsweise die folgende Anforderung:

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

Sie gibt den Antwortcode und Header wie folgt zurück:

```shell
HTTP/2.0 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
Cache-Control: private, max-age=60, s-maxage=60
Content-Security-Policy: default-src 'none'
Content-Type: application/json; charset=utf-8
Date: Thu, 04 Aug 2022 19:56:41 GMT
Etag: W/"a63dfbcfdb73621e9d2e89551edcf9856731ced534bd7f1e114a5da1f5f73418"
Link: <https://api.github.com/repositories/1300192/issues?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=1&page=14817>; rel="last"
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Server: GitHub.com
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Vary: Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With
X-Accepted-Oauth-Scopes: repo
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-Github-Api-Version-Selected: 2022-08-09
X-Github-Media-Type: github.v3; format=json
X-Github-Request-Id: 1C73:26D4:E2E500:1EF78F4:62EC2479
X-Oauth-Client-Id: 178c6fc778ccc68e1d6a
X-Oauth-Scopes: gist, read:org, repo, workflow
X-Ratelimit-Limit: 15000
X-Ratelimit-Remaining: 14996
X-Ratelimit-Reset: 1659645499
X-Ratelimit-Resource: core
X-Ratelimit-Used: 4
X-Xss-Protection: 0
```

In diesem Beispiel lautet der Antwortcode `200`, d. h. die Anforderung war erfolgreich.

{% endcli %}

{% javascript %}

Wenn du eine Anforderung mit „Octokit.js“ ausführst, gibt die Methode `request` eine Zusage zurück. Wenn die Anforderung erfolgreich war, wird die Zusage in ein Objekt aufgelöst, das den HTTP-Statuscode der Antwort (`status`) und die Antwortheader (`headers`) enthält. Wenn ein Fehler auftritt, wird die Zusage in ein Objekt aufgelöst, das den HTTP-Statuscode der Antwort (`status`) und die Antwortheader (`response.headers`) enthält.

Du kannst einen `try/catch`-Block verwenden, um einen eventuell auftretenden Fehler abzufangen. Wenn die Anforderung im folgenden Skript beispielsweise erfolgreich ist, protokolliert das Skript den Statuscode und den Wert des `x-ratelimit-remaining`-Headers. War die Anforderung nicht erfolgreich, protokolliert das Skript den Statuscode, den Wert des `x-ratelimit-remaining`-Headers und die Fehlermeldung.

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

Um den Statuscode und die Header anzuzeigen, verwende beim Senden deiner Anforderung das Flag `--include` oder `--i`.

Betrachte beispielsweise die folgende Anforderung:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```

Sie gibt den Antwortcode und Header wie folgt zurück:

```shell
HTTP/2 200
server: GitHub.com
date: Thu, 04 Aug 2022 20:07:51 GMT
content-type: application/json; charset=utf-8
cache-control: public, max-age=60, s-maxage=60
vary: Accept, Accept-Encoding, Accept, X-Requested-With
etag: W/"7fceb7e8c958d3ec4d02524b042578dcc7b282192e6c939070f4a70390962e18"
x-github-media-type: github.v3; format=json
link: <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=7409>; rel="last"
access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
access-control-allow-origin: *
strict-transport-security: max-age=31536000; includeSubdomains; preload
x-frame-options: deny
x-content-type-options: nosniff
x-xss-protection: 0
referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
content-security-policy: default-src 'none'
x-ratelimit-limit: 15000
x-ratelimit-remaining: 14996
x-ratelimit-reset: 1659645535
x-ratelimit-resource: core
x-ratelimit-used: 4
accept-ranges: bytes
content-length: 4936
x-github-request-id: 14E0:4BC6:F1B8BA:208E317:62EC2715
```

In diesem Beispiel lautet der Antwortcode `200`, d. h. die Anforderung war erfolgreich.

{% endcurl %}

### Informationen zum Antworttext

Bei vielen Vorgängen wird ein Antworttext zurückgegeben. Sofern nicht anders angegeben, verwendet der Antworttext das JSON-Format. Diese Anforderung liefert zum Beispiel eine Liste von Issues mit Daten zu jedem Issue:

{% cli %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2
```

{% endcli %}

{% javascript %}

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
});
```

{% endjavascript %}

{% curl %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

Im Gegensatz zur GraphQL-API, bei der du die gewünschten Informationen angibst, liefert die REST-API in der Regel mehr Informationen als du benötigst. Falls gewünscht, kannst du die Antwort analysieren, um bestimmte Informationen herauszufiltern.

{% cli %}

Du kannst zum Beispiel `>` verwenden, um die Antwort in eine Datei umzuleiten:

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

Dann kannst mit jq den Titel und die Autoren-ID für jedes Issue abrufen:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Die beiden vorherigen Befehle liefern eine Ausgabe ähnlich der folgenden:

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

Weitere Informationen zu jq findest du in der [jq-Dokumentation](https://stedolan.github.io/jq/) und unter [jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

Du kannst zum Beispiel den Titel und die Autoren-ID für jedes Issue abrufen:

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

Du kannst zum Beispiel `>` verwenden, um die Antwort in eine Datei umzuleiten:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

Dann kannst mit jq den Titel und die Autoren-ID für jedes Issue abrufen:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Die beiden vorherigen Befehle liefern eine Ausgabe ähnlich der folgenden:

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

Weitere Informationen zu jq findest du in der [jq-Dokumentation](https://stedolan.github.io/jq/) und unter [jq play](https://jqplay.org/).

{% endcurl %}

## Nächste Schritte

In diesem Artikel wurde gezeigt, wie du Issues in einem Repository auflisten und erstellen kannst. Um mehr Übung zu bekommen, kannst du versuchen, ein Issue zu kommentieren, den Titel eines Issue zu bearbeiten oder ein Issue zu schließen. Weitere Informationen zu diesen Vorgängen findest du unter [Erstellen eines Kommentars zu einem Issue](/rest/issues#create-an-issue-comment) und [Aktualisieren eines Issues](/rest/issues/issues#update-an-issue).

Weitere Informationen zu den Vorgängen, die du verwenden kannst, findest du in der [REST-Referenzdokumentation](/rest).
