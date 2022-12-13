---
title: Veröffentlichen von Docker-Images
intro: 'Du kannst Docker-Images im Rahmen Deines Workflows zur kontinuierlichen Integration (CI) in einer Registry wie zum Beispiel „Docker Hub“ oder {% data variables.product.prodname_registry %} veröffentlichen.'
redirect_from:
  - /actions/language-and-framework-guides/publishing-docker-images
  - /actions/guides/publishing-docker-images
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Docker
ms.openlocfilehash: 01f20527dedeea3685855797993187e7af462de4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410291'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Diese Anleitung zeigt Dir, wie Du einen Workflow erstellen kannst, der einen Docker-Build ausführt und dann Docker-Images auf „Docker Hub“ oder {% data variables.product.prodname_registry %} veröffentlicht. Mit einem einzelnen Workflow kannst Du Images in einer einzigen Registry oder in mehreren Registries veröffentlichen.

{% note %}

**Hinweis:** Das Beispiel im Abschnitt [Veröffentlichen von Images in {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages) dient als gute Vorlage für ein Szenario, in dem du ein Image an eine Docker-Drittanbieterregistrierung pushen möchtest.

{% endnote %}

## Voraussetzungen

Wir empfehlen, dass Du ein grundlegendes Verständnis von Workflowkonfigurations-Optionen hast und darüber, wie Du eine Workflow-Datei erstellst. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Vielleicht findest Du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets)
- [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow) {% ifversion fpt or ghec %}
- [Arbeiten mit der {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry){% else %}
- [Arbeiten mit der Docker-Registrierung](/packages/working-with-a-github-packages-registry/working-with-the-docker-registry) {% endif %}

## Informationen zur Image-Konfiguration

In dieser Anleitung wird davon ausgegangen, dass Du eine vollständige Definition für ein Docker-Image in einem {% data variables.product.prodname_dotcom %}-Repository gespeichert hast. Dein Repository muss beispielsweise ein _Dockerfile_ und alle anderen Dateien enthalten, die benötigt werden, um einen Docker-Build zum Erstellen eines Images durchzuführen.

In diesem Leitfaden wird die Docker-Aktion `build-push-action` verwendet, um das Docker-Image zu erstellen und an eine oder mehrere Registrierungen zu pushen. Weitere Informationen findest du unter [`build-push-action`](https://github.com/marketplace/actions/build-and-push-docker-images).

{% data reusables.actions.enterprise-marketplace-actions %}

## Images auf dem „Docker Hub“ veröffentlichen

{% data reusables.actions.release-trigger-workflow %}

Im folgenden Beispielworkflow werden die Docker-Aktionen `login-action` und `build-push-action` verwendet, um das Docker-Image zu erstellen und bei erfolgreicher Erstellung an Docker Hub zu pushen.

Um zum „Docker Hub“ zu pushen, benötigst Du ein Benutzerkonto auf „Docker Hub“ und musst ein „Docker Hub“-Repository erstellt haben. Weitere Informationen findest du unter [Pushen eines Docker-Containerimages an Docker Hub](https://docs.docker.com/docker-hub/repos/#pushing-a-docker-container-image-to-docker-hub) in der Docker-Dokumentation.

Für Docker Hub sind die folgenden `login-action`-Optionen erforderlich:
* `username` und `password`: Dies ist dein Benutzername und dein Kennwort für Docker Hub. Es wird empfohlen, deinen Benutzernamen und dein Kennwort für Docker Hub als Geheimnisse zu speichern, damit sie nicht in deiner Workflowdatei verfügbar gemacht werden. Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

Für Docker Hub ist die folgende `metadata-action`-Option erforderlich:
* `images`: Dies ist der Namespace und der Name für das Docker-Image, das du erstellst bzw. an Docker Hub pushst.

Für Docker Hub sind die folgenden `build-push-action`-Optionen erforderlich:
* `tags`: Dies ist das Tag deines neuen Images im Format `DOCKER-HUB-NAMESPACE/DOCKER-HUB-REPOSITORY:VERSION`. Du kannst wie im Folgenden gezeigt ein einzelnes Tag festlegen oder mehrere Tags in einer Liste angeben.
* `push`: Wenn diese Option auf `true` festgelegt ist, wird das Image bei erfolgreicher Erstellung an die Registrierung gepusht.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registry:
    name: Push Docker image to Docker Hub
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
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

Der obige Workflow checkt das {% data variables.product.prodname_dotcom %}-Repository aus, verwendet `login-action` für die Anmeldung bei der Registrierung und nutzt dann die `build-push-action`-Aktion, um basierend auf der `Dockerfile` deines Repositorys ein Docker-Image zu erstellen, dieses an Docker Hub zu pushen und ein Tag auf das Image anzuwenden.

## Images in {% data variables.product.prodname_registry %} veröffentlichen

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

{% data reusables.actions.release-trigger-workflow %}

Im folgenden Beispielworkflow werden die Docker-Aktionen `login-action`{% ifversion fpt or ghec %}, `metadata-action`,{% endif %} und `build-push-action` verwendet, um das Docker-Image zu erstellen und dieses bei erfolgreicher Erstellung an {% data variables.product.prodname_registry %} zu pushen.

Für {% data variables.product.prodname_registry %} sind die folgenden `login-action`-Optionen erforderlich:
* `registry`: Diese Option muss auf {% ifversion fpt or ghec %}`ghcr.io`{% elsif ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}`{% else %}`docker.pkg.github.com`{% endif %} festgelegt sein.
* `username`: Du kannst den Kontext {% raw %}`${{ github.actor }}`{% endraw %} verwenden, um automatisch den Benutzernamen der Benutzer*innen zu verwenden, die die Workflowausführung ausgelöst haben. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts#github-context).
* `password`: Du kannst das automatisch generierte `GITHUB_TOKEN`-Geheimnis für das Kennwort verwenden. Weitere Informationen findest du unter [Authenticating with the GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token) („Authentifizieren mit dem GITHUB_TOKEN“).

{% ifversion fpt or ghec %} Für {% data variables.product.prodname_registry %} ist die folgende `metadata-action`-Option erforderlich:
* `images`: Dies ist der Namespace und der Name für das Docker-Image, das du erstellst.
{% endif %}

Für {% data variables.product.prodname_registry %} sind die folgenden `build-push-action`-Optionen erforderlich:{% ifversion fpt or ghec %}
* `context`: Hiermit wird der Kontext des Builds als Gruppe von Dateien im angegebenen Pfad definiert.{% endif %}
* `push`: Wenn diese Option auf `true` festgelegt ist, wird das Image bei erfolgreicher Erstellung an die Registrierung gepusht.{% ifversion fpt or ghec %}
* `tags` und `labels`: Diese Optionen werden über die Ausgabe von `metadata-action` ausgefüllt.{% else %}
* `tags`: Diese Option muss das Format {% ifversion ghes > 3.4 %}`{% data reusables.package_registry.container-registry-hostname %}/OWNER/REPOSITORY/IMAGE_NAME:VERSION` aufweisen. 
  
   Für ein Image namens `octo-image`, das in {% data variables.product.prodname_ghe_server %} unter `https://HOSTNAME/octo-org/octo-repo` gespeichert ist, sollte die `tags`-Option auf `{% data reusables.package_registry.container-registry-hostname %}/octo-org/octo-repo/octo-image:latest`{% else %}`docker.pkg.github.com/OWNER/REPOSITORY/IMAGE_NAME:VERSION` festgelegt sein.
  
   Für ein Image namens `octo-image`, das auf {% data variables.product.prodname_dotcom %} unter `http://github.com/octo-org/octo-repo` gespeichert ist, sollte die `tags`-Option auf `docker.pkg.github.com/octo-org/octo-repo/octo-image:latest`{% endif %} festgelegt sein. Du kannst wie im Folgenden gezeigt ein einzelnes Tag festlegen oder mehrere Tags in einer Liste angeben.{% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} {% data reusables.package_registry.publish-docker-image %}

Der obige Workflow wird durch einen Push an den Branch „release“ ausgelöst. Das GitHub-Repository wird ausgecheckt, und `login-action` wird für die Anmeldung bei der {% data variables.product.prodname_container_registry %} verwendet. Anschließend werden Bezeichnungen und Tags für das Docker-Image extrahiert. Schließlich wird die `build-push-action`-Aktion verwendet, um das Image zu erstellen und in der {% data variables.product.prodname_container_registry %} zu veröffentlichen.

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]
jobs:
  push_to_registry:
    name: Push Docker image to GitHub Packages
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
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

Der obige Workflow checkt das {% data variables.product.product_name %}-Repository aus, verwendet `login-action` für die Anmeldung bei der Registrierung und nutzt dann die `build-push-action`-Aktion, um basierend auf der `Dockerfile` deines Repositorys ein Docker-Image zu erstellen, dieses an die Docker-Registrierung zu pushen und den Commit-SHA und die Releaseversion als Imagetags anzuwenden.
{% endif %}

## Images auf dem „Docker Hub“ und in der {% data variables.product.prodname_registry %} veröffentlichen

{% ifversion ghes > 3.4 %} {% data reusables.package_registry.container-registry-ghes-beta %} {% endif %}

Du kannst dein Docker-Image mithilfe der Aktionen `login-action` und `build-push-action` für jede Registrierung in einem einzigen Workflow an mehrere Registrierungen pushen.

Im folgenden Beispielworkflow werden die Schritte aus den vorherigen Abschnitten ([Veröffentlichen von Images in Docker Hub](#publishing-images-to-docker-hub) und [Veröffentlichen von Images in der {% data variables.product.prodname_registry %}](#publishing-images-to-github-packages)) verwendet, um einen einzelnen Workflow zu erstellen, der an beide Registrierungen pusht.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Publish Docker image

on:
  release:
    types: [published]

jobs:
  push_to_registries:
    name: Push Docker image to multiple registries
    runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
    permissions:
      packages: write
      contents: read
    steps:
      - name: Check out the repo
        uses: {% data reusables.actions.action-checkout %}
      
      - name: Log in to Docker Hub
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          username: {% raw %}${{ secrets.DOCKER_USERNAME }}{% endraw %}
          password: {% raw %}${{ secrets.DOCKER_PASSWORD }}{% endraw %}
      
      - name: Log in to the {% ifversion fpt or ghec or ghes > 3.4 %}Container{% else %}Docker{% endif %} registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: {% ifversion fpt or ghec %}ghcr.io{% elsif ghae %}docker.YOUR-HOSTNAME.com{% elsif ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}{% else %}docker.pkg.github.com{% endif %}
          username: {% raw %}${{ github.actor }}{% endraw %}
          password: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
      
      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: |
            my-docker-hub-namespace/my-docker-hub-repository
            {% ifversion fpt or ghec or ghes > 3.4 %}{% data reusables.package_registry.container-registry-hostname %}/{% raw %}${{ github.repository }}{% endraw %}{% elsif ghae %}{% raw %}docker.YOUR-HOSTNAME.com/${{ github.repository }}/my-image{% endraw %}{% else %}{% raw %}docker.pkg.github.com/${{ github.repository }}/my-image{% endraw %}{% endif %}
      
      - name: Build and push Docker images
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          push: true
          tags: {% raw %}${{ steps.meta.outputs.tags }}{% endraw %}
          labels: {% raw %}${{ steps.meta.outputs.labels }}{% endraw %}
```

Der obige Workflow checkt das {% data variables.product.product_name %}-Repository aus, verwendet `login-action` für die Anmeldung bei beiden Registrierungen und generiert Tags und Bezeichnungen mit der `metadata-action`-Aktion.
Anschließend erstellt die `build-push-action`-Aktion das Docker-Image und pusht es an Docker Hub und die {% ifversion fpt or ghec or ghes > 3.4 %}{% data variables.product.prodname_container_registry %}{% else %}Docker-Registrierung{% endif %}.
