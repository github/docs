---
title: Docker-Images veröffentlichen
intro: 'Du kannst Docker-Images im Rahmen Deines Workflows zur kontinuierlichen Integration (CI) in einer Registry wie zum Beispiel „Docker Hub“ oder {% data variables.product.prodname_registry %} veröffentlichen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

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
- "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"

### Informationen zur Image-Konfiguration

In dieser Anleitung wird davon ausgegangen, dass Du eine vollständige Definition für ein Docker-Image in einem {% data variables.product.prodname_dotcom %}-Repository gespeichert hast. Dein Projektarchiv muss beispielsweise eine _Dockerdatei_ und alle anderen Dateien enthalten, die benötigt werden, um einen Docker-Build zum Erstellen eines Images durchzuführen.

In dieser Anleitung wir werden die Docker-Aktion `build-push-action` verwenden, um das Docker-Image zu bauen und es auf eine oder mehrere Docker-Registries zu übertragen. Weitere Informationen findest Du unter [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

### Images auf dem „Docker Hub“ veröffentlichen

{% data reusables.github-actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `login-action` and `build-push-action` actions to build the Docker image and, if the build succeeds, push the built image to Docker Hub.

Um zum „Docker Hub“ zu pushen, benötigst Du ein Benutzerkonto auf „Docker Hub“ und musst ein „Docker Hub“-Repository erstellt haben. For more information, see "[Pushing a Docker container image to Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" in the Docker documentation.

The `login-action` options required for Docker Hub are:

* `username` und `password`: Dies ist Dein Benutzername und Passwort auf „Docker Hub“. We recommend storing your Docker Hub username and password as secrets so they aren't exposed in your workflow file. Weitere Informationen findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

„Docker Hub“ benötigt für `build-push-action` die folgenden Optionen:
* `tags`: The tag of your new image in the format `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. You can set a single tag as shown below, or specify multiple tags in a list.
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.

{% raw %}
```yaml{:copy}
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
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Push to Docker Hub
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-docker-hub-namespace/my-docker-hub-repository:latest
```
{% endraw %}

{% data reusables.github-actions.docker-tag-with-ref %}

### Images in {% data variables.product.prodname_registry %} veröffentlichen

{% data reusables.github-actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `login-action` and `build-push-action` actions to build the Docker image, and if the build succeeds, push the built image to {% data variables.product.prodname_registry %}.

The `login-action` options required for {% data variables.product.prodname_registry %} are:
* `registry`: Muss auf `docker.pkg.github.com` gesetzt werden.
* `username`: Du kannst mithilfe des Kontexts von {% raw %}`${{ github.actor }}`{% endraw %} automatisch den Benutzernamen des Benutzers zu verwenden, der die Workflow-Ausführung angestoßen hat. Weitere Informationen findest Du unter „[Kontext- und Ausdrucks-Syntax für GitHub-Aktionen](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)“.
* `password`: Du kannst das automatisch generierte Geheimnis `GITHUB_TOKEN` als Passwort verwenden. Weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

Die für {% data variables.product.prodname_registry %} erforderlichen `build-push-action`-Optionen sind:
* `tags`: Must be set in the format `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`. For example, for an image named `octo-image` stored on {% data variables.product.prodname_dotcom %} at `http://github.com/octo-org/octo-repo`, the `tags` option should be set to `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`. You can set a single tag as shown below, or specify multiple tags in a list.
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.

```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@v1
        with:
          registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Build container image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: |
            {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.ref }}{% endraw %}
```

{% data reusables.github-actions.docker-tag-with-ref %}

### Images auf dem „Docker Hub“ und in der {% data variables.product.prodname_registry %} veröffentlichen

In a single workflow, you can publish your Docker image to multiple registries by using the `login-action` and `build-push-action` actions for each registry.

The following example workflow uses the steps from the previous sections ("[Publishing images to Docker Hub](#publishing-images-to-docker-hub)" and "[Publishing images to {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") to create a single workflow that pushes to both registries.

```yaml{:copy}
name: Publish Docker image
on:
  release:
    types: [published]
jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2
      - name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@v1
        with:
          registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      - name: Push to Docker Hub
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: my-docker-hub-namespace/my-docker-hub-repository:{% raw %}${{ github.ref }}{% endraw %}
      - name: Build container image
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/my-image:${{ github.ref }}{% endraw %}
```

The above workflow checks out the {% data variables.product.prodname_dotcom %} repository, uses the `login-action` twice to log in to both registries, and then uses the `build-push-action` action twice to build and push the Docker image to Docker Hub and {% data variables.product.prodname_registry %}. For both steps, it tags the built Docker image with the Git reference of the workflow event. Dieser Workflow wird bei der Veröffentlichung eines {% data variables.product.prodname_dotcom %}-Releases ausgelöst, so dass die Referenz für beide Registries das Git-Tag des Releases ist.
