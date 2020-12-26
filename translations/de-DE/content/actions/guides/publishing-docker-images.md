---
title: Docker-Images veröffentlichen
intro: 'Du kannst Docker-Images im Rahmen Deines Workflows zur kontinuierlichen Integration (CI) in einer Registry wie zum Beispiel „Docker Hub“ oder {% data variables.product.prodname_registry %} veröffentlichen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

Diese Anleitung zeigt Dir, wie Du einen Workflow erstellen kannst, der einen Docker-Build ausführt und dann Docker-Images auf „Docker Hub“ oder {% data variables.product.prodname_registry %} veröffentlicht. Mit einem einzelnen Workflow kannst Du Images in einer einzigen Registry oder in mehreren Registries veröffentlichen.

{% note %}

**Hinweis:** Wenn Du auf eine andere Docker-Registriery eines Drittanbieters pushen möchtest, kann das Beispiel im Abschnitt [Veröffentlichen von Images auf {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" als gute Vorlage dienen.

{% endnote %}

### Vorrausetzungen

Wir empfehlen, dass Du ein grundlegendes Verständnis von Workflowkonfigurations-Optionen hast und darüber, wie Du eine Workflow-Datei erstellst. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Vielleicht findest Du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"
- „[Docker für den Einsatz mit {% data variables.product.prodname_registry %} konfigurieren](/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)“

### Informationen zur Image-Konfiguration

In dieser Anleitung wird davon ausgegangen, dass Du eine vollständige Definition für ein Docker-Image in einem {% data variables.product.prodname_dotcom %}-Repository gespeichert hast. Dein Projektarchiv muss beispielsweise eine _Dockerdatei_ und alle anderen Dateien enthalten, die benötigt werden, um einen Docker-Build zum Erstellen eines Images durchzuführen.

In dieser Anleitung wir werden die Docker-Aktion `build-push-action` verwenden, um das Docker-Image zu bauen und es auf eine oder mehrere Docker-Registries zu übertragen. Weitere Informationen findest Du unter [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

### Images auf dem „Docker Hub“ veröffentlichen

{% data reusables.github-actions.release-trigger-workflow %}

Im folgenden Beispiel-Workflow verwenden wir die Docker-Aktion `build-push-action`, um das Docker-Image zu bauen und, wenn der Build erfolgreich ist, das gebaute Image auf „Docker Hub“ zu übertragen.

Um zum „Docker Hub“ zu pushen, benötigst Du ein Benutzerkonto auf „Docker Hub“ und musst ein „Docker Hub“-Repository erstellt haben. Weitere Informationen findest Du unter „[Images auf ‚Docker Hub‘ freigeben](https://docs.docker.com/get-started/part3/)“ in der Docker-Dokumentation.

„Docker Hub“ benötigt für `build-push-action` die folgenden Optionen:

* `username` und `password`: Dies ist Dein Benutzername und Passwort auf „Docker Hub“. We recommend storing your Docker Hub username and password as encrypted secrets in your {% data variables.product.prodname_dotcom %} repository so they aren't exposed in your workflow file. Weitere Informationen findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.
* `repository`: Dein „Docker Hub“-Repository im Format `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY`.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Images in {% data variables.product.prodname_registry %} veröffentlichen

{% data reusables.github-actions.release-trigger-workflow %}

Im folgenden Beispiel-Workflow verwenden wir die Docker-Aktion `build-push-action`, um das Docker-Image zu bauen und, wenn der Build erfolgreich ist, das gebaute Image nach {% data variables.product.prodname_registry %} zu übertragen.

Die für {% data variables.product.prodname_registry %} erforderlichen `build-push-action`-Optionen sind:

* `username`: Du kannst mithilfe des Kontexts von {% raw %}`${{ github.actor }}`{% endraw %} automatisch den Benutzernamen des Benutzers zu verwenden, der die Workflow-Ausführung angestoßen hat. Weitere Informationen findest Du unter „[Kontext- und Ausdrucks-Syntax für GitHub-Aktionen](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)“.
* `password`: Du kannst das automatisch generierte Geheimnis `GITHUB_TOKEN` als Passwort verwenden. Weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".
* `registry`: Muss auf `docker.pkg.github.com` gesetzt werden.
* `repository`: Muss im Format `OWNER/REPOSITORY/IMAGE_NAME` gesetzt werden. Beispiel: Für ein Bild namens `octo-image` auf {% data variables.product.prodname_dotcom %} unter `http://github. om/octo-org/octo-repo` sollte die Option `repository` auf `octo-org/octo-repo/octo-image` gesetzt werden.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true

```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Images auf dem „Docker Hub“ und in der {% data variables.product.prodname_registry %} veröffentlichen

In einem einzigen Workflow kannst Du Dein Docker-Image in mehreren Registries veröffentlichen, indem Du die Aktion `build-push-action` auf jede Registry anwendest.

Der folgende Beispiel-Workflow verwendet die Schritte der `build-push-action` aus den vorherigen Abschnitten („[Veröffentlichung von Bildern auf ‚Docker Hub‘](#publishing-images-to-docker-hub)“ und „[Veröffentlichung von Bildern in {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)“), um einen einzigen Workflow zu erstellen, der in beide Registries pusht.

{% raw %}
```yaml
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Push to Docker Hub
        uses: docker/build-push-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
          repository: my-docker-hub-namespace/my-docker-hub-repository
          tag_with_ref: true
      - name: Push to GitHub Packages
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: docker.pkg.github.com
          repository: my-org/my-repo/my-image
          tag_with_ref: true
```
{% endraw %}

Der obige Workflow checkt das {% data variables.product.prodname_dotcom %}-Repository aus und verwendet die Aktion `build-push-action` zweimal, um das Docker-Image zu erstellen und sowohl auf den „Docker Hub“ als auch in die {% data variables.product.prodname_registry %} zu übertragen. Für beide Schritte, setzt er die Option `build-push-action` auf [`tag_with_ref`](https://github.com/marketplace/actions/build-and-push-docker-images#tag_with_ref) um das gebaute Docker-Image automatisch mit der Git-Referenz des Workflow-Ereignisses zu kennzeichnen. Dieser Workflow wird bei der Veröffentlichung eines {% data variables.product.prodname_dotcom %}-Releases ausgelöst, so dass die Referenz für beide Registries das Git-Tag des Releases ist.
