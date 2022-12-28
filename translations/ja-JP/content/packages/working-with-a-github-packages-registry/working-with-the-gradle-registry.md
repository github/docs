---
title: Gradleレジストリの利用
intro: 'パッケージを{% data variables.product.prodname_registry %} Gradleレジストリに公開し、{% data variables.product.prodname_registry %}に保存されているパッケージをJavaプロジェクト中で依存関係として使うようにGradleを設定できます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061660'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} Gradle での `GITHUB_TOKEN` の使用の詳細については、「[Gradle を使用した Java パッケージの公開](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages)」を参照してください。

### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

Gradle Groovy もしくは Kotlin DSL を使って、Gradleで {% data variables.product.prodname_registry %} への認証行うことができます。そのためには、*build.gradle* ファイル (Gradle Groovy) もしくは *build.gradle.kts* ファイル (Kotlin DSL) ファイルを編集して、個人用アクセス トークンを含める必要があります。 リポジトリ中の単一のパッケージもしくは複数パッケージを認識するようにGradle Groovy及びKotlin DSLを設定することもできます。

{% ifversion ghes %} *REGISTRY-URL* をインスタンスの Maven レジストリの URL に置き換えます。 インスタンスで Subdomain Isolation が有効になっている場合は、`maven.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/maven` を使用します。 いずれの場合でも、*HOSTNAME* を {% data variables.product.prodname_ghe_server %} インスタンスのホスト名に置き換えてください。
{% elsif ghae %} *REGISTRY-URL* を企業の Maven レジストリ `maven.HOSTNAME`の URL に置き換えてください。 *HOSTNAME* を {% data variables.product.product_location %} のホスト名に置き換えてください。
{% endif %}

*USERNAME* を {% data variables.product.prodname_dotcom %} のユーザー名に、*TOKEN* を個人用アクセス トークンに、*REPOSITORY* を公開したいパッケージを含むリポジトリの名前に、*OWNER* をリポジトリを所有する {% data variables.product.prodname_dotcom %} のユーザーもしくは組織のアカウントに置き換えてください。 大文字はサポートされていないため、仮に{% data variables.product.prodname_dotcom %}のユーザあるいはOrganization名が大文字を含んでいても、リポジトリオーナーには小文字を使わなければなりません。

{% note %}

**注:** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} 例については、「[{% data variables.product.prodname_registry %} で使用するための Apache Maven の構成](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)」を参照してください。

{% endnote %}

#### リポジトリ中の単一のパッケージのためにGradle Groovyを使う例

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

#### 同じリポジトリ中の複数のパッケージのためにGradle Groovyを使う例

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

#### 同じリポジトリ中の単一パッケージのためにKotlin DSLを使う例

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

#### 同じリポジトリ中の複数パッケージのためにKotlin DSLを使う例

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

## パッケージの公開

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %} は `OWNER/test` {% data variables.product.prodname_registry %} リポジトリ内の `com.example.test` という名前のパッケージを公開します。

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. パッケージを作成した後、そのパッケージを公開できます。

  ```shell
   $ gradle publish
  ```

## 公開されたパッケージの利用

{% data variables.product.prodname_registry %}から公開されたパッケージを使うには、そのパッケージを依存関係として追加し、リポジトリをプロジェクトに追加してください。 詳細については、Gradle ドキュメントの「[依存関係の宣言](https://docs.gradle.org/current/userguide/declaring_dependencies.html)」を参照してください。

{% data reusables.package_registry.authenticate-step %}
2. パッケージの依存関係を *build.gradle* ファイル (Gradle Groovy) または *build.gradle.kts* ファイル (Kotlin DSL) ファイルに追加します。

  Gradle Groovyの例：
  ```shell
  dependencies {
      implementation 'com.example:package'
  }
  ```
  Kotlin DSLの例：
  ```shell
  dependencies {
      implementation("com.example:package")
  }
  ```

3. リポジトリを *build.gradle* ファイル (Gradle Groovy) または *build.gradle.kts* ファイル (Kotlin DSL) ファイルに追加します。

  Gradle Groovyの例：
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
  Kotlin DSLの例：
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

## 参考資料

- [Apache Maven レジストリの利用](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)
- 「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」
