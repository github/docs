---
title: Utilisation du registre Gradle
intro: 'Vous pouvez configurer Gradle pour qu’il publie des packages dans le registre Gradle {% data variables.product.prodname_registry %} et utilise les packages stockés dans {% data variables.product.prodname_registry %} comme dépendances dans un projet Java.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061658'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Authentification auprès de {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} Pour plus d’informations sur l’utilisation de `GITHUB_TOKEN` avec Gradle, consultez « [Publication de packages Java avec Gradle](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages) ».

### Authentification avec un jeton d’accès personnel

{% data reusables.package_registry.required-scopes %}

Vous pouvez vous authentifier auprès de {% data variables.product.prodname_registry %} avec Gradle à l’aide de Gradle Groovy ou de Kotlin DSL en modifiant votre fichier *build.gradle* (Gradle Groovy) ou *build.gradle.kts* (Kotlin DSL) pour inclure votre jeton d’accès personnel. Vous pouvez également configurer Gradle Groovy et Kotlin DSL pour reconnaître un package unique ou plusieurs packages dans un dépôt.

{% ifversion ghes %} Remplacez *REGISTRY-URL* par l’URL du registre Maven de votre instance. Si l’isolation de sous-domaine est activée pour votre instance, utilisez `maven.HOSTNAME`. Si l’isolation de sous-domaine est désactivée pour votre instance, utilisez `HOSTNAME/_registry/maven`. Dans les deux cas, remplacez *HOSTNAME* par le nom d’hôte de votre instance {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %} Remplacez *REGISTRY-URL* par l’URL du registre Maven de votre entreprise, `maven.HOSTNAME`. Remplacez *HOSTNAME* par le nom d’hôte de {% data variables.product.product_location %}.
{% endif %}

Remplacez *USERNAME* par votre nom d’utilisateur {% data variables.product.prodname_dotcom %}, *TOKEN* par votre jeton d’accès personnel, *REPOSITORY* par le nom du dépôt contenant le package que vous souhaitez publier et *OWNER* par le nom du compte d’utilisateur ou d’organisation sur {% data variables.product.prodname_dotcom %} propriétaire du dépôt. Étant donné que les lettres majuscules ne sont pas prises en charge, vous devez utiliser des lettres minuscules pour le propriétaire du dépôt, même si le nom d’utilisateur ou d’organisation {% data variables.product.prodname_dotcom %} contient des lettres majuscules.

{% note %}

**Remarque :** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} Pour obtenir un exemple, consultez « [Configuration d’Apache Maven pour une utilisation avec {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages) ».

{% endnote %}

#### Exemple d’utilisation de Gradle Groovy pour un seul package dans un dépôt

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

#### Exemple d’utilisation de Gradle Groovy pour plusieurs packages dans le même dépôt

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

#### Exemple d’utilisation de Kotlin DSL pour un seul package dans le même dépôt

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

#### Exemple d’utilisation de Kotlin DSL pour plusieurs packages dans le même dépôt

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

## Publication d’un package

{% data reusables.package_registry.default-name %} Par exemple, {% data variables.product.prodname_dotcom %} publie un package nommé `com.example.test` dans le dépôt `OWNER/test` {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Après avoir créé votre package, vous pouvez publier le package.

  ```shell
   $ gradle publish
  ```

## Utilisation d’un package publié

Pour utiliser un package publié à partir de {% data variables.product.prodname_registry %}, ajoutez le package en tant que dépendance et ajoutez le dépôt à votre projet. Pour plus d’informations, consultez « [Déclaration de dépendances](https://docs.gradle.org/current/userguide/declaring_dependencies.html) » dans la documentation Gradle.

{% data reusables.package_registry.authenticate-step %}
2. Ajoutez les dépendances de package à votre fichier *build.gradle* (Gradle Groovy) ou *build.gradle.kts* (Kotlin DSL).

  Exemple d’utilisation de Gradle Groovy :
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  Exemple d’utilisation de Kotlin DSL :
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. Ajoutez le dépôt à votre fichier *build.gradle* (Gradle Groovy) ou *build.gradle.kts* (Kotlin DSL).

  Exemple d’utilisation de Gradle Groovy :
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
  Exemple d’utilisation de Kotlin DSL :
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

## Pour aller plus loin

- « [Utilisation du registre Apache Maven](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry) »
- « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) »
