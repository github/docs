---
title: GradleでのJavaパッケージの公開
intro: 継続的インテグレーション（CI）ワークフローの一部として、Javaのパッケージをレジストリに公開するためにGradleを利用できます。
redirect_from:
  - /actions/language-and-framework-guides/publishing-java-packages-with-gradle
  - /actions/guides/publishing-java-packages-with-gradle
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Packaging
  - Publishing
  - Java
  - Gradle
shortTitle: Java packages with Gradle
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

{% data reusables.actions.publishing-java-packages-intro %}

## 必要な環境

ワークフローファイルと設定オプションに関する基本的な理解をしておくことをおすすめします。 詳しい情報については、「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」を参照してください。

GradleでのJavaプロジェクトのためのCIワークフローの作成に関する詳しい情報については「[GradleでのJavaのビルドとテスト](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)」を参照してください。

また、以下の基本的な理解があれば役立ちます。

- 「[npm レジストリの利用](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)」
- 「[環境変数](/actions/reference/environment-variables)」
- 「[暗号化されたシークレット](/actions/reference/encrypted-secrets)」
- 「[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)」

## パッケージの設定について

_build.gradle_ファイルの`MavenPublication`セクションにある`groupId`及び`artifactId`フィールドは、レジストリがパッケージをレジストリにリンクするために使用する、パッケージのためのユニークな識別子を生成します。  これは、Mavenの_pom.xml_ファイルにおける`groupId`と`artifactId`に似ています。  詳しい情報については、Gradleのドキュメンテーションの「[Maven Publish Plugin](https://docs.gradle.org/current/userguide/publishing_maven.html)」を参照してください。

_build.gradle_ファイルには、Gradleがパッケージを公開する配布管理リポジトリの設定も含まれています。 各リポジトリは、名前、デプロイメントのURL、認証のためのクレデンシャルを持っていなければなりません。

## Maven Central Repositoryへのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例でのワークフローは、`created`という種類で`release`イベントが発生したときに実行されます。 このワークフローは、CIテストをパスすればMaven Central Repositoryにパッケージを公開します。 `release`イベントに関する詳しい情報については「[ワークフローを起動するイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

_build.gradle_ファイルのpublishingブロックには、パッケージリポジトリを指す新しいMavenリポジトリを定義できます。  たとえば、OSSRHホスティングプロジェクトを通じてMaven Central Repositoryにデプロイしていたなら、_build.gradle_ は`”OSSRH"`という名前でリポジトリを指定できます。

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

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

この設定で、`gradle publish`コマンドの実行によってパッケージをMaven Central Repositoryに公開するワークフローを作成できます。 デプロイのステップでは、ユーザ名とパスワードのための環境変数か、Mavenリポジトリの認証に使うトークンを環境変数に設定する必要があります。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          MAVEN_USERNAME: {% raw %}${{ secrets.OSSRH_USERNAME }}{% endraw %}
          MAVEN_PASSWORD: {% raw %}${{ secrets.OSSRH_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Runs the [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) action with the `publish` argument to publish to the `OSSRH` Maven repository. 環境変数の`MAVEN_USERNAME`は`OSSRH_USERNAME`シークレットの内容で、環境変数の`MAVEN_PASSWORD`は`OSSRH_TOKEN`シークレットの内容で設定されます。

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

## {% data variables.product.prodname_registry %}へのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例でのワークフローは、`created`という種類で`release`イベントが発生したときに実行されます。 このワークフローは、CIテストをパスすれば{% data variables.product.prodname_registry %}にパッケージを公開します。 `release`イベントに関する詳しい情報については「[ワークフローを起動するイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

_build.gradle_のpublishingブロックには、{% data variables.product.prodname_registry %}を指す新しいMavenリポジトリを定義できます。  そのリポジトリの設定では、CIワークフローの実行で設定された環境変数を活用することもできます。  環境変数の`GITHUB_ACTOR`はユーザ名として利用でき、環境変数の`GITHUB_TOKEN`には`GITHUB_TOKEN`シークレットを設定できます。

{% data reusables.actions.github-token-permissions %}

For example, if your organization is named "octocat" and your repository is named "hello-world", then the {% data variables.product.prodname_registry %} configuration in _build.gradle_ would look similar to the below example.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

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

With this configuration, you can create a workflow that publishes your package to {% data variables.product.prodname_registry %} by running the `gradle publish` command.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env:
          GITHUB_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Runs the [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) action with the `publish` argument to publish to {% data variables.product.prodname_registry %}. 環境変数`GITHUB_TOKEN`には、`GITHUB_TOKEN`シークレットの内容が設定されます。 The `permissions` key specifies the access that the `GITHUB_TOKEN` secret will allow.

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

## Maven Central Repositoryと{% data variables.product.prodname_registry %}へのパッケージの公開

_ build.gradle _ファイルでそれぞれについて設定すれば、Maven Central Repositoryと{% data variables.product.prodname_registry %}の両方にパッケージを公開できます。

_build.gradle_ファイルに、{% data variables.product.prodname_dotcom %}リポジトリとMaven Central Repositoryプロバイダの双方に対するリポジトリを確実に含めてください。

たとえば、OSSRHホスティングプロジェクトを通じてMaven Central Repositoryにデプロイしていたなら、`name`を`OSSRH `に設定して配布管理リポジトリでそのことを指定できます。 {% data variables.product.prodname_registry %}にデプロイするなら、`name`を`GitHubPackages`に設定して配布管理リポジトリでそのことを指定できます。

If your organization is named "octocat" and your repository is named "hello-world", then the configuration in _build.gradle_ would look similar to the below example.

{% raw %}
```groovy{:copy}
plugins {
  ...
  id 'maven-publish'
}

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

この設定で、`gradle publish`コマンドの実行によってパッケージをMaven Central Repositoryと{% data variables.product.prodname_registry %}の両方に公開するワークフローを作成できます。

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest 
    permissions: 
      contents: read
      packages: write 
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up Java
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Validate Gradle wrapper
        uses: gradle/wrapper-validation-action@e6e38bacfdf1a337459f332974bb2327a31aaf4b
      - name: Publish package
        uses: gradle/gradle-build-action@67421db6bd0bf253fb4bd25b31ebb98943c375e1
        with:
          arguments: publish
        env: {% raw %}
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

{% data reusables.actions.gradle-workflow-steps %}
1. Runs the [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) action with the `publish` argument to publish to the `OSSRH` Maven repository and {% data variables.product.prodname_registry %}. 環境変数の`MAVEN_USERNAME`は`OSSRH_USERNAME`シークレットの内容で、環境変数の`MAVEN_PASSWORD`は`OSSRH_TOKEN`シークレットの内容で設定されます。 環境変数`GITHUB_TOKEN`には、`GITHUB_TOKEN`シークレットの内容が設定されます。 The `permissions` key specifies the access that the `GITHUB_TOKEN` secret will allow.

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。
