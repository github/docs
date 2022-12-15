---
title: Работа с реестром Gradle
intro: 'Вы можете настроить в Gradle публикацию пакетов в реестр Gradle {% data variables.product.prodname_registry %} и использование пакетов, хранящихся в {% data variables.product.prodname_registry %}, в качестве зависимостей в проекте Java.'
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
ms.openlocfilehash: 14826e29b3bce7b867af6b387a258990798cf58e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093828'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Проверка подлинности в {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} Дополнительные сведения об использовании `GITHUB_TOKEN` с Gradle см. в статье [Публикация пакетов Java с помощью Gradle](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages).

### Проверка подлинности с помощью {% данных variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Вы можете пройти проверку подлинности в {% данных variables.product.prodname_registry %} с помощью Gradle Groovy или Kotlin DSL, изменив файл *build.gradle* (Gradle Groovy) или файл *build.gradle.kts* (Kotlin DSL), чтобы включить данные {% variables.product.pat_v1 %}. Вы также можете настроить Gradle Groovy и Kotlin DSL для распознавания одного пакета или нескольких пакетов в репозитории.

{% ifversion ghes %} Замените *REGISTRY-URL* URL-адресом реестра Maven вашего экземпляра. Если в вашем экземпляре включена изоляция поддоменов, используйте `maven.HOSTNAME`. Если в вашем экземпляре отключена изоляция поддоменов, используйте `HOSTNAME/_registry/maven`. В любом случае замените *HOSTNAME* на имя узла экземпляра {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %} Замените *REGISTRY-URL* URL-адресом реестра Maven вашего предприятия, `maven.HOSTNAME`. Замените *HOSTNAME* именем узла {% данных variables.location.product_location %}.
{% endif %}

Замените *username* именем пользователя {% данных variables.product.prodname_dotcom %}, *TOKEN* на {% данных variables.product.pat_v1 %}, *репозиторий именем репозитория* , содержащего пакет, который требуется опубликовать, и *OWNER* — именем учетной записи пользователя или организации в {% данных variables.product.prodname_dotcom %}, которому принадлежит репозиторий. Поскольку прописные буквы не поддерживаются, необходимо использовать строчные буквы для указания владельца репозитория, даже если имя пользователя или организации {% data variables.product.prodname_dotcom %} содержит прописные буквы.

{% note %}

**Примечание.** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} Пример см. в статье [Настройка Apache Maven для использования с {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages).

{% endnote %}

#### Пример использования Gradle Groovy для одного пакета в репозитории

```shell
plugins {
    id("maven-publish")
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/REPOSITORY")
            credentials {
                username = project.findProperty("gpr.user") ?: System.getenv("USERNAME")
                password = project.findProperty("gpr.key") ?: System.getenv("TOKEN")
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

#### Пример использования Gradle Groovy для нескольких пакетов в том же репозитории

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
                url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/REPOSITORY")
                credentials {
                    username = project.findProperty("gpr.user") ?: System.getenv("USERNAME")
                    password = project.findProperty("gpr.key") ?: System.getenv("TOKEN")
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

#### Пример использования Kotlin DSL для одного пакета в том же репозитории

```shell
plugins {
    `maven-publish`
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/REPOSITORY")
            credentials {
                username = project.findProperty("gpr.user") as String? ?: System.getenv("USERNAME")
                password = project.findProperty("gpr.key") as String? ?: System.getenv("TOKEN")
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

#### Пример использования Kotlin DSL для нескольких пакетов в том же репозитории

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
                url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/REPOSITORY")
                credentials {
                    username = project.findProperty("gpr.user") as String? ?: System.getenv("USERNAME")
                    password = project.findProperty("gpr.key") as String? ?: System.getenv("TOKEN")
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

## Публикация пакета

{% data reusables.package_registry.default-name %} Например, {% data variables.product.prodname_dotcom %} опубликует пакет под названием `com.example.test` в `OWNER/test` репозитория {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. После создания пакета его можно опубликовать.

  ```shell
   $ gradle publish
  ```

## Использование опубликованного пакета

Чтобы использовать опубликованный пакет из {% data variables.product.prodname_registry %}, добавьте пакет в качестве зависимости и добавьте репозиторий в свой проект. Дополнительные сведения см. в статье [Объявление зависимостей](https://docs.gradle.org/current/userguide/declaring_dependencies.html) в документации Gradle.

{% data reusables.package_registry.authenticate-step %}
2. Добавьте зависимости пакета в файл *build.gradle* (Gradle Groovy) или файл *build.gradle.kts* (Kotlin DSL).

  Пример использования Gradle Groovy:
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  Пример использования Kotlin DSL:
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. Добавьте репозиторий в файл *build.gradle* (Gradle Groovy) или файл *build.gradle.kts* (Kotlin DSL).

  Пример использования Gradle Groovy:
  ```shell
  repositories {
      maven {
          url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/REPOSITORY")
          credentials {
              username = project.findProperty("gpr.user") ?: System.getenv("USERNAME")
              password = project.findProperty("gpr.key") ?: System.getenv("TOKEN")
          }
      }
  }
  ```
  Пример использования Kotlin DSL:
  ```shell
  repositories {
      maven {
          url = uri("https://{% ifversion fpt or ghec %}maven.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/REPOSITORY")
          credentials {
              username = project.findProperty("gpr.user") as String? ?: System.getenv("USERNAME")
              password = project.findProperty("gpr.key") as String? ?: System.getenv("TOKEN")
          }
      }
  }
  ```

## Дополнительные материалы

- [Работа с реестром Apache Maven](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)
- "[Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package)"
