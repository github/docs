---
title: Authentifizieren mit dem „GITHUB_TOKEN“
intro: '{% data variables.product.prodname_dotcom %} stellt ein Token zur Verfügung, mit dem Du Dich im Namen von {% data variables.product.prodname_actions %} authentifizieren kannst.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Jeder mit `write`(schreiben)-Zugriff auf ein Repository kann Geheimnisse erstellen, lesen und verwenden.

### Informationen zum `GITHUB_TOKEN`-Geheimnis

{% data variables.product.prodname_dotcom %} erstellt automatisch ein `GITHUB_TOKEN`-Geheimnis für Deinen Workflow. Du kannst den `GITHUB_TOKEN` verwenden, um Dich in einem Workflow zu authentifizieren.

Wenn Du {% data variables.product.prodname_actions %} aktivierst, installiert {% data variables.product.prodname_dotcom %} eine {% data variables.product.prodname_github_app %} in Deinem Repository. Das `GITHUB_TOKEN`-Geheimnis ist ein {% data variables.product.prodname_github_app %}-Token für Installations-Zugriff. Du kannst das Installationszugriffs-Token verwenden, um Dich im Namen der auf Deinem Repository installierten {% data variables.product.prodname_github_app %} zu authentifizieren. Die Berechtigungen des Tokens sind auf das Repository beschränkt, in dem sich der Workflow befindet. Weitere Informationen findest Du unter "[Berechtigungen für das `GITHUB_TOKEN`](#permissions-for-the-github_token)."

Bevor jeder Auftrag beginnt, ruft {% data variables.product.prodname_dotcom %} ein Installationszugriffstoken für den Auftrag ab. Das Token läuft ab, wenn der Auftrag abgeschlossen ist.

Das Token ist auch im `github.token`-Kontext verfügbar. Weitere Informationen findest Du unter "[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

### Das `GITHUB_TOKEN` in einem Workflow verwenden

Um das `GITHUB_TOKEN`-Geheimnis zu verwenden, musst Du es in Deiner Workflow-Datei referenzieren. Hierbei musst Du das Token ggf. als Eingabe für eine Aktion übergeben, für die dieses Token erforderlich ist, oder authentifizierte Aufrufe der {% data variables.product.prodname_dotcom %}-API ausführen.

{% data reusables.github-actions.actions-do-not-trigger-workflows %}

#### Beispiel: Das `GITHUB_TOKEN` als Eingabe übergeben

Dieser Beispielworkflow verwendet die [Labeler-Aktion](https://github.com/actions/labeler), wofür das `GITHUB_TOKEN` als Wert für den Eingabeparameter `repo-token` benötigt wird:

  {% raw %}
  ```yaml
  name: Pull request labeler
  on:
  - pull_request
  jobs:
    triage:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/labeler@v2
        with:
          repo-token: ${{ secrets.GITHUB_TOKEN }}
  ```
  {% endraw %}

#### Beispiel zum Aufrufen der REST-API

Du kannst das `GITHUB_TOKEN` verwenden, um authentifizierte API-Aufrufe durchzuführen. Dieser Beispiel-Workflow erzeugt eine Lieferung („issue“) mittels der {% data variables.product.prodname_dotcom %}-REST-API:

  {% raw %}
  ```yaml
  name: Create issue on commit
  on:
  - push
  jobs:
    create_commit:
      runs-on: ubuntu-latest
      steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url https://api.github.com/repos/${{ github.repository }}/issues \
          --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${{ github.sha }}",
            "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n Der Commit-Hash lautete: _'{{ github.sha }}_."
            }'
  ```
  {% endraw %}

### Berechtigungen für das `GITHUB_TOKEN`

Informationen zu den API-Endpunkten, auf die {% data variables.product.prodname_github_apps %} mit jeder Berechtigung zugreifen können, finden Sie unter "[{% data variables.product.prodname_github_app %} Berechtigungen](/v3/apps/permissions/)".

| Berechtigung             | Zugriffstyp     | Zugriff durch geforktes Repository |
| ------------------------ | --------------- | ---------------------------------- |
| actions                  | Lesen/Schreiben | Lesen                              |
| checks (Prüfungen)       | Lesen/Schreiben | Lesen                              |
| contents (Inhalte)       | Lesen/Schreiben | Lesen                              |
| deployments              | Lesen/Schreiben | Lesen                              |
| Issues (Lieferungen)     | Lesen/Schreiben | Lesen                              |
| Metadaten                | Lesen           | Lesen                              |
| Pakete                   | Lesen/Schreiben | Lesen                              |
| pull requests            | Lesen/Schreiben | Lesen                              |
| repository projects      | Lesen/Schreiben | Lesen                              |
| statuses (Statusangaben) | Lesen/Schreiben | Lesen                              |

Wenn Du ein Token benötigst, für das Berechtigungen erforderlich sind, die nicht im `GITHUB_TOKEN`-Geheimnis vorhanden sind, kannst Du ein persönliches Zugangstoken erstellen und als Geheimnis im Repository festlegen:

1. Verwende oder erstelle ein Token mit den entsprechenden Berechtigungen für dieses Repository. Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."
1. Füge das Token als Geheimnis in das Repository Deines Workflows ein, und verweise darauf mit der Syntax {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Weitere Informationen findest Du unter "[Verschlüsselte Geheimnisse erstellen und verwenden](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".
