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
ms.openlocfilehash: 58bb9f872dbb136624c82ab7ae073d9b670e98e3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410284'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

{% data reusables.actions.publishing-java-packages-intro %}

## 前提条件

ワークフローファイルと設定オプションに関する基本的な理解をしておくことをおすすめします。 詳細については、「[{% data variables.product.prodname_actions %} について学ぶ](/actions/learn-github-actions)」を参照してください。

Gradle を使用して Java プロジェクトの CI ワークフローを作成する方法の詳細については、「[Gradle での Java のビルドとテスト](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)」を参照してください。

また、以下の基本的な理解があれば役立ちます。

- "[npm レジストリの操作](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)"
- "[環境変数](/actions/reference/environment-variables)"
- "[暗号化されたシークレット](/actions/reference/encrypted-secrets)"
- "[ワークフローでの認証](/actions/reference/authentication-in-a-workflow)"

## パッケージの設定について

_build.gradle_ ファイルの `MavenPublication` セクションの `groupId` および `artifactId` フィールドにより、パッケージをレジストリにリンクするためにレジストリで使われる、パッケージに対する一意の識別子が作成されます。  これは、Maven の _pom.xml_ ファイルの `groupId` および `artifactId` フィールドと似ています。  詳細については、Gradle のドキュメントの「[Maven Publish Plugin (Maven 公開プラグイン)](https://docs.gradle.org/current/userguide/publishing_maven.html)」を参照してください。

_build.gradle_ ファイルには、Gradle によるパッケージの公開先である配布管理リポジトリの設定も含まれています。 各リポジトリは、名前、デプロイメントのURL、認証のためのクレデンシャルを持っていなければなりません。

## Maven Central Repositoryへのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 次の例のワークフローでは、`release` イベントが `created` 型でトリガーされたときに実行されます。 このワークフローは、CIテストをパスすればMaven Central Repositoryにパッケージを公開します。 `release` イベントの詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

_build.gradle_ ファイルのパッケージ リポジトリを指す publishing ブロックで、新しい Maven リポジトリを定義できます。  たとえば、OSSRH ホスティング プロジェクトを使用して Maven Central Repository にデプロイした場合、_build.gradle_ では `"OSSRH"` という名前でリポジトリを指定できます。

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

この構成を使うと、`gradle publish` コマンドを実行することによりパッケージを Maven Central Repository に公開するワークフローを作成できます。 デプロイのステップでは、ユーザ名とパスワードのための環境変数か、Mavenリポジトリの認証に使うトークンを環境変数に設定する必要があります。 詳細については、「[暗号化されたシークレットの作成と使用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
1. `OSSRH` Maven リポジトリに公開するには、`publish` 引数を指定して [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) アクションを実行します。 `MAVEN_USERNAME` 環境変数には `OSSRH_USERNAME` シークレットの内容が設定され、`MAVEN_PASSWORD` 環境変数には `OSSRH_TOKEN` シークレットの内容が設定されます。

   ワークフローでシークレットを使用する方法の詳細については、[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関するページを参照してください。

## {% data variables.product.prodname_registry %}へのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 次の例のワークフローでは、`release` イベントが `created` 型でトリガーされたときに実行されます。 このワークフローは、CIテストをパスすれば{% data variables.product.prodname_registry %}にパッケージを公開します。 `release` イベントの詳細については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

{% data variables.product.prodname_registry %} を指す _build.gradle_ の publishing ブロックで、新しい Maven リポジトリを定義できます。  そのリポジトリの設定では、CIワークフローの実行で設定された環境変数を活用することもできます。  `GITHUB_ACTOR` 環境変数をユーザー名として使用でき、`GITHUB_TOKEN` 環境変数に `GITHUB_TOKEN` シークレットを設定できます。

{% data reusables.actions.github-token-permissions %}

たとえば、Organization の名前が "octocat" で、リポジトリの名前が "hello-world" の場合、_build.gradle_ の {% data variables.product.prodname_registry %} の構成は次の例のようになります。

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

この構成を使うと、`gradle publish` コマンドを実行することによりパッケージを {% data variables.product.prodname_registry %} に公開するワークフローを作成できます。

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
1. {% data variables.product.prodname_registry %} に公開するには、`publish` 引数を指定して [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) アクションを実行します。 `GITHUB_TOKEN` 環境変数には、`GITHUB_TOKEN` シークレットの内容が設定されます。 `permissions` キーでは、`GITHUB_TOKEN` シークレットによって許可されるアクセス権を指定します。

   ワークフローでシークレットを使用する方法の詳細については、[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関するページを参照してください。

## Maven Central Repositoryと{% data variables.product.prodname_registry %}へのパッケージの公開

_build.gradle_ ファイルでそれぞれを構成することにより、Maven Central Repository と {% data variables.product.prodname_registry %} の両方にパッケージを公開できます。

_build.gradle_ ファイルに、{% data variables.product.prodname_dotcom %} リポジトリと Maven Central Repository プロバイダー両方に対するリポジトリを含めます。

たとえば、OSSRH ホスティング プロジェクトを通じて Central Repository にデプロイする場合は、`name` を `OSSRH` に設定して、配布管理リポジトリでそのことを指定できます。 {% data variables.product.prodname_registry %} にデプロイする場合は、`name` を `GitHubPackages` に設定することで、配布管理リポジトリでそのことを指定できます。

Organization の名前が "octocat" で、リポジトリの名前が "hello-world" の場合、_build.gradle_ の構成は次の例のようになります。

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

この構成により、`gradle publish` コマンドを実行することでパッケージを Maven Central Repository と {% data variables.product.prodname_registry %} の両方に公開するワークフローを作成できます。

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

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
1. `OSSRH` Maven リポジトリと {% data variables.product.prodname_registry %} に公開するには、`publish` 引数を指定して [`gradle/gradle-build-action`](https://github.com/gradle/gradle-build-action) アクションを実行します。 `MAVEN_USERNAME` 環境変数には `OSSRH_USERNAME` シークレットの内容が設定され、`MAVEN_PASSWORD` 環境変数には `OSSRH_TOKEN` シークレットの内容が設定されます。 `GITHUB_TOKEN` 環境変数には、`GITHUB_TOKEN` シークレットの内容が設定されます。 `permissions` キーでは、`GITHUB_TOKEN` シークレットによって許可されるアクセス権を指定します。

   ワークフローでシークレットを使用する方法の詳細については、[暗号化されたシークレットの作成と使用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)に関するページを参照してください。
