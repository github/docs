---
title: GradleでのJavaパッケージの公開
intro: 継続的インテグレーション（CI）ワークフローの一部として、Javaのパッケージをレジストリに公開するためにGradleを利用できます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### はじめに

{% data reusables.github-actions.publishing-java-packages-intro %}

### 必要な環境

ワークフローファイルと設定オプションに関する基本的な理解をしておくことをおすすめします。 詳細は「[ワークフローの設定](/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)」を参照してください。

GradleでのJavaプロジェクトのためのCIワークフローの作成に関する詳しい情報については「[GradleでのJavaのビルドとテスト](/actions/language-and-framework-guides/building-and-testing-java-with-gradle)」を参照してください。

また、以下の基本的な理解があれば役立ちます。

- [{% data variables.product.prodname_actions %}の中核的概念](/actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)
- [{% data variables.product.prodname_registry %} で利用するために npm を設定する](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)
- [環境変数の利用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)
- [暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)
- [GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)

### パッケージの設定について

_build.gradle_ファイルの`MavenPublication`セクションにある`groupId`及び`artifactId`フィールドは、レジストリがパッケージをレジストリにリンクするために使用する、パッケージのためのユニークな識別子を生成します。  これは、Mavenの_pom.xml_ファイルにおける`groupId`と`artifactId`に似ています。  詳しい情報については、Gradleのドキュメンテーションの「[Maven Publish Plugin](https://docs.gradle.org/current/userguide/publishing_maven.html)」を参照してください。

_build.gradle_ファイルには、Gradleがパッケージを公開する配布管理リポジトリの設定も含まれています。 各リポジトリは、名前、デプロイメントのURL、認証のためのクレデンシャルを持っていなければなりません。

### Maven Central Repositoryへのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例でのワークフローは、`created`という種類で`release`イベントが発生したときに実行されます。 このワークフローは、CIテストをパスすればMaven Central Repositoryにパッケージを公開します。 `release`イベントに関する詳しい情報については「[ワークフローを起動するイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

_build.gradle_ファイルのpublishingブロックには、パッケージリポジトリを指す新しいMavenリポジトリを定義できます。  たとえば、OSSRHホスティングプロジェクトを通じてMaven Central Repositoryにデプロイしていたなら、_build.gradle_ は`”OSSRH"`という名前でリポジトリを指定できます。

{% raw %}
```groovy
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

この設定で、`gradle publish`コマンドの実行によってパッケージをMaven Central Repositoryに公開するワークフローを作成できます。 リポジトリの認証のために、ユーザ名とパスワードを含む環境変数を提供する必要もあります。

デプロイのステップでは、ユーザ名とパスワードのための環境変数か、Mavenリポジトリの認証に使うトークンを環境変数に設定する必要があります。 詳しい情報については、「[暗号化されたシークレットの作成と利用](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。


{% raw %}
```yaml
name: Publish package to the Maven Central Repository
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish package
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. `gradle publish`コマンドを実行して、`OSSRH` Mavenリポジトリに公開してください。 環境変数の`MAVEN_USERNAME`は`OSSRH_USERNAME`シークレットの内容で、環境変数の`MAVEN_PASSWORD`は`OSSRH_TOKEN`シークレットの内容で設定されます。

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

### {% data variables.product.prodname_registry %}へのパッケージの公開

新しいリリースを作成するたびに、パッケージを公開するワークフローを起動できます。 以下の例でのワークフローは、`created`という種類で`release`イベントが発生したときに実行されます。 このワークフローは、CIテストをパスすれば{% data variables.product.prodname_registry %}にパッケージを公開します。 `release`イベントに関する詳しい情報については「[ワークフローを起動するイベント](/actions/reference/events-that-trigger-workflows#release)」を参照してください。

_build.gradle_のpublishingブロックには、{% data variables.product.prodname_registry %}を指す新しいMavenリポジトリを定義できます。  そのリポジトリの設定では、CIワークフローの実行で設定された環境変数を活用することもできます。  環境変数の`GITHUB_ACTOR`はユーザ名として利用でき、環境変数の`GITHUB_TOKEN`には`GITHUB_TOKEN`シークレットを設定できます。

`GITHUB_TOKEN`は、デフォルトでリポジトリ中に存在し、ワークフローが実行されるリポジトリ中のパッケージには読み書きの権限があります。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)」を参照してください。

たとえば、Organizationの名前が"octocat"でリポジトリの名前が"hello-world"なら、_build.gradle_中の{% data variables.product.prodname_registry %}の設定は以下の例のようになるでしょう。

{% raw %}
```groovy
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

この設定で、`gradle publish`コマンドの実行によってパッケージをMaven Central Repositoryに公開するワークフローを作成できます。

{% raw %}
```yaml
name: Publish package to GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish package
        run: gradle publish
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. {% data variables.product.prodname_registry %}に公開するために` gradle publish `コマンドを実行してください。 環境変数`GITHUB_TOKEN`には、`GITHUB_TOKEN`シークレットの内容が設定されます。

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。

### Maven Central Repositoryと{% data variables.product.prodname_registry %}へのパッケージの公開

_ build.gradle _ファイルでそれぞれについて設定すれば、Maven Central Repositoryと{% data variables.product.prodname_registry %}の両方にパッケージを公開できます。

_build.gradle_ファイルに、{% data variables.product.prodname_dotcom %}リポジトリとMaven Central Repositoryプロバイダの双方に対するリポジトリを確実に含めてください。

たとえば、OSSRHホスティングプロジェクトを通じてMaven Central Repositoryにデプロイしていたなら、`name`を`OSSRH `に設定して配布管理リポジトリでそのことを指定できます。 {% data variables.product.prodname_registry %}にデプロイするなら、`name`を`GitHubPackages`に設定して配布管理リポジトリでそのことを指定できます。

Organizationの名前が"octocat"でリポジトリの名前が"hello-world"なら、_build.gradle_中の{% data variables.product.prodname_registry %}の設定は以下の例のようになるでしょう。

{% raw %}
```groovy
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

{% raw %}
```yaml
name: Publish package to the Maven Central Repository and GitHub Packages
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Set up Java
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Publish to the Maven Central Repository
        run: gradle publish
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.OSSRH_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% data reusables.github-actions.gradle-workflow-steps %}
1. `OSSRH` Mavenリポジトリと{% data variables.product.prodname_registry %}に公開するために` gradle publish`コマンドを実行してください。 環境変数の`MAVEN_USERNAME`は`OSSRH_USERNAME`シークレットの内容で、環境変数の`MAVEN_PASSWORD`は`OSSRH_TOKEN`シークレットの内容で設定されます。 環境変数`GITHUB_TOKEN`には、`GITHUB_TOKEN`シークレットの内容が設定されます。

   ワークフロー中でのシークレットの利用に関する詳しい情報については「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。
