---
title: Java-Pakete mit Gradle veröffentlichen
intro: 'Du kannst Gradle verwenden, um Java-Pakete als Teil Deines Workflows zur kontinuierlichen Integration (CI) in einer Registry zu veröffentlichen.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Gradle
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einführung

{% data reusables.github-actions.publishing-java-packages-intro %}

### Vorrausetzungen

Wir empfehlen Dir, ein grundlegendes Verständnis von Workflow-Dateien und Konfigurationsoptionen zu haben. For more information, see "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)."

Weitere Informationen zum Erstellen eines CI-Workflows für Dein Java-Projekt mit Gradle findest Du unter „[Java bauen und testen mit Gradle](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)“.

Vielleicht findest Du es auch hilfreich, ein grundlegendes Verständnis von Folgendem zu haben:

- „[Konfiguration von npm für die Verwendung mit {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)“
- "[Environment variables](/actions/reference/environment-variables)"
- "[Encrypted secrets](/actions/reference/encrypted-secrets)"
- "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)"

### Informationen zur Paketkonfiguration

Die Felder `groupId` und `artifactId` im Abschnitt `MavenPublication` der Datei _build.gradle_ bilden eine eindeutige Kennung für Dein Paket. Registries verwenden diese Kennung, um Dein Paket mit einer Registry zu verknüpfen.  Dies ist so ähnlich wie bei den Feldern `groupId` und `artifactId` der Maven-Datei _pom.xml_.  Weitere Informationen findest Du unter „[‚Maven Publish Plugin‘](https://docs.gradle.org/current/userguide/publishing_maven.html)“ in der Gradle-Dokumentation.

Die Datei _build.gradle_ enthält auch die Konfiguration für die Distributionsverwaltungs-Repositories, zu denen Gradle dann Pakete veröffentlicht. Jedes Repository braucht einen Namen, eine Deployment-URL und Anmeldeinformationen zur Authentifizierung.

### Pakete im „Maven Central Repository“ veröffentlichen

Jedes Mal, wenn Du ein neues Release erstellst, kannst Du einen Workflow anstoßen, um Dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird von dem Ereignis `release` vom Typ `created` angestoßen. Der Workflow veröffentlicht das Paket im „Maven Central Repository“, sofern es die CI-Tests besteht. Weitere Informationen zum Ereignis `release` findest Du unter „[Ereignisse, die Workflows anstoßen](/actions/reference/events-that-trigger-workflows#release)“.

Du kannst ein neues Maven-Repository im Block `publishing` Deiner Datei _build.gradle_ definieren, das auf Dein Paket-Repository verweist.  Wenn Du zum Beispiel über das OSSRH-Hosting-Projekt in das „Maven Central Repository“ deployst, kann Deine _build.gradle_ ein Repository mit dem Namen `"OSSRH"` bestimmen.

{% raw %}
```groovy{:copy}
publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
  }
}
```
{% endraw %}

Mit dieser Konfiguration kannst Du einen Workflow erstellen, der mithilfe des Befehls `gradle publish` Dein Paket im „Maven Central Repository“ veröffentlicht. Du musst auch Umgebungsvariablen bereitstellen, die den Benutzernamen und das Kennwort enthalten, um Dich im Repository zu authentifizieren.

Im Deploy-Schritt musst Du Umgebungsvariablen für den Benutzernamen und das Passwort oder für den Token festlegen, mit dem Du Dich im Maven-Repository authentifizierst. Weitere Informationen findest Du unter "[Verschlüsselte Geheimnisse erstellen und verwenden](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".


{% raw %}
```yaml{:copy}
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Führt den Befehl `gradle publish` aus, um im Maven-Repository `OSSRH` zu veröffentlichen. Die Umgebungsvariable `MAVEN_USERNAME` wird mit dem Inhalt Deines Geheimnisses `OSSRH_USERNAME` gefüllt, und die Umgebungsvariable `MAVEN_PASSWORD` wird mit dem Inhalt Deines Geheimnisses `OSSRH_TOKEN` gefüllt.

   Weitere Informationen zur Verwendung von Geheimnissen in Deinem Workflow findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

### Pakete in der {% data variables.product.prodname_registry %} veröffentlichen

Jedes Mal, wenn Du ein neues Release erstellst, kannst Du einen Workflow anstoßen, um Dein Paket zu veröffentlichen. Der Workflow im folgenden Beispiel wird von dem Ereignis `release` vom Typ `created` angestoßen. Der Workflow veröffentlicht das Paket in {% data variables.product.prodname_registry %} , wenn die CI-Tests bestanden wurden. Weitere Informationen zum Ereignis `release` findest Du unter „[Ereignisse, die Workflows anstoßen](/actions/reference/events-that-trigger-workflows#release)“.

Du kannst ein neues Maven-Repository im Block `publishing` Deiner Datei _build.gradle_ definieren, das auf {% data variables.product.prodname_registry %} verweist.  In dieser Repository-Konfiguration kannst Du auch die in Deinem CI-Workflow-Lauf eingestellten Umgebungsvariablen nutzen.  Du kannst die Umgebungsvariable `GITHUB_ACTOR` als Benutzernamen verwenden und die Umgebungsvariable `GITHUB_TOKEN` auf Dein `GITHUB_TOKEN`-Geheimnis setzen.

Der `GITHUB_TOKEN` existiert standardmäßig in Deinem Repository und hat Lese- und Schreibrechte für Pakete in dem Repository, in dem der Workflow läuft. Weitere Informationen findest Du unter „[Authentifizierung mit dem GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."

Wenn beispielsweise Deine Organisation „octocat“ und Dein Repository „hello-world“ heißt, sieht die {% data variables.product.prodname_registry %}-Konfiguration in _build.gradle_ so ähnlich wie im folgenden Beispiel aus.

{% raw %}
```groovy{:copy}
publishing {
  ...

  repositories {
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

Mit dieser Konfiguration kannst Du einen Workflow erstellen, der mithilfe des Befehls `gradle publish` Dein Paket im „Maven Central Repository“ veröffentlicht.

{% raw %}
```yaml{:copy}
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish package
        run: gradle publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Führt den Befehl `gradle publish` aus, um in {% data variables.product.prodname_registry %} zu veröffentlichen. Die Umgebungsvariable `GITHUB_TOKEN` wird mit dem Inhalt des `GITHUB_TOKEN`-Geheimnisses gefüllt.

   Weitere Informationen zur Verwendung von Geheimnissen in Deinem Workflow findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.

### Pakete im Maven Central Repository und in der {% data variables.product.prodname_registry %} veröffentlichen

Du kannst Deine Pakete sowohl im Maven Central Repository als auch in der {% data variables.product.prodname_registry %} veröffentlichen, indem Du beides in Deiner Datei _build.gradle_ konfigurierst.

Stelle sicher, dass Deine Datei _build.gradle_ ein Repository sowohl für Dein {% data variables.product.prodname_dotcom %}-Repository als auch Deinen „Maven Central Repository“-Provider enthält.

Wenn Du beispielsweise über das OSSRH-Hosting-Projekt in das Central Repository deployen willst, kannst Du das in einem Distributionsverwaltungs-Repository angeben, wobei Du den `-name` auf `OSSRH` setzt. Wenn Du in die {% data variables.product.prodname_registry %} deployen willst, kannst Du das in einem Distributionsverwaltungs-Repository angeben, wobei Du den `-name` auf `GitHubPackages` setzt.

Wenn Deine Organisation „octocat“ und Dein Repository „hello-world“ heißt, sieht die {% data variables.product.prodname_registry %}-Konfiguration in _build.gradle_ so ähnlich wie im folgenden Beispiel aus.

{% raw %}
```groovy{:copy}
publishing {
  ...

  repositories {
    maven {
      name = "OSSRH"
      url = "https://oss.sonatype.org/service/local/staging/deploy/maven2/"
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
    maven {
      name = "GitHubPackages"
      url = "https://maven.pkg.github.com/octocat/hello-world"
      credentials {
        username = System.getenv("GITHUB_ACTOR")
        password = System.getenv("GITHUB_TOKEN")
      }
    }
  }
}
```
{% endraw %}

Mit dieser Konfiguration kannst Du einen Workflow erstellen, der mithilfe des Befehls `gradle publish` Dein Paket sowohl im „Maven Central Repository“ als auch in der {% data variables.product.prodname_registry %} veröffentlicht.

{% raw %}
```yaml{:copy}
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v2
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Publish to the Maven Central Repository
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. Führt den Befehl `gradle publish` aus, um im Maven-Repository `OSSRH` und in der {% data variables.product.prodname_registry %} zu veröffentlichen. Die Umgebungsvariable `MAVEN_USERNAME` wird mit dem Inhalt Deines Geheimnisses `OSSRH_USERNAME` gefüllt, und die Umgebungsvariable `MAVEN_PASSWORD` wird mit dem Inhalt Deines Geheimnisses `OSSRH_TOKEN` gefüllt. Die Umgebungsvariable `GITHUB_TOKEN` wird mit dem Inhalt des `GITHUB_TOKEN`-Geheimnisses gefüllt.

   Weitere Informationen zur Verwendung von Geheimnissen in Deinem Workflow findest Du unter „[Verschlüsselte Geheimnisse erstellen und verwenden](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)“.
