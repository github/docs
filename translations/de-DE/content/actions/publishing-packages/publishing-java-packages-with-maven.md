---
title: Java-Pakete mit Maven veröffentlichen
intro: 'Du kannst Maven verwenden, um Java-Pakete als Teil deines CI-Workflows (Continuous Integration) in einer Registrierung zu veröffentlichen.'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
  - /actions/guides/publishing-java-packages-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Maven
shortTitle: Java packages with Maven
ms.openlocfilehash: e5a1c9ad670bef2e059f5808fa41e1fcbe5848af
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717917'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

{% data reusables.actions.publishing-java-packages-intro %}

## Voraussetzungen

Wir empfehlen Dir, ein grundlegendes Verständnis von Workflow-Dateien und Konfigurationsoptionen zu haben. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).

Weitere Informationen zum Erstellen eines CI-Workflows für dein Java-Projekt mit Maven findest du unter [Erstellen und Testen von Java mit Maven](/actions/language-and-framework-guides/building-and-testing-java-with-maven).

Vielleicht findest du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- [Arbeiten mit der npm-Registrierung](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
- [Umgebungsvariablen](/actions/reference/environment-variables)
- [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets)
- [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow)

## Informationen zur Paketkonfiguration

Die Felder `groupId` und `artifactId` in der Datei _pom.xml_ erstellen einen eindeutigen Bezeichner für dein Paket, der von Registrierungen zum Verknüpfen deines Pakets mit einer Registrierung verwendet wird.  Weitere Informationen findest du im [Leitfaden zum Hochladen von Artefakten in das zentrale Repository](http://maven.apache.org/repository/guide-central-repository-upload.html) in der Apache Maven-Dokumentation.

Die Datei _pom.xml_ enthält auch die Konfiguration für die Distributionsverwaltungsrepositorys, in denen Maven Pakete veröffentlicht. Jedes Repository braucht einen Namen und eine „Deployment-URL“ (Bereitstellungs-URL). Die Authentifizierung für diese Repositorys kann in der Datei _.m2/settings.xml_ im Basisverzeichnis des Benutzers konfiguriert werden, der Maven ausführt.

Du kannst die Aktion `setup-java` verwenden, um das Bereitstellungsrepository und die Authentifizierung für dieses Repository zu konfigurieren. Weitere Informationen findest du unter [`setup-java`](https://github.com/actions/setup-java).

## Pakete im „Maven Central Repository“ veröffentlichen

Jedes Mal, wenn du ein neues Release erstellst, kannst du einen Workflow anstoßen, um dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird ausgeführt, wenn das `release`-Ereignis mit dem `created`-Typ ausgelöst wird. Der Workflow veröffentlicht das Paket im „Maven Central Repository“, sofern es die CI-Tests besteht. Weitere Informationen zum `release`-Ereignis findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows#release).

In diesem Workflow kannst du die `setup-java`-Aktion verwenden. Diese Aktion installiert die angegebene Version des JDK in `PATH`, aber konfiguriert auch eine Maven-Datei _settings.xml_ für die Veröffentlichung von Paketen. Standardmäßig wird die Settings-Datei für {% data variables.product.prodname_registry %} konfiguriert, aber sie kann dazu konfiguriert werden, in eine andere Paket-Registry wie z.B. das „Maven Central Repository“ zu deployen. Wenn du bereits ein Distributionsverwaltungsrepository in _pom.xml_ konfiguriert hast, kannst du diese `id` beim Aufruf der Aktion `setup-java` angeben.

Wenn du die Bereitstellung für das Maven Central Repository beispielsweise über das OSSRH-Hostingprojekt durchgeführt hast, könnte deine Datei _pom.xml_ ein Distributionsverwaltungsrepository mit der `id` `ossrh` angeben.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>ossrh</id>
      <name>Central Repository OSSRH</name>
      <url>https://oss.sonatype.org/service/local/staging/deploy/maven2/</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

Mit dieser Konfiguration kannst du einen Workflow erstellen, der dein Paket im Maven Central Repository veröffentlicht, indem du die `id` der Repositoryverwaltung in der `setup-java`-Aktion angibst. Du musst auch Umgebungsvariablen bereitstellen, die den Benutzernamen und das Kennwort enthalten, um Dich im Repository zu authentifizieren.

Im Deploy-Schritt musst du die Umgebungsvariablen auf den Benutzernamen setzen, mit dem du Dich im Repository anmeldest, und auf ein Geheimnis, das du mit dem Passwort oder dem Token konfiguriert hast, mit dem du Dich authentifizierst.  Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

Dieser Workflow führt die folgenden Schritte aus:

1. Checkt eine Kopie des Projekt-Repositorys aus.
1. Richtet das Java JDK ein und konfiguriert auch die Maven-Datei _settings.xml_, um die Authentifizierung für das `ossrh`-Repository über die Umgebungsvariablen `MAVEN_USERNAME` und `MAVEN_PASSWORD` hinzuzufügen.
1. {% data reusables.actions.publish-to-maven-workflow-step %}

   Weitere Informationen zur Verwendung von Geheimnissen in deinem Workflow findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

## Pakete in der {% data variables.product.prodname_registry %} veröffentlichen

Jedes Mal, wenn du ein neues Release erstellst, kannst du einen Workflow anstoßen, um dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird ausgeführt, wenn das `release`-Ereignis mit dem `created`-Typ ausgelöst wird. Der Workflow veröffentlicht das Paket in {% data variables.product.prodname_registry %} , wenn die CI-Tests bestanden wurden. Weitere Informationen zum `release`-Ereignis findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows#release).

In diesem Workflow kannst du die `setup-java`-Aktion verwenden. Diese Aktion installiert die angegebene JDK-Version in `PATH` und richtet zudem eine Maven-Datei _settings.xml_ für die Veröffentlichung des Pakets in der {% data variables.product.prodname_registry %} ein. Die generierte Datei _settings.xml_ definiert die Authentifizierung für einen Server mit der `id` `github`, wobei die Umgebungsvariable `GITHUB_ACTOR` als Benutzername und die Umgebungsvariable `GITHUB_TOKEN` als Kennwort verwendet wird. Der Umgebungsvariablen `GITHUB_TOKEN` wird der Wert des speziellen `GITHUB_TOKEN`-Geheimnisses zugewiesen.

{% data reusables.actions.github-token-permissions %}

Für ein Maven-basiertes Projekt kannst du diese Einstellungen verwenden, indem du in deiner Datei _pom.xml_ ein Distributionsrepository mit der `id` `github` erstellst, das auf deinen {% data variables.product.prodname_registry %}-Endpunkt verweist.

Wenn deine Organisation beispielsweise „octocat“ und dein Repository „hello-world“ heißen, sieht die {% data variables.product.prodname_registry %}-Konfiguration in _pom.xml_ ähnlich dem folgenden Beispiel aus.

{% raw %}
```xml{:copy}
<project ...>
  ...
  <distributionManagement>
    <repository>
      <id>github</id>
      <name>GitHub Packages</name>
      <url>https://maven.pkg.github.com/octocat/hello-world</url>
    </repository>
  </distributionManagement>
</project>
```
{% endraw %}

Mit dieser Konfiguration kannst du einen Workflow erstellen, der dein Paket anhand der automatisch generierten Datei _settings.xml_ in der {% data variables.product.prodname_registry %} veröffentlicht.

```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Dieser Workflow führt die folgenden Schritte aus:

1. Checkt eine Kopie des Projekt-Repositorys aus.
1. Richtet das Java JDK ein und konfiguriert auch automatisch die Maven-Datei _settings.xml_, um die Authentifizierung für das `github`-Maven-Repository über die Umgebungsvariable `GITHUB_TOKEN` hinzuzufügen.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Weitere Informationen zur Verwendung von Geheimnissen in deinem Workflow findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

## Pakete im Maven Central Repository und in der {% data variables.product.prodname_registry %} veröffentlichen

Du kannst deine Pakete sowohl im Maven Central Repository als auch in der {% data variables.product.prodname_registry %} veröffentlichen, indem du für jede Registrierung die Aktion `setup-java` verwendest.

Stelle sicher, dass deine Datei _pom.xml_ ein Distributionsverwaltungsrepository sowohl für dein {% data variables.product.prodname_dotcom %}-Repository als auch für deinen Maven Central Repository-Anbieter enthält. Wenn du die Bereitstellung für das Central Repository beispielsweise über das OSSRH-Hostingprojekt durchführst, solltest du es in einem Distributionsverwaltungsrepository angeben, dessen `id` auf `ossrh` festgelegt ist. Außerdem solltest du {% data variables.product.prodname_registry %} in einem Distributionsverwaltungsrepository angeben, dessen `id` auf `github` festgelegt ist.

```yaml{:copy}
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java for publishing to Maven Central Repository
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn --batch-mode deploy
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
      - name: Set up Java for publishing to GitHub Packages
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to GitHub Packages
        run: mvn --batch-mode deploy
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Dieser Workflow ruft die `setup-java`-Aktion zweimal auf.  Jedes Mal, wenn die `setup-java`-Aktion ausgeführt wird, wird die Maven-Datei _settings.xml_ für die Veröffentlichung von Paketen überschrieben.  Bei der Authentifizierung beim Repository verweist die Datei _settings.xml_ auf das Distributionsverwaltungsrepository `id` sowie auf den Benutzernamen und das Kennwort.

Dieser Workflow führt die folgenden Schritte aus:

1. Checkt eine Kopie des Projekt-Repositorys aus.
1. Ruft `setup-java` zum ersten Mal auf. Dadurch wird die Maven-Datei _settings.xml_ für das `ossrh`-Repository konfiguriert, und die Authentifizierungsoptionen werden auf Umgebungsvariablen festgelegt, die im nächsten Schritt definiert werden.
1. {% data reusables.actions.publish-to-maven-workflow-step %}
1. Ruft `setup-java` zum zweiten Mal auf. Dadurch wird die Maven-Datei _settings.xml_ automatisch für {% data variables.product.prodname_registry %} konfiguriert.
1. {% data reusables.actions.publish-to-packages-workflow-step %}

   Weitere Informationen zur Verwendung von Geheimnissen in deinem Workflow findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).
