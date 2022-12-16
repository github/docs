---
title: Arbeiten mit der Gradle-Registrierung
intro: 'Du kannst Gradle für die Veröffentlichung von Paketen auf der {% data variables.product.prodname_registry %}-Gradle-Registrierung und für die Nutzung von auf der {% data variables.product.prodname_registry %} gespeicherten Paketen als Abhängigkeiten in einem Java-Projekt konfigurieren.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-gradle-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-gradle-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-gradle-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-gradle-for-use-with-github-packages
  - /packages/guides/configuring-gradle-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Gradle registry
ms.openlocfilehash: 65475c04ea3c6934bdf126500f16c3a907b7efd6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061659'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Bei {% data variables.product.prodname_registry %} authentifizieren

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} Weitere Informationen zum Verwenden von `GITHUB_TOKEN` mit Gradle findest du unter [Veröffentlichen von Java-Paketen mit Gradle](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages).

### Authentifizieren mit einem persönlichen Zugriffstoken

{% data reusables.package_registry.required-scopes %}

Du kannst sich bei {% data variables.product.prodname_registry %} mit Gradle entweder mit Gradle Groovy oder Kotlin DSL authentifizieren, indem du deine *build.gradle*-Datei (Gradle Groovy) oder *build.gradle.kts*-Datei (Kotlin DSL) so bearbeitest, dass sie dein persönliches Zugriffstoken enthält. Du kannst auch Gradle Groovy und Kotlin DSL konfigurieren, um ein einzelnes Paket oder mehrere Pakete in einem Repository zu erkennen.

{% ifversion ghes %} Ersetze *REGISTRY-URL* durch die URL für die Maven-Registrierung deiner Instanz. Wenn die Unterdomänenisolation für deine Instanz aktiviert ist, verwende `maven.HOSTNAME`. Wenn Unterdomänenisolation für deine Instanz deaktiviert ist, verwende `HOSTNAME/_registry/maven`. In beiden Fällen musst du *HOSTNAME* durch den Hostnamen deiner {% data variables.product.prodname_ghe_server %}-Instanz ersetzen.
{% elsif ghae %} Ersetze *REGISTRY-URL* durch die URL für die Maven-Registrierung deines Unternehmens, `maven.HOSTNAME`. Ersetze *HOSTNAME* durch den Hostnamen von {% data variables.product.product_location %}.
{% endif %}

Ersetze *USERNAME* durch deinen {% data variables.product.prodname_dotcom %}-Benutzernamen, *TOKEN* durch dein persönliches Zugriffstoken, *REPOSITORY* durch den Namen des Repositorys, das das Paket enthält, das du veröffentlichen möchtest, und *OWNER* durch den Namen des Benutzer- oder Organisationskontos auf {% data variables.product.prodname_dotcom %}, das das Repository besitzt. Da Großbuchstaben nicht unterstützt werden, musst du für den oder die Repositorybesitzer*in Kleinbuchstaben verwenden, selbst wenn der Benutzer- oder Organisationsname auf {% data variables.product.prodname_dotcom %} Großbuchstaben enthält.

{% note %}

**Hinweis:** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} Ein Beispiel findest du unter „[Konfigurieren von Apache Maven für die Verwendung mit {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)“.

{% endnote %}

#### Beispiel für die Verwendung von Gradle Groovy für ein einzelnes Paket in einem Repository

```shell
plugins {
    id("maven-publish")
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
            credentials {
                username = project.findProperty("gpr.user") ?: System.getenv("<em>USERNAME</em>")
                password = project.findProperty("gpr.key") ?: System.getenv("<em>TOKEN</em>")
            }
        }
    }
    publications {
        gpr(MavenPublication) {
            from(components.java)
        }
    }
}
```

#### Beispiel für die Verwendung von Gradle Groovy für mehrere Pakete im gleichen Repository

```shell
plugins {
    id("maven-publish") apply false
}
subprojects {
    apply plugin: "maven-publish"
    publishing {
        repositories {
            maven {
                name = "GitHubPackages"
                url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
                credentials {
                    username = project.findProperty("gpr.user") ?: System.getenv("<em>USERNAME</em>")
                    password = project.findProperty("gpr.key") ?: System.getenv("<em>TOKEN</em>")
                }
            }
        }
        publications {
            gpr(MavenPublication) {
                from(components.java)
            }
        }
    }
}
```

#### Beispiel für die Verwendung von Kotlin DSL für ein einzelnes Paket im gleichen Repository

```shell
plugins {
    `maven-publish`
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
            credentials {
                username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
                password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
            }
        }
    }
    publications {
        register&lt;MavenPublication>("gpr") {
            from(components["java"])
        }
    }
}
```

#### Beispiel für die Verwendung von Kotlin DSL für mehrere Pakete im gleichen Repository

```shell
plugins {
    `maven-publish` apply false
}
subprojects {
    apply(plugin = "maven-publish")
    configure&lt;PublishingExtension> {
        repositories {
            maven {
                name = "GitHubPackages"
                url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
                credentials {
                    username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
                    password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
                }
            }
        }
        publications {
            register&lt;MavenPublication>("gpr") {
                from(components["java"])
            }
        }
    }
}
```

## Veröffentlichen eines Pakets

{% data reusables.package_registry.default-name %} Beispielsweise veröffentlicht {% data variables.product.prodname_dotcom %} ein Paket mit dem Namen `com.example.test` im Repository `OWNER/test` {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Nachdem du dein Paket erstellt hast, kannst du das Paket veröffentlichen.

  ```shell
   $ gradle publish
  ```

## Verwenden eines veröffentlichten Pakets

Um ein veröffentlichtes Paket aus {% data variables.product.prodname_registry %} zu verwenden, füge das Paket als Abhängigkeit hinzu und füge dem Projekt das Repository hinzu. Weitere Informationen findest du unter „[Deklarieren von Abhängigkeiten](https://docs.gradle.org/current/userguide/declaring_dependencies.html)“ in der Gradle-Dokumentation.

{% data reusables.package_registry.authenticate-step %}
2. Füge die Paketabhängigkeiten deiner *Build.gradle*-Datei (Gradle Groovy) oder der Datei „*Build.gradle.kts*“ (Kotlin DSL) hinzu.

  Example using Grady Groovy:
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  Beispiel für die Verwendung von Kotlin DSL:
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. Füge das Repository deiner *Build.gradle*-Datei (Gradle Groovy) oder der Datei „*Build.gradle.kts*“ (Kotlin DSL) hinzu.

  Example using Grady Groovy:
  ```shell
  repositories {
      maven {
          url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
          credentials {
              username = project.findProperty("gpr.user") ?: System.getenv("<em>USERNAME</em>")
              password = project.findProperty("gpr.key") ?: System.getenv("<em>TOKEN</em>")
          }
      }
  }
  ```
  Beispiel für die Verwendung von Kotlin DSL:
  ```shell
  repositories {
      maven {
          url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
          credentials {
              username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
              password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
          }
      }
  }
  ```

## Weitere Informationsquellen

- [Arbeiten mit der Apache Maven-Registrierung](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)
- [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package)
