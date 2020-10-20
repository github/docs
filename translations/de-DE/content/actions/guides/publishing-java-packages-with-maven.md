---
title: Java-Pakete mit Maven veröffentlichen
intro: Du kannst Maven verwenden, um Java-Pakete als Teil Deines Workflows zur kontinuierlichen Integrations (CI) in eine Registry zu veröffentlichen.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-maven
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

{% data reusables.github-actions.publishing-java-packages-intro %}

### Vorrausetzungen

Wir empfehlen Dir, ein grundlegendes Verständnis von Workflow-Dateien und Konfigurationsoptionen zu haben. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Weitere Informationen zum Erstellen eines CI-Workflows für Dein Java-Projekt mit Maven findest Du unter "[Java mit Maven erstellen und testen](/actions/language-and-framework-guides/building-and-testing-java-with-maven)."

Vielleicht findest Du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- „[Konfiguration von npm für die Verwendung mit {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)“
- "[Environment variables](/actions/reference/environment-variables)"
- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"

### Informationen zur Paketkonfiguration

Die Felder `groupId` und `artifactId` in der Datei _pom.xml_ bilden eine eindeutige Kennung für Dein Paket. Registries verwenden diese Kennung, um Dein Paket mit einer Registry zu verknüpfen.  Weitere Informationen findest Du unter [Leitfaden zum Hochladen von Artefakten in das Central Repository](http://maven.apache.org/repository/guide-central-repository-upload.html) in der „Apache Maven“-Dokumentation.

Die Datei _pom.xml_ enthält auch die Konfiguration für die Distributionsverwaltungs-Repositories, in denen Maven Pakete veröffentlicht. Jedes Repository braucht einen Namen und eine „Deployment-URL“ (Bereitstellungs-URL). Die Authentifizierung für diese Repositories kann in der Datei _.m2/settings.xml_ im Home-Verzeichnis des Benutzers konfiguriert werden, der Maven verwendet.

Du kannst die Aktion `setup-java` verwenden, um das Deployment-Repository sowie die Authentifizierung für dieses Repository zu konfigurieren. Weitere Informationen findest Du unter [`setup-java`](https://github.com/actions/setup-java).

### Pakete im „Maven Central Repository“ veröffentlichen

Jedes Mal, wenn Du ein neues Release erstellst, kannst Du einen Workflow anstoßen, um Dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird von dem Ereignis `release` vom Typ `created` angestoßen. Der Workflow veröffentlicht das Paket im „Maven Central Repository“, sofern es die CI-Tests besteht. Weitere Informationen zum Ereignis `release` findest Du unter „[Ereignisse, die Workflows anstoßen](/actions/reference/events-that-trigger-workflows#release)“.

In diesem Workflow kannst Du die Aktion `setup-java` verwenden. Diese Aktion installiert die angegebene JDK-Version in den `PATH`, aber sie konfiguriert auch eine _settings.xml_ für Maven, um Pakete zu veröffentlichen. Standardmäßig wird die Settings-Datei für {% data variables.product.prodname_registry %} konfiguriert, aber sie kann dazu konfiguriert werden, in eine andere Paket-Registry wie z.B. das „Maven Central Repository“ zu deployen. Wenn Du bereits ein Distributions-Management-Repository im _pom.xml_ konfiguriert hast, dann kannst Du beim Aufruf der Aktion `setup-java` diese `id` angeben.

Wenn Du zum Beispiel über das OSSRH-Hosting-Projekt ins „Maven Central Repository“ deployst, kann Deine _pom.xml_ ein  Distributions-Management-Repository mit `ossrh` als `id` angeben.

{% raw %}
```xml
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

Mit dieser Konfiguration kannst Du einen Workflow erstellen, der Dein Paket im „Maven Central Repository“ veröffentlicht, indem Du die Repository-Verwaltungs-`id` in der Aktion `setup-java` angibst. Du musst auch Umgebungsvariablen bereitstellen, die den Benutzernamen und das Kennwort enthalten, um Dich im Repository zu authentifizieren.

Im Deploy-Schritt musst Du die Umgebungsvariablen auf den Benutzernamen setzen, mit dem Du Dich im Repository anmeldest, und auf ein Geheimnis, das Du mit dem Passwort oder dem Token konfiguriert hast, mit dem Du Dich authentifizierst.  Weitere Informationen findest Du unter "[Verschlüsselte Geheimnisse erstellen und verwenden](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".


{% raw %}
```yaml
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Maven Central Repository
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish package
        run: mvn -B deploy
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

Dieser Workflow führt die folgenden Schritte aus:

1. Checkt eine Kopie des Projekt-Repositorys aus.
1. Richtet das „Java JDK“ ein und konfiguriert die Maven-Datei _settings.xml_, um die Authentifizierung für das  Repository `ossrh` mit den Umgebungsvariablen `MAVEN_USERNAME` und `MAVEN_PASSWORD` hinzuzufügen.
1. {% data reusables.github-actions.publish-to-maven-workflow-step %}

   Weitere Informationen zur Verwendung von Geheimnissen in Deinem Workflow findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

### Pakete in der {% data variables.product.prodname_registry %} veröffentlichen

Jedes Mal, wenn Du ein neues Release erstellst, kannst Du einen Workflow anstoßen, um Dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird von dem Ereignis `release` vom Typ `created` angestoßen. Der Workflow veröffentlicht das Paket in {% data variables.product.prodname_registry %} , wenn die CI-Tests bestanden wurden. Weitere Informationen zum Ereignis `release` findest Du unter „[Ereignisse, die Workflows anstoßen](/actions/reference/events-that-trigger-workflows#release)“.

In diesem Workflow kannst Du die Aktion `setup-java` verwenden. Diese Aktion installiert die angegebene JDK-Version in den `PATH` und stellt auch Maven- _settings.xml_ ein, um Paket in der {% data variables.product.prodname_registry %} zu veröffentlichen. Die generierte _settings.xml_ definiert die Authentifizierung für einen Server mit einer `id` von `github` und verwendet die Umgebungsvariable `GITHUB_ACTOR` als Benutzername und die Umgebungsvariable `GITHUB_TOKEN` als Passwort.

Der `GITHUB_TOKEN` existiert standardmäßig in Deinem Repository und hat Lese- und Schreibrechte für Pakete in dem Repository, in dem der Workflow läuft. Weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."

Für ein Maven-basiertes Projekt kannst Du diese Einstellungen nutzen, indem Du ein Distributions-Repository in Deiner Datei _pom.xml_ mit einer `id` von `Github` erstellst, das auf Deinen {% data variables.product.prodname_registry %}-Endpunkt zeigt.

Wenn beispielsweise Deine Organisation „octocat“ und Dein Repository „hello-world“ heißt, sieht die {% data variables.product.prodname_registry %}-Konfiguration in _pom.xml_ so ähnlich wie im folgenden Beispiel aus.

{% raw %}
```xml
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

Mit dieser Konfiguration kannst Du einen Workflow erstellen, der Dein Paket in der {% data variables.product.prodname_registry %} veröffentlicht, indem Du die automatisch generierte _settings.xml_ verwendest.

{% raw %}
```yaml
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish package
        run: mvn -B deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

Dieser Workflow führt die folgenden Schritte aus:

1. Checkt eine Kopie des Projekt-Repositorys aus.
1. Richtet das Java JDK ein und konfiguriert auch automatisch die Maven-Datei _settings.xml_, um Authentifizierung für das `github`-Maven-Repository hinzuzufügen, um die Umgebungsvariable `GITHUB_TOKEN` zu verwenden.
1. {% data reusables.github-actions.publish-to-packages-workflow-step %}

   Weitere Informationen zur Verwendung von Geheimnissen in Deinem Workflow findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

### Pakete im Maven Central Repository und in der {% data variables.product.prodname_registry %} veröffentlichen

Du kannst Deine Pakete sowohl im Maven Central Repository als auch in der {% data variables.product.prodname_registry %} veröffentlichen, indem Du die Aktion `setup-java` für jede Registry verwendest.

Stelle sicher, dass Deine Datei _pom.xml_ ein Distributionsmanagement-Repository sowohl für Dein {% data variables.product.prodname_dotcom %}-Repository als auch Deinen „Maven Central Repository“-Provider enthält. Wenn Du z.B. über das Hosting-Projekt OSSRH in das Central Repository deployst, solltest Du es vielleicht in einem Distributionsverwaltungs-Repository mit `ossrh` als `id` angeben, und Du solltest {% data variables.product.prodname_registry %} in einem Distributionsverwaltungs-Repository mit `github` als `id` setzen.

{% raw %}
```yaml
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java for publishing to Maven Central Repository
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
          server-id: ossrh
          server-username: MAVEN_USERNAME
          server-password: MAVEN_PASSWORD
      - name: Publish to the Maven Central Repository
        run: mvn -B deploy
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
      - name: Set up Java for publishing to GitHub Packages
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish to GitHub Packages
        run: mvn -B deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

Dieser Workflow ruft die Aktion `setup-java` zweimal auf.  Jedes Mal, wenn die Aktion `setup-java` ausgeführt wird, überschriebt sie die Maven-Datei _settings.xml_ zum Publizieren von Paketen.  Für die Authentifizierung im Repository verweist die Datei _settings.xml_ auf die `id` des Distributionsverwaltungs-Repositorys sowie den Benutzernamen und das Kennwort.

Dieser Workflow führt die folgenden Schritte aus:

1. Checkt eine Kopie des Projekt-Repositorys aus.
1. Ruft `setup-java` zum ersten Mal auf. Dies konfiguriert die Maven-Datei _settings.xml_ für das Repository `ossrh` und setzt die Authentifizierungsoptionen auf Umgebungsvariablen, die im nächsten Schritt definiert werden.
1. {% data reusables.github-actions.publish-to-maven-workflow-step %}
1. Ruft `setup-java` zum zweiten Mal auf. Dies konfiguriert automatisch die Maven-Datei _settings.xml_ für {% data variables.product.prodname_registry %}.
1. {% data reusables.github-actions.publish-to-packages-workflow-step %}

   Weitere Informationen zur Verwendung von Geheimnissen in Deinem Workflow findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.
