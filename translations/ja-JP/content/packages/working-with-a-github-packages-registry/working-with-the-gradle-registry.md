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
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は`OWNER/test`というリポジトリ内の`com.example:test`という名前のパッケージを公開します。

### {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %} For more information about using `GITHUB_TOKEN` with Gradle, see "[Publishing Java packages with Gradle](/actions/guides/publishing-java-packages-with-gradle#publishing-packages-to-github-packages)."

#### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

Gradle GroovyもしくはKotlin DSLを使って、Gradleで{% data variables.product.prodname_registry %}に認証を受けることができます。それには、*build.gradle*ファイル（Gradle Groovy）もしくは*build.gradle.kts*ファイル（Kotlin DSL）ファイルを編集して、個人アクセストークンを含めます。 リポジトリ中の単一のパッケージもしくは複数パッケージを認識するようにGradle Groovy及びKotlin DSLを設定することもできます。

{% if enterpriseServerVersions contains currentVersion %}
*REGISTRY-URL* をインスタンスの Maven レジストリの URL に置き換えます。 インスタンスで Subdomain Isolation が有効になっている場合は、`maven.HOSTNAME` を使用します。 インスタンスで Subdomain Isolation が無効になっている場合は、`HOSTNAME/_registry/maven` を使用します。 In either case, replace *HOSTNAME* with the host name of your {% data variables.product.prodname_ghe_server %} instance.
{% elsif currentVersion == "github-ae@latest" %}
*REGISTRY-URL* を企業の Maven レジストリである `maven.HOSTNAME` の URL に置き換えます。 *HOSTNAME*を{% data variables.product.product_location %}のホスト名で置き換えてください。
{% endif %}

*USERNAME*を{% data variables.product.prodname_dotcom %}のユーザ名で、*TOKEN*を個人アクセストークンで、*REPOSITORY*を公開したいパッケージを含むリポジトリの名前で、*OWNER*をリポジトリを所有する{% data variables.product.prodname_dotcom %}のユーザもしくはOrganizationアカウント名で置き換えてください。 大文字はサポートされていないため、仮に{% data variables.product.prodname_dotcom %}のユーザあるいはOrganization名が大文字を含んでいても、リポジトリオーナーには小文字を使わなければなりません。

{% note %}

**Note:** {% data reusables.package_registry.apache-maven-snapshot-versions-supported %} 例として「[{% data variables.product.prodname_registry %}で使用するためのApache Mavenの設定](/packages/using-github-packages-with-your-projects-ecosystem/configuring-apache-maven-for-use-with-github-packages)」を参照してください。

{% endnote %}

##### リポジトリ中の単一のパッケージのためにGradle Groovyを使う例

```shell
plugins {
    id("maven-publish")
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
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

##### 同じリポジトリ中の複数のパッケージのためにGradle Groovyを使う例

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
                url = uri("https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
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

##### 同じリポジトリ中の単一パッケージのためにKotlin DSLを使う例

```shell
plugins {
    `maven-publish`
}
publishing {
    repositories {
        maven {
            name = "GitHubPackages"
            url = uri("https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
            credentials {
                username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
                password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
            }
        }
    }
    publications {
        register<MavenPublication>("gpr") {
            from(components["java"])
        }
    }
}
```

##### 同じリポジトリ中の複数パッケージのためにKotlin DSLを使う例

```shell
plugins {
    `maven-publish` apply false
}
subprojects {
    apply(plugin = "maven-publish")
    configure<PublishingExtension> {
        repositories {
            maven {
                name = "GitHubPackages"
                url = uri("https://{% if currentVersion == "free-pro-team@latest" %}maven.pkg.github.com{% else %}<em>REGISTRY-URL</em>{% endif %}/<em>OWNER</em>/<em>REPOSITORY</em>")
                credentials {
                    username = project.findProperty("gpr.user") as String? ?: System.getenv("<em>USERNAME</em>")
                    password = project.findProperty("gpr.key") as String? ?: System.getenv("<em>TOKEN</em>")
                }
            }
        }
        publications {
            register<MavenPublication>("gpr") {
                from(components["java"])
            }
        }
    }
}
```

### パッケージを公開する

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は`OWNER/test` {% data variables.product.prodname_registry %}リポジトリ内の`com.example.test`という名前のパッケージを公開します。

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. パッケージを作成した後、そのパッケージを公開できます。

  ```shell
   $ gradle publish
  ```

### パッケージをインストールする

プロジェクトの依存関係としてパッケージを追加することで、パッケージをインストールできます。 詳しい情報については、Gradleのドキュメンテーションの 「[ Declaring dependencies](https://docs.gradle.org/current/userguide/declaring_dependencies.html)」を参照してください。

{% data reusables.package_registry.authenticate-step %}
2. *build.gradle*ファイル（Gradle Groovy）もしくは*build.gradle.kts*ファイル（Kotlin DSL）にパッケージの依存関係を追加してください。

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

3. *build.gradle*ファイル（Gradle Groovy）もしくは*build.gradle.kts*ファイル（Kotlin DSL）にmavenプラグインを追加してください。

  Gradle Groovyの例：
  ```shell
  plugins {
      id 'maven'
  }
  ```
  Kotlin DSLの例：
  ```shell
  plugins {
      `maven`
  }
  ```

  3. パッケージをインストールします。

  ```shell
  $ gradle install
  ```

### 参考リンク

- 「[ Apache Mavenレジストリの利用](/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry)」
- 「{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[パッケージを削除する](/packages/learn-github-packages/deleting-a-package){% endif %}」
