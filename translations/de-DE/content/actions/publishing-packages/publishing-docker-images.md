---
title: Docker-Images veröffentlichen
intro: 'Du kannst Docker-Images im Rahmen Deines Workflows zur kontinuierlichen Integration (CI) in einer Registry wie zum Beispiel „Docker Hub“ oder {% data variables.product.prodname_registry %} veröffentlichen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
  - /actions/guides/publishing-docker-images
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Einführung

Diese Anleitung zeigt Dir, wie Du einen Workflow erstellen kannst, der einen Docker-Build ausführt und dann Docker-Images auf „Docker Hub“ oder {% data variables.product.prodname_registry %} veröffentlicht. Mit einem einzelnen Workflow kannst Du Images in einer einzigen Registry oder in mehreren Registries veröffentlichen.

{% note %}

**Hinweis:** Wenn Du auf eine andere Docker-Registriery eines Drittanbieters pushen möchtest, kann das Beispiel im Abschnitt [Veröffentlichen von Images auf {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)" als gute Vorlage dienen.

{% endnote %}

## Vorrausetzungen

Wir empfehlen, dass Du ein grundlegendes Verständnis von Workflowkonfigurations-Optionen hast und darüber, wie Du eine Workflow-Datei erstellst. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Vielleicht findest Du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"{% ifversion fpt %}
- "[Working with the {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)"{% else %}
- "[Working with the Docker registry](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry)"{% endif %}

## Informationen zur Image-Konfiguration

In dieser Anleitung wird davon ausgegangen, dass Du eine vollständige Definition für ein Docker-Image in einem {% data variables.product.prodname_dotcom %}-Repository gespeichert hast. Dein Projektarchiv muss beispielsweise eine _Dockerdatei_ und alle anderen Dateien enthalten, die benötigt werden, um einen Docker-Build zum Erstellen eines Images durchzuführen.

In dieser Anleitung wir werden die Docker-Aktion `build-push-action` verwenden, um das Docker-Image zu bauen und es auf eine oder mehrere Docker-Registries zu übertragen. Weitere Informationen findest Du unter [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Images auf dem „Docker Hub“ veröffentlichen

{% data reusables.github-actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `login-action` and `build-push-action` actions to build the Docker image and, if the build succeeds, push the built image to Docker Hub.

Um zum „Docker Hub“ zu pushen, benötigst Du ein Benutzerkonto auf „Docker Hub“ und musst ein „Docker Hub“-Repository erstellt haben. For more information, see "[Pushing a Docker container image to Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub)" in the Docker documentation.

The `login-action` options required for Docker Hub are:
* `username` und `password`: Dies ist Dein Benutzername und Passwort auf „Docker Hub“. We recommend storing your Docker Hub username and password as secrets so they aren't exposed in your workflow file. Weitere Informationen findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

The `metadata-action` option required for Docker Hub is:
* `images`: The namespace and name for the Docker image you are building/pushing to Docker Hub.

„Docker Hub“ benötigt für `build-push-action` die folgenden Optionen:
* `tags`: The tag of your new image in the format `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. You can set a single tag as shown below, or specify multiple tags in a list.
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: my-docker-hub-namespace/my-docker-hub-repository

      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

The above workflow checks out the {% data variables.product.prodname_dotcom %} repository, uses the `login-action` to log in to the registry, and then uses the `build-push-action` action to: build a Docker image based on your repository's `Dockerfile`; push the image to Docker Hub, and apply a tag to the image.

## Images in {% data variables.product.prodname_registry %} veröffentlichen

{% data reusables.github-actions.release-trigger-workflow %}

In the example workflow below, we use the Docker `login-action`{% ifversion fpt %}, `metadata-action`,{% endif %} and `build-push-action` actions to build the Docker image, and if the build succeeds, push the built image to {% data variables.product.prodname_registry %}.

The `login-action` options required for {% data variables.product.prodname_registry %} are:
* `registry`: Must be set to {% ifversion fpt %}`ghcr.io`{% else %}`docker.pkg.github.com`{% endif %}.
* `username`: Du kannst mithilfe des Kontexts von {% raw %}`${{ github.actor }}`{% endraw %} automatisch den Benutzernamen des Benutzers zu verwenden, der die Workflow-Ausführung angestoßen hat. Weitere Informationen finden Sie unter „[Kontexte](/actions/learn-github-actions/contexts#github-context)“.
* `password`: Du kannst das automatisch generierte Geheimnis `GITHUB_TOKEN` als Passwort verwenden. Weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".

{% ifversion fpt %}
The `metadata-action` option required for {% data variables.product.prodname_registry %} is:
* `images`: The namespace and name for the Docker image you are building.
{% endif %}

The `build-push-action` options required for {% data variables.product.prodname_registry %} are:{% ifversion fpt %}
* `context`: Defines the build's context as the set of files located in the specified path.{% endif %}
* `push`: If set to `true`, the image will be pushed to the registry if it is built successfully.{% ifversion fpt %}
* `tags` and `labels`: These are populated by output from `metadata-action`.{% else %}
* `tags`: Must be set in the format `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION`. For example, for an image named `octo-image` stored on {% data variables.product.prodname_dotcom %} at `http://github.com/octo-org/octo-repo`, the `tags` option should be set to `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`. You can set a single tag as shown below, or specify multiple tags in a list.{% endif %}

{% ifversion fpt %}
{% data reusables.package_registry.publish-docker-image %}

The above workflow if triggered by a push to the "release" branch. It checks out the GitHub repository, and uses the `login-action` to log in to the {% data variables.product.prodname_container_registry %}. It then extracts labels and tags for the Docker image. Finally, it uses the `build-push-action` action to build the image and publish it on the {% data variables.product.prodname_container_registry %}.

{% else %}
```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Publish Docker image

on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2

      - name: Log in to GitHub Docker Registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Build and push Docker image
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}/${{ github.repository }}/octo-image:${{ github.event.release.tag_name }}{% endraw %}
```

The above workflow checks out the {% data variables.product.prodname_dotcom %} repository, uses the `login-action` to log in to the registry, and then uses the `build-push-action` action to: build a Docker image based on your repository's `Dockerfile`; push the image to the Docker registry, and apply the commit SHA and release version as image tags.
{% endif %}

## Images auf dem „Docker Hub“ und in der {% data variables.product.prodname_registry %} veröffentlichen

In a single workflow, you can publish your Docker image to multiple registries by using the `login-action` and `build-push-action` actions for each registry.

The following example workflow uses the steps from the previous sections ("[Publishing images to Docker Hub](#publishing-images-to-docker-hub)" and "[Publishing images to {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)") to create a single workflow that pushes to both registries.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: ubuntu-latest{% ifversion fpt or ghes > 3.1 or ghae-next %}
    permissions:
      packages: write
      contents: read{% endif %}
    steps:
      - name: Check out the repo
        uses: actions/checkout@v2

      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}

      - name: Log in to the {% ifversion fpt %}Container{% else %}Docker{% endif %} registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion fpt %}ghcr.io{% elsif ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: |
            my-docker-hub-namespace/my-docker-hub-repository
            {% ifversion fpt %}ghcr.io/{% raw %}${{ github.repository }}{% endraw %}{% elsif ghae %}{% raw %}docker.YOUR-HOSTNAME.com/${{ github.repository }}/my-image{% endraw %}{% else %}{% raw %}docker.pkg.github.com/${{ github.repository }}/my-image{% endraw %}{% endif %}

      - name: Build and push Docker images
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

The above workflow checks out the {% data variables.product.prodname_dotcom %} repository, uses the `login-action` twice to log in to both registries and generates tags and labels with the `metadata-action` action. Then the `build-push-action` action builds and pushes the Docker image to Docker Hub and the {% ifversion fpt %}{% data variables.product.prodname_container_registry %}{% else %}Docker registry{% endif %}.
