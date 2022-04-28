---
title: MavenでのJavaのビルドとテスト
intro: GitHub Actions中で継続的インテグレーション（CI）ワークフローを作成し、MavenでJavaのプロジェクトのビルドとテストを行うことができます。
redirect_from:
  - /actions/language-and-framework-guides/building-and-testing-java-with-maven
  - /actions/guides/building-and-testing-java-with-maven
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Java
  - Maven
shortTitle: Build & test Java with Maven
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## はじめに

このガイドは、ソフトウェアプロジェクト管理ツールのMavenを使ってJavaのプロジェクトのための継続的インテグレーション（CI）を実行するワークフローを作成する方法を紹介します。 作成するワークフローによって、Pull Requestに対するコミットがデフォルトブランチに対してビルドあるいはテストの失敗を引き起こしたことを見ることができるようになります。このアプローチは、コードが常に健全であることを保証するための役に立ちます。 CIワークフローを拡張して、ファイルをキャッシュし、ワークフローの実行による成果物をアップロードするようにもできます。

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %}
{% data variables.product.prodname_dotcom %}ホストランナーは、Java Development Kits（JDKs）及びMavenを含むプリインストールされたソフトウェアを伴うツールキャッシュを持ちます。 JDK および Maven のソフトウェアとプリインストールされたバージョンのリストについては、「[{% data variables.product.prodname_dotcom %} でホストされているランナーの仕様](/actions/reference/specifications-for-github-hosted-runners/#supported-software)」を参照してください。
{% endif %}

## 必要な環境

YAMLと{% data variables.product.prodname_actions %}の構文に馴染んでいる必要があります。 詳しい情報については、以下を参照してください。
- [{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- 「[{% data variables.product.prodname_actions %} を学ぶ](/actions/learn-github-actions)」

Java及びMavenフレームワークの基本的な理解をしておくことをおすすめします。 詳しい情報については、Mavenのドキュメンテーションの[Maven Getting Started Guide](http://maven.apache.org/guides/getting-started/index.html)を参照してください。

{% data reusables.actions.enterprise-setup-prereq %}

## Using the Maven starter workflow

{% data variables.product.prodname_dotcom %} provides a Maven starter workflow that will work for most Maven-based Java projects. For more information, see the [Maven starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/maven.yml).

To get started quickly, you can choose the preconfigured Maven starter workflow when you create a new workflow. 詳しい情報については、「[{% data variables.product.prodname_actions %} のクイックスタート](/actions/quickstart)」を参照してください。

リポジトリの`.github/workflows`に新しいファイルを作成して、手作業でこのワークフローを追加することもできます。

```yaml{:copy}
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Set up JDK 11
        uses: {% data reusables.actions.action-setup-java %}
        with:
          java-version: '11'
          distribution: 'adopt'
      - name: Build with Maven
        run: mvn --batch-mode --update-snapshots package
```

このワークフローは以下のステップを実行します。

1. `checkout`ステップは、ランナーにリポジトリのコピーをダウンロードします。
2. `setup-java` ステップは、 Adoptium で Java 11 JDK を設定します。
3. "Build with Maven"ステップは、Mavenの`package`ターゲットを非インタラクティブモードで実行し、コードがビルドされ、テストをパスし、パッケージが作成できることを保証します。

The default starter workflows are excellent starting points when creating your build and test workflow, and you can customize the starter workflow to suit your project’s needs.

{% data reusables.actions.example-github-runner %}

{% data reusables.actions.java-jvm-architecture %}

## コードのビルドとテスト

ローカルで使うのと同じコマンドを、コードのビルドとテストに使えます。

スターターワークフローは、デフォルトで`package`タスクを実行します。 デフォルトのMavenの設定では、このコマンドは依存関係をダウンロードし、クラスをビルドし、テストを実行し、たとえばJARファイルのような配布可能なフォーマットにクラスをパッケージします。

プロジェクトのビルドに異なるコマンドを使ったり、異なるターゲットを使いたいのであれば、それらを指定できます。 たとえば、_pom-ci.xml_ファイル中で設定された`verify`ターゲットを実行したいこともあるでしょう。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - name: Run the Maven verify phase
    run: mvn --batch-mode --update-snapshots verify
```

## 依存関係のキャッシング

{% data variables.product.prodname_dotcom %}ホストランナーを使用する場合、依存関係をキャッシュしてワークフローの実行を高速化できます。 実行に成功した後、ローカルのMavenリポジトリがGitHub Actionsのインフラストラクチャ上に保存されます。 その後のワークフローの実行では、キャッシュがリストアされ、依存関係をリモートのMavenリポジトリからダウンロードする必要がなくなります。 You can cache dependencies simply using the [`setup-java` action](https://github.com/marketplace/actions/setup-java-jdk) or can use [`cache` action](https://github.com/actions/cache) for custom and more advanced configuration.

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - name: Set up JDK 11
    uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
      cache: maven
  - name: Build with Maven
    run: mvn --batch-mode --update-snapshots verify
```

このワークフローは、ランナーのホームディレクトリ内の`.m2`ディレクトリにあるローカルのMavenリポジトリの内容を保存します。 キャッシュのキーは_pom.xml_の内容をハッシュしたものになるので、_pom.xml_が変更されればキャッシュは無効になります。

## 成果物としてのワークフローのデータのパッケージ化

ビルドが成功し、テストがパスした後には、結果のJavaのパッケージをビルドの成果物としてアップロードすることになるかもしれません。 そうすれば、ビルドされたパッケージをワークフローの実行の一部として保存することになり、それらをダウンロードできるようになります。 成果物によって、Pull Requestをマージする前にローカルの環境でテスト及びデバッグしやすくなります。 詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)」を参照してください。

Mavenは通常、JAR、EAR、WARのような出力ファイルを`target`ディレクトリに作成します。 それらを成果物としてアップロードするために、アップロードする成果物を含む新しいディレクトリにそれらをコピーできます。 たとえば、`staging`というディレクトリを作成できます。 として、そのディレクトリの内容を`upload-artifact`アクションを使ってアップロードできます。

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: {% data reusables.actions.action-setup-java %}
    with:
      java-version: '11'
      distribution: 'adopt'
  - run: mvn --batch-mode --update-snapshots verify
  - run: mkdir staging && cp target/*.jar staging
  - uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: Package
      path: staging
```
