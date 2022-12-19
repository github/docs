---
title: Gradle 레지스트리 작업
intro: '패키지를 {% data variables.product.prodname_registry %}에 게시하고 {% data variables.product.prodname_registry %} Gradle 레지스트리에 저장된 패키지를 Java 프로젝트의 종속성으로 사용하도록 Gradle을 구성할 수 있습니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093827'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## {% data variables.product.prodname_registry %} 인증

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} Gradle에서 `GITHUB_TOKEN`을 사용하는 방법에 대한 자세한 내용은 “[Gradle을 사용하여 Java 패키지 게시](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages)”를 참조하세요.

### {% 데이터 variables.product.pat_generic %}을(를) 사용하여 인증

{% data reusables.package_registry.required-scopes %}

build.gradle 파일(Gradle Groovy) 또는 *build.gradle.kts* 파일(Kotlin DSL) 파일을 편집하여 {% 데이터 variables.product.pat_v1 %}을(를) 포함하도록 Gradle Groovy 또는 Kotlin DSL을 사용하여 *Gradle* 에서 {% 데이터 variables.product.prodname_registry %}에 인증할 수 있습니다. 리포지토리에서 단일 패키지 또는 여러 패키지를 인식하도록 Gradle Groovy 및 Kotlin DSL을 구성할 수도 있습니다.

{% ifversion ghes %} *REGISTRY-URL* 을 인스턴스의 Maven 레지스트리에 대한 URL로 바꿉니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `maven.HOSTNAME`을 사용합니다. 인스턴스에 하위 도메인 격리가 사용 설정된 경우 `HOSTNAME/_registry/maven`을 사용합니다. 두 경우 모두 *HOSTNAME* 을 {% data variables.product.prodname_ghe_server %} 인스턴스의 호스트 이름으로 바꿉니다.
{% elsif ghae %} *REGISTRY-URL* 을 엔터프라이즈의 Maven 레지스트리에 대한 URL(`maven.HOSTNAME`)로 바꿉니다. *HOSTNAME* 을 {% 데이터 variables.location.product_location %}의 호스트 이름으로 바꿉 있습니다.
{% endif %}

*USERNAME* 을 {% data variables.product.prodname_dotcom %} 사용자 이름으로 바꾸고, *토큰* 을 {% 데이터 variables.product.pat_v1 %}로 바꾸고, *리* 포지토리를 게시할 패키지가 포함된 리포지토리의 이름으로, *OWNER* 를 리포지토리를 소유한 {% 데이터 variables.product.prodname_dotcom %}의 사용자 또는 조직 계정 이름으로 바꿉다. 대문자는 지원되지 않으므로 {% data variables.product.prodname_dotcom %} 사용자 이름 또는 조직 이름에 대문자가 포함되어 있더라도 리포지토리 소유자에는 소문자를 사용해야 합니다.

{% note %}

**참고:** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} 예제를 보려면 “[{% data variables.product.prodname_registry %}에 사용할 Apache Maven 구성](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)”을 참조하세요.

{% endnote %}

#### 리포지토리의 단일 패키지에 Gradle Groovy를 사용하는 예제

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

#### 동일한 리포지토리의 여러 패키지에 Gradle Groovy를 사용하는 예제

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

#### 동일한 리포지토리의 단일 패키지에 Kotlin DSL을 사용하는 예제

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

#### 동일한 리포지토리의 여러 패키지에 Kotlin DSL을 사용하는 예제

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

## 패키지 게시

{% data reusables.package_registry.default-name %} 예를 들어 {% data variables.product.prodname_dotcom %}는 `OWNER/test` {% data variables.product.prodname_registry %} 리포지토리에 `com.example.test`라는 패키지를 게시합니다.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. 패키지를 만든 후 패키지를 게시할 수 있습니다.

  ```shell
   $ gradle publish
  ```

## 게시된 패키지 사용

{% data variables.product.prodname_registry %}에서 게시된 패키지를 사용하려면 패키지를 종속성으로 추가하고 프로젝트에 리포지토리를 추가합니다. 자세한 내용은 Gradle 설명서의 “[종속성 선언](https://docs.gradle.org/current/userguide/declaring_dependencies.html)”을 참조하세요.

{% data reusables.package_registry.authenticate-step %}
2. *build.gradle* 파일(Gradle Groovy) 또는 *build.gradle.kts* 파일(Kotlin DSL)에 패키지 종속성을 추가합니다.

  Gradle Groovy를 사용하는 예제:
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  Kotlin DSL을 사용하는 예제:
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. *build.gradle* 파일(Gradle Groovy) 또는 *build.gradle.kts* 파일(Kotlin DSL)에 리포지토리를 추가합니다.

  Gradle Groovy를 사용하는 예제:
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
  Kotlin DSL을 사용하는 예제:
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

## 추가 참고 자료

- “[Apache Maven 레지스트리 작업](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)”
- “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”
