---
title: Trabalhando com o registro do Gradle
intro: 'Você pode configurar o Gradle para publicar pacotes no registro do Gradle de {% data variables.product.prodname_registry %} e usar pacotes armazenados em {% data variables.product.prodname_registry %} como dependências de um projeto Java.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061656'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} Para obter mais informações sobre como usar o `GITHUB_TOKEN` com o Gradle, confira "[Como publicar pacotes Java com o Gradle](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages)".

### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Autentique-se no {% data variables.product.prodname_registry %} com o Gradle usando o Gradle Groovy ou o Kotlin DSL editando o arquivo *build.gradle* (Gradle Groovy) ou o arquivo *build.gradle.kts* (Kotlin DSL) para incluir seu token de acesso pessoal. Também é possível configurar o Gradle Groovy e o Kotlin DSL para reconhecer um único pacote ou vários pacotes em um repositório.

{% ifversion ghes %} Substitua *REGISTRY-URL* pela URL do registro do Maven da sua instância. Se a sua instância tem o isolamento de subdomínio habilitado, use `maven.HOSTNAME`. Se a sua instância tem o isolamento de subdomínio desabilitado, use `HOSTNAME/_registry/maven`. Nos dois casos, substitua *HOSTNAME* pelo nome do host da instância do {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %} Substitua *REGISTRY-URL* pela URL do registro do Maven da sua empresa, `maven.HOSTNAME`. Substitua *HOSTNAME* pelo nome do host do {% data variables.product.product_location %}.
{% endif %}

Substitua *USERNAME* pelo seu nome de usuário do {% data variables.product.prodname_dotcom %}, *TOKEN* pelo token de acesso pessoal, *REPOSITORY* pelo nome do repositório que contém o pacote que você deseja publicar e *OWNER* pelo nome da conta de usuário ou de organização no {% data variables.product.prodname_dotcom %} que é o proprietário do repositório. Como não é permitido usar letras maiúsculas, é preciso usar letras minúsculas no nome do proprietário do repositório, mesmo que o nome do usuário ou da organização no {% data variables.product.prodname_dotcom %} contenha letras maiúsculas.

{% note %}

**Observação:** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} Para ver um exemplo, confira "[Como configurar o Apache Maven para uso com o {% data variables.product.prodname_registry %}](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)".

{% endnote %}

#### Exemplo de uso do Gradle Groovy para um único pacote em um repositório

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

#### Exemplo de uso do Gradle Groovy para vários pacotes no mesmo repositório

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

#### Exemplo de uso do Kotlin DSL para um único pacote no mesmo repositório

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

#### Exemplo de uso do Kotlin DSL para vários pacotes no mesmo repositório

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

## Publicando um pacote

{% data reusables.package_registry.default-name %} Por exemplo, o {% data variables.product.prodname_dotcom %} publicará um pacote chamado `com.example.test` no repositório `OWNER/test` do {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Depois de criar seu pacote, você poderá publicá-lo.

  ```shell
   $ gradle publish
  ```

## Usando um pacote publicado

Para usar um pacote publicado a partir de {% data variables.product.prodname_registry %}, adicione o pacote como uma dependência e adicione o repositório ao seu projeto. Para obter mais informações, confira "[Como declarar dependências](https://docs.gradle.org/current/userguide/declaring_dependencies.html)" na documentação do Gradle.

{% data reusables.package_registry.authenticate-step %}
2. Adicione as dependências do pacote ao arquivo *build.gradle* (Gradle Groovy) ou ao arquivo *build.gradle.kts* (Kotlin DSL).

  Exemplo do uso do Gradle Groovy:
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  Exemplo de uso do Kotlin DSL:
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. Adicione o repositório ao arquivo *build.gradle* (Gradle Groovy) ou ao arquivo *build.gradle.kts* (Kotlin DSL).

  Exemplo do uso do Gradle Groovy:
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
  Exemplo de uso do Kotlin DSL:
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

## Leitura adicional

- "[Como trabalhar com o registro do Apache Maven](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)"
- "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)"
