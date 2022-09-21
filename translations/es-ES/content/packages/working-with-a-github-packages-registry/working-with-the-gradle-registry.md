---
title: Trabajar con el registro de Gradle
intro: 'Puedes configurar a Gradle para que publique paquetes en el registro de Gradle del {% data variables.product.prodname_registry %} y para utilizar los paquetes almacenados en el {% data variables.product.prodname_registry %} como dependencias en un proyecto de Java.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061663'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} Para más información sobre el uso de `GITHUB_TOKEN` con Gradle, vea "[Publicación de paquetes de Java con Gradle](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages)".

### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Se puede autenticar en {% data variables.product.prodname_registry %} con Gradle mediante Gradle Groovy o Kotlin DSL si edita el archivo *build.gradle* (Gradle Groovy) o *build.gradle.kts* (Kotlin DSL) para incluir el token de acceso personal. También puedes configurar Gradle Groovy y Kotlin DSL para que reconozcan un paquete único o múltiples paquetes en un repositorio.

{% ifversion ghes %} Reemplace *REGISTRY-URL* con la URL del registro Maven de la instancia. Si en la instancia se ha habilitado el aislamiento de subdominios, use `maven.HOSTNAME`. Si en la instancia se ha deshabilitado el aislamiento de subdominios, use `HOSTNAME/_registry/maven`. En cualquier caso, reemplace *HOSTNAME* por el nombre de host de la instancia de {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %} Reemplace *REGISTRY-URL* por la dirección URL del registro de Maven de la empresa, `maven.HOSTNAME`. Reemplace *HOSTNAME* por el nombre de host de {% data variables.product.product_location %}.
{% endif %}

Reemplace *USERNAME* por el nombre de usuario de {% data variables.product.prodname_dotcom %}, *TOKEN* por el token de acceso personal, *REPOSITORY* por el nombre del repositorio que contiene el paquete que quiera publicar y *OWNER* por el nombre de la cuenta de usuario o de organización en {% data variables.product.prodname_dotcom %} propietaria del repositorio. Dado que las letras mayúsculas no son compatibles, debes usar minúsculas para el propietario del repositorio si el nombre de usuario o el nombre de la organización de {% data variables.product.prodname_dotcom %} contiene letras mayúsculas.

{% note %}

**Nota:** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} Para obtener un ejemplo, vea "[Configuración de Apache Maven para su uso con {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)".

{% endnote %}

#### Ejemplo de uso de Gradle Groovy para un paquete único en un repositorio

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

#### Ejemplo usando Gradle Groovy para múltiples paquetes en el mismo repositorio

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

#### Ejemplo de uso de Kotlin DSL para un paquete único en el mismo repositorio

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

#### Ejemplo de uso de Kotlin DSL para múltiples paquetes en el mismo repositorio

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

## Publicación de un paquete

{% data reusables.package_registry.default-name %} Por ejemplo, {% data variables.product.prodname_dotcom %} publicará un paquete denominado `com.example.test` en el repositorio `OWNER/test` de {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Después de crear tu paquete, puedes publicar el paquete.

  ```shell
   $ gradle publish
  ```

## Utilizar un paquete publicado

Para utiliza run paquete publicado del {% data variables.product.prodname_registry %}, agrégalo como una dependencia y luego agrega el repositorio a tu proyecto. Para más información, vea "[Declaración de dependencias](https://docs.gradle.org/current/userguide/declaring_dependencies.html)" en la documentación de Gradle.

{% data reusables.package_registry.authenticate-step %}
2. Agregue las dependencias del paquete al archivo *build.gradle* (Gradle Groovy) o al archivo *build.gradle.kts* (Kotlin DSL).

  Ejemplo utilizando Gradle Groovy:
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  Ejemplo de uso de Kotlin DSL:
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. Agregue el repositorio al archivo *build.gradle* (Gradle Groovy) o al archivo *build.gradle.kts* (Kotlin DSL).

  Ejemplo utilizando Gradle Groovy:
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
  Ejemplo de uso de Kotlin DSL:
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

## Información adicional

- "[Trabajo con el registro de Apache Maven](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)"
- "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)"
