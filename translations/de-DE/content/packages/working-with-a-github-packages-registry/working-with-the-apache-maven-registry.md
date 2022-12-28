---
title: Arbeiten mit der Apache Maven-Registrierung
intro: 'Du kannst Apache Maven für die Veröffentlichung von Paketen auf {% data variables.product.prodname_registry %} und für die Nutzung von auf {% data variables.product.prodname_registry %} gespeicherten Paketen als Abhängigkeiten in einem Java-Projekt konfigurieren.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-apache-maven-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-apache-maven-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages
  - /packages/guides/configuring-apache-maven-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Apache Maven registry
ms.openlocfilehash: 0d2fafd69ac870a521fee8c7105b79bf8839d62c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061706'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Bei {% data variables.product.prodname_registry %} authentifizieren

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentifizieren mit einem persönlichen Zugriffstoken

{% data reusables.package_registry.required-scopes %}

Du kannst sich bei der {% data variables.product.prodname_registry %} mit Apache Maven authentifizieren, indem du deine Datei *~/m2/settings.xml* bearbeitest, sodass dein persönliches Zugriffstoken eingeschlossen ist. Erstelle eine neue *~/.m2/settings.xml*-Datei, wenn keine vorhanden ist.

Füge im `servers`-Tag ein untergeordnetes `server`-Tag mit einer `id` hinzu, und ersetze den *BENUTZERNAMEN* durch deinen Benutzernamen auf {% data variables.product.prodname_dotcom %} sowie *TOKEN* durch dein persönliches Zugriffstoken.

Konfiguriere im Tag `repositories` ein Repository, indem du `id` des Repositorys der `id` zuordnest, die du im Tag `server` hinzugefügt hast. Dieses Tag enthält deine Anmeldeinformationen. Ersetze {% ifversion ghes or ghae %} den *HOSTNAMEN* durch den Hostnamen des {% data variables.product.product_location %} und {% endif %} den oder die *BESITZER*IN* durch den Namen des Benutzer- oder Organisationskontos, in dessen Besitz sich das Repository befindet. Da Großbuchstaben nicht unterstützt werden, musst du für den oder die Repositorybesitzer*in Kleinbuchstaben verwenden, selbst wenn der Benutzer- oder Organisationsname auf {% data variables.product.prodname_dotcom %} Großbuchstaben enthält.

Wenn du mit mehreren Repositorys arbeiten möchtest, kannst du jedes Repository zu untergeordneten `repository`-Elementen im Tag `repositories` hinzufügen und die jeweilige `id` den einzelnen Anmeldeinformationen im Tag `servers` zuordnen.

{% data reusables.package_registry.apache-maven-snapshot-versions-supported %}

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
        </repository>
        <repository>
          <id>github</id>
          <url>HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
          <snapshots>
            <enabled>true</enabled>
          </snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```
{% endif %}

## Veröffentlichen eines Pakets

{% data reusables.package_registry.default-name %} Beispielsweise veröffentlicht {% data variables.product.prodname_dotcom %} ein Paket mit dem Namen `com.example:test` in einem Repository namens `OWNER/test`.

Wenn du mehrere Pakete im gleichen Repository veröffentlichen möchtest, kannst du die Repository-URL im `<distributionManagement>`-Element der Datei *pom.xml* einschließen. Basierend auf diesem Feld gleicht {% data variables.product.prodname_dotcom %} dem Repository. Du musst keine zusätzlichen Schritte durchführen, um mehrere Pakete im gleichen Repository zu veröffentlichen, da der Repositoryname auch Teil des `distributionManagement`-Elements ist.

Weitere Informationen zum Erstellen eines Pakets findest du in der [Dokumentation zu maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).

1. Bearbeite das `distributionManagement`-Element der Datei *pom.xml* in deinem Paketverzeichnis, und ersetze {% ifversion ghes or ghae %} den *HOSTNAMEN* durch den Hostnamen des {% data variables.product.product_location %}, {% endif %} `OWNER` durch den Namen des Benutzer- oder Organisationskontos, in dessen Besitz sich das Repository befindet, und `REPOSITORY` durch den Namen des Repositorys, das dein Projekt enthält.{% ifversion ghes %}

  Wenn die Unterdomänenisolation für deine Instanz aktiviert ist:{% endif %}
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}maven.HOSTNAME{% endif %}/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% ifversion ghes %}
  If your instance has subdomain isolation disabled:
  ```xml
  <distributionManagement>
     <repository>
       <id>github</id>
       <name>GitHub OWNER Apache Maven Packages</name>
       <url>https://HOSTNAME/_registry/maven/OWNER/REPOSITORY</url>
     </repository>
  </distributionManagement>
  ```{% endif %}
{% data reusables.package_registry.checksum-maven-plugin %}
1. Publish the package.
   ```shell
   $ mvn deploy
  ```

{% data reusables.package_registry.viewing-packages %}

## Installieren eines Pakets

Um ein Apache Maven-Paket aus der {% data variables.product.prodname_registry %} zu installieren, bearbeite die Datei *pom.xml*, damit das Paket als Abhängigkeit eingeschlossen wird. Wenn du Pakete aus mehreren Repositorys installieren möchtest, füge jeweils ein `repository`-Tag hinzu. Weitere Informationen zum Verwenden einer *pom.xml*-Datei in deinem Projekt findest du in der Apache Maven-Dokumentation unter [Einführung in das POM](https://maven.apache.org/guides/introduction/introduction-to-the-pom.html).

{% data reusables.package_registry.authenticate-step %}
2. Füge dem `dependencies`-Element der *pom.xml*-Datei deines Projekts die Paketabhängigkeiten hinzu, indem du `com.example:test` durch das Paket ersetzt.

  ```xml
  <dependencies>
    <dependency>
      <groupId>com.example</groupId>
      <artifactId>test</artifactId>
      <version>1.0.0-SNAPSHOT</version>
    </dependency>
  </dependencies>
  ```
{% data reusables.package_registry.checksum-maven-plugin %}
3. Installiere das Paket.

  ```shell
  $ mvn install
  ```

## Weitere Informationsquellen

- [Arbeiten mit der Gradle-Registrierung](/packages/working-with-a-github-packages-registry/working-with-the-gradle-registry)
- [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package)
