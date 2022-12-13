---
title: Veröffentlichen und Installieren eines Pakets mit GitHub Actions
intro: 'Du kannst einen Workflow in {% data variables.product.prodname_actions %} so konfigurieren, dass ein Paket aus {% data variables.product.prodname_registry %} automatisch veröffentlicht oder installiert wird.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
  - /packages/guides/using-github-packages-with-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Publish & install with Actions
ms.openlocfilehash: 4996d6c180b3e54608184ce4c40b8e0595f60d3e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147705043'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Informationen zu {% data variables.product.prodname_registry %} with {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions).

Du kannst die CI- und CD-Funktionen deines Repositorys erweitern, indem du Pakete als Teil deines Workflows veröffentlichst oder installierst.

{% ifversion fpt or ghec %}
### Authentifizieren bei der {% data variables.product.prodname_ghcr_and_npm_registry %}

{% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

{% endif %}

### Authentifizieren von Paketregistrierungen in {% data variables.product.prodname_dotcom %}

{% ifversion fpt or ghec %}Wenn du deinen Workflow bei {% data variables.product.prodname_registry %} authentifizieren möchtest, um auf eine andere Paketregistrierung als {% data variables.product.prodname_container_registry %} auf {% data variables.product.product_location %} zuzugreifen, dann{% else %}Für eine Authentifizierung bei Paketregistrierungen auf {% data variables.product.product_name %},{% endif %} wird empfohlen, das `GITHUB_TOKEN` zu verwenden, das {% data variables.product.product_name %} automatisch für dein Repository erstellt wird, wenn du {% data variables.product.prodname_actions %} anstelle eines persönlichen Zugriffstokens für die Authentifizierung aktivierst. Die Berechtigungen für dieses Zugriffstoken müssen in der Workflowdatei festgelegt werden, um den Lesezugriff auf den `contents`-Bereich und Schreibzugriff auf den `packages`-Bereich zu gewähren. Für Forks erhält `GITHUB_TOKEN` den Lesezugriff für das übergeordnete Repository. Weitere Informationen findest du unter [Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) („Authentifizieren mit dem GITHUB_TOKEN“).

Du kannst auf das `GITHUB_TOKEN` in deiner Workflowdatei mithilfe des {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %}-Kontexts verweisen. Weitere Informationen findest du unter [Authenticating with the GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token) („Authentifizieren mit dem GITHUB_TOKEN“).

## Informationen zu Berechtigungen und Paketzugriff für repositoryeigene Pakete

{% note %}

**Hinweis**: Einige Registrierungen, z. B. RubyGems, {% ifversion packages-npm-v2 %}{% else %}npm, {% endif %}Apache Maven, NuGet, {% ifversion fpt or ghec %}und Gradle{% else %}Gradle und Docker-Pakete, die den Paketnamespace `docker.pkg.github.com` verwenden{% endif %}, lassen nur repositoryeigene Pakete zu. Bei {% data variables.product.prodname_ghcr_and_npm_registry_full %} kannst du festlegen, dass Pakete sich im Besitz eines Benutzers oder einer Organisation befinden oder mit einem Repository verknüpft sein dürfen.

{% endnote %}

Wenn du GitHub Actions aktivierst, installiert GitHub eine GitHub App im Repository. Das `GITHUB_TOKEN`-Geheimnis ist ein Zugriffstoken der GitHub-App-Installation. Du kannst das Installationszugriffstoken verwenden, um dich im Namen der auf deinem Repository installierten GitHub-App zu authentifizieren. Die Berechtigungen des Tokens sind auf das Repository beschränkt, in dem sich der Workflow befindet. Weitere Informationen findest du unter [Berechtigungen für das GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret).

{% data variables.product.prodname_registry %} ermöglicht es dir, Pakete über das `GITHUB_TOKEN` zu pushen und pullen, das für einen {% data variables.product.prodname_actions %}-Workflow verfügbar ist.

{% ifversion fpt or ghec %}
## Informationen zu Berechtigungen und Paketzugriff für {% data variables.product.prodname_ghcr_and_npm_registry %}

Bei {% data variables.product.prodname_ghcr_and_npm_registry_full %} können Benutzer Pakete als eigenständige Ressourcen auf Organisationsebene erstellen und verwalten. Pakete können im Besitz einer Organisation oder eines persönlichen Kontos sein, und du kannst den Zugriff auf jedes deiner Pakete separat über die Repositoryberechtigungen anpassen.

Alle Workflows, die auf die {% data variables.product.prodname_ghcr_and_npm_registry %} zugreifen, sollten `GITHUB_TOKEN` anstelle eines persönlichen Zugriffstokens verwenden. Weitere Informationen zu bewährten Sicherheitsmethoden findest du unter [Sicherheitshärtung für GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets).

## Standardberechtigungen und Zugriffseinstellungen für Container, die über Workflows geändert wurden

Wenn du einen Container über einen Workflow erstellst, installierst, änderst oder löschst, gibt es einige Standardberechtigungen und Zugriffseinstellungen, die verwendet werden, um sicherzustellen, dass Administrator*innen Zugriff auf den Workflow haben. Du kannst diese Zugriffseinstellungen auch anpassen.

Standardmäßig geschieht Folgendes, wenn ein Workflow mithilfe von `GITHUB_TOKEN` einen Container erstellt:
- Der Container erbt das Sichtbarkeits- und Berechtigungsmodell des Repositorys, in dem der Workflow ausgeführt wird.
- Repositoryadministrator*innen, für die der Workflow ausgeführt wird, werden die Administrator*innen des Containers, sobald der Container erstellt wurde.

Dies sind weitere Beispiele für die Funktionsweise von Standardberechtigungen für Workflows, die Pakete verwalten.

| {% data variables.product.prodname_actions %}-Workflowaufgabe | Standardberechtigungen und -zugriff |
|----|----|
| Herunterladen eines bestehenden Containers | – Wenn der Container öffentlich ist, kann jeder Workflow, der in einem beliebigen Repository ausgeführt wird, den Container herunterladen. <br> – Wenn der Container intern ist, können alle Workflows, die in einem Repository ausgeführt werden, das im Besitz des Enterprise-Kontos ist, den Container herunterladen. Für unternehmenseigene Organisationen kannst du jedes Repository im Unternehmen lesen. <br> – Wenn der Container privat ist, können nur Workflows, die in Repositorys ausgeführt werden, die Leseberechtigung für diesen Container erhalten, den Container herunterladen. <br>
| Hochladen einer neuen Version zu einem vorhandenen Container | – Wenn der Container privat, intern oder öffentlich ist, können nur Workflows, die in Repositorys ausgeführt werden, die Schreibberechtigungen für diesen Container erhalten, neue Versionen in den Container hochladen.
| Löschen eines Containers oder einer Version eines Containers | – Wenn der Container privat, intern oder öffentlich ist, können nur Workflows, die in Repositorys ausgeführt werden, die Löschberechtigungen erhalten, vorhandene Versionen des Containers löschen.

Du kannst auch den Zugriff auf Container präziser anpassen oder das Verhalten von Standardberechtigungen anpassen. Weitere Informationen findest du unter [Konfigurieren der Zugriffssteuerung und Sichtbarkeit eines Pakets](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility).

{% endif %}

## Veröffentlichen eines Pakets mithilfe einer Aktion

Du kannst {% data variables.product.prodname_actions %} verwenden, um automatisch Pakete als Teil deines CI-Flows (Continuous Integration) zu veröffentlichen. Mit diesem Ansatz für Continuous Deployment (CD) kannst du die Erstellung neuer Paketversionen automatisieren, wenn der Code deinen Qualitätsstandards entspricht. Beispielsweise kannst du einen Workflow erstellen, der CI-Tests jedes Mal ausführt, wenn ein*e Entwickler*in Code an einen bestimmten Branch pusht. Wenn die Tests bestanden werden, kann der Workflow eine neue Paketversion in {% data variables.product.prodname_registry %} veröffentlichen.

{% data reusables.package_registry.actions-configuration %}

Im folgenden Beispiel wird veranschaulicht, wie du {% data variables.product.prodname_actions %} verwenden kannst, um {% ifversion not fpt or ghec %} deine App{% endif %} zu erstellen und zu testen und anschließend automatisch ein Docker-Image zu erstellen und es in {% data variables.product.prodname_registry %} zu veröffentlichen.

Erstelle eine neue Workflowdatei in deinem Repository (z. B. `.github/workflows/deploy-image.yml`), und füge die folgende YAML-Datei hinzu:

{% ifversion fpt or ghec %} {% data reusables.package_registry.publish-docker-image %}

{% else %}

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Create and publish a Docker image

on:
  push:
    branches: ['release']

jobs:
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: webpack artifacts
          path: public/

  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [12.x, 14.x]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
      - uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true

  build-and-push-image:
    runs-on: ubuntu-latest
    needs: run-npm-test {% ifversion ghes or ghae %}
    permissions: 
      contents: read
      packages: write {% endif %}
    steps:
      - name: Checkout
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
          push: true
          tags: |
            {% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}/{% raw %}${{ github.repository }}/octo-image:${{ github.sha }}{% endraw %}
```
{% endif %}

Die relevanten Einstellungen werden in der folgenden Tabelle erläutert. Ausführliche Informationen zu jedem Element in einem Workflow findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions).

<table>
<tr>
<td>
{% raw %} ```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
</td>
<td>
Hier wird der <code>Create and publish a Docker image</code>-Workflow konfiguriert, der jedes mal ausgeführt wird, wenn eine Änderung an den Branch <code>release</code> gepusht wird.
</td>
</tr>

{% ifversion fpt or ghec %}

<tr>
<td>
{% raw %}
```yaml
env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
```
{% endraw %}
</td>
<td>
  Definiert zwei benutzerdefinierte Umgebungsvariablen für den Workflow. Diese werden für die {% data variables.product.prodname_container_registry %}-Domäne und einen Namen für das Docker-Image verwendet, das dieser Workflow erstellt.
</td>
</tr>

<tr>
<td>
{% raw %}
```yaml
jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
```
{% endraw %}
</td>
<td>
  In diesem Workflow gibt es einen einzelnen Auftrag. Er ist so konfiguriert, dass er auf der neuesten verfügbaren Version von Ubuntu ausgeführt wird.
</td>
</tr>

{% else %}

<tr>
<td>

```yaml
run-npm-build:
  runs-on: ubuntu-latest
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: npm install and build webpack
      run: |
        npm install
        npm run build
    - uses: {% data reusables.actions.action-upload-artifact %}
      with:
        name: webpack artifacts
        path: public/
```

</td>
<td>
  Dieser Auftrag installiert NPM und verwendet diese Lösung zum Erstellen der App.
</td>
</tr>

<tr>
<td>

```yaml
run-npm-test:
  runs-on: ubuntu-latest
  needs: run-npm-build
  strategy:
    matrix:
      os: [ubuntu-latest]
      node-version: [12.x, 14.x]
  steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
    - uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: webpack artifacts
        path: public
    - name: npm install, and test
      run: |
        npm install
        npm test
      env:
        CI: true
```

</td>
<td>
Dieser Auftrag verwendet <code>npm test</code> zum Testen des Codes. Der <code>needs: run-npm-build</code>-Befehl macht diesen Auftrag abhängig vom Auftrag <code>run-npm-build</code>.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
build-and-push-image:
  runs-on: ubuntu-latest
  needs: run-npm-test
```
{% endraw %}
</td>
<td>
Dieser Auftrag veröffentlicht das Paket. Der <code>needs: run-npm-test</code>-Befehl macht diesen Auftrag abhängig vom Auftrag <code>run-npm-test</code>.
</td>
</tr>

{% endif %}

<tr>
<td>
{% raw %} ```yaml
permissions: 
  contents: read
  packages: write 
```
{% endraw %}
</td>
<td>
Legt die Berechtigungen fest, die für das <code>GITHUB_TOKEN</code> für die Aktionen in diesem Auftrag gewährt werden
</td>
</tr> 

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to the Container registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: ${{ env.REGISTRY }}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
Erstellt einen Schritt namens <code>Log in to the {% data variables.product.prodname_container_registry %}</code>, der sich mit dem Konto und dem Kennwort anmeldet, das die Pakete veröffentlicht. Nach der Veröffentlichung befinden sich die Pakete im Besitz des hier definierten Kontos.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
- name: Extract metadata (tags, labels) for Docker
  id: meta
  uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
  with:
    images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
```
{% endraw %}
</td>
<td>
In diesem Schritt wird <code><a href="https://github.com/docker/metadata-action#about">docker/metadata-action</a></code> verwendet, um Tags und Bezeichnungen zu extrahieren, die auf das angegebene Image angewendet werden. Mit der <code>id</code> „meta“ kann auf die Ausgabe dieses Schritts in einem nachfolgenden Schritt verwiesen werden. Der <code>images</code>-Wert stellt den Basisnamen für die Tags und Bezeichnungen bereit.
</td>
</tr>

{% else %}
<tr>
<td>
{% raw %} ```yaml
- name: Log in to GitHub Docker Registry
  uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
  with:
    registry: {% endraw %}{% ifversion ghae %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
</td>
<td>
Erstellt einen neuen Schritt namens <code>Log in to GitHub Docker Registry</code>, der sich mit dem Konto und dem Kennwort anmeldet, das die Pakete veröffentlicht. Nach der Veröffentlichung befinden sich die Pakete im Besitz des hier definierten Kontos.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
- name: Build and push Docker image
```
{% endraw %}
</td>
<td>
Erstellt einen neuen Schritt namens <code>Build and push Docker image</code>. Dieser Schritt wird als Teil des <code>build-and-push-image</code>-Auftrags ausgeführt.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
```
{% endraw %}
</td>
<td>
Verwendet die Docker-Aktion <code>build-push-action</code>, um das Image basierend auf dem <code>Dockerfile</code> deines Repositorys zu erstellen. Wenn der Build erfolgreich ist, wird das Image an {% data variables.product.prodname_registry %} gepusht.
</td>
</tr>

<tr>
<td>
{% raw %} ```yaml
with:
```
{% endraw %}
</td>
<td>
Sendet die erforderlichen Parameter an die <code>build-push-action</code>-Aktion. Diese werden in den nachfolgenden Zeilen definiert.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %} ```yaml
context: .
```
{% endraw %}
</td>
<td>
Hiermit wird der Kontext des Builds als Gruppe von Dateien im angegebenen Pfad definiert. Weitere Informationen findest du unter <a href="https://github.com/docker/build-push-action#usage">Verbrauch</a>.
</td>
</tr>
{% endif %}

<tr>
<td>
{% raw %} ```yaml
push: true
```
{% endraw %}
</td>
<td>
Hier wird das Image an die Registrierung gepusht, wenn es erfolgreich erstellt wurde.
</td>
</tr>

{% ifversion fpt or ghec %}
<tr>
<td>
{% raw %}
```yaml
tags: ${{ steps.meta.outputs.tags }}
labels: ${{ steps.meta.outputs.labels }}
```
{% endraw %}
</td>
<td>
  Hier werden die Tags und Bezeichnungen hinzugefügt, die im „meta“-Schritt extrahiert wurden.
</td>
</tr>

{% else %}
<tr>
<td>
{% ifversion ghae %} {% raw %} ```yaml
tags: |
docker.YOUR-HOSTNAME.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% else %} {% raw %} ```yaml
tags: |
docker.pkg.github.com/${{ github.repository }}/octo-image:${{ github.sha }}
```
{% endraw %} {% endif %}
</td>
<td>
Markiert das Image mit dem SHA des Commits, der den Workflow ausgelöst hat
</td>
</tr>
{% endif %}

</table>

Dieser neue Workflow wird jedes Mal automatisch ausgeführt, wenn du eine Änderung an einem Branch mit dem Namen `release` im Repository pushst. Auf der Registerkarte **Aktionen** kannst du den Fortschritt nachverfolgen.

Ein paar Minuten nach Abschluss des Workflows wird das neue Paket in deinem Repository angezeigt. Informationen zum Suchen deiner verfügbaren Pakete findest du unter [Anzeigen der Pakete eines Repositorys](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages).

## Installieren eines Pakets mithilfe einer Aktion

Du kannst Pakete als Teil deines CI-Flows mithilfe von {% data variables.product.prodname_actions %} erstellen. Beispielsweise kannst du einen Workflow konfigurieren. Jedes Mal, wenn ein*e Entwickler*in Code an einen Pull Request pusht, löst der Workflow die Abhängigkeiten auf, indem er Pakete herunterlädt und installiert, die von {% data variables.product.prodname_registry %} gehostet werden. Anschließend kann der Workflow CI-Tests ausführen, die die Abhängigkeiten erfordern.

Die Installation von Paketen, die von {% data variables.product.prodname_registry %} über {% data variables.product.prodname_actions %} gehostet werden, erfordert eine minimale Konfiguration oder zusätzliche Authentifizierung, wenn du `GITHUB_TOKEN` verwendest.{% ifversion fpt or ghec %} Datenübertragungen sind auch kostenlos, wenn eine Aktion ein Paket installiert. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% ifversion fpt or ghec %}
## Durchführen eines Upgrades für einen Workflow, der mithilfe eines PAT auf eine Registrierung zugreift

Die {% data variables.product.prodname_ghcr_and_npm_registry %} unterstützen das `GITHUB_TOKEN` für eine einfache und sichere Authentifizierung in deinen Workflows. Wenn dein Workflow ein persönliches Zugriffstoken (Personal Access Token, PAT) zum Authentifizieren bei der Registrierung verwendet, solltest du deinen Workflow unbedingt so aktualisieren, dass das `GITHUB_TOKEN` verwendet wird.

Weitere Informationen über das `GITHUB_TOKEN` findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow).

Mithilfe von `GITHUB_TOKEN` wird anstelle mithilfe des persönlichen Zugriffstokens, das den `repo`-Bereich enthält, die Sicherheit deines Repositorys erhöht, da du kein langlebiges persönliches Zugriffstoken verwenden musst, das unnötigen Zugriff auf das Repository bereitstellt, in dem dein Workflow ausgeführt wird. Weitere Informationen zu bewährten Sicherheitsmethoden findest du unter [Sicherheitshärtung für GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets).

1. Navigiere zur Landing Page deines Pakets.
1. Klicke auf der linken Randleiste auf **Actions-Zugriff**.
  ![Die Option „Actions-Zugriff“ im Menü auf der linken Seite](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
1. Um sicherzustellen, dass dein Containerpaket Zugriff auf deinen Workflow hat, musst du das Repository hinzufügen, in dem der Workflow für deinen Container gespeichert ist. Klicke auf **Repository hinzufügen**, und suche nach dem Repository, das hinzugefügt werden soll.
   ![Schaltfläche „Repository hinzufügen“](/assets/images/help/package-registry/add-repository-button.png) {% note %}

  **Hinweis:** Der Vorgang zum Hinzufügen eines Repositorys zu deinem Container über das Menü für den **Actions-Zugriff** unterscheidet sich vom Vorgang, bei dem dein Container mit einem Repository verbunden wird. Weitere Informationen findest du unter [Sicherstellen des Workflowzugriffs auf dein Paket](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package) und [Verbinden eines Repositorys mit einem Paket](/packages/learn-github-packages/connecting-a-repository-to-a-package).

  {% endnote %}
1. Wähle optional über das Dropdownmenü „Rolle“ die Standardzugriffsebene aus, die du dem Repository für deinem Containerimage zuweisen möchten.
  ![Berechtigungszugriffsstufen für Repositorys](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
1. Öffne deine Workflowdatei. Ersetze in der Zeile, über die du dich bei der Registrierung anmeldest, dein persönliches Zugriffstoken durch {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

Dieser Workflow veröffentlicht beispielsweise ein Docker-Image in der {% data variables.product.prodname_container_registry %} und verwendet {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} für die Authentifizierung.

```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest
    permissions:
      packages: write
      contents: read

    steps:
      - uses: {% data reusables.actions.action-checkout %}

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log in to registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "{% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/{% raw %}${{ github.repository_owner }}{% endraw %}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "{% raw %}${{ github.ref }}{% endraw %}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "{% raw %}${{ github.ref }}{% endraw %}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```

{% endif %}
